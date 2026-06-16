"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  Globe,
  Layers,
  Megaphone,
  Palette,
  Search,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { cn } from "@/lib/utils";

// ─── Resource data ─────────────────────────────────────────────────────────

type Resource = {
  slug: string;
  category: string;
  title: string;
  description: string;
  format: string;
  icon: React.ElementType;
  imageSrc: string;
  source: string;
  highlights: string[];
  ctaLabel: string;
};

const resources: Resource[] = [
  {
    slug: "website-audit",
    category: "Website",
    title: "Free Website Audit",
    description:
      "Get a detailed performance and conversion snapshot of your site. We identify speed bottlenecks, UX friction points, and missed revenue opportunities.",
    format: "PDF Report",
    icon: Gauge,
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    source: "resource_website_audit",
    highlights: [
      "Core Web Vitals analysis",
      "Conversion bottleneck mapping",
      "Mobile experience scorecard",
    ],
    ctaLabel: "Get My Website Audit",
  },
  {
    slug: "seo-audit",
    category: "SEO",
    title: "Free SEO Audit",
    description:
      "Uncover the technical SEO issues and keyword gaps holding your rankings back. Delivered as a prioritised action plan your team can execute immediately.",
    format: "PDF Report",
    icon: Search,
    imageSrc:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1600&auto=format&fit=crop",
    source: "resource_seo_audit",
    highlights: [
      "Technical SEO health check",
      "Keyword gap analysis",
      "Backlink opportunity report",
    ],
    ctaLabel: "Get My SEO Audit",
  },
  {
    slug: "branding-checklist",
    category: "Brand",
    title: "Brand Consistency Checklist",
    description:
      "A 40-point checklist to audit your visual identity, tone of voice, and messaging cohesion across every customer touchpoint — from ads to invoices.",
    format: "Checklist PDF",
    icon: Palette,
    imageSrc:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
    source: "resource_branding_checklist",
    highlights: [
      "Visual identity audit",
      "Tone of voice guidelines",
      "Cross-channel messaging review",
    ],
    ctaLabel: "Download Checklist",
  },
  {
    slug: "growth-engine-blueprint",
    category: "Strategy",
    title: "90-Day Growth Engine Blueprint",
    description:
      "The exact execution template we use to align strategy, website, and demand generation into one operating system for fast-scaling businesses.",
    format: "Strategy Template",
    icon: Zap,
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    source: "resource_growth_engine_blueprint",
    highlights: [
      "90-day milestone roadmap",
      "Channel prioritisation matrix",
      "Team accountability framework",
    ],
    ctaLabel: "Get the Blueprint",
  },
  {
    slug: "saas-mvp-checklist",
    category: "SaaS",
    title: "SaaS MVP Launch Checklist",
    description:
      "A founder-ready checklist covering pre-launch QA, onboarding activation flow, and release confidence gates for shipping your first SaaS product.",
    format: "Checklist PDF",
    icon: ClipboardList,
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    source: "resource_saas_mvp_checklist",
    highlights: [
      "Pre-launch QA protocol",
      "Activation flow templates",
      "Release confidence gates",
    ],
    ctaLabel: "Download Checklist",
  },
  {
    slug: "conversion-rate-guide",
    category: "Conversion",
    title: "CRO Playbook for B2B Teams",
    description:
      "Proven conversion rate optimisation frameworks for B2B landing pages, pricing pages, and sign-up flows — with real before/after examples.",
    format: "Playbook PDF",
    icon: BarChart3,
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    source: "resource_cro_playbook",
    highlights: [
      "Landing page formula",
      "Pricing page psychology",
      "Form optimisation tactics",
    ],
    ctaLabel: "Download Playbook",
  },
  {
    slug: "digital-marketing-audit",
    category: "Marketing",
    title: "Digital Marketing Audit Template",
    description:
      "A structured audit template to evaluate your paid, organic, email, and social performance against industry benchmarks across every channel.",
    format: "Audit Template",
    icon: Megaphone,
    imageSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    source: "resource_marketing_audit",
    highlights: [
      "Paid channel efficiency scores",
      "Organic growth benchmarks",
      "Email performance grades",
    ],
    ctaLabel: "Get the Audit Template",
  },
  {
    slug: "design-system-starter",
    category: "Product",
    title: "Design System Starter Kit",
    description:
      "Token architecture, component documentation templates, and design principles to help product teams build a scalable, dev-ready design system.",
    format: "Figma + PDF",
    icon: Layers,
    imageSrc:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    source: "resource_design_system_starter",
    highlights: [
      "Token architecture guide",
      "Component documentation template",
      "Developer handoff checklist",
    ],
    ctaLabel: "Download Starter Kit",
  },
  {
    slug: "content-strategy-guide",
    category: "Content",
    title: "Content Strategy Playbook",
    description:
      "Turn content into a compounding growth asset. Includes editorial calendar templates, topic cluster frameworks, and content ROI measurement models.",
    format: "Playbook PDF",
    icon: FileText,
    imageSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    source: "resource_content_strategy",
    highlights: [
      "Editorial calendar template",
      "Topic cluster architecture",
      "Content ROI model",
    ],
    ctaLabel: "Get the Playbook",
  },
  {
    slug: "global-readiness-checklist",
    category: "Strategy",
    title: "Global Expansion Readiness Checklist",
    description:
      "A structured readiness framework for businesses preparing to enter new markets — covering localisation, compliance, and digital infrastructure.",
    format: "Checklist PDF",
    icon: Globe,
    imageSrc:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    source: "resource_global_readiness",
    highlights: [
      "Market entry readiness score",
      "Localisation requirements map",
      "Compliance & legal checklist",
    ],
    ctaLabel: "Download Checklist",
  },
  {
    slug: "blog-insights",
    category: "Learning",
    title: "Sterlixit Insights Library",
    description:
      "Explore our full blog: growth systems, SaaS execution playbooks, conversion optimisation guides, and digital strategy deep-dives.",
    format: "Free Reading",
    icon: BookOpen,
    imageSrc:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop",
    source: "resource_insights_library",
    highlights: [
      "Strategy deep-dives",
      "Execution playbooks",
      "Founder & operator frameworks",
    ],
    ctaLabel: "Browse the Blog",
  },
];

