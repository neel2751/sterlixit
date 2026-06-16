import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  LifeBuoy,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteContainer, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Client Portal Login | Sterlixit",
  description:
    "Access the Sterlixit client portal for project updates, support workflows, ticket tracking, billing visibility, and delivery communication in one secure workspace.",
  alternates: { canonical: "/client-portal-login" },
  openGraph: {
    title: "Client Portal Login | Sterlixit",
    description:
      "Access the Sterlixit client portal for project updates, support workflows, ticket tracking, billing visibility, and delivery communication in one secure workspace.",
    url: "https://sterlixit.co.uk/client-portal-login",
  },
};

const portalModules = [
  {
    title: "Project Dashboard",
    description:
      "View milestones, sprint status, and delivery progress across active projects in one place.",
  },
  {
    title: "Support Ticketing",
    description:
      "Submit technical requests, monitor response status, and keep communication centralised.",
  },
  {
    title: "Billing & Documents",
    description:
      "Access invoices, statements, approvals, and project documents with secure role-based visibility.",
  },
  {
    title: "Priority Updates",
    description:
      "Track urgent items and planned actions without relying on scattered email threads.",
  },
];

const accessSteps = [
  {
    step: "01",
    title: "Receive your invite",
    description:
      "Active clients are provisioned with secure access credentials by the Sterlixit delivery team.",
  },
  {
    step: "02",
    title: "Verify and sign in",
    description:
      "Authenticate your account and enter the portal with secure client-level permissions.",
  },
  {
    step: "03",
    title: "Manage delivery operations",
    description:
      "Use your dashboard to review progress, submit requests, and coordinate next actions.",
  },
];

function PortalHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[40vh] w-[42vw] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.18)_0%,transparent_68%)]" />
        <div className="absolute bottom-0 right-0 h-[30vh] w-[34vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.12)_0%,transparent_70%)]" />
      </div>

      <SiteContainer>
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
              <Sparkles className="size-3.5" />
              Client Operations Portal
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl md:leading-[1.02]">
              Secure login for active Sterlixit clients.
            </h1>

            <p className="max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
              Access project updates, support workflows, ticket status, and
              billing records in one controlled workspace. The portal is
              designed to keep delivery communication clear, fast, and
              accountable.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Lock className="size-3.5" />
                  Security
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Private client access
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <LifeBuoy className="size-3.5" />
                  Support
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Centralised ticket flow
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Clock3 className="size-3.5" />
                  Visibility
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Real-time project updates
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="group rounded-full border border-primary/45 bg-linear-to-r from-primary to-primary/80 px-7 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]"
              >
                <Link href="#portal-access">
                  Access portal support
                  <ArrowUpRight className="ml-2 size-4 transition group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10"
              >
                <Link href="/support-sla">View support plans</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/6 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-4">
            <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Portal access guidance
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Portal access is provided to active Sterlixit clients",
                  "Credentials are issued per authorised team member",
                  "Need help logging in? Contact support for fast verification",
                  "New client? Start with a consultation to initiate onboarding",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/8 px-4 py-4 text-sm leading-7 text-white/80">
                For security, portal credentials are never shared through public
                channels. If you need account assistance, use verified support
                contact routes.
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

function PortalModulesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(circle_at_90%_100%,rgba(99,102,241,0.06),transparent_48%)]" />
      <SiteContainer>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
            Portal Modules
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            One secure workspace for delivery, support, and account operations.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {portalModules.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border/60 bg-background/85 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

function PortalAccessSection() {
  return (
    <section
      id="portal-access"
      className="relative overflow-hidden bg-neutral-950 py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_68%)]" />
      <SiteContainer>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Access Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How portal access works
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-300 md:text-base">
            We provision access in a secure, controlled workflow so each team
            has the right level of visibility without compromising operational
            data.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {accessSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <p className="text-5xl font-black leading-none tracking-tighter text-white/15">
                {item.step}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

export default function ClientPortalLoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PortalHero />
      <PortalModulesSection />
      <PortalAccessSection />

      <section className="bg-background py-16 md:py-20">
        <SiteContainer>
          <div className="rounded-4xl border border-border/60 bg-linear-to-br from-primary/10 via-background to-background p-6 shadow-[0_18px_48px_rgba(79,70,229,0.1)] md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
                  Need new portal access?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Contact our team to verify your account and activate access.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  If you are an existing client and cannot log in, our support
                  team will verify your details and restore access quickly. New
                  clients can start with a strategy session to begin onboarding.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href="/contact">Request access support</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7"
                >
                  <Link href="/book-free-strategy-call">Book consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
    </main>
  );
}
