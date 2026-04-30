/*
 * ─────────────────────────────────────────────────────────────────────────────
 * OLD ABOUT PAGE (commented out — preserved for reference)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * import type { Metadata } from "next";
 * import {
 *   StandardPageLayout,
 *   SimpleCardsSection,
 * } from "@/components/page-primitives";
 * import { SiteSection } from "@/components/site-shell";
 *
 * export const metadata: Metadata = {
 *   title: "About Us",
 *   description:
 *     "Sterlixit is a strategy-led digital agency helping businesses build, launch, and scale high-performing digital experiences through branding, engineering, and growth systems.",
 *   alternates: { canonical: "/about" },
 *   openGraph: {
 *     title: "About Us | Sterlixit",
 *     description:
 *       "Sterlixit is a strategy-led digital agency helping businesses build, launch, and scale high-performing digital experiences through branding, engineering, and growth systems.",
 *     url: "https://sterlixit.co.uk/about",
 *   },
 * };
 *
 * export default function AboutPage() {
 *   return (
 *     <StandardPageLayout
 *       title="About Sterlixit"
 *       subtitle="We are a strategy-led digital partner helping businesses build, launch, and scale high-performing digital experiences."
 *       breadcrumbs={[
 *         { name: "Home", href: "/" },
 *         { name: "About", href: "/about" },
 *       ]}
 *     >
 *       <SimpleCardsSection title="Company Introduction" items={["Founded to bridge strategy and execution","Cross-functional experts in design, engineering, and growth","Serving startups to enterprise teams"]} />
 *       <SimpleCardsSection title="Our Mission" items={["Build digital systems that produce measurable business outcomes"]} />
 *       <SimpleCardsSection title="Our Vision" items={["Become the most trusted growth execution partner for modern businesses"]} />
 *       <SimpleCardsSection title="Our Core Values" items={["Ownership","Clarity","Speed with quality","Outcome obsession","Continuous improvement"]} />
 *       <SimpleCardsSection title="Meet The Team" items={["Strategy Leads","Product Designers","Full-stack Developers","Growth Marketers","Support Engineers"]} />
 *       <SimpleCardsSection title="Our Journey / Timeline" items={["Year 1: Foundation","Year 2: Service expansion","Year 3: SaaS and cloud specialization","Year 4+: Multi-industry growth engagements"]} />
 *       <SimpleCardsSection title="Why Clients Trust Us" items={["Transparent process","Data-backed decisions","Reliable delivery cadence","Post-launch support"]} />
 *       <SimpleCardsSection title="Certifications / Tools We Use" items={["AWS","Shopify","WordPress","React","Google Analytics","Meta Ads"]} />
 *       <SiteSection title="CTA Section" description="Discuss your roadmap with our team.">
 *         <p className="text-muted-foreground">Book a free consultation to identify quick wins and long-term growth opportunities.</p>
 *       </SiteSection>
 *     </StandardPageLayout>
 *   );
 * }
 */

// ─────────────────────────────────────────────────────────────────────────────
// NEW ABOUT PAGE — 8-section redesign matching homepage design system
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import {
  AnimatedReveal,
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About Us | Sterlixit — A Decade of Tech Expertise",
  description:
    "Sterlixit was founded with a clear purpose: to help ambitious businesses grow through expert digital delivery, custom software, and long-term partnership. Discover our story, leadership, and how we work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sterlixit | The People and Purpose Behind Our Work",
    description:
      "Sterlixit was built to deliver expert digital solutions, real software, and long-term growth partnerships. Meet the founders and learn how we operate.",
    url: "https://sterlixit.co.uk/about",
  },
};

// ── Page data ────────────────────────────────────────────────────────────────

const aboutStats = [
  {
    value: "10+",
    label: "Years in the Industry",
    icon: Clock,
    detail: "Enterprise-grade expertise before day one.",
  },
  {
    value: "10",
    label: "Permanent Managed Partners",
    icon: Users,
    detail: "Clients who trust us with their critical systems.",
  },
  {
    value: "3",
    label: "Proprietary SaaS Products",
    icon: Layers,
    detail: "Built from gaps we identified over a decade.",
  },
  {
    value: "24/5",
    label: "Infrastructure Monitoring",
    icon: ShieldCheck,
    detail: "Proactive coverage so problems never become crises.",
  },
];