const CATEGORIES = [
  "All",
  ...Array.from(new Set(resources.map((r) => r.category))),
];

// ─── Lead capture form inside each resource card ────────────────────────────

function ResourceLeadForm({
  resource,
  onDone,
}: {
  resource: Resource;
  onDone: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  const isBlogLink = resource.slug === "blog-insights";

  if (isBlogLink) {
    return (
      <Button asChild className="mt-5 w-full rounded-full font-semibold">
        <Link href="/blog">
          {resource.ctaLabel} <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    );
  }

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
      >
        <CheckCircle2 className="size-4 shrink-0" />
        Check your inbox — it's on its way!
      </motion.div>
    );
  }

  return (
    <form
      className="mt-5 space-y-2"
      onSubmit={async (event) => {
        event.preventDefault();
        setState("loading");
        try {
          const leadResponse = await fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              resource: resource.title,
              name,
              email,
              company,
              source: resource.source,
            }),
          });

          const newsletterResponse = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              source: resource.source,
              tags: [resource.source, resource.category.toLowerCase()],
            }),
          });

          if (leadResponse.ok) {
            if (!newsletterResponse.ok) {
              console.warn("Newsletter capture failed for resource lead");
            }
            setState("done");
            onDone();
          } else {
            setState("error");
          }
        } catch {
          setState("error");
        }
      }}
    >
      <Input
        type="text"
        placeholder="Your name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="bg-background"
      />
      <Input
        type="email"
        placeholder="Work email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="bg-background"
      />
      <Input
        type="text"
        placeholder="Company / brand"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        className="bg-background"
      />
      <Button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full font-semibold"
      >
        {state === "loading" ? (
          "Sending..."
        ) : (
          <>
            <Download className="mr-2 size-4" />
            {resource.ctaLabel}
          </>
        )}
      </Button>
      {state === "error" ? (
        <p className="text-xs text-destructive">
          Could not submit. Please try again.
        </p>
      ) : null}
    </form>
  );
}

