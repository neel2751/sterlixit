import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  MapPinned,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AnimatedReveal,
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Industries | Industry-Specific Intelligence. Veteran-Led Execution.",
  description:
    "Sterlixit builds the digital backbone for Real Estate, HR, Travel, Finance, Healthcare, Retail, and professional service firms with veteran-led execution, compliance-aware architecture, and proven SaaS expertise.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | Sterlixit",
    description:
      "Industry-specific intelligence backed by 10+ years of execution across Real Estate, HR, Travel, Finance, Healthcare, Retail, and more.",
    url: "https://sterlixit.co.uk/industries",
  },
};

const powerPillars = [
  {
    chapter: "01",
    title: "Real Estate & Property Tech",
    label: "PropTech",
    focus: "Scaling portfolios and automating tenant management.",
    solution:
      "We developed a proprietary Property Management Suite to solve fragmented data, broken maintenance workflows, and scattered tenant communication. From automated dispatch to digital lease lifecycles, we bridge the gap between physical assets and digital efficiency.",
    proof: "Portfolio logic, tenancy workflows, maintenance orchestration",
    href: "/services/custom-saas-it-solutions",
    cta: "See how we build property SaaS",
    icon: Building2,
    accent: "from-primary/16 via-primary/6 to-transparent",
  },
  {
    chapter: "02",
    title: "Human Resources & Corporate Operations",
    label: "HR Systems",
    focus: "Streamlining the employee lifecycle and securing sensitive data.",
    solution:
      "Our custom HR Management platform handles secure onboarding, approvals, records, payroll-adjacent integrations, and role-based access control. Your most valuable asset, your people, is supported by infrastructure designed for zero-failure operations.",
    proof: "Onboarding, internal workflows, access control, secure records",
    href: "/services/custom-saas-it-solutions",
    cta: "Explore our HR solutions",
    icon: Users,
    accent: "from-emerald-500/16 via-emerald-500/6 to-transparent",
  },
  {
    chapter: "03",
    title: "Travel, Logistics & Journey Management",
    label: "Journey Systems",
    focus: "Real-time tracking and seamless customer experiences.",
    solution:
      "Through BrickJourney, we learned how to handle complex logistics, real-time API integrations, live state changes, and concurrency-sensitive user flows. We help travel and journey businesses deliver smooth digital experiences without lag or operational blind spots.",
    proof: "Real-time APIs, booking logic, concurrency, travel operations",
    href: "/about",
    cta: "View the BrickJourney story",
    icon: MapPinned,
    accent: "from-amber-500/16 via-amber-500/6 to-transparent",
  },
];

const industryMatrix = [
  {
    title: "Startups & MVPs",
    eyebrow: "Fast Validation",
    focus: "High burn rate and slow time-to-market.",
    edge: "We use a lean development approach to get your MVP launched in weeks, not months. We build the technical foundation so you do not have to rebuild when you hit Series A.",
    href: "/services/mvp-development",
    cta: "View MVP Development Services",
    icon: Rocket,
    chips: ["Lean Delivery", "Launch in Weeks", "Series A Ready"],
  },
  {
    title: "E-commerce & Retail",
    eyebrow: "Conversion Systems",
    focus: "Conversion rate optimisation and headless commerce.",
    edge: "Whether it is a custom Shopify build or a high-speed React storefront, we focus on the fractions of performance and UX clarity that protect revenue and reduce abandoned carts.",
    href: "/services/e-commerce-solutions",
    cta: "Explore E-commerce Solutions",
    icon: Blocks,
    chips: ["Shopify", "React Storefronts", "CRO First"],
  },
  {
    title: "Healthcare & HealthTech",
    eyebrow: "Protected Data",
    focus: "Security, HIPAA compliance, and patient data silos.",
    edge: "We build encrypted, zero-trust architectures that protect sensitive health information without sacrificing usability. Patient portals should be secure, fast, and easy to trust.",
    href: "/services/custom-saas-it-solutions",
    cta: "See our Security & Compliance Standards",
    icon: Stethoscope,
    chips: ["Zero-Trust", "HIPAA-Aware", "Encrypted Workflows"],
  },
  {
    title: "Real Estate & PropTech",
    eyebrow: "Owner-First Logic",
    focus: "Automated lead flow and property management.",
    edge: "We built our own PropTech suite to handle thousands of unit-level workflows, maintenance logic, and portfolio visibility. We bring that same owner-first execution model into every real estate build.",
    href: "/services/custom-saas-it-solutions",
    cta: "View PropTech Case Study",
    icon: Building2,
    chips: ["Lead Automation", "Portfolio Logic", "Tenant Workflows"],
  },
  {
    title: "Education & EdTech",
    eyebrow: "Peak Enrollment Ready",
    focus: "Scalable LMS platforms and interactive user experience.",
    edge: "We build platforms that stay online during peak enrollment windows and support seamless learning journeys, content delivery, and concurrent video or data usage at scale.",
    href: "/services/web-design-development",
    cta: "See our Web Development Stack",
    icon: GraduationCap,
    chips: ["LMS UX", "Concurrent Usage", "Streaming Stability"],
  },
  {
    title: "SaaS Companies",
    eyebrow: "Metrics-Aware Engineering",
    focus: "Multi-tenancy, API economy, and churn reduction.",
    edge: "As SaaS founders ourselves, we understand the metrics that matter: CAC, LTV, activation, and churn. We build technology that supports the business model behind the product, not just the interface.",
    href: "/services/custom-saas-it-solutions",
    cta: "View Custom SaaS Services",
    icon: Users,
    chips: ["Multi-Tenant", "API Ready", "Churn-Aware UX"],
  },
];