const timeline = [
  {
    period: "2020",
    headline: "The Idea Takes Shape",
    detail:
      "Our founders identified a clear gap in the market — businesses needed more than reactive IT support and off-the-shelf software. The vision for Sterlixit was born: a team that combines deep technical expertise with proactive, long-term digital delivery.",
  },
  {
    period: "2020–2024",
    headline: "Building Experience and Foundations",
    detail:
      "Over four focused years, our founding team deepened their expertise across enterprise web delivery, software engineering, digital marketing, and client operations — building the knowledge and relationships that would underpin Sterlixit.",
  },
  {
    period: "2025",
    headline: "Sterlixit Is Founded",
    detail:
      "We formalised the company and onboarded our first permanent partners. BrickJourney and our other proprietary platforms entered development — products shaped directly by the real challenges we had observed.",
  },
  {
    period: "2026",
    headline: "Growing with Our Partners",
    detail:
      "Sterlixit now delivers websites, digital marketing, and custom software for a growing roster of long-term clients, while operating proprietary platforms developed from genuine market gaps.",
  },
];

const founders = [
  {
    name: "Md Sadequl Alam",
    role: "Co-Founder & CEO",
    expertise: "Business Strategy, Operations & Company Direction",
    highlight:
      "A Director and Co-Founder of Sterlixit, Sadequl leads the company's strategic direction, client partnerships, and operational growth — ensuring every engagement delivers measurable, long-term value.",
    years: "10",
    initials: "SA",
  },
  {
    name: "Neel Patel",
    role: "Co-Founder & CTO",
    expertise: "Software Engineering & Technical Architecture",
    highlight:
      "A seasoned software engineer with a decade of hands-on experience building scalable platforms, Neel leads all technical delivery at Sterlixit — from architecture decisions to production systems.",
    years: "10",
    initials: "NP",
  },
];

const products = [
  {
    name: "BrickJourney",
    category: "Real Estate & Construction",
    description:
      "End-to-end property management and project tracking software built for real estate professionals who demand precision and full visibility across every stage.",
    status: "Live",
    colorGradient: "from-amber-500/15 to-orange-400/5",
    borderColor: "border-amber-500/25",
    badgeClass: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/25",
  },
  {
    name: "HR Management",
    category: "Human Resources",
    description:
      "Streamlined HR workflows covering the full employee lifecycle — onboarding, performance tracking, shift management, compliance, and payroll reporting.",
    status: "Live",
    colorGradient: "from-emerald-500/15 to-teal-400/5",
    borderColor: "border-emerald-500/25",
    badgeClass: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
  },
  {
    name: "Property Management",
    category: "Real Estate Portfolio",
    description:
      "Intelligent property portfolio management with integrated tenant communication, maintenance request tracking, financial reporting, and document management.",
    status: "Live",
    colorGradient: "from-primary/15 to-primary/3",
    borderColor: "border-primary/25",
    badgeClass: "bg-primary/15 text-primary",
    iconBg: "bg-primary/10 border-primary/25",
  },
];

const methodology = [
  {
    icon: ShieldCheck,
    title: "Proactive Management",
    description:
      "We monitor, identify, and resolve potential system issues before they impact your operations. Zero surprises, maximum uptime — every single day.",
    proof: "99.9% uptime maintained across all managed infrastructure",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description:
      "Every system we build is architected to grow with your revenue. We design for tomorrow's requirements, not just the challenges you have today.",
    proof:
      "Built to sustain 10x traffic and data growth without re-engineering",
  },
  {
    icon: Users,
    title: "Client-Centric Development",
    description:
      "Every feature in our SaaS products was validated by our 10 permanent partners. We solve problems that actually exist in real business workflows.",
    proof: "All 3 products derived directly from client feedback loops",
  },
];

