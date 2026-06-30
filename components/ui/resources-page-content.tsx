"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { cn } from "@/lib/utils";
import {
  CATEGORIES,
  type Resource,
  resourceHref,
  resources,
} from "@/lib/resources";

// ─── Resource card ──────────────────────────────────────────────────────────

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
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
              <Link
                href={resourceHref(resource)}
                className="transition-colors hover:text-primary"
              >
                {resource.title}
              </Link>
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

        {/* CTA — a real, crawlable link to the resource's landing page (D-04),
            replacing the old JS-only form-submit button. */}
        <div className="mt-auto pt-5">
          <Button asChild className="w-full rounded-full font-semibold">
            <Link href={resourceHref(resource)}>
              {resource.ctaLabel}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
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
              <div className="mt-6">
                <Button asChild className="rounded-full px-6 font-semibold">
                  <Link href={resourceHref(featured)}>
                    {featured.ctaLabel}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
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
