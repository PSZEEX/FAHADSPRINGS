import { createFileRoute } from "@tanstack/react-router";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { BulletList, CARD, CtaBanner, PageHero, SectionHeading, meta } from "@/components/site";
import { DAILY_ROUTINE } from "@/lib/school-info";

export const Route = createFileRoute("/academics")({
  head: () =>
    meta(
      "Academics | Fahad Springs Junior School",
      "Uganda national curriculum combined with Qur'an, Arabic and Islamic studies, from Nursery to PLE.",
    ),
  component: AcademicsPage,
});

const secular = [
  "English",
  "Mathematics",
  "Integrated Science",
  "Social Studies & Religious Education",
  "Literacy & Reading",
  "Computer studies",
  "Music, Art & Physical Education",
];

const islamic = [
  "Qur'an recitation & Tajweed",
  "Hifdh (memorisation)",
  "Arabic language",
  "Tawheed & Aqeedah",
  "Fiqh — salah, wudhu, fasting",
  "Hadith & Seerah of the Prophet ﷺ",
  "Akhlaq — Islamic manners",
];

const stages = [
  {
    name: "Nursery",
    classes: "Baby, Middle & Top class · ages 3 – 5",
    points: [
      "Follows the national Early Childhood Development learning framework",
      "Language, numbers, health habits and social skills through play",
      "Short surahs, daily du'as and Arabic letters",
    ],
  },
  {
    name: "Lower Primary",
    classes: "P.1 – P.3 · ages 6 – 8",
    points: [
      "Thematic curriculum with a strong focus on literacy and numeracy",
      "English, Mathematics, Literacy I & II and Religious Education",
      "Qur'an reading with Tajweed and beginning Hifdh of Juz' Amma",
    ],
  },
  {
    name: "Transition",
    classes: "P.4 · age 9",
    points: [
      "Learners move from thematic to subject-based teaching",
      "English becomes the language of instruction in all subjects",
      "Arabic reading, writing and simple conversation",
    ],
  },
  {
    name: "Upper Primary",
    classes: "P.5 – P.7 · ages 10 – 12",
    points: [
      "English, Mathematics, Integrated Science and Social Studies with RE",
      "Regular tests, revision and mock examinations ahead of PLE",
      "Fiqh, Hadith, Seerah and continued Qur'an memorisation",
    ],
  },
];

const pleSubjects = [
  "English Language",
  "Mathematics",
  "Integrated Science",
  "Social Studies with Religious Education",
];

const pleDivisions = [
  ["Division 1", "4 – 12"],
  ["Division 2", "13 – 23"],
  ["Division 3", "24 – 29"],
  ["Division 4", "30 – 34"],
] as const;

const assessment = [
  ["Beginning of term", "A short test to see what each learner remembers and where to start."],
  ["Mid-term", "Examinations halfway through the term, with marks shared with parents."],
  ["End of term", "Full examinations in both curricula and a detailed report card."],
  ["Theology assessment", "Oral Qur'an recitation and written Islamic studies papers every term."],
] as const;

const activities = [
  "Football & netball",
  "Athletics",
  "Swimming",
  "Music, dance & drama",
  "Debate & public speaking",
  "Qur'an & Islamic quiz",
  "Scouts",
  "Art & craft club",
  "Computer club",
  "Gardening",
];

function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title="An integrated curriculum">
        Mornings and afternoons are carefully balanced so learners master both the secular syllabus
        and Islamic theology.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
        <Reveal from="left">
          <div className={`${CARD} hover-lift p-8`}>
            <h2 className="font-display text-3xl text-primary">Secular Curriculum</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The Uganda national syllabus set by the National Curriculum Development Centre (NCDC).
            </p>
            <BulletList items={secular} className="mt-5" />
          </div>
        </Reveal>
        <Reveal from="right">
          <div className={`${CARD} hover-lift p-8`}>
            <h2 className="font-display text-3xl text-primary">Islamic Curriculum (Theology)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Taught every day by qualified theology teachers, alongside salah in congregation.
            </p>
            <BulletList items={islamic} className="mt-5" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="The learning journey" title="From Baby Class to Primary Seven" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * STAGGER_MS}>
              <div className="hover-lift h-full rounded-2xl bg-secondary p-7">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-primary">{s.name}</h3>
                    <p className="text-sm font-semibold text-accent-foreground">{s.classes}</p>
                  </div>
                </div>
                <BulletList items={s.points} className="mt-5 text-muted-foreground" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-2">
        <Reveal from="left">
          <div className={CARD}>
            <h2 className="font-display text-3xl text-primary">Primary Leaving Examination</h2>
            <p className="mt-3 text-muted-foreground">
              At the end of P.7 every candidate sits PLE, set by the Uganda National Examinations
              Board (UNEB), in four papers:
            </p>
            <BulletList items={pleSubjects} className="mt-4" />
            <p className="mt-5 text-muted-foreground">
              Each paper is graded from Distinction 1 to F9. The four grades are added into an
              aggregate; the best possible result is aggregate 4.
            </p>
          </div>
        </Reveal>
        <Reveal from="right">
          <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <table className="w-full text-left">
              <caption className="bg-secondary p-4 text-left font-semibold text-primary">
                PLE divisions by aggregate
              </caption>
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4">Division</th>
                  <th className="p-4">Aggregate</th>
                </tr>
              </thead>
              <tbody>
                {pleDivisions.map(([d, a]) => (
                  <tr
                    key={d}
                    className="border-t border-border transition-colors hover:bg-secondary/50"
                  >
                    <td className="p-4 font-medium">{d}</td>
                    <td className="p-4">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="A typical day" title="How the school day flows" />
            <ol className="mt-8 space-y-3">
              {DAILY_ROUTINE.map((r, i) => (
                <Reveal key={r.time} delay={i * 60}>
                  <li className="flex items-center gap-4 rounded-xl bg-card p-4">
                    <span className="w-20 shrink-0 font-display text-lg text-primary">
                      {r.time}
                    </span>
                    <span className="h-8 w-px bg-gold" aria-hidden="true" />
                    <span className="text-muted-foreground">{r.activity}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Assessment" title="How we track progress" />
            <div className="mt-8 space-y-4">
              {assessment.map(([name, text], i) => (
                <Reveal key={name} delay={i * STAGGER_MS}>
                  <div className="rounded-xl border-l-4 border-gold bg-card p-5">
                    <h3 className="font-semibold text-primary">{name}</h3>
                    <p className="mt-1 text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHeading eyebrow="Beyond the classroom" title="Co-curricular activities" isCentered>
          Games, clubs and competitions that build confidence, teamwork and talent.
        </SectionHeading>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {activities.map((a) => (
            <span
              key={a}
              className="rounded-full bg-secondary px-5 py-2.5 font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground"
            >
              {a}
            </span>
          ))}
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
