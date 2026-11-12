import { Reveal } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <Reveal>
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl border border-border bg-card px-6 shadow-soft"
      >
        {items.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="last:border-b-0">
            <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
