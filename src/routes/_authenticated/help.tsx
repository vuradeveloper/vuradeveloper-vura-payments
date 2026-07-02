import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/_authenticated/help")({
  head: () => ({ meta: [{ title: "Help — Vura" }] }),
  component: Help,
});

const faqs = [
  {
    q: "How do I cancel a ride?",
    a: "Open the trip in the Trips page and tap Cancel. Cancellation fees may apply after a driver is on the way.",
  },
  {
    q: "How do refunds work?",
    a: "Refunds are returned to your original payment method within 3–7 business days.",
  },
  {
    q: "How is the fare calculated?",
    a: "Fares combine a base rate plus distance and time, with surge applied during peak demand.",
  },
  {
    q: "Is my payment data secure?",
    a: "We never store your bank credentials. Top-ups go through Instant EFT, secured with PCI DSS Level 1.",
  },
];

function Help() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Account"
        title="Help"
        description="Past trips, FAQs, and support contacts."
      />
      <Card className="rounded-2xl border p-2 shadow-card">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={String(i)} className="px-4">
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}
