import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Wallet,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Activity,
  MessageCircle,
  Clock,
  CreditCard,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vura — Ride Hailing, South Africa" },
      {
        name: "description",
        content:
          "Book rides across South Africa with Vura. Safe, affordable, and fair — with a R5 commission cap for drivers.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Nav ──────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <VuraLogo size={34} />
            <span className="text-lg font-bold tracking-tight">Vura</span>
          </Link>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              Launching soon across South Africa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Rides that work{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
                for everyone.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Vura is the e-hailing app South Africa has been waiting for — safe, affordable rides
              for passengers, and fair earnings for drivers. Built differently, on purpose.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="#how">
                  See how it works <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute -right-20 -bottom-20 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "var(--gradient-vura)" }}
        />
      </section>

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="border-t border-b bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-400 mb-6">
            Our philosophy
          </p>
          <blockquote className="text-xl md:text-3xl font-bold leading-snug tracking-tight max-w-3xl italic text-white/90">
            "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in
            the square holes. The ones who{" "}
            <em className="not-italic text-amber-400">see things differently.</em>"
          </blockquote>
          <p className="mt-4 text-sm text-white/40 font-medium">— Think Different, 1997</p>
          <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            We built Vura the way Apple once built computers — by asking what the world actually
            needs, ignoring how it's always been done, and refusing to ship something that doesn't
            change things. South Africa deserves a ride-hailing app that's genuinely on its side.
          </p>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section id="how" className="py-20 md:py-24 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            On the road in three steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              {
                icon: Smartphone,
                title: "Create an account",
                text: "Sign up with email or Google in under a minute. No paperwork, no waiting.",
              },
              {
                icon: Wallet,
                title: "Top up your wallet",
                text: "Add Vura cash instantly via Instant EFT — straight from your bank, zero fees.",
              },
              {
                icon: MapPin,
                title: "Book and ride",
                text: "Enter your pickup and destination, choose your ride type, and go. Cash rides welcome too.",
              },
            ].map((step) => (
              <div key={step.title} className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center group-hover:scale-105 transition">
                  <step.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Driver Commission ─────────────────────────────────── */}
      <section className="border-t bg-muted/40 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
                For drivers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Keep what{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
                  you earn.
                </span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Every other platform takes a percentage cut that grows as you do — punishing your
                success. Vura does it differently. We charge a flat commission capped at R5 per
                trip, no matter how much you earn. The more you make, the more you keep.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  {
                    text: (
                      <>
                        <strong>R5 maximum commission</strong> — never more, ever
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        <strong>Transparent pricing</strong> — see exactly what you earn before you
                        accept
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        <strong>No surprise deductions</strong> — your fare is your fare
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        <strong>Flexible hours</strong> — drive when it suits you
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commission card */}
            <div className="rounded-2xl bg-foreground text-white p-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-400/10 pointer-events-none" />
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">
                Max commission per trip
              </p>
              <p className="text-8xl font-black tracking-tighter text-amber-400 leading-none">R5</p>
              <p className="text-lg font-semibold text-white/50 mt-2 tracking-tight">
                flat — always
              </p>
              <div className="mt-7 pt-7 border-t border-white/10 space-y-2 text-sm text-white/60 leading-relaxed">
                <p>
                  On a R200 trip, you keep <span className="text-white font-semibold">R195</span>.
                </p>
                <p>
                  On a R500 trip, you keep <span className="text-white font-semibold">R495</span>.
                </p>
                <p className="mt-3 text-white/40">
                  We grow when you grow — not by taking more from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rider Features ────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
            For riders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-lg">
            Safe, affordable rides{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
              you can count on
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {[
              {
                icon: Shield,
                bg: "bg-amber-50",
                color: "text-amber-600",
                title: "Verified, safe drivers",
                text: "Every driver is background-checked. Real-time trip tracking and in-app SOS so you always feel secure.",
              },
              {
                icon: Zap,
                bg: "bg-emerald-50",
                color: "text-emerald-600",
                title: "Truly affordable fares",
                text: "Because our commission is capped at R5, drivers earn more and passengers pay less. Everyone wins.",
              },
              {
                icon: Activity,
                bg: "bg-blue-50",
                color: "text-blue-600",
                title: "Live trip tracking",
                text: "Watch your driver approach in real time. Share your trip with anyone you trust.",
              },
              {
                icon: CreditCard,
                bg: "bg-amber-50",
                color: "text-amber-600",
                title: "Instant EFT top-ups",
                text: "Top up straight from your South African bank account — no card, no hassle, zero fees.",
              },
              {
                icon: Clock,
                bg: "bg-violet-50",
                color: "text-violet-600",
                title: "Cash rides welcome",
                text: "No wallet, no problem. Select cash when you book — Vura works however you do.",
              },
              {
                icon: MessageCircle,
                bg: "bg-rose-50",
                color: "text-rose-600",
                title: "In-app support",
                text: "Something went wrong? Reach a real person directly in the app. No hold music, no call centres.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border bg-card p-6 shadow-card hover:border-amber-200 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${f.bg} flex items-center justify-center mb-4`}
                >
                  <f.icon className={`h-5 w-5 ${f.color}`} />
                </div>
                <h3 className="font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to ride{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
              differently?
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Join the waitlist. Be first when Vura launches in your city.
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <VuraLogo size={22} />
            <span className="font-semibold text-foreground">Vura</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition">
              Terms & Conditions
            </Link>
            <Link to="/refund" className="hover:text-foreground transition">
              Refund Policy
            </Link>
            <Link to="/contact" className="hover:text-foreground transition">
              Support & Contact
            </Link>
          </div>
          <p>Instant EFT · South Africa</p>
        </div>
      </footer>
    </div>
  );
}
