import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
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
              Vura Privacy Notice
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              When you use Vura, you trust us with your personal data. We're committed to keeping
              that trust. That starts with helping you understand our privacy practices.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="w-full max-w-md aspect-video bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
              <ShieldCheck className="w-20 h-20 text-primary opacity-80" />
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
                  I. Overview
                </a>
              </li>
              <li>
                <a
                  href="#data-collections"
                  className="hover:text-primary transition-colors block py-1"
                >
                  II. Data collections and uses
                </a>
              </li>
              <li>
                <a
                  href="#choice-transparency"
                  className="hover:text-primary transition-colors block py-1"
                >
                  III. Choice and transparency
                </a>
              </li>
              <li>
                <a href="#legal-info" className="hover:text-primary transition-colors block py-1">
                  IV. Legal information
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 text-base text-muted-foreground leading-relaxed space-y-16 max-w-3xl">
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">I. Overview</h2>
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Scope</h3>
            <div className="space-y-4">
              <p>
                This notice applies when you use Vura's apps or websites to request or receive
                products or services, including rides or deliveries within South Africa.
              </p>
              <p>
                This notice describes how we collect and use your data if you request or receive
                products or services through Vura's apps or websites. It specifically applies to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Riders:</strong> Request or receive mobility services via your Vura
                  account.
                </li>
                <li>
                  <strong>Order Recipients:</strong> Request food, packages, or other products.
                </li>
                <li>
                  <strong>Guest Users:</strong> Receive services requested by others (e.g., Vura for
                  Business).
                </li>
              </ul>
            </div>
          </section>

          <section id="data-collections" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              II. Data collections and uses
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">
              A. The data we collect
            </h3>
            <p className="mb-6">
              Vura collects data that you provide, data generated when you use our services, and
              data from other sources.
            </p>

            <div className="space-y-6">
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    1
                  </span>
                  Data you provide
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Account information:</strong> Address, contact info, name, payment
                    method.
                  </li>
                  <li>
                    <strong>Identity verification:</strong> Government-issued identification,
                    selfies.
                  </li>
                  <li>
                    <strong>User content:</strong> Ratings, feedback, and customer support
                    communications.
                  </li>
                </ul>
              </div>

              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    2
                  </span>
                  Data collected when you use our services
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Location data:</strong> We determine your precise location to enable
                    ride tracking and navigation.
                  </li>
                  <li>
                    <strong>Usage data:</strong> Information about how you interact with Vura's apps
                    and websites.
                  </li>
                  <li>
                    <strong>Device data:</strong> Hardware models, operating systems, and network
                    info.
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-10 mb-4">B. How we use data</h3>
            <p className="mb-4">
              Vura uses data to enable reliable and convenient transportation, delivery, and other
              products and services. We also use data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To enhance the safety and security of our users and services.</li>
              <li>To enable communications between users (e.g., Rider and Driver).</li>
              <li>For customer support and resolving disputes.</li>
              <li>For marketing and advertising purposes.</li>
            </ul>
          </section>

          <section id="choice-transparency" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              III. Choice and transparency
            </h2>
            <p className="mb-4">
              Vura enables you to access and/or control data that Vura collects, including through
              privacy settings, device permissions, and in-app ratings pages.
            </p>
            <p>
              You can update your location sharing preferences, manage push notifications, or
              request account deletion at any time through the Settings menu in the Vura app.
            </p>
          </section>

          <section id="legal-info" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              IV. Legal information
            </h2>
            <p className="mb-4">
              Vura complies with applicable data protection laws in South Africa, including the
              Protection of Personal Information Act (POPIA).
            </p>
            <p>
              Vura Technologies (Pty) Ltd is the sole controller of the data processed by Vura when
              you use our services in South Africa. If you have any questions regarding our
              practices, please contact our support team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
