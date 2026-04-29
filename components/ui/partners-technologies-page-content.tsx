"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

type Ecosystem = {
  name: string;
  group: string;
  summary: string;
  logoSrc: string;
};

type CapabilityGroup = {
  title: string;
  icon: React.ElementType;
  description: string;
  items: string[];
  relatedWork: Array<{
    label: string;
    href: string;
    metric: string;
  }>;
};

type IntegrationTool = {
  name: string;
  role: string;
  summary: string;
  logoSrc: string;
};

const ecosystems: Ecosystem[] = [
  {
    name: "React",
    group: "Frontend",
    summary: "High-performance interfaces and interactive product experiences.",
    logoSrc: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next.js",
    group: "Frontend",
    summary: "SEO-ready marketing sites and scalable app-router products.",
    logoSrc: "https://cdn.simpleicons.org/nextdotjs/111111",
  },
  {
    name: "TypeScript",
    group: "Engineering",
    summary: "Safer application architecture and maintainable codebases.",
    logoSrc: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Node.js",
    group: "Backend",
    summary: "Reliable APIs, automation layers, and service integrations.",
    logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "PostgreSQL",
    group: "Data",
    summary: "Structured, dependable data models for growth-stage products.",
    logoSrc: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "AWS",
    group: "Cloud",
    summary: "Scalable infrastructure, storage, and production-grade hosting.",
    logoSrc: "https://cdn.simpleicons.org/amazonaws/232F3E",
  },
  {
    name: "Vercel",
    group: "Deployment",
    summary: "Fast global deployments for modern web applications.",
    logoSrc: "https://cdn.simpleicons.org/vercel/000000",
  },
  {
    name: "Shopify",
    group: "Commerce",
    summary: "Conversion-ready storefronts and commerce growth systems.",
    logoSrc: "https://cdn.simpleicons.org/shopify/7AB55C",
  },
  {
    name: "WordPress",
    group: "CMS",
    summary: "Flexible content workflows for editorial and brochure websites.",
    logoSrc: "https://cdn.simpleicons.org/wordpress/21759B",
  },
  {
    name: "Sanity",
    group: "CMS",
    summary: "Structured content architecture for scalable publishing teams.",
    logoSrc: "https://cdn.simpleicons.org/sanity/F03E2F",
  },
  {
    name: "Meta Ads",
    group: "Marketing",
    summary: "Audience targeting and paid social acquisition campaigns.",
    logoSrc: "https://cdn.simpleicons.org/meta/0467DF",
  },
  {
    name: "Google Ads",
    group: "Marketing",
    summary: "Search intent capture and measurable lead generation.",
    logoSrc: "https://cdn.simpleicons.org/googleads/4285F4",
  },
];

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Design & Frontend",
    icon: LayoutTemplate,
    description:
      "We build polished, high-conversion interfaces with modern frontend stacks and design systems that scale.",
    items: [
      "Next.js and React applications",
      "Tailwind-based design systems",
      "Conversion-focused landing pages",
      "Accessible component architecture",
    ],
    relatedWork: [
      {
        label: "Atlas Commerce Replatform",
        href: "/portfolio/atlas-commerce-replatform",
        metric: "2.1x faster page loads",
      },
      {
        label: "Lumen Brand Refresh",
        href: "/portfolio/lumen-brand-refresh",
        metric: "47% increase in branded engagement",
      },
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    description:
      "The product layer is backed by dependable APIs, structured databases, and pragmatic engineering choices.",
    items: [
      "Node.js service architecture",
      "PostgreSQL data modelling",
      "Authentication and role systems",
      "Reporting and analytics pipelines",
    ],
    relatedWork: [
      {
        label: "HealthFlow SaaS Platform",
        href: "/portfolio/healthflow-saas-platform",
        metric: "33% increase in monthly active users",
      },
      {
        label: "CDC Development Growth Platform",
        href: "/portfolio/cdc-development",
        metric: "32% faster investment planning cycles",
      },
    ],
  },
  {
    title: "Cloud & Delivery",
    icon: Cloud,
    description:
      "We deploy for speed, resilience, and maintainability instead of over-engineering from day one.",
    items: [
      "AWS and Vercel deployment workflows",
      "Preview environments and CI-ready delivery",
      "Performance and uptime monitoring",
      "Scalable hosting recommendations",
    ],
    relatedWork: [
      {
        label: "CDC Construction Platform",
        href: "/portfolio/cdc-construction",
        metric: "35% faster cross-site reporting",
      },
      {
        label: "CDC Property Management Ecosystem",
        href: "/portfolio/cdc-property",
        metric: "40% faster tenant onboarding",
      },
    ],
  },
  {
    title: "Marketing & Growth",
    icon: Megaphone,
    description:
      "Your growth stack is connected to the rest of the business, not treated as a disconnected campaign layer.",
    items: [
      "Google Ads and Meta campaign execution",
      "CRM and lead-routing integrations",
      "SEO foundations and content systems",
      "Conversion tracking and attribution setup",
    ],
    relatedWork: [
      {
        label: "Optima Demand Engine",
        href: "/portfolio/optima-demand-engine",
        metric: "22% lower CAC in 90 days",
      },
      {
        label: "Atlas Commerce Replatform",
        href: "/portfolio/atlas-commerce-replatform",
        metric: "28% higher conversion rate",
      },
    ],
  },
];

