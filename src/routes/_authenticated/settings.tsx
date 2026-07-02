import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useProfile } from "@/hooks/use-profile";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({ meta: [{ title: "Settings — Vura" }] }),
  component: Settings,
});

function Settings() {
  const { data: profile, refetch } = useProfile();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.full_name ?? "");
      setPhone(profile.phone ?? "");
    }
  }, [profile]);

  async function save() {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: name, phone })
      .eq("id", u.user.id);
    if (error) return toast.error(error.message);
    toast.success("Profile saved");
    refetch();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Account"
        title="Settings"
        description="Profile, notifications, and privacy."
      />
      <Card className="rounded-2xl border p-6 shadow-card space-y-4 mb-6">
        <p className="font-semibold">Profile</p>
        <div className="space-y-1.5">
          <Label htmlFor="n">Full name</Label>
          <Input id="n" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="e">Email</Label>
          <Input id="e" value={profile?.email ?? ""} disabled />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="p">Phone</Label>
          <Input
            id="p"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+27 …"
          />
        </div>
        <Button onClick={save}>Save changes</Button>
      </Card>

      <Card className="rounded-2xl border p-6 shadow-card space-y-4">
        <p className="font-semibold">Notifications</p>
        {[
          { label: "Trip receipts by email", k: "r" },
          { label: "Promotions and offers", k: "p" },
          { label: "Driver arrival push notifications", k: "d" },
        ].map((row) => (
          <div key={row.k} className="flex items-center justify-between">
            <p className="text-sm">{row.label}</p>
            <Switch defaultChecked />
          </div>
        ))}
      </Card>
    </div>
  );
}
