import { createFileRoute } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea } from "@/components/ai-elements/prompt-input";
import { Loader } from "@/components/ai-elements/loader";
import { LOGO_SRC, meta } from "@/components/site";

export const Route = createFileRoute("/ask")({
  head: () => meta("Ask Us | Fahad Springs Junior School", "Ask questions about admissions, classes and our secular and Islamic curriculum."),
  component: AskPage,
});

const KEY = "fsjs-ask-chat";
const suggestions = ["How do I apply for P.3?", "What Islamic subjects do you teach?", "Do you offer boarding?", "Which classes do you have?"];

function AskPage() {
  const [loaded, setLoaded] = useState<UIMessage[] | null>(null);
  useEffect(() => {
    try { setLoaded(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { setLoaded([]); }
  }, []);
  return (
    <section className="mx-auto max-w-3xl px-5 py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-foreground">Ask us</p>
      <h1 className="mt-2 font-display text-4xl text-primary md:text-5xl">Questions about joining us?</h1>
      <p className="mt-3 text-muted-foreground">Our helper answers from the school's published information about admissions, classes and curriculum.</p>
      {loaded ? <Chat initial={loaded} /> : <div className="mt-8 h-[60vh] rounded-2xl border border-border bg-card" />}
    </section>
  );
}

function Chat({ initial }: { initial: UIMessage[] }) {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, sendMessage, status, stop, setMessages } = useChat({
    messages: initial,
    transport: new DefaultChatTransport({ api: "/api/ask" }),
    onError: (e) => setError(/429/.test(e.message) ? "Too many questions right now — please wait a moment." : /402/.test(e.message) ? "The helper is temporarily unavailable. Please contact the school office." : "Sorry, something went wrong. Please try again."),
  });
  const busy = status === "submitted" || status === "streaming";
  useEffect(() => { if (status === "ready") localStorage.setItem(KEY, JSON.stringify(messages)); }, [messages, status]);
  useEffect(() => { if (!busy) inputRef.current?.focus(); }, [busy]);

  const send = (t: string) => {
    if (!t.trim() || busy) return;
    setError(null);
    sendMessage({ text: t });
    setText("");
  };

  return (
    <div className="mt-8 flex h-[65vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2"><img src={LOGO_SRC} alt="" width={32} height={32} className="h-8 w-8 object-contain" /><span className="font-semibold text-primary">Admissions helper</span></div>
        {messages.length > 0 && <button onClick={() => { stop(); setMessages([]); localStorage.removeItem(KEY); }} className="text-sm text-muted-foreground hover:text-primary">New conversation</button>}
      </div>
      <Conversation className="flex-1">
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState title="Assalamu alaikum!" description="Ask anything about admissions, classes or our curriculum.">
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => <button key={s} onClick={() => send(s)} className="rounded-full bg-secondary px-3 py-1.5 text-sm text-primary hover:bg-accent">{s}</button>)}
              </div>
            </ConversationEmptyState>
          ) : messages.map((m) => (
            <Message key={m.id} from={m.role}>
              <MessageContent>
                {m.parts.map((p, i) => p.type === "text" ? (m.role === "user" ? <span key={i}>{p.text}</span> : <MessageResponse key={i}>{p.text}</MessageResponse>) : null)}
              </MessageContent>
            </Message>
          ))}
          {status === "submitted" && <div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader /> Thinking…</div>}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
      <div className="border-t border-border p-3">
        <PromptInput onSubmit={(msg) => send(msg.text ?? "")}>
          <PromptInputTextarea ref={inputRef} autoFocus value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your question…" />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit status={status} onClick={busy ? (e) => { e.preventDefault(); stop(); } : undefined} disabled={!busy && !text.trim()} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}
