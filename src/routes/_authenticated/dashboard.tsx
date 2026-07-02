import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Calendar, QrCode, MapPin, Wallet, ArrowRight, CheckCircle2 } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Vura" }] }),
  component: Dashboard,
});

function StatCard({ icon: Icon, label, value, tint }: any) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-card hover:shadow-soft transition">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${tint}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}

function ActionCard({ to, icon: Icon, title, subtitle }: any) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card hover:border-primary/40 hover:shadow-soft transition"
    >
      <div className="w-11 h-11 rounded-lg bg-primary-soft flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
    </Link>
  );
}

function Dashboard() {
  const { data: profile } = useProfile();
  const firstName = profile?.full_name?.split(" ")[0] ?? "rider";

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Rider"
        title={`Hi ${firstName},`}
        description="Here's what's happening with your rides today."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          icon={FileText}
          label="Trips"
          value={profile?.trips_count ?? 0}
          tint="bg-primary-soft text-primary"
        />
        <StatCard
          icon={Calendar}
          label="Upcoming ride"
          value="None"
          tint="bg-blue-50 text-blue-600"
        />
        <StatCard
          icon={Wallet}
          label="Vura cash"
          value={`R ${Number(profile?.wallet_balance ?? 0).toFixed(2)}`}
          tint="bg-emerald-50 text-emerald-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActionCard
          to="/book"
          icon={MapPin}
          title="Book a ride"
          subtitle="Pick your pickup and destination"
        />
        <ActionCard
          to="/wallet"
          icon={Wallet}
          title="Top up wallet"
          subtitle="Add Vura cash to ride faster"
        />
        <ActionCard
          to="/trips"
          icon={FileText}
          title="Trip history"
          subtitle="Review past rides and receipts"
        />
        <ActionCard
          to="/safety"
          icon={QrCode}
          title="Safety center"
          subtitle="Trusted contacts and RideCheck"
        />
      </div>

      <div className="mt-8 rounded-2xl border bg-card p-5 flex items-center justify-between gap-4 shadow-card">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
          <div>
            <p className="font-semibold">Account verified</p>
            <p className="text-sm text-muted-foreground">
              You're ready to book rides anywhere Vura operates.
            </p>
          </div>
        </div>
        <Button asChild>
          <Link to="/book">Book now</Link>
        </Button>
      </div>
    </div>
  );
}
