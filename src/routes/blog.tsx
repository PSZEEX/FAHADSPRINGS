import { createFileRoute } from "@tanstack/react-router";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { CtaBanner, PageHero, meta } from "@/components/site";
import { POSTS } from "@/lib/site-content";

const COLUMNS = 3;
const [featured, ...rest] = POSTS;

export const Route = createFileRoute("/blog")({
  head: () =>
    meta(
      "Blog | Fahad Springs Junior School",
      "News, articles and advice for parents from Fahad Springs Junior School.",
    ),
  component: () => (
    <>
      <PageHero eyebrow="Blog" title="News and notes from our school">
        Stories, updates and advice for parents from our teachers and administration.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        {featured && (
          <Reveal from="zoom">
            <article className="hover-lift relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
              <span
                aria-hidden="true"
                className="animate-float absolute -top-16 -right-10 h-56 w-56 rounded-full bg-gold/25 blur-3xl"
              />
              <p className="relative text-xs font-semibold tracking-widest text-gold uppercase">
                Featured · {featured.tag} · {featured.date}
              </p>
              <h2 className="relative mt-3 max-w-2xl font-display text-3xl md:text-4xl">
                {featured.title}
              </h2>
              <p className="relative mt-4 max-w-2xl opacity-90">{featured.text}</p>
            </article>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % COLUMNS) * STAGGER_MS}>
              <article className="hover-lift flex h-full flex-col rounded-2xl border-t-4 border-gold bg-card p-7 shadow-soft">
                <p className="text-xs font-semibold tracking-widest text-accent-foreground uppercase">
                  {p.tag} · {p.date}
                </p>
                <h2 className="mt-3 font-display text-2xl text-primary">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  ),
});
