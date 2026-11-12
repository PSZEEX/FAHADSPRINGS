import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  Dumbbell,
  HeartPulse,
  Monitor,
  MoonStar,
  School,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { BulletList, CARD, CtaBanner, PageHero, SectionHeading, meta } from "@/components/site";
import { MOTTO } from "@/lib/school-info";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Us | Fahad Springs Junior School",
      "Our story, mission, vision, values and facilities as a Ugandan Muslim junior school.",
    ),
  component: AboutPage,
});

const statements = [
  [
    "Our Mission",
    "To provide quality integrated education that develops learners spiritually, intellectually, morally and physically.",
  ],
  [
    "Our Vision",
    "A generation of God-fearing, knowledgeable and skilled leaders serving Uganda and the Ummah.",
  ],
  ["Our Motto", `${MOTTO}.`],
] as const;

const values = [
  ["Taqwa", "God-consciousness in everything we do, in class and outside it."],
  ["Ihsan", "Doing every task with excellence, because Allah loves excellence."],
  ["Honesty", "Truthfulness in word, in work and in examinations."],
  ["Discipline", "Keeping time, respecting rules and taking responsibility."],
  ["Respect", "Honouring parents, teachers, elders and one another."],
  ["Compassion", "Caring for classmates, the needy and the community."],
] as const;

const facilities: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: School, name: "Classrooms", text: "Well-lit, spacious classrooms for every stream." },
  { icon: MoonStar, name: "Prayer hall", text: "A dedicated space for salah, Qur'an and Jumu'ah." },
  { icon: BookOpen, name: "Library", text: "Story books, text books and Islamic literature." },
  { icon: Monitor, name: "Computer room", text: "Hands-on ICT lessons from lower primary." },
  {
    icon: BedDouble,
    name: "Dormitories",
    text: "Separate, supervised dormitories for boys and girls.",
  },
  { icon: Utensils, name: "Dining hall", text: "Fresh, halal meals served every school day." },
  { icon: Dumbbell, name: "Playground", text: "Space for football, netball and athletics." },
  { icon: HeartPulse, name: "Sick bay", text: "First aid and care from the school nurse." },
];

const commitments = [
  "Every child is known by name and supported by a class teacher.",
  "Both curricula are taught by trained, qualified teachers.",
  "Boys and girls are taught modesty, respect and good conduct.",
  "Parents are kept informed through report cards and visitation days.",
  "The school is open to learners of all backgrounds who respect its Islamic values.",
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A school where faith and learning flow together">
        Fahad Springs Junior School was founded to give Muslim families in Uganda one place where
        children excel academically while growing in Islam.
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <Reveal from="left">
          <p className="text-sm font-semibold tracking-[0.25em] text-accent-foreground uppercase">
            Our story
          </p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
            Built by parents who wanted both
          </h2>
          <p className="mt-4 text-muted-foreground">
            Many Muslim families once had to send their children to a secular school during the week
            and a madrasa at the weekend. Fahad Springs was started to bring the two together under
            one roof, in one timetable, with one team of teachers working towards the same child.
          </p>
          <p className="mt-3 text-muted-foreground">
            Today the school serves learners from Nursery to Primary Seven, as day scholars and
            boarders. Our learners sit the Primary Leaving Examination like every other Ugandan
            child, and they leave us able to read the Qur'an, pray correctly and carry themselves
            with good manners.
          </p>
        </Reveal>
        <Reveal from="right">
          <div className="group overflow-hidden rounded-3xl shadow-soft">
            <img
              src={hero}
              alt="Learners of Fahad Springs Junior School"
              loading="lazy"
              className="img-zoom aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {statements.map(([t, d], i) => (
          <Reveal key={t} delay={i * STAGGER_MS}>
            <div className="hover-lift h-full rounded-2xl border-t-4 border-gold bg-card p-7 shadow-soft">
              <h2 className="font-display text-2xl text-primary">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Core values" title="What we stand for" isCentered />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([name, text], i) => (
            <Reveal key={name} delay={(i % 3) * STAGGER_MS}>
              <div className="hover-lift flex h-full gap-4 rounded-2xl bg-secondary p-6">
                <span className="font-display text-3xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{name}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Facilities" title="A campus made for learning">
            Everything a child needs to learn, pray, play and rest in one safe compound.
          </SectionHeading>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.name} delay={(i % 4) * STAGGER_MS}>
                <div className="hover-lift group h-full rounded-2xl bg-card p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                    <f.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-primary">{f.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pt-20 md:grid-cols-2">
        <Reveal from="left">
          <div className={CARD}>
            <h2 className="font-display text-3xl text-primary">Our promise to parents</h2>
            <BulletList items={commitments} className="mt-5" />
          </div>
        </Reveal>
        <Reveal from="right">
          <div className="flex h-full flex-col justify-center rounded-2xl bg-primary p-8 text-primary-foreground">
            <h2 className="font-display text-3xl">Meet the people behind the school</h2>
            <p className="mt-3 opacity-85">
              Our leadership, teachers and welfare staff work as one team for every learner.
            </p>
            <Link
              to="/team"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-gold"
            >
              Meet our team
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
