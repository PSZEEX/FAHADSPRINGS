import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq, type FaqItem } from "@/components/faq";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { BulletList, CARD, GOLD_BUTTON, PageHero, SectionHeading, meta } from "@/components/site";
import {
  ADMISSION_DOCUMENTS,
  BOARDING_REQUIREMENTS,
  DAY_REQUIREMENTS,
  ENTRY_AGES,
  TERMS,
} from "@/lib/school-info";

export const Route = createFileRoute("/admissions")({
  head: () =>
    meta(
      "Admissions | Fahad Springs Junior School",
      "How to enrol your child at Fahad Springs Junior School: steps, entry ages, documents and requirements.",
    ),
  component: AdmissionsPage,
});

const steps = [
  ["Pick an admission form", "Visit the school or call us to pick up an admission form."],
  [
    "Return the form",
    "Return the form with the child's birth certificate, previous report card and 2 passport photos.",
  ],
  ["Placement interview", "Your child sits a short placement interview."],
  ["Admission letter", "Receive the admission letter, fees structure and requirements list."],
] as const;

const faqs: FaqItem[] = [
  {
    q: "When can my child join?",
    a: "The main intake is at the start of Term I in February, but we welcome new learners at the beginning of every term where places are available.",
  },
  {
    q: "Do you admit children who are not Muslim?",
    a: "Yes. Learners of all backgrounds are welcome, provided the family respects the school's Islamic values, dress code and timetable.",
  },
  {
    q: "My child has never studied Qur'an or Arabic. Can they cope?",
    a: "Yes. New learners are assessed and placed in a theology group that matches their level, and teachers help them catch up step by step.",
  },
  {
    q: "From which class is boarding offered?",
    a: "Boarding is available from Primary One. Nursery learners attend as day scholars.",
  },
  {
    q: "Is there an interview fee?",
    a: "The admission and registration fee is paid once by new learners. Please see the Fees page for the current amount.",
  },
  {
    q: "Can I visit the school before applying?",
    a: "You are most welcome. The office is open Monday to Friday, and a member of staff will show you around.",
  },
];

function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Join the Fahad Springs family">
        We welcome new learners each term for Nursery through P.7, day and boarding.
      </PageHero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="How to apply" title="Four simple steps" />
        <ol className="mt-10 space-y-5">
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * STAGGER_MS} from="left">
              <li className="hover-lift flex gap-5 rounded-xl border border-border bg-card p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
        <Reveal from="left">
          <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <table className="w-full text-left">
              <caption className="bg-secondary p-4 text-left font-display text-2xl text-primary">
                Entry ages
              </caption>
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4">Class</th>
                  <th className="p-4">Age at entry</th>
                </tr>
              </thead>
              <tbody>
                {ENTRY_AGES.map((a) => (
                  <tr
                    key={a.level}
                    className="border-t border-border transition-colors hover:bg-secondary/50"
                  >
                    <td className="p-4 font-medium">{a.level}</td>
                    <td className="p-4">{a.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal from="right">
          <div className={CARD}>
            <h2 className="font-display text-2xl text-primary">Documents to bring</h2>
            <BulletList items={ADMISSION_DOCUMENTS} className="mt-5" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Requirements" title="What your child needs">
          The full, class-specific list is given with the admission letter. These are the
          essentials.
        </SectionHeading>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className={`${CARD} hover-lift border-t-4 border-t-gold`}>
              <h3 className="font-display text-2xl text-primary">All learners</h3>
              <BulletList items={DAY_REQUIREMENTS} className="mt-5" />
            </div>
          </Reveal>
          <Reveal delay={STAGGER_MS}>
            <div className={`${CARD} hover-lift border-t-4 border-t-gold`}>
              <h3 className="font-display text-2xl text-primary">Boarders, in addition</h3>
              <BulletList items={BOARDING_REQUIREMENTS} className="mt-5" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="School calendar" title="Three terms a year" isCentered>
            Exact opening and closing dates follow the Ministry of Education and Sports calendar and
            are shared with parents before each term.
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

      <section className="mx-auto max-w-4xl px-5 pt-20">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
        <Reveal className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className={GOLD_BUTTON}>
            Contact the admissions office
          </Link>
          <Link
            to="/fees"
            className="btn-motion rounded-full border border-primary px-6 py-3 font-semibold text-primary hover:bg-secondary"
          >
            View the fees structure
          </Link>
        </Reveal>
      </section>
    </>
  );
}
