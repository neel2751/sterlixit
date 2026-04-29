import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DetailedContactForm } from "@/components/site-forms";
import { Button } from "@/components/ui/button";
import { SiteContainer, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Request a Proposal | Sterlixit",
  description:
    "Request a tailored digital proposal from Sterlixit for branding, web design, SaaS, or growth work. Share your scope, timeline, and goals to receive a focused recommendation.",
  alternates: { canonical: "/request-proposal" },
  openGraph: {
    title: "Request a Proposal | Sterlixit",
    description:
      "Request a tailored digital proposal from Sterlixit for branding, web design, SaaS, or growth work. Share your scope, timeline, and goals to receive a focused recommendation.",
    url: "https://sterlixit.com/request-proposal",
  },
};

const requestChecklist = [
  "Project scope, timeline, and preferred launch window",
  "Target audience, market, and commercial goals",
  "Current website, platform, or product challenges",
  "Integrations, content, and compliance requirements",
];

const proposalSteps = [
  {
    step: "01",
    title: "Share the brief",
    description:
      "Tell us what you need, what is already in place, and where you want the project to land.",
  },
  {
    step: "02",
    title: "We scope the work",
    description:
      "Our team reviews the brief, identifies dependencies, and shapes the right delivery approach.",
  },
  {
    step: "03",
    title: "Receive a tailored proposal",
    description:
      "You get a clear recommendation covering scope, timing, pricing structure, and next steps.",
  },
];

const proposalBenefits = [
  {
    title: "Clear commercial direction",
    description:
      "Understand the likely investment, delivery stages, and where to prioritise for the strongest return.",
  },
  {
    title: "Senior-led review",
    description:
      "Every submission is reviewed by experienced strategists, not handed off to a generic sales queue.",
  },
  {
    title: "Built for UK businesses",
    description:
      "We align the proposal to your market, compliance needs, and operational realities in the UK.",
  },
];

function ProposalHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[42vh] w-[42vw] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.18)_0%,transparent_68%)]" />
        <div className="absolute bottom-0 right-0 h-[32vh] w-[34vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.12)_0%,transparent_70%)]" />
      </div>

      <SiteContainer>
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
              <Sparkles className="size-3.5" />
              Proposal Request
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl md:leading-[1.02]">
              Request a proposal for your next digital project.
            </h1>

            <p className="max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
              Share your scope, timeline, and commercial goals, and we will
              prepare a tailored proposal for branding, website design, SaaS
              development, or growth support. You get a clear next step, not a
              generic quote.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Clock3 className="size-3.5" />
                  Response time
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Within 1 business day
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <ShieldCheck className="size-3.5" />
                  Review standard
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Senior-led and private
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <CheckCircle2 className="size-3.5" />
                  Next step
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Proposal with clear scope
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="group rounded-full border border-primary/45 bg-linear-to-r from-primary to-primary/80 px-7 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]"
              >
                <Link href="#proposal-form">
                  Start your proposal request
                  <ArrowUpRight className="ml-2 size-4 transition group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10"
              >
                <Link href="/book-free-strategy-call">
                  Book a strategy call
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/6 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-4">
            <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                What to include in your brief
              </p>
              <div className="mt-5 space-y-3">
                {requestChecklist.map((item) => (
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
                The more detail you share, the more accurate our proposal will
                be. If you are not sure what to include, send what you have and
                we will help shape the brief.
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

function ProposalBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(circle_at_90%_100%,rgba(99,102,241,0.06),transparent_48%)]" />
      <SiteContainer>
        <div className="grid gap-4 lg:grid-cols-3">
          {proposalBenefits.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border/60 bg-background/85 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary">
                <CheckCircle2 className="size-5" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
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

function ProposalProcessSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_68%)]" />
      <SiteContainer>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Proposal Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How we turn your brief into a practical proposal
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-300 md:text-base">
            We keep the process simple, structured, and transparent so you know
            exactly what happens after you submit your request.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {proposalSteps.map((item) => (
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

export default function RequestProposalPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <ProposalHero />

      <section
        id="proposal-form"
        className="relative overflow-hidden bg-background py-16 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
                Proposal Request Form
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Tell us what you need and we will shape the right proposal.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                Use the form to share your brief, budget range, and timeline. If
                you are early in the process, that is fine too — we can help
                translate your idea into a clearer scope before the proposal is
                prepared.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Branding and visual identity projects",
                  "Website redesign and conversion work",
                  "Custom SaaS, portal, and platform builds",
                  "SEO, content, and growth retainers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-border/60 bg-linear-to-br from-primary/10 via-background to-background p-3 shadow-[0_20px_56px_rgba(79,70,229,0.1)] md:p-4">
              <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    <ShieldCheck className="size-3.5" />
                    Private and senior-reviewed
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <Clock3 className="size-3.5" />
                    Fast turnaround
                  </span>
                </div>

                <DetailedContactForm source="request_proposal_page" />
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <ProposalBenefitsSection />
      <ProposalProcessSection />

      <section className="bg-background py-16 md:py-20">
        <SiteContainer>
          <div className="rounded-4xl border border-border/60 bg-linear-to-br from-primary/10 via-background to-background p-6 shadow-[0_18px_48px_rgba(79,70,229,0.1)] md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
                  Ready to compare options?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  If you are still shaping the brief, start with a strategy
                  call.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  A short call is often the fastest way to clarify scope, reduce
                  wasted back-and- forth, and arrive at a proposal that reflects
                  the real work required.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full px-7">
                <Link href="/book-free-strategy-call">
                  Book a strategy call
                </Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
    </main>
  );
}