// ─── Resource card ──────────────────────────────────────────────────────────

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  const [claimed, setClaimed] = useState(false);
  const Icon = resource.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.38,
        delay: (index % 3) * 0.06,
        ease: "easeOut",
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_40px_rgba(79,70,229,0.1)]"
    >
      {/* Cover image */}
      <div
        className="relative h-44 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.52)),url(${resource.imageSrc})`,
        }}
      >
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            {resource.category}
          </span>
          <span className="rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
            {resource.format}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
            <Icon className="size-4 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-snug text-foreground">
              {resource.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {resource.description}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-4 space-y-1.5 border-t border-border/50 pt-4">
          {resource.highlights.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-xs text-foreground/80"
            >
              <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
              {point}
            </li>
          ))}
        </ul>

        {/* Lead form — pushed to bottom */}
        <div className="mt-auto">
          <ResourceLeadForm
            resource={resource}
            onDone={() => setClaimed(true)}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function ResourcesPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = resources.filter((r) => {
    const categoryPass =
      activeCategory === "All" || r.category === activeCategory;
    const lower = query.trim().toLowerCase();
    const searchPass =
      lower.length === 0 ||
      r.title.toLowerCase().includes(lower) ||
      r.description.toLowerCase().includes(lower) ||
      r.category.toLowerCase().includes(lower);
    return categoryPass && searchPass;
  });

  const featured = resources[0];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden border-b border-border/60 bg-background py-20 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Free Resources
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Tools and playbooks to grow your business faster.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Practical audits, templates, and actionable guides — built by the
            Sterlixit team and used by real clients before they become case
            studies.
          </p>

          {/* Stats strip */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { value: `${resources.length}+`, label: "Free resources" },
              { value: "4 min", label: "Avg. time to first insight" },
              { value: "100%", label: "Instantly downloadable" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Featured resource ─────────────────────────────────────── */}
      <section className="bg-background py-12 md:py-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-border/60 bg-card md:grid md:grid-cols-[1fr_420px]"
          >
            {/* Text side */}
            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                <Zap className="size-3" />
                Most Downloaded
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                {featured.description}
              </p>
              <ul className="mt-5 space-y-2">
                {featured.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-foreground/85"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 max-w-sm">
                <ResourceLeadForm
                  resource={featured}
                  onDone={() => undefined}
                />
              </div>
            </div>

            {/* Image side */}
            <div
              className="hidden h-full min-h-80 bg-cover bg-center md:block"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.15), rgba(15,23,42,0.55)), url(${featured.imageSrc})`,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────────────────────── */}
      <section className="sticky top-16 z-30 border-b border-border/60 bg-background/90 py-3 backdrop-blur-md">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]",
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-background text-foreground hover:border-primary/50 hover:text-primary",
                )}
              >
                {cat}
              </button>
            ))}

            {/* Search */}
            <div className="ml-auto flex items-center gap-2 rounded-xl border border-border/70 bg-background px-3 py-1.5">
              <Search className="size-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search resources…"
                className="w-40 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Resource grid ─────────────────────────────────────────── */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`grid-${activeCategory}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((resource, index) => (
                  <ResourceCard
                    key={resource.slug}
                    resource={resource}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center"
              >
                <p className="text-base text-muted-foreground">
                  No resources match that filter. Try a different category or
                  search term.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full"
                  onClick={() => {
                    setActiveCategory("All");
                    setQuery("");
                  }}
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────── */}
      <section className="bg-background pb-22 md:pb-24">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl border border-border/60 bg-card p-7 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Work With Us
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Want a personalised audit instead of a template?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Book a free 30-minute strategy call. We will walk through your
              specific situation and give you a prioritised action plan — no
              generic playbooks, just honest advice calibrated to your business.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6 font-semibold">
                <Link href="/book-free-strategy-call">
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 font-semibold"
              >
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