const integrationTools: IntegrationTool[] = [
  {
    name: "HubSpot",
    role: "CRM",
    summary: "Lead capture, lifecycle automation, and sales handoff workflows.",
    logoSrc: "https://cdn.simpleicons.org/hubspot/FF7A59",
  },
  {
    name: "GA4",
    role: "Analytics",
    summary:
      "Event-based measurement for user behaviour and funnel performance.",
    logoSrc: "https://cdn.simpleicons.org/googleanalytics/E37400",
  },
  {
    name: "GTM",
    role: "Tracking",
    summary: "Flexible tag deployment and conversion event management.",
    logoSrc: "https://cdn.simpleicons.org/googletagmanager/246FDB",
  },
  {
    name: "Search Console",
    role: "SEO",
    summary:
      "Query visibility, indexing diagnostics, and technical SEO signals.",
    logoSrc: "https://cdn.simpleicons.org/google/4285F4",
  },
  {
    name: "Figma",
    role: "Design",
    summary: "Collaborative UI systems, design exploration, and handoff.",
    logoSrc: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Notion",
    role: "Ops",
    summary:
      "Documentation, delivery visibility, and internal operating systems.",
    logoSrc: "https://cdn.simpleicons.org/notion/000000",
  },
];

const proofPoints = [
  {
    title: "Platform-agnostic recommendations",
    copy: "We do not force a stack because it is fashionable. We choose tools that match your business model, team capability, and growth stage.",
  },
  {
    title: "Integration-first thinking",
    copy: "Marketing, site, CRM, analytics, and product systems are planned together so data flows cleanly and teams do not work in silos.",
  },
  {
    title: "Built for maintainability",
    copy: "We bias toward readable code, documented delivery, and realistic infrastructure choices that your team can live with after launch.",
  },
];

export function PartnersTechnologiesPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden border-b border-border/60 bg-background py-20 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Partners & Technologies
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            The ecosystems behind the products and growth systems we ship.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Sterlixit combines modern engineering, dependable platforms, and
            practical marketing tooling to build digital systems that are fast,
            maintainable, and commercially useful.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground">12+</p>
              <p className="text-sm text-muted-foreground">Core ecosystems</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4</p>
              <p className="text-sm text-muted-foreground">Capability layers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">
                Connected delivery stack
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="bg-background py-12 md:py-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-border/60 bg-card md:grid md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="p-7 md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                <Sparkles className="size-3.5" />
                How We Think About Stack Choices
              </span>
              <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Tools are only useful when they support a clear commercial goal.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                We choose platforms and technologies based on conversion goals,
                editorial workflow, team maturity, speed requirements, and
                long-term maintainability. That means no bloated builds, no
                unnecessary vendor sprawl, and no trend-led architecture with
                weak business reasoning.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {proofPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-border/60 bg-background p-4"
                  >
                    <div className="flex size-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                      <BadgeCheck className="size-4 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {point.title}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">
                      {point.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/60 bg-primary/5 p-7 md:border-l md:border-t-0 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Delivery Principles
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    icon: Workflow,
                    title: "Connected systems",
                    copy: "Website, CRM, analytics, and acquisition channels are mapped as one operating system.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Reliable foundations",
                    copy: "Performance, security, and maintainability are default requirements, not optional extras.",
                  },
                  {
                    icon: Globe,
                    title: "Growth-ready architecture",
                    copy: "Stacks are chosen to support future campaigns, markets, integrations, and product growth.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-2xl border border-border/60 bg-card p-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Ecosystem Grid
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Platforms we actively design, build, and integrate with.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              A curated stack across frontend, cloud, data, CMS, commerce, and
              marketing. The emphasis is practical execution, not logo
              collecting.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ecosystems.map((ecosystem, index) => (
              <motion.div
                key={ecosystem.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.36,
                  delay: (index % 3) * 0.06,
                  ease: "easeOut",
                }}
                className="group rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-background">
                      <img
                        src={ecosystem.logoSrc}
                        alt={ecosystem.name}
                        className="size-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {ecosystem.name}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                        {ecosystem.group}
                      </p>
                    </div>
                  </div>
                  <Code2 className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {ecosystem.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Selected Integrations
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                The tools that connect delivery, measurement, and growth.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Beyond product and platform choices, we integrate the operating
              tools teams rely on every day so marketing, reporting, and
              execution stay aligned.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {integrationTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.36,
                  delay: (index % 3) * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-background">
                      <img
                        src={tool.logoSrc}
                        alt={tool.name}
                        className="size-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {tool.name}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {tool.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Capability Layers
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                How the stack turns into actual delivery.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Our work is organised across the four layers that matter most to
              modern digital businesses.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {capabilityGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.36,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-border/60 bg-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {group.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/85"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Related Case Studies
                    </p>
                    <div className="mt-3 grid gap-2">
                      {group.relatedWork.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/8 px-3 py-3 text-left transition hover:border-primary/40 hover:bg-primary/12"
                        >
                          <div>
                            <p className="text-xs font-semibold text-primary">
                              {item.label}
                            </p>
                            <p className="mt-1 text-[11px] leading-5 text-foreground/70">
                              {item.metric}
                            </p>
                          </div>
                          <ArrowRight className="size-3.5 shrink-0 text-primary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background pb-22 md:pb-24">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-border/60 bg-card md:grid md:grid-cols-[1fr_auto]"
          >
            <div className="p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Need a recommendation?
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                We can help you choose the right stack before you build.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                If you are deciding between platforms, unsure how to connect
                your marketing and CRM tooling, or planning a new product build,
                we can map a practical architecture around your goals and
                constraints.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-6 font-semibold">
                  <Link href="/book-free-strategy-call">
                    Book Free Strategy Call
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 font-semibold"
                >
                  <Link href="/contact">Talk to the Team</Link>
                </Button>
              </div>
            </div>

            <div className="hidden items-center justify-center border-l border-border/60 bg-primary/5 px-10 md:flex">
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                  <Workflow className="size-8 text-primary" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Stack strategy
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Practical, scalable, commercially aligned
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
