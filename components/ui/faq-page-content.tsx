"use client";

import Link from "next/link";
import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Gauge,
  HelpCircle,
  Layers,
  MessageCircle,
  Megaphone,
  Palette,
  Search,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { cn } from "@/lib/utils";

// ─── FAQ data ────────────────────────────────────────────────────────────────

type FaqItem = { q: string; a: string };
type FaqCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  items: FaqItem[];
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    items: [
      {
        q: "What does Sterlixit do?",
        a: "Sterlixit is a full-service digital agency focused on helping businesses grow through strategy, design, development, and marketing. We work with startups, scale-ups, and established businesses to build digital products and systems that generate measurable results.",
      },
      {
        q: "Who do you typically work with?",
        a: "Our clients range from early-stage founders launching their first product to established SMEs looking to modernise their digital presence and operations. We have deep experience in SaaS, real estate, construction, professional services, e-commerce, and education.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. We work with clients across the UK, Europe, the Middle East, and North America. Our remote-first delivery model means geography is never a barrier to quality collaboration.",
      },
      {
        q: "How do I get started with Sterlixit?",
        a: "The best first step is to book a free 30-minute strategy call. We will learn about your business, goals, and challenges — then recommend the right service or engagement model. There is no obligation and no sales pressure.",
      },
      {
        q: "Can I hire Sterlixit for a single service or do I need a bundle?",
        a: "Both options are available. You can engage us for a single service like a website redesign or a paid ads campaign, or you can work with us across multiple disciplines as a retained growth partner. We tailor every engagement to what actually makes sense for your stage and goals.",
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    icon: Palette,
    items: [
      {
        q: "How long does a branding project take?",
        a: "Most branding engagements are completed within 3–6 weeks, depending on scope. A logo and core identity system typically takes 2–3 weeks. A full brand strategy and visual identity including guidelines, collateral templates, and tone of voice documentation takes 5–8 weeks.",
      },
      {
        q: "What is included in a branding package?",
        a: "Our standard branding packages include brand strategy and positioning, logo suite (primary, secondary, icon), colour palette, typography system, brand guidelines document, and digital asset exports. Extended packages add collateral design, social media templates, and pitch deck design.",
      },
      {
        q: "Do you include brand guidelines?",
        a: "Yes — every branding engagement includes a comprehensive brand guidelines document covering logo usage, colour palette with hex/RGB/CMYK values, typography hierarchy, spacing rules, photography style guidance, and do/don't examples.",
      },
      {
        q: "Can you refresh an existing brand without a full rebrand?",
        a: "Absolutely. Brand evolution — refining rather than replacing — is often the right move for established businesses. We can modernise your logo, tighten your colour palette, update your typography, and bring consistency to all touchpoints without losing your existing brand equity.",
      },
    ],
  },
  {
    id: "web",
    label: "Web & Dev",
    icon: Code2,
    items: [
      {
        q: "Can you redesign an existing website?",
        a: "Yes. Website redesigns are one of our most common engagements. We approach redesigns with a conversion-first mindset — auditing your existing site's performance and UX before designing, so the new site is built on evidence, not assumptions.",
      },
      {
        q: "What technologies do you build with?",
        a: "We build modern, performant websites and applications using Next.js, React, TypeScript, and Tailwind CSS. For CMS-driven sites we use Sanity, Contentful, or WordPress. For e-commerce we work with Shopify and custom solutions. For SaaS products we architect with scalability in mind using Node.js, PostgreSQL, and cloud infrastructure on AWS or Vercel.",
      },
      {
        q: "How long does a website project take?",
        a: "A focused marketing website typically takes 4–8 weeks from kickoff to launch. A full e-commerce build or SaaS product takes 8–20 weeks depending on complexity. We share a detailed project timeline in every proposal so there are no surprises.",
      },
      {
        q: "Will my website be optimised for SEO and performance?",
        a: "Yes. Every website we build is architected for Core Web Vitals performance (targeting 90+ Lighthouse scores), semantic HTML for SEO crawlability, structured data where appropriate, and mobile-first responsive design. SEO-ready does not mean we do your ongoing SEO, but the technical foundations are solid by default.",
      },
      {
        q: "Do you support CMS integrations?",
        a: "Yes. We integrate headless CMS platforms (Sanity, Contentful, Strapi) for content-rich sites, and traditional CMS (WordPress) where client preference or editorial workflow demands it. We also connect with third-party tools like CRMs, analytics platforms, payment gateways, and marketing automation.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    items: [
      {
        q: "What digital marketing services do you offer?",
        a: "We offer SEO strategy and implementation, paid search (Google Ads), paid social (Meta, LinkedIn), email marketing and automation, conversion rate optimisation, and content strategy. We work as a full-service marketing partner or can supplement an in-house team.",
      },
      {
        q: "Do you run paid advertising campaigns?",
        a: "Yes. We manage Google Search, Display, and Shopping campaigns as well as Meta (Facebook/Instagram) and LinkedIn paid campaigns. We handle strategy, creative, audience targeting, bid management, and monthly reporting — giving you full visibility without requiring you to manage the platforms yourself.",
      },
      {
        q: "How soon can I expect results from SEO?",
        a: "SEO is a compounding channel — most clients see meaningful ranking improvements and organic traffic growth within 3–6 months of consistent work. We focus on high-intent keywords first where gains are faster, and build authority over time. We are transparent about timelines and never overpromise.",
      },
      {
        q: "Do you create content as part of your marketing service?",
        a: "Yes. Content creation — including blog articles, landing page copy, email sequences, social media content, and lead magnets — is available as a standalone or as part of a broader marketing retainer. All content is written to rank, convert, and represent your brand accurately.",
      },
    ],
  },
  {
    id: "saas",
    label: "SaaS & Product",
    icon: Layers,
    items: [
      {
        q: "Can you build an MVP quickly?",
        a: "Yes. We use a sprint-based phased delivery model specifically designed for fast MVP delivery. Most MVP builds are scoped for 8–14 weeks, covering discovery, architecture, core feature development, QA, and launch. We prioritise features that validate your core assumption first.",
      },
      {
        q: "Do you handle product design as well as development?",
        a: "Yes. Our product design and engineering teams work together from day one. This means UX research, wireframing, UI design, prototyping, and front-end and back-end development are all coordinated under one roof — reducing handoff friction and accelerating iteration.",
      },
      {
        q: "Can you take over development of an existing product?",
        a: "Yes. We have experience stepping into existing codebases, conducting technical audits, and either completing stalled projects or building on top of existing architectures. We will be honest about what we find in any existing codebase and what the best path forward is.",
      },
      {
        q: "Do you provide post-launch support for SaaS products?",
        a: "Yes. We offer ongoing engineering retainers after launch covering feature development, bug fixes, infrastructure management, performance monitoring, and security updates. Many of our SaaS clients have been with us for multiple years through multiple product iterations.",
      },
    ],
  },
  {
    id: "maintenance",
    label: "Support & Maintenance",
    icon: Wrench,
    items: [
      {
        q: "Do you provide website maintenance and support?",
        a: "Yes. We support websites and platforms across WordPress, Next.js, Shopify, and custom stacks. Coverage can include updates, monitoring, backup oversight, security maintenance, and ongoing technical support depending on what the system actually needs.",
      },
      {
        q: "Do you provide SLAs for maintenance clients?",
        a: "Yes, but SLAs are scoped case by case. We review the platform, business-critical workflows, coverage window, and escalation requirements first, then recommend the right response model rather than publishing a one-size-fits-all SLA table.",
      },
      {
        q: "What is included in your standard maintenance plan?",
        a: "That depends on the environment. A support engagement can include monitoring, updates, backup validation, security maintenance, reporting, minor changes, performance reviews, and incident communication. The exact scope is defined after we understand the system and required level of coverage.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: Gauge,
    items: [
      {
        q: "How is pricing structured?",
        a: "We offer three pricing models: fixed-scope project pricing (you know the total cost upfront), time-and-materials for exploratory or evolving projects, and monthly retainers for ongoing strategy, marketing, and development work. We recommend the model that best matches your risk tolerance and the nature of the work.",
      },
      {
        q: "Do you offer fixed-price packages?",
        a: "Yes. For well-defined scopes — like a branding package, a marketing website, or an SEO audit — we offer fixed-price proposals so you always know exactly what you are paying. No surprises, no scope creep without your agreement.",
      },
      {
        q: "What is your typical project budget range?",
        a: "Project budgets range from around £3,000 for focused deliverables like logo design to £80,000+ for comprehensive SaaS product builds. Most marketing website projects fall between £8,000 and £25,000. We are transparent in our proposals and will always tell you if your budget does not match your goals.",
      },
      {
        q: "Do you require a deposit?",
        a: "Yes. We require a 40% deposit to begin work, with the remaining balance structured across milestones or on project completion depending on the engagement. For ongoing retainers, invoicing is monthly in advance.",
      },
      {
        q: "Can I start with a smaller project to test the relationship?",
        a: "Absolutely. Many of our long-term clients started with a focused audit, a landing page, or a discovery sprint. It is a low-risk way to evaluate our process and communication before committing to a larger engagement. We recommend this approach if you are uncertain.",
      },
    ],
  },
];

// ─── Accordion item ────────────────────────────────────────────────────────

function FaqAccordionItem({
  item,
  value,
  index,
}: {
  item: FaqItem;
  value: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.34, delay: index * 0.04, ease: "easeOut" }}
    >
      <AccordionPrimitive.Item
        value={value}
        className="group border-b border-border/60 last:border-b-0"
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger className="flex flex-1 items-start justify-between gap-4 py-5 text-left text-base font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:text-primary [&[data-state=open]>span>svg]:rotate-180">
            {item.q}
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background transition-colors group-hover:border-primary/50 group-hover:bg-primary/8">
              <ChevronDown className="size-3.5 text-muted-foreground transition-transform duration-300 group-hover:text-primary" />
            </span>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <p className="pb-5 leading-7 text-muted-foreground">{item.a}</p>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────

export function FaqPageContent() {
  const [activeId, setActiveId] = useState("general");
  const [query, setQuery] = useState("");

  const activeCategory =
    FAQ_CATEGORIES.find((c) => c.id === activeId) ?? FAQ_CATEGORIES[0];

  const filteredItems =
    query.trim().length === 0
      ? activeCategory.items
      : FAQ_CATEGORIES.flatMap((cat) =>
          cat.items.filter(
            (item) =>
              item.q.toLowerCase().includes(query.trim().toLowerCase()) ||
              item.a.toLowerCase().includes(query.trim().toLowerCase()),
          ),
        );

  const isSearching = query.trim().length > 0;
  const totalCount = FAQ_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

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
            Knowledge Base
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Frequently asked questions.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Answers to the most common questions about Sterlixit's services,
            process, timelines, and pricing. Can't find what you need? Just ask.
          </p>

          {/* Stats strip */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground">{totalCount}</p>
              <p className="text-sm text-muted-foreground">
                Questions answered
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {FAQ_CATEGORIES.length}
              </p>
              <p className="text-sm text-muted-foreground">Topic categories</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">30 min</p>
              <p className="text-sm text-muted-foreground">
                Free strategy call
              </p>
            </div>
          </div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14, ease: "easeOut" }}
            className="mt-8 flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.07)] md:max-w-lg"
          >
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search all questions…"
              className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Body: sidebar + accordions ──────────────────────────── */}
      <section className="bg-background py-14 md:py-18">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="md:grid md:grid-cols-[220px_1fr] md:gap-10 lg:grid-cols-[260px_1fr]">
            {/* Category sidebar */}
            <aside className="mb-8 md:mb-0">
              <motion.nav
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="md:sticky md:top-24 md:space-y-1"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Topics
                </p>

                {/* Mobile: scrollable pill row */}
                <div className="flex flex-wrap gap-2 md:hidden">
                  {FAQ_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeId === cat.id && !isSearching;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setActiveId(cat.id);
                          setQuery("");
                        }}
                        className={cn(
                          "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border/70 bg-background text-foreground hover:border-primary/50 hover:text-primary",
                        )}
                      >
                        <Icon className="size-3.5" />
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Desktop: stacked list */}
                <div className="hidden md:flex md:flex-col md:gap-0.5">
                  {FAQ_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeId === cat.id && !isSearching;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setActiveId(cat.id);
                          setQuery("");
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80 hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-7 items-center justify-center rounded-lg border",
                            isActive
                              ? "border-primary/30 bg-primary/8 text-primary"
                              : "border-border/60 bg-background text-muted-foreground",
                          )}
                        >
                          <Icon className="size-3.5" />
                        </span>
                        {cat.label}
                        <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                          {cat.items.length}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* CTA card */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.22, ease: "easeOut" }}
                  className="mt-6 hidden rounded-2xl border border-border/60 bg-card p-4 md:block"
                >
                  <div className="flex size-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                    <MessageCircle className="size-4 text-primary" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    Still have questions?
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Book a free call and we will walk through your situation
                    personally.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-3 w-full rounded-full text-xs font-semibold"
                  >
                    <Link href="/book-free-strategy-call">Book a Call</Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </aside>

            {/* Accordion panel */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isSearching ? `search-${query}` : activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Section header */}
                  {!isSearching && (
                    <div className="mb-6 flex items-center gap-3 border-b border-border/60 pb-5">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                        {(() => {
                          const Icon = activeCategory.icon;
                          return <Icon className="size-5 text-primary" />;
                        })()}
                      </span>
                      <div>
                        <h2 className="text-xl font-bold text-foreground">
                          {activeCategory.label}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {activeCategory.items.length} question
                          {activeCategory.items.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  )}

                  {isSearching && (
                    <div className="mb-6 border-b border-border/60 pb-5">
                      <h2 className="text-xl font-bold text-foreground">
                        Search results
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {filteredItems.length} result
                        {filteredItems.length !== 1 ? "s" : ""} for &ldquo;
                        {query}&rdquo;
                      </p>
                    </div>
                  )}

                  {filteredItems.length > 0 ? (
                    <AccordionPrimitive.Root
                      type="single"
                      collapsible
                      className="rounded-2xl border border-border/60 bg-card px-6"
                    >
                      {filteredItems.map((item, index) => (
                        <FaqAccordionItem
                          key={item.q}
                          item={item}
                          value={`item-${index}`}
                          index={index}
                        />
                      ))}
                    </AccordionPrimitive.Root>
                  ) : (
                    <div className="rounded-2xl border border-border/60 bg-card px-6 py-10 text-center">
                      <p className="text-sm text-muted-foreground">
                        No questions match your search. Try different keywords
                        or browse by topic.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 rounded-full"
                        onClick={() => setQuery("")}
                      >
                        Clear search
                      </Button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────────── */}
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
                Let's talk
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Didn't find the answer you were looking for?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                Book a free 30-minute strategy call and we will answer your
                specific questions, walk through your goals, and tell you
                exactly how we can help — no generic pitches, no pressure.
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
                  <Link href="/contact">Send Us a Message</Link>
                </Button>
              </div>
            </div>

            {/* Decorative right panel */}
            <div className="hidden items-center justify-center border-l border-border/60 bg-primary/5 px-10 md:flex">
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                  <MessageCircle className="size-8 text-primary" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Free consultation
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  30 minutes, no obligation
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
