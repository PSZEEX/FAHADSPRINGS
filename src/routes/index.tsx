import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  BookOpenText,
  Bus,
  HeartHandshake,
  MoonStar,
  ShieldCheck,
  Trophy,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Reveal, STAGGER_MS, delayStyle } from "@/components/motion";
import { CARD, CtaBanner, GOLD_BUTTON, SectionHeading, meta } from "@/components/site";
import { EVENTS, POSTS } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Fahad Springs Junior School | Secular & Islamic Education in Uganda",
      "A Ugandan Muslim primary school offering the national curriculum alongside Qur'an, Arabic and Islamic studies.",
    ),
  component: Index,
});

const HERO_STAGGER_MS = 160;
const PREVIEW_COUNT = 3;

const pillars = [
  {
    t: "National Curriculum",
    d: "Full Uganda NCDC syllabus from Nursery to P.7, preparing learners for PLE with confidence.",
  },
  {
    t: "Islamic Theology",
    d: "Qur'an recitation and memorisation, Tajweed, Fiqh, Hadith, Seerah and Arabic language.",
  },
  {
    t: "Character & Adab",
    d: "Daily prayers, good manners and service, raising honest and responsible young Muslims.",
  },
];

const quickFacts = [
  ["Nursery – P.7", "Classes"],
  ["Day & Boarding", "Options"],
  ["Qur'an", "Daily Hifdh"],
  ["PLE", "Focused results"],
] as const;

const sections = [
  {
    name: "Nursery",
    classes: "Baby, Middle & Top class",
    text: "Learning through play, song and story, with first steps in reading, numbers, du'as and short surahs.",
  },
  {
    name: "Lower Primary",
    classes: "P.1 – P.3",
    text: "Strong foundations in literacy and numeracy through the thematic curriculum, plus Qur'an reading and Arabic.",
  },
  {
    name: "Upper Primary",
    classes: "P.4 – P.7",
    text: "Subject-based teaching in English, Mathematics, Science and Social Studies, leading to PLE.",
  },
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: BookOpenText,
    title: "Two curricula, one timetable",
    text: "Secular lessons in the morning and theology in the afternoon, so neither is rushed.",
  },
  {
    icon: MoonStar,
    title: "An Islamic environment",
    text: "Prayers in congregation, daily adhkar and teachers who model good manners.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and caring",
    text: "A secure compound, attentive class teachers and a matron for our boarders.",
  },
  {
    icon: BedDouble,
    title: "Boarding from P.1",
    text: "Supervised prep, a healthy routine and a homely atmosphere for boarders.",
  },
  {
    icon: Utensils,
    title: "Halal, balanced meals",
    text: "Break porridge and a hot lunch prepared fresh at school every day.",
  },
  {
    icon: Bus,
    title: "School transport",
    text: "Morning and evening routes within Kampala for day learners.",
  },
  {
    icon: Trophy,
    title: "Sports and clubs",
    text: "Football, netball, swimming, debate, scouts and music, dance and drama.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership with parents",
    text: "Termly report cards, visitation days and an open door at the school office.",
  },
];

