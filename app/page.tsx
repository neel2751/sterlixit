"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HomeSitelinksSchema } from "@/components/breadcrumb-schema";
import {
  AnimatedReveal,
  AnimatedTextRail,
  ExitIntentDialog,
  HomeHeroMotion,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
  SnapSection,
} from "@/components/site-shell";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";
import { TabbedPanel, type PanelTab } from "@/components/ui/tabbed-panel";
import { StatsBand } from "@/components/ui/stats-band";
import { ComparisonTable, type ComparisonRow } from "@/components/ui/comparison-table";
import { TechGrid } from "@/components/ui/tech-grid";
import {
  TestimonialCarousel,
  type CarouselTestimonial,
} from "@/components/ui/testimonial-carousel";
import {
  coreServices,
  differentiators,
  industries,
  portfolioItems,
  processSteps,
  testimonials,
} from "@/lib/site-data";

// ─── Static data ─────────────────────────────────────────────────────────────

const homeSitelinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "Contact Us", href: "/contact" },
];

const trustLogos = [
  { src: "/client/cdc.svg", alt: "CDC", sizeClass: "h-8 max-w-33" },
  {
    src: "/client/cdcDevelopment.svg",
    alt: "CDC Development",
    sizeClass: "h-8 max-w-34",
  },
  {
    src: "/client/cdcpropertymanagement.svg",
    alt: "CDC Property Management",
    sizeClass: "h-9 max-w-44",
  },
  {
    src: "/client/cdcwastemanagement.svg",
    alt: "CDC Waste Management",
    sizeClass: "h-8 max-w-39",
  },
  {
    src: "/client/Lomashwood.svg",
    alt: "Lomashwood",
    sizeClass: "h-8 max-w-34",
  },
  {
    src: "/client/interiorstudio.svg",
    alt: "Interior Studio",
    sizeClass: "h-8 max-w-34",
  },
  {
    src: "/client/cdchousing.webp",
    alt: "CDC Housing",
    sizeClass: "h-8 max-w-33",
  },
];

const bandStats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "+37%", label: "Avg. Conversion Lift" },
  { value: "+28%", label: "Client Retention Uplift" },
  { value: "6–10 wks", label: "Average Time to Launch" },
];

const serviceCapabilities: Record<string, string[]> = {
  "graphics-branding": [
    "Logo design & full visual identity systems",
    "UI/UX design, wireframing & prototyping",
    "Brand guidelines & asset libraries",
    "Social media creative kits & templates",
    "Pitch decks & corporate presentations",
  ],
  "web-design-development": [
    "Conversion-focused web experiences",
    "React, Next.js, WordPress & Shopify builds",
    "E-commerce storefronts & headless commerce",
    "Landing pages, microsites & CRO iterations",
    "Core Web Vitals & SEO engineering",
  ],
  "digital-marketing": [
    "SEO strategy, content architecture & link building",
    "Google Ads & Meta Ads campaign management",
    "Email marketing & lifecycle automation",
    "Analytics, attribution & GA4 setup",
    "Conversion rate optimisation (CRO)",
  ],
  "custom-saas-it-solutions": [
    "MVP planning, architecture & development",
    "API integrations & workflow automation",
    "DevOps, CI/CD & cloud architecture (AWS)",
    "Legacy system migration & modernisation",
    "Security reviews & compliance foundations",
  ],
  "support-maintenance": [
    "Proactive uptime monitoring & alerting",
    "Scoped SLA coverage models",
    "Emergency response & critical-patch rollouts",
    "Continuous performance optimisation",
    "Monthly reporting & roadmap reviews",
  ],
};

