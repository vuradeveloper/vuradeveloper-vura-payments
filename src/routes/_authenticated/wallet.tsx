import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Banknote, Plus, History } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/_authenticated/wallet")({
  head: () => ({ meta: [{ title: "Wallet — Vura" }] }),
  component: WalletPage,
});

function WalletPage() {
  const { data: profile } = useProfile();
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("100");
  const [open, setOpen] = useState(false);

  const { data: methods } = useQuery({
    queryKey: ["payment_methods"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("payment_methods")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  async function handleAddFunds() {
    const amt = Number(amount);
    if (!amt || amt <= 0) return toast.error("Enter a valid amount");
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const newBalance = Number(profile?.wallet_balance ?? 0) + amt;
    const { error } = await supabase
      .from("profiles")
      .update({ wallet_balance: newBalance })
      .eq("id", u.user.id);
    if (error) return toast.error(error.message);
    toast.success(`R ${amt.toFixed(2)} added to your Vura cash`);
    setOpen(false);
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Money"
        title="Wallet"
        description="Top up Vura cash and manage payment methods."
      />

      <Card
        className="rounded-2xl border-0 p-6 shadow-soft text-primary-foreground mb-8"
        style={{ background: "var(--gradient-vura)" }}
      >
        <p className="text-xs uppercase tracking-wider opacity-80">Vura cash</p>
        <p className="text-5xl font-bold mt-2">
          R {Number(profile?.wallet_balance ?? 0).toFixed(2)}
        </p>
        <div className="flex gap-2 mt-6">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" className="bg-white/95 text-primary hover:bg-white">
                <Plus className="h-4 w-4 mr-1" /> Add funds
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add funds via Instant EFT</DialogTitle>
                <DialogDescription>
                  Instant EFT top-up. (Demo mode — top-up is simulated. Live integration will be
                  wired once you provide your Site Code, API Key, and Private Key.)
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 py-2">
                <Label htmlFor="amount">Amount (ZAR)</Label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="flex gap-2 pt-2">
                  {[50, 100, 250, 500].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAmount(String(v))}
                      className="flex-1 rounded-lg border px-3 py-2 text-sm hover:border-primary hover:text-primary transition"
                    >
                      R {v}
                    </button>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <p className="text-[10px] text-muted-foreground flex-1 self-center">Instant EFT</p>
                <Button onClick={handleAddFunds}>Confirm top-up</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            variant="secondary"
            className="bg-white/15 text-primary-foreground hover:bg-white/25 border-0"
          >
            <History className="h-4 w-4 mr-1" /> Activity
          </Button>
        </div>
      </Card>

      <div className="mb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Payment methods
        </h2>
      </div>
      <div className="space-y-3 mb-8">
        {(methods ?? []).map((m) => (
          <Card key={m.id} className="rounded-2xl border p-5 shadow-card flex items-center gap-4">
            <div
              className={`w-11 h-11 rounded-lg flex items-center justify-center ${m.type === "cash" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"}`}
            >
              {m.type === "cash" ? (
                <Banknote className="h-5 w-5" />
              ) : (
                <CreditCard className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold">{m.label}</p>
              <p className="text-xs text-muted-foreground">
                {m.type === "card"
                  ? `•••• ${m.last4} · Expires ${m.expiry}`
                  : "Pay the driver at the end of the trip"}
              </p>
            </div>
            {m.is_default && (
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary-soft px-2 py-1 rounded-full">
                Default
              </span>
            )}
          </Card>
        ))}
        {!methods?.length && (
          <Card className="rounded-2xl border p-6 text-center shadow-card text-sm text-muted-foreground">
            No payment methods yet.
          </Card>
        )}
      </div>

      <Button
        variant="outline"
        className="w-full h-12 border-dashed border-primary/40 text-primary hover:bg-primary-soft"
        onClick={async () => {
          const { data: u } = await supabase.auth.getUser();
          if (!u.user) return;
          const { error } = await supabase.from("payment_methods").insert({
            user_id: u.user.id,
            type: "cash",
            label: "Cash",
            is_default: !methods?.length,
          });
          if (error) return toast.error(error.message);
          toast.success("Cash added as a payment option");
          queryClient.invalidateQueries({ queryKey: ["payment_methods"] });
        }}
      >
        <Plus className="h-4 w-4 mr-1" /> Add payment method
      </Button>

      <p className="text-[10px] text-muted-foreground text-center mt-6">
        Instant EFT for South Africa
      </p>
    </div>
  );
}
