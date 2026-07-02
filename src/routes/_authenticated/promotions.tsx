import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/page-header";
import { Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/promotions")({
  head: () => ({ meta: [{ title: "Promotions — Vura" }] }),
  component: Promotions,
});

function Promotions() {
  const { data: promos } = useQuery({
    queryKey: ["promotions"],
    queryFn: async () => {
      const { data, error } = await supabase.from("promotions").select("*").eq("active", true);
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Money"
        title="Promotions"
        description="Active offers and ride discounts."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(promos ?? []).map((p) => (
          <Card key={p.id} className="rounded-2xl border p-6 shadow-card">
            <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-4">
              <Gift className="h-5 w-5" />
            </div>
            <p className="font-semibold">{p.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <code className="text-sm font-mono font-bold text-primary">{p.code}</code>
              <span className="text-xs text-muted-foreground">{p.discount_pct}% off</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
