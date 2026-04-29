import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  CheckCircle2,
  Clock3,
  Code2,
  Compass,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { publicIntegrationConfig } from "@/lib/integrations";
import CalForm from "../schedule-form";

const industryRibbon = [
  "Healthcare",
  "Real Estate",
  "Logistics",
  "FinTech",
  "HR Tech",
  "Construction",
  "E-commerce",
  "Education",
  "Hospitality",
  "Professional Services",
];

const testimonials = [
  {
    company: "CDC Construction",
    logo: "/client/cdc.svg",
    quote:
      "Sterlixit delivered exactly what we needed: a modern web platform, smoother lead handling, and ongoing support we can rely on.",
  },
  {
    company: "CDC Housing",
    logo: "/client/cdchousing.webp",
    quote:
      "From WordPress build to SEO and ad execution, the team handled everything end-to-end and kept delivery consistently sharp.",
  },
  {
    company: "Lomash Wood",
    logo: "/client/Lomashwood.svg",
    quote:
      "We moved from scattered operations to a clean digital presence with dependable long-term technical support behind it.",
  },
  {
    company: "Interior Studio",
    logo: "/client/interiorstudio.svg",
    quote:
      "Their process was practical and fast. We launched with clarity, and our post-launch improvements have stayed on track.",
  },
];

