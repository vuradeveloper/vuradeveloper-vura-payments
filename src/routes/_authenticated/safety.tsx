import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Shield, PhoneCall, Users } from "lucide-react";

export const Route = createFileRoute("/_authenticated/safety")({
  head: () => ({ meta: [{ title: "Safety — Vura" }] }),
  component: Safety,
});

function Safety() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Account"
        title="Safety center"
        description="Tools to keep every ride safe."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: Users,
            title: "Trusted contacts",
            text: "Share live trip status with people you trust.",
          },
          {
            icon: Shield,
            title: "RideCheck",
            text: "We monitor every trip for unexpected stops or route changes.",
          },
          {
            icon: PhoneCall,
            title: "24/7 emergency",
            text: "One-tap call to local emergency services.",
          },
        ].map((i) => (
          <Card key={i.title} className="rounded-2xl border p-6 shadow-card">
            <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-4">
              <i.icon className="h-5 w-5" />
            </div>
            <p className="font-semibold">{i.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{i.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
