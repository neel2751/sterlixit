import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgePoundSterling,
  Cpu,
  Layers3,
  LifeBuoy,
  LineChart,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { LifecycleOrbital } from "@/components/ui/lifecycle-orbital";
import { SaasAdvantageSection } from "@/components/ui/saas-advantage-section";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedInvestmentTabs } from "@/components/ui/animated-investment-tabs";
import { InvestmentDriversGrid } from "@/components/ui/investment-drivers-grid";
import {
  AnimatedReveal,
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import {
  CtaWithTextMarquee,
  MobileStickyInvestmentCta,
} from "@/components/ui/cta-with-text-marquee";

export const metadata: Metadata = {
  title: "Investment | Your Vision. Engineered for ROI.",
  description:
    "Explore Sterlixit investment models for branding, web engineering, custom SaaS, marketing, and long-term support. ROI-focused engagement structures built to scale with your revenue.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Investment Models | Sterlixit",
    description:
      "ROI-first digital investment models spanning launch builds, growth retainers, and dedicated product teams.",
    url: "https://sterlixit.co.uk/pricing",
  },
};

const lifecyclePhases = [
  {
    phase: "Phase 1",
    title: "Branding",
    detail: "Defining the identity and market position.",
    icon: Palette,
  },
  {
    phase: "Phase 2",
    title: "Web / App",
    detail: "Building the customer-facing interface.",
    icon: Layers3,
  },
  {
    phase: "Phase 3",
    title: "SaaS / IT",
    detail: "Engineering logic, APIs, and infrastructure.",
    icon: Cpu,
  },
  {
    phase: "Phase 4",
    title: "Marketing",
    detail: "Scaling the user base and acquisition engine.",
    icon: LineChart,
  },
  {
    phase: "Phase 5",
    title: "Support",
    detail: "Protecting uptime, security, and investment value.",
    icon: LifeBuoy,
  },
];

const investmentFaqs = [
  {
    q: "Do you provide exact pricing up front?",
    a: "We provide a practical estimate range after discovery, then finalise investment based on architecture depth, integrations, compliance level, and delivery velocity.",
  },
  {
    q: "Can we start with launch and move to a retainer later?",
    a: "Yes. Many partners begin with a launch engagement and transition to a growth retainer once go-to-market and optimisation become priority.",
  },
  {
    q: "Is custom SaaS always a larger investment than web projects?",
    a: "Usually yes, because custom SaaS includes infrastructure, multi-tenant logic, security layers, and integration complexity. It also creates the strongest long-term enterprise value.",
  },
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Investment", href: "/pricing" },
        ]}
      />

      <SiteHeader />

      <section className="relative overflow-hidden py-24 md:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.13)_0%,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-[34vh] w-[34vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08)_0%,transparent_66%)]" />
          <div className="absolute bottom-12 left-1/2 h-55 w-165 -translate-x-1/2 opacity-20 mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <svg viewBox="0 0 660 220" className="h-full w-full">
              <path
                d="M20 190 C 120 170, 170 150, 230 138 C 300 123, 330 106, 390 86 C 450 66, 510 56, 640 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-primary"
              />
            </svg>
          </div>
        </div>

        <SiteContainer>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                <BadgePoundSterling className="size-4" />
                ROI-First Investment Philosophy
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Your Vision. Engineered for ROI.
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                We do not just sell services. We build digital assets. Whether
                you are launching a brand or a complex platform like
                BrickJourney, our investment models are designed to scale with
                your revenue.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-8 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]"
                >
                  <Link href="#discovery-call">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                    Book a Strategy Session
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                One Partner. Every Stage of the Lifecycle.
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Our ecosystem model aligns branding, product, infrastructure,
                growth, and long-term operations around one objective:
                compounding business value.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <AnimatedReveal>
              <LifecycleOrbital />
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <div className="space-y-4">
                {lifecyclePhases.map((phase) => {
                  const Icon = phase.icon;
                  return (
                    <div
                      key={phase.title}
                      className="rounded-2xl border border-border/70 bg-background/85 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                          <Icon className="size-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                            {phase.phase}
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {phase.title}
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {phase.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section id="investment-models" className="bg-primary/3 py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/60">
                Investment Models
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Three Models Built for Partnership
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Choose the engagement structure that fits your current stage —
                each model is built to scale with your revenue and evolve as
                your business grows.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedInvestmentTabs />
        </SiteContainer>
      </section>

      <SaasAdvantageSection />

      <section className="bg-primary/3 py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/60">
                Scoping Factors
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What Drives the Investment?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We quote based on operational reality, not arbitrary package
                labels. Every estimate is shaped by these four pillars.
              </p>
            </div>
          </AnimatedReveal>

          <InvestmentDriversGrid />
        </SiteContainer>
      </section>

      <section className="py-20 md:py-24">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <AnimatedReveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <ShieldCheck className="size-3.5" />
                  Investment FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Common Questions Before We Scope
                </h2>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <Accordion
                type="single"
                collapsible
                className="rounded-3xl border border-border/60 bg-background/85 px-6"
              >
                {investmentFaqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`investment-faq-${index}`}>
                    <AccordionTrigger className="text-left text-sm md:text-base">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <CtaWithTextMarquee
        badgeText="Investment Discovery"
        title={"Ready to Turn Strategy\nInto Scalable Revenue?"}
        description="Book a founder-led strategy call and get a practical roadmap, risk map, and investment direction tailored to your growth stage."
        primaryLabel="Book My Strategy Session"
        secondaryLabel="Get a Custom Proposal"
        marqueeList={[
          "SaaS Founders",
          "Operations Leaders",
          "Marketing Teams",
          "Product Managers",
          "Growth Executives",
        ]}
      />
      <MobileStickyInvestmentCta
        label="Book My Strategy Session"
        href="#discovery-call"
      />

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
