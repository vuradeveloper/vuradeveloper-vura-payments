import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              These Terms of Use govern the access or use by you of applications, websites, content,
              products, and services made available by Vura.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="w-full max-w-md aspect-video bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
              <FileText className="w-20 h-20 text-primary opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2 block">
                Select jurisdiction
              </label>
              <select className="w-full bg-card border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>South Africa</option>
              </select>
            </div>
            <h3 className="font-semibold mb-4 text-foreground uppercase tracking-wider text-sm mt-8">
              Contents
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#contractual-relationship"
                  className="hover:text-primary transition-colors block py-1"
                >
                  1. Contractual Relationship
                </a>
              </li>
              <li>
                <a href="#the-services" className="hover:text-primary transition-colors block py-1">
                  2. The Services
                </a>
              </li>
              <li>
                <a href="#your-use" className="hover:text-primary transition-colors block py-1">
                  3. Your Use of the Services
                </a>
              </li>
              <li>
                <a href="#payment" className="hover:text-primary transition-colors block py-1">
                  4. Payment
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 text-base text-muted-foreground leading-relaxed space-y-16 max-w-3xl">
          <section id="contractual-relationship" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              1. Contractual Relationship
            </h2>
            <div className="space-y-4">
              <p>
                These Terms of Use ("Terms") govern the access or use by you, an individual, from
                within South Africa of applications, websites, content, products, and services (the
                "Services") made available by Vura Technologies (Pty) Ltd.
              </p>
              <p className="font-semibold text-foreground uppercase text-sm tracking-wide py-2">
                PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES.
              </p>
              <p>
                Your access and use of the Services constitutes your agreement to be bound by these
                Terms, which establishes a contractual relationship between you and Vura. If you do
                not agree to these Terms, you may not access or use the Services. These Terms
                expressly supersede prior agreements or arrangements with you.
              </p>
            </div>
          </section>

          <section id="the-services" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">2. The Services</h2>
            <div className="space-y-4">
              <p>
                The Services constitute a technology platform that enables users of Vura's mobile
                applications or websites to arrange and schedule transportation and/or logistics
                services with independent third party providers of such services, including
                independent third party transportation providers.
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">License</h3>
              <p>
                Subject to your compliance with these Terms, Vura grants you a limited,
                non-exclusive, non-sublicensable, revocable, non-transferable license to: (i) access
                and use the Applications on your personal device solely in connection with your use
                of the Services; and (ii) access and use any content, information and related
                materials that may be made available through the Services.
              </p>
            </div>
          </section>

          <section id="your-use" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              3. Your Use of the Services
            </h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">User Accounts</h3>
              <p>
                In order to use most aspects of the Services, you must register for and maintain an
                active personal user Services account ("Account"). You must be at least 18 years of
                age to obtain an Account.
              </p>
              <p>
                Account registration requires you to submit to Vura certain personal information,
                such as your name, address, mobile phone number and age, as well as at least one
                valid payment method. You agree to maintain accurate, complete, and up-to-date
                information in your Account.
              </p>
            </div>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">4. Payment</h2>
            <div className="space-y-4">
              <p>
                You understand that use of the Services may result in charges to you for the
                services or goods you receive from a Third Party Provider ("Charges"). After you
                have received services or goods obtained through your use of the Service, Vura will
                facilitate your payment of the applicable Charges on behalf of the Third Party
                Provider as such Third Party Provider's limited payment collection agent.
              </p>
              <p>
                Charges will be inclusive of applicable taxes where required by law. Charges paid by
                you are final and non-refundable, unless otherwise determined by Vura.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