function Index() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Our approach" title="Two curricula, one well-rounded child" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * STAGGER_MS}>
              <div className={`${CARD} hover-lift`}>
                <span className="font-display text-5xl text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-primary">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pattern-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 text-center md:grid-cols-4">
          {quickFacts.map(([a, b], i) => (
            <Reveal key={b} from="zoom" delay={i * STAGGER_MS}>
              <p className="font-display text-2xl text-primary sm:text-3xl">{a}</p>
              <p className="mt-1 text-sm tracking-widest text-muted-foreground uppercase">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Welcome />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Our sections" title="A place for every stage of childhood" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.name} delay={i * STAGGER_MS}>
              <Link
                to="/academics"
                className={`${CARD} hover-lift group block border-t-4 border-t-gold`}
              >
                <p className="text-sm font-semibold tracking-widest text-accent-foreground uppercase">
                  {s.classes}
                </p>
                <h3 className="mt-2 font-display text-2xl text-primary">{s.name}</h3>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Why Fahad Springs"
            title="What parents value about our school"
            isCentered
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * STAGGER_MS}>
                <div className="hover-lift group h-full rounded-2xl bg-card p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                    <f.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EventsPreview />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={hero}
        alt="Pupils of Fahad Springs Junior School studying together"
        width={1600}
        height={1008}
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 text-primary-foreground md:py-40">
        <p className="animate-fade-up animate-shimmer font-arabic text-3xl text-gold" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <h1
          className="animate-fade-up mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-7xl"
          style={delayStyle(HERO_STAGGER_MS)}
        >
          Rooted in faith. Rising in knowledge.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-lg opacity-90"
          style={delayStyle(HERO_STAGGER_MS * 2)}
        >
          Fahad Springs Junior School nurtures every child through the Ugandan secular curriculum
          and a rich Islamic education — side by side.
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3"
          style={delayStyle(HERO_STAGGER_MS * 3)}
        >
          <Link to="/admissions" className={GOLD_BUTTON}>
            Apply for admission
          </Link>
          <Link
            to="/academics"
            className="btn-motion rounded-full border border-primary-foreground/50 px-6 py-3 font-semibold hover:bg-primary-foreground/10"
          >
            Our curriculum
          </Link>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-20 md:grid-cols-2">
      <Reveal from="left">
        <div className="group overflow-hidden rounded-3xl shadow-soft">
          <img
            src={hero}
            alt="Learners reading together outside their classroom"
            loading="lazy"
            className="img-zoom aspect-[4/3] w-full object-cover"
          />
        </div>
      </Reveal>
      <Reveal from="right">
        <p className="text-sm font-semibold tracking-[0.25em] text-accent-foreground uppercase">
          Welcome
        </p>
        <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
          Assalamu alaikum, and welcome to our school
        </h2>
        <p className="mt-4 text-muted-foreground">
          At Fahad Springs we believe a child should never have to choose between excelling in
          school and growing in the deen. Our learners study the full Uganda primary curriculum, and
          every day they also read Qur'an, learn Arabic and practise the manners of a good Muslim.
        </p>
        <p className="mt-3 text-muted-foreground">
          We keep classes attentive, teachers close to their learners and parents fully informed. We
          would be honoured to welcome your family.
        </p>
        <p className="mt-5 font-display text-xl text-primary">The Head Teacher</p>
        <Link
          to="/about"
          className="group mt-4 inline-flex items-center gap-2 font-semibold text-primary"
        >
          More about us
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    </section>
  );
}

function EventsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Diary" title="Upcoming events" />
        <Link
          to="/events"
          className="group inline-flex items-center gap-2 font-semibold text-primary"
        >
          All events
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {EVENTS.slice(0, PREVIEW_COUNT).map((e, i) => (
          <Reveal key={e.title} delay={i * STAGGER_MS}>
            <div className={`${CARD} hover-lift flex gap-4 p-5`}>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-primary text-center text-primary-foreground">
                <div>
                  <p className="font-display text-2xl leading-none">{e.day}</p>
                  <p className="mt-1 text-[0.65rem] font-semibold tracking-widest text-gold uppercase">
                    {e.month}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-primary">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.time} · {e.place}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="From the blog" title="News and notes" />
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 font-semibold text-primary"
        >
          All posts
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {POSTS.slice(0, PREVIEW_COUNT).map((p, i) => (
          <Reveal key={p.title} delay={i * STAGGER_MS}>
            <article className={`${CARD} hover-lift border-t-4 border-t-gold`}>
              <p className="text-xs font-semibold tracking-widest text-accent-foreground uppercase">
                {p.tag} · {p.date}
              </p>
              <h3 className="mt-3 font-display text-xl text-primary">{p.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
