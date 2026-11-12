import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, type UIMessage } from "ai";
import { createResponsesCall } from "@/lib/ai/responses";
import { SCHOOL_INFO } from "@/lib/school-info";

const INSTRUCTIONS = `You are the friendly admissions helper for Fahad Springs Junior School, answering prospective parents.
Answer ONLY using the school information below. If the answer is not in it (for example term dates), say you don't have that detail and suggest contacting the school office with the phone/email given.
When asked about fees, quote the exact amounts in UGX from the fees list and say they are per term.
Be warm, concise and clear. You may greet with "Assalamu alaikum" when appropriate. Use short paragraphs or bullet lists.

SCHOOL INFORMATION:
${SCHOOL_INFO}`;

export const Route = createFileRoute("/api/ask")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return Response.json({ error: "AI is not configured." }, { status: 500 });
        let messages: UIMessage[];
        try {
          const body = (await request.json()) as { messages?: UIMessage[] };
          if (!Array.isArray(body.messages) || body.messages.length === 0) throw new Error();
          messages = body.messages.slice(-30);
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }
        const call = createResponsesCall(
          request,
          { baseURL: "https://ai.gateway.lovable.dev/v1", apiKey, model: "openai/gpt-6-astra" },
          await convertToModelMessages(messages),
          INSTRUCTIONS,
        );
        return call.response();
      },
    },
  },
});
