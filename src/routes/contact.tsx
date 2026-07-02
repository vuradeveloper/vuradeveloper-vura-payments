import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
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
            <p className="text-sm text-primary font-medium mb-4 uppercase tracking-wider">
              Help Center
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Support & Contact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We're here to help. Get in touch with our support team or find answers to common
              questions about using Vura.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="w-full max-w-md aspect-video bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
              <MessageSquare className="w-20 h-20 text-primary opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Email Support</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              For general inquiries, account issues, or detailed support requests, drop us an email.
              We typically respond within 24 hours.
            </p>
            <a
              href="mailto:support@vura.co.za"
              className="text-primary font-medium hover:underline inline-flex items-center gap-2"
            >
              support@vura.co.za &rarr;
            </a>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Phone Support</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Need immediate assistance? Our dedicated phone support line is available Monday
              through Friday, 8 AM to 6 PM (SAST).
            </p>
            <a
              href="tel:+27123456789"
              className="text-primary font-medium hover:underline inline-flex items-center gap-2"
            >
              +27 (0) 12 345 6789 &rarr;
            </a>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Headquarters</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Vura Technologies (Pty) Ltd
              <br />
              123 Innovation Drive
              <br />
              Sandton, Johannesburg
              <br />
              2196, South Africa
            </p>
            <span className="text-primary font-medium">Head Office Only</span>
          </div>
        </div>
      </div>
    </div>
  );
}
