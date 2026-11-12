import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { GOLD_BUTTON, PageHero, SectionHeading, meta } from "@/components/site";
import { CONTACT } from "@/lib/school-info";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact | Fahad Springs Junior School",
      "Phone, email, location and office hours of Fahad Springs Junior School, Uganda.",
    ),
  component: ContactPage,
});

const cards: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
];

const offices = [
  ["Admissions office", "New applications, school visits and placement interviews."],
  ["Bursar's office", "Fees, payment plans, receipts and bank slips."],
  ["Head Teacher's office", "Academic matters, discipline and learner welfare."],
  ["Boarding section", "Visiting days, boarders' requirements and health updates."],
] as const;

const FIELD =
  "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-shadow duration-300 focus:border-primary focus:ring-2 focus:ring-primary/25";
const MAX_MESSAGE_LENGTH = 1500;

/** Opens the visitor's own email app with the message filled in; nothing is sent by the site. */
function buildMailto(name: string, phone: string, message: string) {
  const subject = `Enquiry from ${name}`;
  const body = `${message}\n\nName: ${name}\nPhone: ${phone || "not given"}`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) {
      setError("Please enter your name and your message.");
      return;
    }
    setError(null);
    window.location.href = buildMailto(name, phone, message);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-7 shadow-soft"
      noValidate
    >
      <h2 className="font-display text-2xl text-primary">Send us a message</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        This opens your email app with the message ready to send to the school office.
      </p>
      <label className="mt-5 block text-sm font-semibold text-primary">
        Your name
        <input name="name" type="text" autoComplete="name" required className={FIELD} />
      </label>
      <label className="mt-4 block text-sm font-semibold text-primary">
        Phone number (optional)
        <input name="phone" type="tel" autoComplete="tel" className={FIELD} />
      </label>
      <label className="mt-4 block text-sm font-semibold text-primary">
        Message
        <textarea
          name="message"
          rows={5}
          required
          maxLength={MAX_MESSAGE_LENGTH}
          className={FIELD}
        />
      </label>
      {error && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {error}
        </p>
      )}
      <button type="submit" className={`${GOLD_BUTTON} mt-5`}>
        Open email <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Assalamu alaikum — we'd love to hear from you">
        Call, write or visit. Our office team is happy to answer your questions and show you around.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={i * STAGGER_MS}>
            <div className="hover-lift group h-full rounded-2xl bg-card p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                <c.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm tracking-widest text-accent-foreground uppercase">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-1 block text-xl font-semibold break-words text-primary hover:underline"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-1 text-xl font-semibold text-primary">{c.value}</p>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <Reveal from="left">
          <ContactForm />
        </Reveal>
        <div>
          <Reveal from="right">
            <div className="rounded-2xl bg-primary p-7 text-primary-foreground">
              <h2 className="flex items-center gap-2 font-display text-2xl">
                <Clock className="h-6 w-6 text-gold" aria-hidden="true" /> Office hours
              </h2>
              <p className="mt-3 opacity-90">{CONTACT.hours}</p>
              <p className="opacity-90">{CONTACT.saturdayHours}</p>
              <p className="mt-3 text-sm opacity-75">
                The office closes briefly for Jumu'ah prayer on Fridays and on public holidays.
              </p>
            </div>
          </Reveal>
          <div className="mt-8">
            <SectionHeading eyebrow="Who to ask" title="Our offices" />
          </div>
          <ul className="mt-6 space-y-3">
            {offices.map(([name, text], i) => (
              <Reveal key={name} delay={i * STAGGER_MS}>
                <li className="rounded-xl border-l-4 border-gold bg-secondary p-4">
                  <p className="font-semibold text-primary">{name}</p>
                  <p className="text-muted-foreground">{text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
