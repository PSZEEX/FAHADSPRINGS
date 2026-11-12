import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { PageHero, SectionHeading, meta } from "@/components/site";
import { TERMS } from "@/lib/school-info";
import { ANNUAL_HIGHLIGHTS, EVENTS } from "@/lib/site-content";

export const Route = createFileRoute("/events")({
  head: () =>
    meta(
      "Events | Fahad Springs Junior School",
      "Upcoming events, term dates and yearly highlights at Fahad Springs Junior School.",
    ),
  component: () => (
    <>
      <PageHero eyebrow="Events" title="What's happening at Fahad Springs">
        Important dates, school functions and activities for parents and learners.
      </PageHero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="Diary" title="Upcoming events" />
        <div className="mt-10 space-y-5">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 70} from="left">
              <article className="hover-lift group flex gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-primary text-center text-primary-foreground transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                  <div>
                    <p className="font-display text-3xl leading-none">{e.day}</p>
                    <p className="mt-1 text-xs font-semibold tracking-widest text-gold uppercase">
                      {e.month}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{e.title}</h3>
                  <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-accent-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {e.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {e.place}
                    </span>
                  </p>
                  <p className="mt-2 text-muted-foreground">{e.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="School calendar" title="Term dates" isCentered>
            Exact dates follow the Ministry of Education and Sports calendar and are sent to parents
            before each term.
          </SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TERMS.map((t, i) => (
              <Reveal key={t.name} delay={i * STAGGER_MS}>
                <div className="hover-lift h-full rounded-2xl bg-card p-7 text-center">
                  <p className="font-display text-3xl text-primary">{t.name}</p>
                  <p className="mt-1 font-semibold tracking-widest text-accent-foreground uppercase">
                    {t.period}
                  </p>
                  <p className="mt-3 text-muted-foreground">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHeading eyebrow="Every year" title="Highlights of the school year" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ANNUAL_HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={(i % 3) * STAGGER_MS}>
              <div className="hover-lift h-full rounded-2xl border-t-4 border-gold bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold tracking-widest text-accent-foreground uppercase">
                  {h.when}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-primary">{h.title}</h3>
                <p className="mt-2 text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  ),
});
