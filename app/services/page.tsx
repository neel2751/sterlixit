/*
 * OLD SERVICES PAGE (preserved for reference)
 *
 * import type { Metadata } from "next";
 * import Link from "next/link";
 * import { Button } from "@/components/ui/button";
 * import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 * import {
 *   Table,
 *   TableBody,
 *   TableCell,
 *   TableHead,
 *   TableHeader,
 *   TableRow,
 * } from "@/components/ui/table";
 * import {
 *   StandardPageLayout,
 *   SimpleCardsSection,
 * } from "@/components/page-primitives";
 * import { SiteSection } from "@/components/site-shell";
 * import { servicePages } from "@/lib/site-data";
 *
 * export const metadata: Metadata = {
 *   title: "Our Services",
 *   description:
 *     "End-to-end digital services covering branding, web development, digital marketing, SaaS engineering, and support-all from one trusted growth partner.",
 *   alternates: { canonical: "/services" },
 *   openGraph: {
 *     title: "Our Services | Sterlixit",
 *     description:
 *       "End-to-end digital services covering branding, web development, digital marketing, SaaS engineering, and support-all from one trusted growth partner.",
 *     url: "https://sterlixit.co.uk/services",
 *   },
 * };
 *
 * export default function ServicesPage() {
 *   return (
 *     <StandardPageLayout
 *       title="Services"
 *       subtitle="End-to-end design, development, and growth services with linked detail pages."
 *       breadcrumbs={[
 *         { name: "Home", href: "/" },
 *         { name: "Services", href: "/services" },
 *       ]}
 *     >
 *       <SiteSection
 *         title="Intro"
 *         description="Choose a service track aligned to your growth objectives."
 *       >
 *         <p className="text-muted-foreground">
 *           Every service stream includes strategy, execution, and measurable
 *           outcomes.
 *         </p>
 *       </SiteSection>
 *
 *       <SiteSection title="Service Categories Overview">
 *         <div className="grid gap-4 md:grid-cols-2">
 *           {servicePages.map((service) => (
 *             <Card key={service.slug}>
 *               <CardHeader>
 *                 <CardTitle>{service.title}</CardTitle>
 *               </CardHeader>
 *               <CardContent className="space-y-3">
 *                 <p className="text-sm text-muted-foreground">
 *                   {service.summary}
 *                 </p>
 *                 <Button asChild variant="outline" size="sm">
 *                   <Link href={`/services/${service.slug}`}>
 *                     Open Service Page
 *                   </Link>
 *                 </Button>
 *               </CardContent>
 *             </Card>
 *           ))}
 *         </div>
 *       </SiteSection>
 *
 *       <SiteSection title="Comparison Table (Packages)">
 *         <Table>
 *           <TableHeader>
 *             <TableRow>
 *               <TableHead>Package</TableHead>
 *               <TableHead>Best For</TableHead>
 *               <TableHead>Includes</TableHead>
 *             </TableRow>
 *           </TableHeader>
 *           <TableBody>
 *             <TableRow>
 *               <TableCell>Starter</TableCell>
 *               <TableCell>Early-stage teams</TableCell>
 *               <TableCell>Core design + implementation</TableCell>
 *             </TableRow>
 *             <TableRow>
 *               <TableCell>Growth</TableCell>
 *               <TableCell>Scaling companies</TableCell>
 *               <TableCell>Cross-channel execution + analytics</TableCell>
 *             </TableRow>
 *             <TableRow>
 *               <TableCell>Scale</TableCell>
 *               <TableCell>Complex organizations</TableCell>
 *               <TableCell>
 *                 Dedicated squad + SLAs + advanced integrations
 *               </TableCell>
 *             </TableRow>
 *           </TableBody>
 *         </Table>
 *       </SiteSection>
 *
 *       <SimpleCardsSection
 *         title="CTA"
 *         items={["Book a free consultation", "Request custom proposal"]}
 *       />
 *     </StandardPageLayout>
 *   );
 * }
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Brush,
  CheckCircle2,
  CloudCog,
  Code2,
  Crown,
  Headset,
  Layers3,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";
import type { CSSProperties } from "react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { Button } from "@/components/ui/button";
import {
  AnimatedReveal,
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { differentiators } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | End-to-End Technology Solutions for Every Growth Stage",
  description:
    "Sterlixit delivers end-to-end technology services across branding, web engineering, digital marketing, custom SaaS development, and 24/5 support. Explore engagement models, technology stack expertise, and scalable service packages.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Sterlixit",
    description:
      "From brand identity to complex SaaS platforms, Sterlixit provides complete technology solutions with enterprise-grade delivery standards and founder-level execution.",
    url: "https://sterlixit.co.uk/services",
  },
};

const serviceCards = [
  {
    title: "Graphics & Branding",
    summary: "Visual identities that demand attention.",
    detail:
      "From logo systems to campaign assets, we build brand foundations that make your business memorable and trusted.",
    href: "/services/graphics-branding",
    icon: Brush,
  },
  {
    title: "Web Design & Development",
    summary: "High-performance sites built with React, Shopify, and WordPress.",
    detail:
      "Conversion-focused websites engineered for speed, scalability, and measurable business outcomes.",
    href: "/services/web-design-development",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    summary: "Data-driven SEO and PPC to scale your revenue.",
    detail:
      "Full-funnel growth campaigns with analytics-backed optimisation across organic and paid channels.",
    href: "/services/digital-marketing",
    icon: LineChart,
  },
  {
    title: "Custom SaaS & IT Solutions",
    summary:
      "Scalable infrastructure and MVP development (home of BrickJourney).",
    detail:
      "Cloud-native architecture, integrations, and product engineering for businesses building serious software.",
    href: "/services/custom-saas-it-solutions",
    icon: CloudCog,
  },
  {
    title: "Support & Maintenance",
    summary: "Scoped support coverage for business-critical digital assets.",
    detail:
      "Monitoring, maintenance, and case-by-case SLA design shaped around your stack, risk profile, and escalation needs.",
    href: "/services/support-maintenance",
    icon: Headset,
  },
];

const engagementModels = [
  {
    model: "Project-Based",
    bestFor: "One-time needs",
    deliverables:
      "Fixed scope and fixed timeline engagements (for example: logo system, landing page, or website build).",
  },
  {
    model: "Retainer (Monthly)",
    bestFor: "Ongoing growth",
    deliverables:
      "Dedicated monthly hours for SEO, performance marketing, website optimisation, and support operations.",
  },
  {
    model: "Dedicated Team",
    bestFor: "Custom SaaS and enterprise delivery",
    deliverables:
      "A dedicated cross-functional team focused on building, shipping, and scaling your product roadmap.",
  },
];

const techStack = [
  { name: "React", type: "Frontend Framework", level: "Production-ready" },
  { name: "Node.js", type: "Backend Runtime", level: "Enterprise APIs" },
  { name: "AWS", type: "Cloud Infrastructure", level: "Scalable deployment" },
  {
    name: "Google Ads",
    type: "Acquisition Channel",
    level: "ROI optimisation",
  },
  {
    name: "Shopify",
    type: "Commerce Platform",
    level: "High-conversion stores",
  },
  { name: "WordPress", type: "CMS Platform", level: "Flexible publishing" },
  { name: "Figma", type: "Design System", level: "UX at scale" },
  { name: "Python", type: "Automation & Data", level: "Workflow intelligence" },
];

const engagementHighlights = [
  {
    title: "Project-Based",
    bestFor: "One-time needs",
    whatYouGet:
      "Fixed scope and fixed timeline delivery, ideal for logo systems, websites, landing pages, or focused technology upgrades.",
    icon: Rocket,
    color: "from-primary/12 to-primary/4",
  },
  {
    title: "Retainer (Monthly)",
    bestFor: "Ongoing growth",
    whatYouGet:
      "A predictable monthly execution engine for SEO, marketing, experimentation, content, and continuous improvement.",
    icon: Workflow,
    color: "from-emerald-500/12 to-emerald-500/4",
  },
  {
    title: "Dedicated Team",
    bestFor: "Custom SaaS and enterprise",
    whatYouGet:
      "A focused squad of engineers, designers, and strategists building and scaling your product roadmap with founder-level velocity.",
    icon: Crown,
    color: "from-amber-500/12 to-amber-500/4",
  },
];

const heroRibbon = [
  "Brand systems",
  "Web builds",
  "Growth ops",
  "SaaS delivery",
  "Support",
  "Strategy",
];

const heroBadges = [
  { label: "10+ years of delivery" },
  { label: "5 service tracks" },
  { label: "24/5 support coverage" },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <SiteHeader />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(243,244,255,0.98)_0%,rgba(255,255,255,0.96)_46%,rgba(247,248,255,1)_100%)] py-20 md:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-[48vh] bg-[linear-gradient(180deg,rgba(79,70,229,0.18)_0%,rgba(255,255,255,0)_76%)]" />
          <div className="absolute left-1/2 top-[42%] h-[62vh] w-[74vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.16)_0%,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-[34vh] w-[34vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.12)_0%,transparent_68%)]" />
          <div className="absolute bottom-0 left-0 h-[26vh] w-[28vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.1)_0%,transparent_70%)]" />
        </div>

        <SiteContainer>
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <AnimatedReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                <Boxes className="size-4" />
                Solution-Driven Services
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.8rem] lg:leading-[0.96]">
                End-to-end technology solutions for every growth stage.
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:text-xl">
                From launch-ready identity systems to scalable websites and
                product engineering, we build the full digital stack with a
                senior team that knows how to ship.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-[linear-gradient(to-right,rgba(79,70,229,0.9)_0%,rgba(79,70,229,0.78)_100%)] px-8 text-primary-foreground shadow-[0_14px_30px_rgba(79,70,229,0.3)]"
                >
                  <Link href="#engagement-models">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                    View Our Packages
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/contact">Speak with an Expert</Link>
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="mt-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-border/60 bg-background/85 p-3 shadow-[0_12px_34px_rgba(79,70,229,0.08)] backdrop-blur-sm">
                <div
                  className="flex items-center [--gap:0.75rem]"
                  style={
                    { "--duration": "28s", "--gap": "0.75rem" } as CSSProperties
                  }
                >
                  <div className="flex w-max shrink-0 items-center gap-3 animate-marquee group-hover:paused">
                    {heroRibbon.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="flex w-max shrink-0 items-center gap-3 animate-marquee group-hover:paused"
                  >
                    {heroRibbon.map((item) => (
                      <div
                        key={`${item}-clone`}
                        className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.36}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                {heroBadges.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/85 px-3 py-1.5 shadow-sm"
                  >
                    <span className="size-2 rounded-full bg-primary shadow-[0_0_0_8px_rgba(79,70,229,0.12)]" />
                    {item.label}
                  </span>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      {/* Marquee text banner — Awake-style */}

      <section
        id="service-numbers"
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[48vh] bg-[linear-gradient(180deg,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_75%)]" />
          <div className="absolute left-1/2 top-1/2 h-[62vh] w-[76vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12)_0%,transparent_72%)]" />
          <div className="absolute bottom-0 right-0 h-[28vh] w-[28vw] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.08)_0%,transparent_72%)]" />
        </div>

        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left — headline */}
            <AnimatedReveal>
              <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.4rem]">
                Crafting digital experiences that drive real business outcomes.
              </h2>
            </AnimatedReveal>

            {/* Right — rotating words + stat counters */}
            <AnimatedReveal delay={0.12}>
              <div>
                {/* Rotating words */}
                <div
                  className="relative h-[1.2em] overflow-hidden"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
                >
                  {["Creativity", "Innovation", "Strategy"].map(
                    (word, index) => (
                      <span
                        key={word}
                        className="absolute inset-0 font-bold italic text-primary"
                        style={{
                          animation: "word-cycle 9s ease-in-out infinite",
                          animationDelay: `${index * 3}s`,
                          opacity: index === 0 ? 1 : 0,
                          transform:
                            index === 0 ? "translateY(0)" : "translateY(0.7em)",
                        }}
                      >
                        {word}
                      </span>
                    ),
                  )}
                </div>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-border/60" />

                {/* Stat counters */}
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    { value: "10", label: "Years of Experience" },
                    { value: "23+", label: "Projects Completed" },
                    { value: "20+", label: "Clients Satisfied" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm leading-5 text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section id="service-overview" className="py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Explore Our Service Control Centre
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Choose the exact capability your current stage requires. Each
                service combines strategic planning with execution quality that
                scales as your business grows.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service, index) => (
              <AnimatedReveal key={service.title} delay={index * 0.08} hover>
                <Link
                  href={service.href}
                  className="group block h-full rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 to-transparent p-7 shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-[0_20px_56px_rgba(79,70,229,0.14)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <service.icon className="size-5 text-primary" />
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {service.detail}
                  </p>
                </Link>
              </AnimatedReveal>
            ))}

            <AnimatedReveal delay={serviceCards.length * 0.08} hover>
              <Link
                href="/contact"
                className="group relative block h-full overflow-hidden rounded-3xl border border-primary/30 bg-[linear-gradient(145deg,rgba(79,70,229,0.2)_0%,rgba(79,70,229,0.06)_45%,rgba(255,255,255,0.88)_100%)] p-7 shadow-[0_20px_56px_rgba(79,70,229,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_28px_72px_rgba(79,70,229,0.26)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-14 size-44 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.22)_0%,transparent_70%)]" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.18)_0%,transparent_70%)]" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-background/85">
                    <Sparkles className="size-5 text-primary" />
                  </div>
                  <ArrowUpRight className="size-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <div className="relative z-10 mt-6">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    Need Help Choosing the Right Service?
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    Book a direct strategy call with our team.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    Get founder-level guidance on what to prioritize now, what
                    to build next, and which service model fits your business
                    stage best.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                    Book a Call
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section
        id="engagement-models"
        className="bg-primary/[0.025] py-20 md:py-24"
      >
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How We Engage
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Flexible engagement options designed around your goals,
                timeline, and delivery complexity.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <div className="grid gap-5 md:grid-cols-3">
              {engagementHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br ${item.color} p-7 shadow-[0_16px_44px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_56px_rgba(79,70,229,0.15)]`}
                >
                  <div className="absolute right-5 top-5 text-xs font-semibold text-muted-foreground">
                    0{index + 1}
                  </div>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-background/80">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    Best for: {item.bestFor}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item.whatYouGet}
                  </p>
                  <div className="mt-5 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                    Engagement starts with a strategy call and delivery roadmap.
                  </div>
                </div>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.16}>
            <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/12 via-primary/5 to-transparent p-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Need help choosing an engagement model?
              </span>{" "}
              We align scope, speed, and team structure to your business stage
              so you only pay for what drives outcomes.
              <div className="mt-4">
                <Button
                  asChild
                  size="sm"
                  className="rounded-full px-5 font-semibold"
                >
                  <Link href="/contact">
                    Contact Us <ArrowUpRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <section id="tech-stack" className="py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Technology Stack We Build With
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                We combine modern engineering frameworks, cloud tools, and
                performance channels to deliver high-reliability digital
                systems.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[linear-gradient(135deg,rgba(79,70,229,0.12)_0%,rgba(79,70,229,0.05)_100%)] p-6 shadow-[0_20px_56px_rgba(79,70,229,0.11)] md:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.16)_0%,transparent_70%)]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-52 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.12)_0%,transparent_70%)]" />

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <Layers3 className="size-3.5" />
                Trusted Stack
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {techStack.map((tool) => (
                  <div
                    key={tool.name}
                    className="group rounded-2xl border border-border/60 bg-background/85 p-4 backdrop-blur transition-all duration-300 hover:border-primary/35 hover:bg-background"
                  >
                    <div className="text-sm font-semibold text-foreground">
                      {tool.name}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {tool.type}
                    </div>
                    <div className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      {tool.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <section id="service-ecosystem" className="bg-primary/2.5 py-20 md:py-24">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <AnimatedReveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                  <Sparkles className="size-4" />
                  Why Our Services Are Different
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Built for Clients. Proven on Our Own Products.
                </h2>
                <p className="mt-5 text-muted-foreground leading-7">
                  We do not only deliver for clients. We also operate and scale
                  our own software ecosystem. Our service standards are derived
                  from managing 10 permanent partners and developing 3 in-house
                  SaaS platforms. That means you get the same architecture,
                  reliability, and execution rigor we demand for our own
                  products.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <div className="rounded-3xl border border-border/60 bg-background/85 p-7 shadow-[0_20px_56px_rgba(79,70,229,0.10)] backdrop-blur">
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {[
                    { value: "10", label: "Permanent Partners" },
                    { value: "3", label: "In-house SaaS" },
                    { value: "24/5", label: "Monitoring" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-primary/20 bg-primary/8 p-3 text-center"
                    >
                      <div className="text-lg font-bold text-foreground">
                        {item.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    "Service quality tested on live products before client rollout",
                    "Operational playbooks refined through recurring partner feedback",
                    "Same architecture standards used internally and externally",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex size-6 items-center justify-center rounded-full bg-primary/12">
                        <Wrench className="size-3.5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section id="why-choose-us" className="py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose Sterlixit
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Our delivery model blends strategy, speed, and reliability so
                your technology investment compounds over time.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.slice(0, 6).map((item, index) => (
              <AnimatedReveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-border/60 bg-[linear-gradient(145deg,rgba(79,70,229,0.1)_0%,rgba(79,70,229,0.06)_40%,rgba(255,255,255,0.92)_100%)] p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_16px_42px_rgba(79,70,229,0.10)]">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <CheckCircle2 className="size-4 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section id="services-cta" className="relative py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[52vh] w-[64vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12)_0%,transparent_70%)]" />
        </div>
        <SiteContainer>
          <AnimatedReveal>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-primary/25 bg-[linear-gradient(145deg,rgba(79,70,229,0.2)_0%,rgba(79,70,229,0.06)_40%,rgba(255,255,255,0.92)_100%)] shadow-[0_34px_84px_rgba(79,70,229,0.16)] backdrop-blur">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative p-10 md:p-14">
                  <div className="pointer-events-none absolute -right-16 -top-14 size-52 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.2)_0%,transparent_70%)]" />
                  <div className="relative z-10">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      Technology Roadmap Session
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      Not sure which service fits your current stage?
                    </h2>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                      Get a tailored, no-obligation plan outlining what to fix
                      now, what to build next, and how to scale without
                      technical debt.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="group relative overflow-hidden rounded-full border border-primary/45 bg-[linear-gradient(to-right,rgba(79,70,229,0.8)_0%,rgba(79,70,229,0.6)_100%)] px-9 text-primary-foreground shadow-[0_14px_30px_rgba(79,70,229,0.35)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(79,70,229,0.50)]"
                      >
                        <Link href="/contact">
                          <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-56" />
                          Get a Free Technology Roadmap
                          <ArrowUpRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8"
                      >
                        <Link href="/contact">Book a Call</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-primary/15 bg-background/70 p-8 md:p-10 lg:border-l lg:border-t-0">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12">
                    <ShieldCheck className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    What You Get in the Call
                  </h3>
                  <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {[
                      "Founder-level consultation based on your current stack",
                      "Clear priority order for services and delivery phases",
                      "Actionable roadmap with timeline and budget direction",
                      "No commitment required after the session",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/75" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-primary/15 bg-primary/8 p-3 text-xs text-muted-foreground">
                    Average first response time: under 4 business hours.
                  </div>
                </div>
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