const synergyLinks = [
  {
    title: "Need a brand that fits your industry?",
    href: "/services/graphics-branding",
    cta: "Graphics & Branding",
  },
  {
    title: "Need an industry-specific web portal?",
    href: "/services/web-design-development",
    cta: "Web Development",
  },
  {
    title: "Need a custom SaaS built for your niche?",
    href: "/services/custom-saas-it-solutions",
    cta: "SaaS Solutions",
  },
];

const compliancePoints = [
  "GDPR-minded data handling",
  "HIPAA-aware architecture patterns",
  "Auto-scaling AWS-first deployment logic",
  "API bridges for legacy ecosystem compatibility",
];

const industryFaqs = [
  {
    q: "Do you handle data compliance such as GDPR or HIPAA considerations?",
    a: "Yes. Security and compliance-aware architecture are our baseline, not an afterthought. We structure systems, permissions, storage, and access patterns around the operational risk profile of your industry.",
  },
  {
    q: "Can you integrate with our existing legacy software?",
    a: "Yes. We regularly build API bridges, data sync layers, middleware, and staged migration paths so you can modernize without tearing out business-critical legacy systems all at once.",
  },
  {
    q: "How do you handle high-traffic or seasonal demand spikes?",
    a: "We plan for operational peaks using scalable infrastructure patterns, performance-first frontend engineering, and AWS-ready architecture that can absorb demand spikes without degrading user experience.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />

      <SiteHeader />

      <section className="relative overflow-hidden py-24 md:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[72vh] w-[76vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.13)_0%,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-[36vh] w-[36vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08)_0%,transparent_65%)]" />
        </div>

        <SiteContainer>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                Industry Intelligence
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Industry-Specific Intelligence. Veteran-Led Execution.
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                After 10 years in the trenches, we do not just provide IT
                services. We build the digital backbone for Real Estate, HR, and
                Travel businesses. We understand your compliance, your
                workflows, and your growth bottlenecks.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-8 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]"
                >
                  <Link href="/contact">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                    Consult an Industry Expert
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.32}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                {[
                  "10+ Years in Execution",
                  "10 Permanent Partners",
                  "3 Industry SaaS Products",
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary/70" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section id="power-pillars" className="py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Power Pillars Behind Our Industry Authority
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                These are not hypothetical verticals. We built products,
                workflows, and operating logic in these spaces ourselves, so we
                speak from execution, not observation.
              </p>
            </div>
          </AnimatedReveal>

          <div className="space-y-14">
            {powerPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={pillar.title}
                  className={`grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 ${isReversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
                >
                  <AnimatedReveal>
                    <div className="lg:sticky lg:top-28">
                      <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                        Pillar {pillar.chapter}
                      </div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        <Icon className="size-3.5" />
                        {pillar.label}
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 text-base font-medium text-foreground md:text-lg">
                        {pillar.focus}
                      </p>
                      <div className="mt-8 flex items-center gap-3 border-t border-border/70 pt-5 text-sm text-muted-foreground">
                        <div className="flex size-10 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10">
                          <Icon className="size-4 text-primary" />
                        </div>
                        Built from lived product and operational experience.
                      </div>
                    </div>
                  </AnimatedReveal>

                  <AnimatedReveal delay={0.08}>
                    <div
                      className={`relative overflow-hidden rounded-[2rem] border border-primary/18 bg-gradient-to-br ${pillar.accent} p-8 shadow-[0_20px_56px_rgba(79,70,229,0.1)] md:p-10`}
                    >
                      <div className="pointer-events-none absolute -right-8 top-0 text-[7rem] font-semibold leading-none text-primary/8 md:text-[9rem]">
                        {pillar.chapter}
                      </div>
                      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                            Our Solution
                          </div>
                          <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
                            {pillar.solution}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-primary/15 bg-background/72 p-5">
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                            Execution Proof
                          </div>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            {pillar.proof}
                          </p>
                          <div className="mt-5 border-t border-border/60 pt-4">
                            <Link
                              href={pillar.href}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
                            >
                              {pillar.cta}
                              <ArrowRight className="size-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedReveal>
                </div>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      <section className="bg-primary/[0.03] py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Industry Matrix
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                We do not treat industries like categories on a spreadsheet.
                Each vertical has its own economic pressure, technical risk, and
                operational logic. This matrix shows how we adapt our stack to
                the business reality behind the software.
              </p>
            </div>
          </AnimatedReveal>

          <div className="space-y-14">
            {industryMatrix.map((item, index) => {
              const Icon = item.icon;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={item.title}
                  className={`grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14 ${isReversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
                >
                  <AnimatedReveal delay={index * 0.04}>
                    <div className="relative overflow-hidden rounded-[2rem] border border-primary/18 bg-[linear-gradient(155deg,rgba(79,70,229,0.16)_0%,rgba(79,70,229,0.05)_46%,rgba(255,255,255,0.94)_100%)] p-8 shadow-[0_20px_56px_rgba(79,70,229,0.08)] md:p-10">
                      <div className="pointer-events-none absolute -right-6 -top-8 text-[6.5rem] font-semibold leading-none text-primary/8 md:text-[8rem]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="relative z-10">
                        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-background/85">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                          {item.eyebrow}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                          {item.title}
                        </h3>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {item.chips.map((chip) => (
                            <div
                              key={chip}
                              className="rounded-full border border-primary/15 bg-background/72 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
                            >
                              {chip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedReveal>

                  <AnimatedReveal delay={0.08 + index * 0.04}>
                    <div className="border-y border-border/70 py-6">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                        The Problem / Focus
                      </div>
                      <p className="mt-3 text-lg font-medium leading-8 text-foreground md:text-xl">
                        {item.focus}
                      </p>
                      <div className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                        Our Edge
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
                        {item.edge}
                      </p>
                      <div className="mt-7">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
                        >
                          {item.cta}
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </AnimatedReveal>
                </div>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-primary/20 bg-[linear-gradient(145deg,rgba(79,70,229,0.16)_0%,rgba(79,70,229,0.04)_42%,rgba(255,255,255,0.95)_100%)] p-10 text-center shadow-[0_28px_74px_rgba(79,70,229,0.14)] md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <ShieldCheck className="size-3.5" />
                Experience Proof
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                10 Years. 10 Industries. 0 Failures.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                We have spent a decade as the silent engine behind 10+ permanent
                partners across diverse sectors. Our experience is not
                theoretical. It is baked into the code, workflows, and delivery
                standards of every system we touch.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {compliancePoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-primary/15 bg-background/72 px-4 py-4 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mx-auto mb-3 size-4 text-primary/70" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <section className="bg-primary/[0.03] py-20 md:py-24">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <AnimatedReveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <HeartPulse className="size-3.5" />
                  Industry Synergy
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  How We Apply Our Tech to Your Field
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground leading-7">
                  The industry lens informs the business logic. Our service
                  lines turn that understanding into design systems, web
                  portals, SaaS products, and growth engines built for your
                  environment.
                </p>
              </div>
            </AnimatedReveal>

            <div className="space-y-4">
              {synergyLinks.map((item, index) => (
                <AnimatedReveal key={item.title} delay={index * 0.07}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-4 border-b border-border/70 py-5 transition hover:border-primary/30"
                  >
                    <div>
                      <div className="text-base font-semibold text-foreground">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.cta}
                      </div>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 md:py-24">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <AnimatedReveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <ShieldCheck className="size-3.5" />
                  Trust Builder
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Industry-Specific FAQ
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground leading-7">
                  These are the questions serious operators ask before choosing
                  a technology partner: compliance, integrations, resilience,
                  and traffic readiness.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <Accordion
                type="single"
                collapsible
                className="rounded-3xl border border-border/60 bg-background/85 px-6"
              >
                {industryFaqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`industry-faq-${index}`}>
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

      <section className="pb-20 md:pb-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-primary/25 bg-gradient-to-r from-primary/14 via-primary/7 to-transparent p-8 text-center shadow-[0_20px_56px_rgba(79,70,229,0.1)] md:p-10">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Need an Industry-Aware Digital Partner?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Bring your workflow complexity, compliance needs, and growth
                roadmap. We will show you how the right digital backbone should
                look for your field.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-8 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]"
                >
                  <Link href="/contact">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                    Consult an Industry Expert
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/services/custom-saas-it-solutions">
                    Explore SaaS Solutions
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