function IndustryRibbon() {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/6 p-3"
      style={{ "--duration": "32s", "--gap": "0.75rem" } as CSSProperties}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-neutral-950 to-transparent" />

      <div className="flex items-center [--gap:0.75rem]">
        <div className="flex w-max shrink-0 items-center gap-3 animate-marquee group-hover:paused">
          {industryRibbon.map((industry, idx) => (
            <div
              key={`${industry}-${idx}`}
              className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/75"
            >
              {industry}
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex w-max shrink-0 items-center gap-3 animate-marquee group-hover:paused"
        >
          {industryRibbon.map((industry, idx) => (
            <div
              key={`${industry}-clone-${idx}`}
              className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/75"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[55vh] w-[52vw] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.18)_0%,transparent_64%)]" />
        <div className="absolute bottom-0 right-0 h-[36vh] w-[38vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.12)_0%,transparent_68%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-305 px-6 py-18 md:px-10 md:py-22">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
          <ShieldCheck className="size-3.5" />
          No-Risk Entry
        </div>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl md:leading-[1.04]">
          30 Minutes. No Sales Pitch. Just Solutions.
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400 md:text-[18px] md:leading-8">
          Sit down with our founding architects to audit your current technology
          stack or map out your new SaaS product. We&apos;ve spent 10 years
          building platforms like BrickJourney; let us show you the roadmap to
          yours.
        </p>

        <div className="mt-8">
          <IndustryRibbon />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-3 py-1.5 text-primary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Current availability: Only 3 slots left for this week
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/55">
            <Clock3 className="size-4" />
            Typical response in under 24 hours
          </span>
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.08),transparent_50%),radial-gradient(circle_at_85%_100%,rgba(99,102,241,0.06),transparent_52%)]" />
      <div className="mx-auto w-full max-w-305 px-6 md:px-10">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/70">
              Discovery Agenda
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-[2.5rem] md:leading-[1.1]">
              Everything We Cover in Your 30-Minute Strategy Session
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[15px]">
              Each call is structured around four core outputs. You leave with
              clarity on what to build, how to scale it, what it costs, and what
              to do next — all in 30 focused minutes.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-border/60 bg-background/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm md:self-auto">
            <Clock3 className="size-3.5 text-primary/60" />
            30 minutes · zero obligation
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Card 01 — large feature card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-linear-to-br from-primary/10 via-background to-background p-7 shadow-[0_20px_52px_rgba(79,70,229,0.1)] md:p-8 lg:col-span-5">
            <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col">
              <p className="text-6xl font-black leading-none tracking-tighter text-primary/20">
                01
              </p>
              <div className="mt-5 flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12">
                <CheckCircle2 className="size-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold leading-tight text-foreground">
                Technical Feasibility &amp; Stack Review
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Our senior architects assess your product idea or current system
                against real build constraints — giving you a clear decision
                framework built on facts, not assumptions.
              </p>
              <div className="mt-5 space-y-2.5">
                {[
                  "Go/no-go assessment with honest rationale",
                  "Stack compatibility and integration audit",
                  "Budget and timeline realism check",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-7">
                <div className="rounded-2xl border border-primary/15 bg-primary/8 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/60">
                    Session outcome
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    A confident build decision before you commit a single pound.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column: Cards 02 + 03 stacked */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* Card 02 */}
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-[0_10px_32px_rgba(15,23,42,0.06)]">
              <p className="text-5xl font-black leading-none tracking-tighter text-muted-foreground/20">
                02
              </p>
              <div className="mt-4 flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                <Layers3 className="size-4 text-primary" />
              </div>
              <h3 className="mt-3 text-[16px] font-bold leading-tight text-foreground">
                Architecture Scalability Audit
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We assess whether your current or proposed architecture can
                handle real growth without costly rewrites or compliance
                surprises down the line.
              </p>
              <div className="mt-4 space-y-1.5">
                {[
                  "Bottleneck identification and load projection",
                  "Security and compliance posture review",
                  "Database and API architecture critique",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/50" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-[0_10px_32px_rgba(15,23,42,0.06)]">
              <p className="text-5xl font-black leading-none tracking-tighter text-muted-foreground/20">
                03
              </p>
              <div className="mt-4 flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                <Compass className="size-4 text-primary" />
              </div>
              <h3 className="mt-3 text-[16px] font-bold leading-tight text-foreground">
                Investment Ballpark &amp; ROI Framing
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Get a realistic cost, timeline, and effort breakdown grounded in
                actual delivery data — not aspirational guesses or inflated
                estimates.
              </p>
              <div className="mt-4 space-y-1.5">
                {[
                  "Phase-by-phase resource sizing",
                  "Realistic sprint velocity and tempo",
                  "Build vs. buy analysis where relevant",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/50" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 04 — Roadmap card (right column) */}
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-b from-background to-primary/5 p-6 shadow-[0_10px_32px_rgba(15,23,42,0.06)] md:p-7 lg:col-span-3">
            <p className="text-5xl font-black leading-none tracking-tighter text-muted-foreground/20">
              04
            </p>
            <div className="mt-4 flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
              <Code2 className="size-4 text-primary" />
            </div>
            <h3 className="mt-3 text-[16px] font-bold leading-tight text-foreground">
              Phased Roadmap to Launch
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A documented execution path from discovery through MVP release and
              post-launch growth — mapped against real milestones.
            </p>
            <div className="mt-6 space-y-2">
              {[
                { phase: "Discovery & Architecture", timing: "Wk 1–2" },
                { phase: "Build & Iteration", timing: "Wk 3–8" },
                { phase: "Launch & Handoff", timing: "Wk 9–10" },
                { phase: "Growth & Support", timing: "Ongoing" },
              ].map(({ phase, timing }) => (
                <div
                  key={phase}
                  className="flex items-center justify-between rounded-xl border border-border/50 bg-background/80 px-3 py-2.5 text-sm"
                >
                  <span className="font-medium text-foreground">{phase}</span>
                  <span className="shrink-0 rounded-full border border-primary/20 bg-primary/8 px-2 py-0.5 text-[11px] font-semibold text-primary">
                    {timing}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-primary/15 bg-primary/8 px-3 py-2.5">
              <p className="text-xs leading-5 text-muted-foreground">
                Written summary sent{" "}
                <span className="font-semibold text-foreground">
                  within 24 hours
                </span>{" "}
                of your session.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-border/50 bg-background/90 px-5 py-4 shadow-sm">
          <p className="mr-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Every session includes:
          </p>
          {[
            "Senior strategist — no juniors",
            "Written next-step summary",
            "NDA available on request",
            "Zero commitment required",
          ].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-foreground"
            >
              <CheckCircle2 className="size-3 text-primary/70" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendlyActionSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.13)_0%,transparent_66%)]" />

      <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
        <div className="mb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
            The Action
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Select A Time That Works For You.
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/14 bg-white/6 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-sm">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
            <CalForm />
          </div>
        </div>

        <p className="mt-4 rounded-lg border border-primary/20 bg-primary/8 px-4 py-3 text-xs leading-5 text-white/80">
          Pro-tip: Add your website URL and primary technical challenge in the
          Cal invite questions so we can prepare tailored recommendations before
          the call.
        </p>

        <div className="mt-7 rounded-2xl border border-white/14 bg-white/6 p-6 backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Meet Your Strategist
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Founder-Led Strategy Session
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                10+ years in custom SaaS and enterprise IT. Every strategy call
                is handled by our senior founding architect.
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              {[
                "Developed & launched BrickJourney (Logistics)",
                "Built PropTech Suite (Real Estate)",
                "Shipped HR Management Core (Enterprise)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="shrink-0 rounded-lg border border-white/10 bg-black/25 p-4 md:min-w-56">
              <p className="text-xs text-white/65">Call format</p>
              <p className="mt-1 text-sm font-medium text-white">
                30 minutes | Practical architecture guidance | Zero pressure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-305 px-6 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Success Stories
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our permanent partners trust our veterans to manage their critical
              digital infrastructure.
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-full">
            <Link href="/portfolio">Explore Case Studies</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.company}
              className="overflow-hidden rounded-xl border border-border/50 bg-card p-5 shadow-[0_10px_34px_rgba(12,18,46,0.07)]"
            >
              <div className="flex h-14 items-center justify-start rounded-lg border border-primary/20 bg-primary/5 px-3">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={150}
                  height={42}
                  className="h-8 w-auto object-contain"
                />
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm leading-6 text-foreground/90">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StrategyCallPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <WhatYouGetSection />
      <CalendlyActionSection />
      <SuccessStoriesSection />
      <SiteFooter />
    </main>
  );
}
