import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/change-password")({
  head: () => ({ meta: [{ title: "Change password — Vura" }] }),
  component: ChangePassword,
});

function ChangePassword() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (pw.length < 6) return toast.error("Password must be at least 6 characters");
    if (pw !== confirm) return toast.error("Passwords don't match");
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Password updated");
    setPw("");
    setConfirm("");
  }

  return (
    <div className="max-w-md mx-auto px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        eyebrow="Account"
        title="Change password"
        description="Update the password used to sign in."
      />
      <Card className="rounded-2xl border p-6 shadow-card">
        <form onSubmit={save} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="np">New password</Label>
            <Input id="np" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cp">Confirm new password</Label>
            <Input
              id="cp"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving…" : "Update password"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