const modernAdvantages = [
  {
    icon: Zap,
    title: "No Legacy Baggage",
    description:
      "We use 2026 technology stacks — not frameworks from 2010. Every solution is future-proofed from the first line of code.",
  },
  {
    icon: Target,
    title: "Founder-Level Attention",
    description:
      "You work directly with 10-year veterans on every engagement, not junior staff. Our leadership is hands-on from discovery to delivery.",
  },
  {
    icon: ArrowUpRight,
    title: "Speed Over the Giants",
    description:
      "We move faster than large IT corporations without sacrificing quality. Enterprise-grade results at the agility of a dedicated team.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <SiteHeader />

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section
        id="about-hero"
        className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      >
        {/* Atmospheric radial gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[72vh] w-[72vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.13)_0%,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.07)_0%,transparent_65%)]" />
          <div className="absolute bottom-0 left-0 h-[30vh] w-[30vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.06)_0%,transparent_65%)]" />
        </div>

        <SiteContainer>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedReveal delay={0} instant>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                <span>Our Story</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1} instant>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A Decade of Tech Expertise.{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  A New Era of Business Innovation.
                </span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2} instant>
              <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
                We launched Sterlixit after 10 years of solving complex
                technology problems for major enterprises. Today, we manage IT
                infrastructure for 10 permanent partners and build
                industry-leading software products that scale businesses from
                the ground up.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3} instant>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-8 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)]"
                >
                  <Link href="/contact">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                    Book an Executive Consultation
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border/60 px-8"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </AnimatedReveal>

            {/* social proof strip */}
            <AnimatedReveal delay={0.4} instant>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {[
                  "10+ Years Experience",
                  "10 Permanent Partners",
                  "3 SaaS Products",
                  "24/5 Monitoring",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary/70" />
                    {badge}
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      {/* ── 2. BRIDGE STORY ────────────────────────────────────────────── */}
      <section id="our-story" className="py-20 md:py-28">
        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: narrative */}
            <AnimatedReveal delay={0}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                  <Clock className="size-3.5" />
                  Why We Started
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  From 10 Years Behind the Scenes to{" "}
                  <span className="text-primary">Building in the Open</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-7">
                  <p>
                    Sterlixit was built from a simple belief: that businesses
                    deserve a digital partner who is genuinely invested in their
                    growth — not just a vendor completing a brief and moving on.
                  </p>
                  <p>
                    The idea started in 2020, when our founders began seeing the
                    same challenges repeated across businesses: fragmented
                    digital presence, weak marketing systems, and software that
                    didn&apos;t fit how teams actually worked. The answer
                    wasn&apos;t better tools in isolation — it was a connected
                    approach combining website, marketing, and custom software
                    into one delivery programme.
                  </p>
                  <p>
                    That conviction shaped everything from the way we onboard
                    clients to the platforms we build — including proprietary
                    products like{" "}
                    <strong className="text-foreground">BrickJourney</strong>,
                    developed to solve real operational gaps we had observed
                    first-hand.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    Explore our services
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </AnimatedReveal>

            {/* Right: visual timeline */}
            <AnimatedReveal delay={0.15}>
              <div className="relative rounded-3xl border border-border/60 bg-gradient-to-br from-primary/8 to-transparent p-8 shadow-[0_22px_64px_rgba(79,70,229,0.08)]">
                <div className="pointer-events-none absolute right-6 top-6 size-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.18)_0%,transparent_70%)]" />
                <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Our Timeline
                </div>
                <div className="space-y-0">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        {i < timeline.length - 1 && (
                          <div className="my-1 h-8 w-px bg-primary/15" />
                        )}
                      </div>
                      <div className="pb-6 pt-1">
                        <div className="text-xs font-semibold text-primary">
                          {item.period}
                        </div>
                        <div className="mt-0.5 text-sm font-medium text-foreground">
                          {item.headline}
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      {/* ── 3. NUMBERS OF TRUST ────────────────────────────────────────── */}
      <section id="our-numbers" className="py-20 md:py-28 bg-primary/[0.025]">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                <CheckCircle2 className="size-3.5" />
                Numbers That Prove It
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                10 Years In. Zero Beginner Mistakes.
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
                We entered the market with a decade of enterprise experience
                already applied. These numbers reflect a team that has done the
                hard work long before launching a company.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {aboutStats.map((stat, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 to-transparent p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(79,70,229,0.12)] md:p-8">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <div className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-foreground/80">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {stat.detail}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* ── 4. FOUNDERS / LEADERSHIP ───────────────────────────────────── */}
      <section id="our-team" className="py-20 md:py-28">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                <Users className="size-3.5" />
                The People Behind It
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                When You Partner With Us, You Get the Veterans
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
                In a new company, clients buy the founders — not just the brand.
                Our leadership team brings decade-long track records of
                delivering complex systems under real-world pressure.
              </p>
            </div>
          </AnimatedReveal>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {founders.map((founder, i) => (
              <AnimatedReveal key={i} delay={i * 0.12} hover>
                <div className="group h-full rounded-3xl border border-border/60 bg-gradient-to-br from-primary/8 to-transparent p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_22px_64px_rgba(79,70,229,0.12)]">
                  <div className="flex items-start gap-5">
                    {/* Avatar placeholder — replace with <Image> when photos are available */}
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/20 to-primary/5 text-xl font-bold text-primary">
                      {founder.initials}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-foreground">
                        {founder.name}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {founder.role}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {founder.expertise}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                      Career Highlight
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {founder.highlight}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="size-3.5 shrink-0 text-primary/60" />
                    {founder.years}+ years of hands-on enterprise experience
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* ── 5. PRODUCT ECOSYSTEM (SaaS Lab) ────────────────────────────── */}
      <section id="saas-lab" className="py-20 md:py-28 bg-primary/[0.025]">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                <Layers className="size-3.5" />
                The SaaS Lab
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                We Don&apos;t Just Fix Tech —{" "}
                <span className="text-primary">We Invent It</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
                Beyond managed IT services, we&apos;re a product studio. Our
                three proprietary SaaS products were born from 10 years of
                identifying gaps in the market — and building the solutions
                ourselves rather than waiting for someone else to.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <AnimatedReveal key={i} delay={i * 0.1} hover>
                <div
                  className={`group flex h-full flex-col rounded-3xl border ${product.borderColor} bg-gradient-to-br ${product.colorGradient} p-8 shadow-sm transition-all duration-300 hover:shadow-[0_22px_64px_rgba(79,70,229,0.1)]`}
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl border ${product.iconBg}`}
                    >
                      <Code2 className="size-5 text-foreground/70" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${product.badgeClass}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-6 border-t border-border/40 pt-4 text-xs italic text-muted-foreground/70">
                    Born from 10 years of identifying gaps in the market.
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* ── 6. METHODOLOGY ─────────────────────────────────────────────── */}
      <section id="our-methodology" className="py-20 md:py-28">
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                <Target className="size-3.5" />
                How We Operate
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Framework Behind 10 Successful Partnerships
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
                Our methodology isn&apos;t theoretical — it&apos;s been refined
                through 10 years of managing real infrastructure, real client
                expectations, and real business stakes.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {methodology.map((item, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-br from-primary/8 to-transparent p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(79,70,229,0.12)]">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-5 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3">
                    <div className="text-xs font-medium text-primary">
                      {item.proof}
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* ── 7. MODERN ADVANTAGE ────────────────────────────────────────── */}
      <section
        id="modern-advantage"
        className="py-20 md:py-28 bg-primary/[0.025]"
      >
        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <AnimatedReveal delay={0}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
                  <Sparkles className="size-3.5" />
                  New But Better
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Why Being a New Company Is{" "}
                  <span className="text-primary">Actually Your Advantage</span>
                </h2>
                <p className="text-muted-foreground leading-7">
                  We didn&apos;t inherit 15-year-old systems, legacy
                  bureaucracy, or outdated practices. We built Sterlixit on
                  clean foundations — meaning every client benefits from the
                  latest technology, modern architecture, and direct access to
                  the people who actually know what they&apos;re doing.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-7 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.30)]"
                >
                  <Link href="/contact">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-48" />
                    Start a Conversation
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedReveal>

            <div className="space-y-4">
              {modernAdvantages.map((adv, i) => (
                <AnimatedReveal key={i} delay={0.1 + i * 0.1}>
                  <div className="flex gap-5 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_36px_rgba(79,70,229,0.1)]">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <adv.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {adv.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* ── 8. CLOSING CTA ─────────────────────────────────────────────── */}
      <section id="about-cta" className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[55vh] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.11)_0%,transparent_70%)]" />
        </div>

        <SiteContainer>
          <AnimatedReveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/12 to-transparent p-10 text-center shadow-[0_32px_80px_rgba(79,70,229,0.13)] md:p-16">
              <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                <Building2 className="size-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Partner With a Team That Actually Understands Your
                Business?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Get direct access to a team with 10+ years of enterprise
                experience and a genuine long-term commitment to your success —
                not a junior team with a flashy pitch deck.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-10 py-6 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(79,70,229,0.50)]"
                >
                  <Link href="/contact">
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-56" />
                    Book an Executive Consultation
                    <ArrowUpRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border/60 px-8 py-6"
                >
                  <Link href="/portfolio">See Our Work First</Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                No commitment required. Just a candid conversation about your
                goals and how we can help achieve them.
              </p>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </div>
  );
}