const serviceTags: Record<string, string[]> = {
  "graphics-branding": ["Figma", "Adobe CC", "Brand Strategy", "Motion Design"],
  "web-design-development": ["React", "Next.js", "WordPress", "Shopify", "TypeScript"],
  "digital-marketing": ["Google Ads", "Meta Ads", "GA4", "HubSpot", "Search Console"],
  "custom-saas-it-solutions": ["AWS", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
  "support-maintenance": ["24/5 Coverage", "SLA-Backed", "Proactive", "Incident Mgmt"],
};

const engagementModels = [
  {
    id: "project",
    label: "Project-Based",
    tagline: "Fixed scope. Clear deliverables. Milestone billing.",
    description:
      "Best for teams with a defined outcome in mind. We scope the work, lock the timeline, and deliver against agreed milestones with full transparency on progress.",
    features: [
      "Discovery & scoping workshop included",
      "Fixed-timeline milestone plan",
      "Clear ownership and handoff documentation",
      "Post-launch 30-day support window",
    ],
    cta: { label: "Start a Project", href: "/book-free-strategy-call" },
  },
  {
    id: "retainer",
    label: "Monthly Retainer",
    tagline: "Ongoing execution. Dedicated capacity. Sprint rhythm.",
    description:
      "For teams that need consistent execution without the overhead of hiring. You get a dedicated cross-functional capacity that integrates into your operating rhythm.",
    features: [
      "Dedicated sprint-based delivery each month",
      "Named senior lead on every engagement",
      "Flexible scope — reprioritise sprint-to-sprint",
      "Weekly progress updates & demo calls",
    ],
    cta: { label: "Explore Retainer", href: "/contact" },
  },
  {
    id: "partnership",
    label: "Growth Partnership",
    tagline: "Strategic alignment. Performance-tied goals. Long-term.",
    description:
      "Our deepest engagement model. We become your long-term growth partner — co-owning KPIs, driving quarterly strategy, and building compound returns across brand, product, and pipeline.",
    features: [
      "Quarterly OKR planning & strategy workshops",
      "Integrated team across brand, web, and growth",
      "Performance-tied review cycles",
      "Priority access & preferred partner SLA",
    ],
    cta: { label: "Talk Partnership", href: "/contact" },
  },
];

const comparisonRows: ComparisonRow[] = [
  { feature: "Strategy + Build + Growth under one team", us: true, them: false },
  { feature: "Revenue-tied KPIs from day one", us: true, them: false },
  { feature: "Named senior lead on every project", us: true, them: "Sometimes" },
  { feature: "Transparent sprint-based reporting", us: true, them: false },
  { feature: "Post-launch support included", us: true, them: "Extra Cost" },
  { feature: "Conversion-optimised UX by default", us: true, them: false },
  { feature: "Integrated SEO & analytics setup", us: true, them: "Sometimes" },
  { feature: "Flexible engagement models", us: true, them: false },
  { feature: "Security & compliance mindset", us: true, them: false },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "WordPress",
  "Shopify",
  "Python",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Stripe",
  "Figma",
  "Tailwind CSS",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "HubSpot",
  "Docker",
  "And More...",
];

const homeFaqs = [
  {
    question: "How long is onboarding?",
    answer:
      "Most engagements start with a 1–2 week discovery and onboarding sprint, then move into execution with clear milestones.",
  },
  {
    question: "Do you offer 24/5 support?",
    answer:
      "Yes, support coverage can include extended-hours or critical-system response. The SLA model is scoped case by case around your platform and escalation needs.",
  },
  {
    question: "Are we locked into a long-term contract?",
    answer:
      "We offer flexible engagement models: project-based, monthly retainers, and longer-term growth partnerships based on your needs.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes, we specialise in integrating with a wide range of platforms to ensure seamless workflows and data consistency.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We have experience across SaaS, e-commerce, healthcare, real estate, education, and startups. Our approach adapts to each sector's unique challenges.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We agree on specific, measurable KPIs at the start of every engagement — conversion rate, lead quality, revenue impact — and report against them weekly.",
  },
];

const jumpSections = [
  { id: "hero", label: "Hero" },
  { id: "trust-bar", label: "Trust" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "engagement", label: "Models" },
  { id: "comparison", label: "Compare" },
  { id: "testimonials", label: "Reviews" },
  { id: "case-studies", label: "Work" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
];

// ─── Tab content builders ─────────────────────────────────────────────────────

function ServicePanelContent({ service }: { service: (typeof coreServices)[0] }) {
  const caps = serviceCapabilities[service.slug] ?? [];
  const tags = serviceTags[service.slug] ?? [];

  return (
    <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)] backdrop-blur md:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-primary">
        Service Stack
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
        {service.title}
      </h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {caps.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{cap}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button asChild className="mt-6">
        <Link href={`/services/${service.slug}`}>
          Explore {service.title}
          <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </Button>
    </div>
  );
}

function IndustryPanelContent({
  industry,
}: {
  industry: (typeof industries)[0];
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)] backdrop-blur md:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-primary">
        Sector Focus
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
        {industry.title}
      </h3>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Top Challenges
          </p>
          <ul className="space-y-2">
            {industry.challenges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            How We Help
          </p>
          <ul className="space-y-2">
            {industry.howWeHelp.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {industry.caseStudies.length > 0 ? (
        <div className="mt-5 rounded-xl border border-border/55 bg-secondary/25 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Related Work
          </p>
          <ul className="mt-1 space-y-0.5">
            {industry.caseStudies.map((cs) => (
              <li key={cs} className="text-sm font-medium">
                {cs}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <Button asChild variant="outline" className="mt-6">
        <Link href={`/industries/${industry.slug}`}>
          Explore {industry.title}
          <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </Button>
    </div>
  );
}

function EngagementPanelContent({
  model,
}: {
  model: (typeof engagementModels)[0];
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)] backdrop-blur md:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-primary">
        Engagement Model
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
        {model.label}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">
        {model.tagline}
      </p>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
        {model.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {model.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button asChild className="mt-6">
        <Link href={model.cta.href}>
          {model.cta.label}
          <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </Button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeJumpId, setActiveJumpId] = useState("hero");
  const [isJumpDockHidden, setIsJumpDockHidden] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const footerSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncJumpDock = () => {
      const footerSentinel = footerSentinelRef.current;
      if (footerSentinel) {
        const sentinelTop = footerSentinel.getBoundingClientRect().top;
        setIsJumpDockHidden(sentinelTop <= window.innerHeight - 90);
      }

      const focusLine = window.innerHeight * 0.38;
      let nextActive = jumpSections[0].id;

      for (const section of jumpSections) {
        const node = document.getElementById(section.id);
        if (!node) continue;
        const rect = node.getBoundingClientRect();
        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          nextActive = section.id;
        }
      }

      setActiveJumpId(nextActive);
    };

    const mainNode = mainRef.current;
    syncJumpDock();
    mainNode?.addEventListener("scroll", syncJumpDock, { passive: true });
    window.addEventListener("scroll", syncJumpDock, { passive: true });
    window.addEventListener("resize", syncJumpDock);
    return () => {
      mainNode?.removeEventListener("scroll", syncJumpDock);
      window.removeEventListener("scroll", syncJumpDock);
      window.removeEventListener("resize", syncJumpDock);
    };
  }, []);

  const serviceTabs: PanelTab[] = coreServices.map((s) => ({
    id: s.slug,
    label: s.title,
    content: <ServicePanelContent service={s} />,
  }));

  const industryTabs: PanelTab[] = industries.map((i) => ({
    id: i.slug,
    label: i.title,
    content: <IndustryPanelContent industry={i} />,
  }));

  const engagementTabs: PanelTab[] = engagementModels.map((m) => ({
    id: m.id,
    label: m.label,
    content: <EngagementPanelContent model={m} />,
  }));

  const carouselTestimonials: CarouselTestimonial[] = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    quote: t.quote,
    rating: t.rating,
  }));

  return (
    <main
      ref={mainRef}
      className="min-h-screen overflow-x-clip bg-background md:h-screen md:snap-y md:snap-proximity md:overflow-y-auto md:scroll-smooth md:scroll-pt-20"
    >
      <HomeSitelinksSchema items={homeSitelinks} />
      <SiteHeader />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <SnapSection className="md:block md:py-8">
        <div className="w-full">
          <div id="hero">
            <HomeHeroMotion />
          </div>
          <AnimatedTextRail
            items={[
              "Design velocity",
              "Revenue systems",
              "Growth compounding",
              "Operational clarity",
              "Market leadership",
            ]}
          />
        </div>
      </SnapSection>

      {/* ── 2. Trust bar ─────────────────────────────────────────────────── */}
      <section
        id="trust-bar"
        className="relative overflow-hidden py-7 md:py-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_55%)]" />
        <SiteContainer>
          <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4 backdrop-blur-sm md:px-6 md:py-5">
            <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:text-left">
              Trusted by our clients across property, development, and growth
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
              {trustLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="group flex h-14 items-center justify-center rounded-xl border border-border/55 bg-secondary/25 px-3 transition"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={52}
                    className={`w-full object-contain opacity-95 transition duration-300 group-hover:opacity-100 ${logo.sizeClass}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* ── 3. About / credibility split ─────────────────────────────────── */}
      <section
        id="about"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.1),transparent_45%)]" />
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <AnimatedReveal className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Who We Are
              </p>
              <h2 className="max-w-xl text-[1.85rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                A Digital Growth Agency Built on Strategy, Execution, and
                Results.
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                Sterlixit combines design, engineering, and performance
                marketing so your brand feels high-trust from day one and scales
                with a measurable revenue system — all under one accountable
                partner.
              </p>

              <ul className="space-y-3">
                {[
                  "One integrated team across brand, web, product, and marketing",
                  "Strategy-first approach with revenue-tied KPIs from day one",
                  "Transparent sprint-based delivery with weekly client updates",
                  "Post-launch support and continuous growth optimisation",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href="/book-free-strategy-call">
                    Book a Free Strategy Call
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/80 p-3 backdrop-blur md:p-4">
                  <div className="relative overflow-hidden rounded-2xl border border-border/60">
                    <Image
                      src="/home/hero.svg"
                      alt="Sterlixit growth dashboard"
                      width={980}
                      height={640}
                      className="h-72 w-full object-cover md:h-96"
                    />
                  </div>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  className="absolute -bottom-4 -left-4 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.12)] backdrop-blur"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Projects Delivered
                  </p>
                  <p className="text-xl font-bold text-foreground">10+</p>
                </motion.div>

                <motion.div
                  className="absolute -right-4 top-8 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.12)] backdrop-blur"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Avg. Conversion Lift
                  </p>
                  <p className="text-xl font-bold text-primary">+37%</p>
                </motion.div>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      {/* ── 4. Services tabbed panel ──────────────────────────────────────── */}
      <section
        id="services"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  Service Stack
                </p>
                <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                  What we ship — by capability, not by vertical.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                  One integrated partner delivering brand, web, product, and
                  growth execution against clear revenue goals.
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="w-fit">
                <Link href="/services">
                  Full Capability Map
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <TabbedPanel tabs={serviceTabs} />
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 5. Industries tabbed panel ───────────────────────────────────── */}
      <section
        id="industries"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.07),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  Industries We Serve
                </p>
                <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                  Specialised delivery for sector-specific growth challenges.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                  Every sector has different pressure points. We adapt strategy,
                  UX, engineering, and growth channels to your operating reality.
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="w-fit">
                <Link href="/industries">
                  All Industries
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <TabbedPanel tabs={industryTabs} />
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 6. Stats band ────────────────────────────────────────────────── */}
      <StatsBand stats={bandStats} />

      {/* ── 7. Engagement models ─────────────────────────────────────────── */}
      <section
        id="engagement"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_48%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  How We Work
                </p>
                <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                  Flexible models designed around your business.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                  Choose how you work with us based on your goals, timeline, and
                  level of involvement. Every model is built for clarity and
                  predictable execution.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <ShieldCheck className="size-4" /> Structured Delivery
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <TabbedPanel tabs={engagementTabs} />
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 8. Comparison table ──────────────────────────────────────────── */}
      <section
        id="comparison"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-10 text-center md:mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                The Difference
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                Sterlixit vs. Typical Agencies
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                Not all digital partners are created equal. Here is how we
                compare on the factors that move revenue.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <ComparisonTable
              rows={comparisonRows}
              usName="Sterlixit"
              themName="Typical Agency"
            />
          </AnimatedReveal>

          <AnimatedReveal delay={0.14}>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/book-free-strategy-call">
                  Work With the Better Partner
                </Link>
              </Button>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 9. Testimonial quote banner + carousel ────────────────────────── */}
      <section
        id="testimonials"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.1),transparent_55%)]" />

        {/* Full-width quote banner */}
        <div className="mb-10 bg-primary/10 border-y border-primary/20 py-10 md:mb-14">
          <SiteContainer>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`banner-star-${i}`}
                    className="size-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-foreground md:text-2xl md:leading-relaxed">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold">{testimonials[0].name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonials[0].role}
              </p>
            </div>
          </SiteContainer>
        </div>

        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Client Reviews
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl">
                What Our Clients Say
              </h2>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <TestimonialCarousel testimonials={carouselTestimonials} />
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 10. Technologies grid ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-14 md:py-20"
        id="tech"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_30%_0%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 text-center md:mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Technologies
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl">
                Technologies We Work With
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
                Selected for performance, scalability, and long-term viability.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <TechGrid technologies={technologies} />
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 11. Case studies ─────────────────────────────────────────────── */}
      <section
        id="case-studies"
        className="relative overflow-hidden py-8 md:py-12"
      >
        <SiteContainer>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Case Studies
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Real projects. Real results.
              </h2>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/portfolio">View All Work</Link>
            </Button>
          </div>
        </SiteContainer>
        <GlassmorphismPortfolioBlock />
      </section>

      {/* ── 12. Process ──────────────────────────────────────────────────── */}
      <section
        id="process"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_30%_0%,rgba(110,120,255,0.12),transparent_40%),radial-gradient(circle_at_70%_100%,rgba(70,70,70,0.08),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-center md:gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  How We Deliver
                </p>
                <h2 className="mt-2 max-w-md text-[1.85rem] font-bold tracking-tight leading-[1.1] sm:text-4xl">
                  Your Project, Step by Step
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <ShieldCheck className="size-4" /> Structured Delivery
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <AnimatedReveal key={step} delay={index * 0.08}>
                  <motion.div
                    className="group relative rounded-3xl border border-border/55 bg-linear-to-br from-primary/10 to-background/65 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:p-7"
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-primary/5 text-base font-bold text-primary group-hover:border-primary/60">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 text-lg font-bold tracking-tight transition group-hover:text-primary">
                      {step}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {
                        [
                          "Deep-dive into business goals, audience, and market context.",
                          "Data-driven plan aligned to your value proposition.",
                          "High-performance build using best-fit technologies.",
                          "Precision go-to-market with timing and QA rigour.",
                          "Continuous monitoring, optimisation, and support.",
                        ][index]
                      }
                    </p>
                  </motion.div>
                </AnimatedReveal>
              ))}
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 13. Why choose us ────────────────────────────────────────────── */}
      <section
        id="why-us"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="mb-8 md:mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Why Choose Sterlixit
              </p>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                Why business leaders choose us as their digital partner.
              </h2>
            </div>
          </AnimatedReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <AnimatedReveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-border/60 bg-background/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_34px_rgba(79,70,229,0.09)]">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary">
                    <Sparkles className="size-3.5" />
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Button asChild size="lg">
                <Link href="/about">
                  About Sterlixit
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-75 [background:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.14),transparent_48%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.09),transparent_45%)]" />
        <SiteContainer>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <AnimatedReveal>
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br from-primary/15 via-background to-background p-6 shadow-[0_18px_48px_rgba(79,70,229,0.12)] md:p-8">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/14 blur-3xl" />
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                    <Sparkles className="size-3.5" /> FAQ
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                    Straight answers before your team commits.
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    We remove uncertainty around onboarding, support, and
                    engagement terms so you can move forward with confidence.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Onboarding clarity", "Scoped SLA models", "Flexible contracts"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="rounded-full">
                      <Link href="/contact">
                        Ask a specific question
                        <ArrowUpRight className="ml-1 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.06}>
                <Accordion type="single" collapsible className="space-y-3">
                  {homeFaqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-${index}`}
                      className="overflow-hidden rounded-2xl border border-border/60 bg-background/82 px-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition hover:border-primary/35"
                    >
                      <AccordionTrigger className="py-4 text-left text-base font-semibold tracking-tight hover:no-underline">
                        <span className="inline-flex items-center gap-3">
                          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-2 text-[11px] font-semibold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-9 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedReveal>
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* ── 15. Final CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.14),transparent_55%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="rounded-3xl border border-border/60 bg-linear-to-br from-primary/12 via-background to-background p-6 shadow-[0_24px_72px_rgba(79,70,229,0.12)] md:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    Let&apos;s Build Something Great
                  </p>
                  <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                    Your project. Our expertise. Real outcomes.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                    Start with a strategy call. We map your priorities, identify
                    execution gaps, and give you a practical next-step plan at no
                    cost.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full px-6">
                      <Link href="/book-free-strategy-call">
                        Book Free Strategy Call
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full px-6"
                    >
                      <Link href="/get-a-quote">Get a Quote</Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 rounded-2xl border border-border/60 bg-background/80 p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                    What you can expect
                  </p>
                  {[
                    "We confirm your technical requirements",
                    "We run a custom project estimate",
                    "Receive a project plan within 48 hours of approval",
                    "Your development starts within 48 hours of approval",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">{point}</p>
                    </div>
                  ))}
                  <Button asChild className="mt-2 w-full">
                    <Link href="/contact">Send Us a Message</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* ── Jump navigation dock ─────────────────────────────────────────── */}
      {!isJumpDockHidden ? (
        <div className="fixed inset-x-0 bottom-4 z-40 px-3 md:bottom-5 md:px-6">
          <div className="mx-auto w-full max-w-max overflow-x-auto rounded-full border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))] p-3 shadow-[0_18px_44px_rgba(15,23,42,0.26)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.24),transparent_42%)]" />
            <div className="relative mx-auto flex w-max items-center gap-2 px-0.5">
              {jumpSections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    activeJumpId === section.id
                      ? "border-primary/45 bg-primary/16 text-foreground shadow-[0_6px_18px_rgba(79,70,229,0.2)]"
                      : "border-border/60 bg-secondary/30 text-muted-foreground hover:border-primary/35 hover:bg-background/90 hover:text-foreground"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div ref={footerSentinelRef} aria-hidden />
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
