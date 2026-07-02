import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MapPin, Navigation } from "lucide-react";

export const Route = createFileRoute("/_authenticated/book")({
  head: () => ({ meta: [{ title: "Book a ride — Vura" }] }),
  component: BookRide,
});

const RIDE_TYPES = [
  { id: "go", name: "Vura Go", eta: "3 min", price: 42, desc: "Affordable rides for everyday" },
  {
    id: "comfort",
    name: "Vura Comfort",
    eta: "5 min",
    price: 68,
    desc: "Newer cars, extra legroom",
  },
  { id: "xl", name: "Vura XL", eta: "7 min", price: 95, desc: "Room for up to 6 riders" },
];

function BookRide() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [type, setType] = useState("go");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleBook(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Not signed in");
      const ride = RIDE_TYPES.find((r) => r.id === type)!;
      const { error } = await supabase.from("trips").insert({
        user_id: u.user.id,
        pickup,
        dropoff,
        fare: ride.price,
        status: "requested",
        driver_name: "Pending assignment",
      });
      if (error) throw error;
      toast.success("Ride requested! A driver will be assigned shortly.");
      navigate({ to: "/trips" });
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Rides"
        title="Book a ride"
        description="Enter where you are and where you're going."
      />

      <form onSubmit={handleBook} className="space-y-6">
        <Card className="p-6 rounded-2xl border shadow-card space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pickup" className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Pickup
            </Label>
            <Input
              id="pickup"
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Current location"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dropoff" className="flex items-center gap-2">
              <Navigation className="h-3.5 w-3.5 text-primary" /> Destination
            </Label>
            <Input
              id="dropoff"
              required
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Where to?"
            />
          </div>
        </Card>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Choose your ride
          </p>
          {RIDE_TYPES.map((r) => (
            <button
              type="button"
              key={r.id}
              onClick={() => setType(r.id)}
              className={`w-full text-left rounded-2xl border bg-card p-5 flex items-center justify-between transition ${type === r.id ? "border-primary shadow-soft" : "hover:border-primary/40"}`}
            >
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-muted-foreground">
                  {r.desc} · {r.eta} away
                </p>
              </div>
              <p className="text-lg font-semibold">R {r.price}</p>
            </button>
          ))}
        </div>

        <Button type="submit" className="w-full h-12 text-base" disabled={loading}>
          {loading ? "Requesting…" : "Confirm ride"}
        </Button>
      </form>
    </div>
  );
}
