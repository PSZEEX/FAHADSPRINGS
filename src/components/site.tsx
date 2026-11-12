import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal, delayStyle } from "@/components/motion";
import { FOOTER_LINKS, LOGO_SRC } from "@/lib/nav";
import { CONTACT, MOTTO } from "@/lib/school-info";
import { cn } from "@/lib/utils";

export { Header } from "@/components/header";
export { LOGO_SRC };

const HERO_STAGGER_MS = 130;

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white">
              <img
                src={LOGO_SRC}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </span>
            <p className="font-display text-2xl leading-tight">Fahad Springs Junior School</p>
          </div>
          <p className="mt-4 font-semibold tracking-widest text-gold uppercase">{MOTTO}</p>
          <p className="mt-2 text-sm opacity-80">
            A Ugandan Muslim school teaching the national curriculum alongside Qur'an, Arabic and
            Islamic studies.
          </p>
          <p className="animate-shimmer mt-5 font-arabic text-3xl text-gold" dir="rtl">
            رَبِّ زِدْنِي عِلْمًا
          </p>
          <p className="mt-1 text-xs opacity-70">
            "My Lord, increase me in knowledge." (Qur'an 20:114)
          </p>
        </div>
        {FOOTER_LINKS.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <p className="font-semibold tracking-widest text-gold uppercase">{group.heading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {group.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-block opacity-85 transition-all duration-300 hover:translate-x-1 hover:text-gold hover:opacity-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <p className="font-semibold tracking-widest text-gold uppercase">Visit us</p>
          <ul className="mt-4 space-y-3 text-sm">
            <FooterContact icon={<MapPin className="h-4 w-4" aria-hidden="true" />}>
              {CONTACT.location}
            </FooterContact>
            <FooterContact icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              <a href={CONTACT.phoneHref} className="hover:text-gold">
                {CONTACT.phone}
              </a>
            </FooterContact>
            <FooterContact icon={<Mail className="h-4 w-4" aria-hidden="true" />}>
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-gold">
                {CONTACT.email}
              </a>
            </FooterContact>
            <FooterContact icon={<Clock className="h-4 w-4" aria-hidden="true" />}>
              {CONTACT.hours}
              <br />
              {CONTACT.saturdayHours}
            </FooterContact>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs opacity-75">
          © {new Date().getFullYear()} Fahad Springs Junior School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterContact({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-gold">{icon}</span>
      <span className="opacity-90">{children}</span>
    </li>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="pattern-bg relative overflow-hidden border-b border-border">
      <span
        aria-hidden="true"
        className="animate-float absolute -top-16 -right-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="animate-fade-up text-sm font-semibold tracking-[0.25em] text-accent-foreground uppercase">
          {eyebrow}
        </p>
        <h1
          className="animate-fade-up mt-3 max-w-3xl font-display text-4xl text-primary md:text-6xl"
          style={delayStyle(HERO_STAGGER_MS)}
        >
          {title}
        </h1>
        {children && (
          <div
            className="animate-fade-up mt-5 max-w-2xl text-lg text-muted-foreground"
            style={delayStyle(HERO_STAGGER_MS * 2)}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  isCentered = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  isCentered?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", isCentered && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.25em] text-accent-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">{title}</h2>
      <span
        aria-hidden="true"
        className={cn("mt-4 block h-1 w-16 rounded-full bg-gold", isCentered && "mx-auto")}
      />
      {children && <div className="mt-4 text-lg text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

/** Small gold diamond bullet list used across pages. */
export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export const CARD = "h-full rounded-2xl border border-border bg-card p-7 shadow-soft";
export const GOLD_BUTTON =
  "btn-motion inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground";

export function CtaBanner() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-5">
      <Reveal from="zoom">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-12 text-primary-foreground md:px-14 md:py-16">
          <span
            aria-hidden="true"
            className="animate-float absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl">Give your child both worlds</h2>
              <p className="mt-3 opacity-85">
                Admissions are open for Nursery to P.7, day and boarding. Visit us, call the office
                or start your application today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/admissions" className={GOLD_BUTTON}>
                Apply for admission <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="btn-motion rounded-full border border-primary-foreground/50 px-6 py-3 font-semibold hover:bg-primary-foreground/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
