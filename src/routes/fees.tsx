import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, Landmark, Smartphone, type LucideIcon } from "lucide-react";
import { Faq, type FaqItem } from "@/components/faq";
import { Reveal, STAGGER_MS } from "@/components/motion";
import { BulletList, GOLD_BUTTON, PageHero, SectionHeading, meta } from "@/components/site";
import { FEES, PAYMENT_METHODS, ugx } from "@/lib/school-info";

export const Route = createFileRoute("/fees")({
  head: () =>
    meta(
      "Fees | Fahad Springs Junior School",
      "Tuition, boarding and other termly costs at Fahad Springs Junior School, and how to pay.",
    ),
  component: FeesPage,
});

const paymentIcons: LucideIcon[] = [Landmark, Smartphone, Banknote];

const policies = [
  "Fees are paid at the beginning of each term, before the learner reports.",
  "Parents who need to pay in instalments should agree a plan with the bursar in advance.",
  "Fees paid are not refundable once the term has begun.",
  "Always pay through the official channels and keep your receipt or bank slip.",
  "Fees may be reviewed at the start of a new academic year, with notice given to parents.",
];

const faqs: FaqItem[] = [
  {
    q: "What do boarding fees cover?",
    a: "Boarding fees include tuition, accommodation and all meals. Uniform, personal requirements and optional transport are separate.",
  },
  {
    q: "Is lunch compulsory for day learners?",
    a: "Yes. Day learners take break porridge and lunch at school so that they can stay for afternoon theology lessons.",
  },
  {
    q: "Do you offer a discount for siblings?",
    a: "Yes. Families receive 10% off tuition for the third child and beyond.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Please speak to the bursar before the term opens. A written payment plan can be agreed for families who need one.",
  },
];

function FeesPage() {
  return (
    <>
      <PageHero eyebrow="Fees" title="Clear, termly fees">
        All amounts are in Uganda Shillings, per term.
      </PageHero>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <SectionHeading title="Tuition & boarding" />
        <Reveal className="mt-6">
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
            <table className="w-full min-w-[30rem] text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4">Section</th>
                  <th className="p-4">Day</th>
                  <th className="p-4">Boarding</th>
                </tr>
              </thead>
              <tbody>
                {FEES.tuition.map((t) => (
                  <tr
                    key={t.section}
                    className="border-t border-border transition-colors hover:bg-secondary/50"
                  >
                    <td className="p-4 font-medium">{t.section}</td>
                    <td className="p-4">{ugx(t.day)}</td>
                    <td className="p-4">{t.boarding ? ugx(t.boarding) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-14">
          <SectionHeading title="Other costs" />
        </div>
        <Reveal className="mt-6">
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {FEES.other.map((o) => (
              <li
                key={o.item}
                className="flex justify-between gap-4 p-4 transition-colors hover:bg-secondary/50"
              >
                <span>{o.item}</span>
                <span className="shrink-0 font-semibold text-primary">{ugx(o.amount)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <p className="mt-6 rounded-xl bg-secondary p-5 text-muted-foreground">{FEES.notes}</p>
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Payment" title="How to pay" isCentered />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PAYMENT_METHODS.map((p, i) => {
              const Icon = paymentIcons[i] ?? Banknote;
              return (
                <Reveal key={p.method} delay={i * STAGGER_MS}>
                  <div className="hover-lift group h-full rounded-2xl bg-card p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-primary">{p.method}</h3>
                    <p className="mt-2 text-muted-foreground">{p.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Good to know" title="Fees policy" />
          <Reveal className="mt-8">
            <BulletList items={policies} className="text-muted-foreground" />
          </Reveal>
        </div>
        <div>
          <SectionHeading eyebrow="Questions" title="Fees FAQs" />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Reveal className="mx-auto mt-12 max-w-6xl px-5">
        <Link to="/ask" className={GOLD_BUTTON}>
          Ask a question about fees
        </Link>
      </Reveal>
    </>
  );
}
