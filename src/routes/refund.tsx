import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Receipt } from "lucide-react";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
});

function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-muted/30 py-12 md:py-20 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium mb-4">
              Last updated: July 2, 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Refund Policy</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We want you to have a great experience with Vura. If something goes wrong, here's how
              we handle refunds and price adjustments.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="w-full max-w-md aspect-video bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
              <Receipt className="w-20 h-20 text-primary opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold mb-4 text-foreground uppercase tracking-wider text-sm">
              Contents
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#overview" className="hover:text-primary transition-colors block py-1">
                  1. Overview
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-primary transition-colors block py-1">
                  2. Refund Eligibility
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors block py-1">
                  3. How to Request a Refund
                </a>
              </li>
              <li>
                <a
                  href="#processing-time"
                  className="hover:text-primary transition-colors block py-1"
                >
                  4. Processing Time
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 text-base text-muted-foreground leading-relaxed space-y-16 max-w-3xl">
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">1. Overview</h2>
            <div className="space-y-4">
              <p>
                At Vura, we strive to ensure that every ride and delivery meets our high standards
                of quality and reliability. However, we understand that issues may occasionally
                arise.
              </p>
              <p>
                This Refund Policy explains the circumstances under which Vura may issue a refund or
                account credit for services requested through our platform.
              </p>
            </div>
          </section>

          <section id="eligibility" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              2. Refund Eligibility
            </h2>
            <div className="space-y-4">
              <p>
                Refunds or account credits may be granted in the following situations, subject to
                investigation by our support team:
              </p>
              <ul className="list-disc pl-5 space-y-3 mt-4">
                <li>
                  <strong className="text-foreground">Overcharging:</strong> You were charged more
                  than the estimated fare without a valid reason (e.g., unexpected route deviation
                  not requested by you).
                </li>
                <li>
                  <strong className="text-foreground">Cancellation Fees:</strong> You were
                  incorrectly charged a cancellation fee (e.g., the driver did not arrive at the
                  pickup location).
                </li>
                <li>
                  <strong className="text-foreground">Service Issues:</strong> Significant issues
                  during the trip or delivery that severely impacted the quality of service (e.g.,
                  vehicle breakdown).
                </li>
              </ul>
            </div>
          </section>

          <section id="process" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              3. How to Request a Refund
            </h2>
            <div className="space-y-4">
              <p>
                To request a refund, please follow these steps within 7 days of the transaction in
                question:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mt-4">
                <li>
                  Open the Vura app and go to your <strong>Account</strong>.
                </li>
                <li>
                  Select <strong>Trips</strong> or <strong>Orders</strong> and tap on the specific
                  transaction.
                </li>
                <li>
                  Select <strong>Help with this trip/order</strong>.
                </li>
                <li>
                  Choose the issue that best describes your situation and follow the prompts to
                  submit your request.
                </li>
              </ol>
            </div>
          </section>

          <section id="processing-time" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              4. Processing Time
            </h2>
            <div className="space-y-4">
              <p>
                Once your request is submitted, our team will review it and notify you of the
                outcome via email or in-app notification within 24-48 hours.
              </p>
              <p>
                If a refund is approved, it may take <strong>5-10 business days</strong> for the
                funds to appear on your original payment method, depending on your bank or credit
                card issuer. Alternatively, we may offer Vura account credit, which is available
                immediately for future use.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
