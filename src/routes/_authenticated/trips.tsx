import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/page-header";
import { MapPin, Navigation, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/trips")({
  head: () => ({ meta: [{ title: "Trips — Vura" }] }),
  component: Trips,
});

function Trips() {
  const { data: trips, isLoading } = useQuery({
    queryKey: ["trips"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("trips")
        .select("*")
        .order("requested_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="History"
        title="Your trips"
        description="Past, ongoing, and upcoming rides."
        action={
          <Button asChild>
            <Link to="/book">Book a ride</Link>
          </Button>
        }
      />

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : !trips?.length ? (
        <div className="rounded-2xl border bg-card p-12 text-center shadow-card">
          <Receipt className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="font-semibold">No trips yet</p>
          <p className="text-sm text-muted-foreground mt-1">Book your first ride to see it here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {trips.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border bg-card p-5 shadow-card flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="truncate">{t.pickup}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <Navigation className="h-3.5 w-3.5 text-primary" />
                  <span className="truncate">{t.dropoff}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {new Date(t.requested_at).toLocaleString()} · {t.driver_name ?? "—"}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">R {Number(t.fare).toFixed(2)}</p>
                <span
                  className={`inline-block mt-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                    t.status === "completed"
                      ? "bg-emerald-50 text-emerald-700"
                      : t.status === "cancelled"
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary-soft text-primary"
                  }`}
                >
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
