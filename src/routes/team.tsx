import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { CtaBanner, PageHero, SectionHeading, meta } from "@/components/site";
import { DEPARTMENTS, LEADERSHIP, NAME_PENDING } from "@/lib/site-content";

const COLUMNS = 4;

export const Route = createFileRoute("/team")({
  head: () =>
    meta(
      "Our Team | Fahad Springs Junior School",
      "Meet the leadership and staff of Fahad Springs Junior School.",
    ),
  component: () => (
    <>
      <PageHero eyebrow="Our team" title="The people who teach, guide and care">
        Dedicated, God-fearing educators working together to raise knowledgeable and well-mannered
        children.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Leadership" title="School administration" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((m, i) => (
            <Reveal key={m.role} delay={(i % COLUMNS) * STAGGER_MS}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-secondary text-primary transition-all duration-500 group-hover:scale-105 group-hover:bg-gold group-hover:text-gold-foreground">
                  <UserRound className="h-10 w-10" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">{NAME_PENDING}</h3>
                <p className="text-sm font-semibold tracking-widest text-accent-foreground uppercase">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Our staff" title="Teaching and support teams" isCentered />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * STAGGER_MS}>
                <div className="hover-lift h-full rounded-2xl border-l-4 border-gold bg-card p-6">
                  <h3 className="text-lg font-semibold text-primary">{d.name}</h3>
                  <p className="mt-2 text-muted-foreground">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  ),
});
