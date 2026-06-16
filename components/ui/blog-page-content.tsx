"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/lib/site-data";

const coverBySlug: Record<string, string> = {
  "how-to-build-a-digital-growth-engine":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
  "saas-mvp-launch-checklist":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400&auto=format&fit=crop",
  "website-speed-and-conversion":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2400&auto=format&fit=crop",
  "brand-storytelling-that-converts":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
  "crm-automation-playbook":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
  "saas-pricing-page-conversion":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
  "launching-b2b-demand-engine":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
  "design-systems-scale-product-teams":
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2400&auto=format&fit=crop",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function BlogPageContent() {
  const [activeTopic, setActiveTopic] = useState("Latest");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setIsFiltering(true);
    const timer = window.setTimeout(() => setIsFiltering(false), 220);
    return () => window.clearTimeout(timer);
  }, [activeTopic, query]);

  const topics = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ["Latest", ...unique];
  }, []);

  const filteredPosts = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const topicPass =
        activeTopic === "Latest" || post.category === activeTopic;
      const searchPass =
        lower.length === 0 ||
        post.title.toLowerCase().includes(lower) ||
        post.excerpt.toLowerCase().includes(lower) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lower));
      return topicPass && searchPass;
    });
  }, [activeTopic, query]);

  const featured = filteredPosts[0];
  const spotlight = filteredPosts.slice(1, 3);
  const feed = filteredPosts.slice(3, 3 + visibleCount);
  const hasMore = filteredPosts.length > 3 + visibleCount;

  const reveal = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

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
            Sterlixit Journal
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Ideas, systems, and digital execution playbooks.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A Notion-inspired editorial experience rebuilt in Sterlixit style
            for operators, founders, and growth teams.
          </p>

          <div className="mt-8 rounded-2xl border border-border/60 bg-card p-3 shadow-[0_14px_44px_rgba(15,23,42,0.08)]">
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => {
                    setActiveTopic(topic);
                    setVisibleCount(6);
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.98]",
                    activeTopic === topic
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-background text-foreground hover:border-primary/50 hover:text-primary",
                  )}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-xl border border-border/70 bg-background px-3 py-2">
              <Search className="size-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search by title, excerpt, or tag"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
        className="bg-background py-12 md:py-14"
      >
        <div className="mx-auto grid w-full max-w-305 gap-4 px-6 md:grid-cols-[1.3fr_0.7fr] md:px-10">
          <AnimatePresence mode="wait">
            {isFiltering ? (
              <motion.div
                key="featured-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="h-68 animate-pulse rounded-xl bg-muted/60" />
              </motion.div>
            ) : featured ? (
              <motion.div
                key={`featured-${featured.slug}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border/60 bg-card"
                >
                  <div
                    className="h-68 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.7)),url(${coverBySlug[featured.slug]})`,
                    }}
                  />
                  <div className="space-y-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      Featured • {featured.category}
                    </p>
                    <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {featured.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(featured.date)} • {featured.author}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="featured-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground"
              >
                No posts found for this topic.
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid gap-4"
          >
            {spotlight.map((post) => (
              <motion.div
                key={post.slug}
                variants={reveal}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border/60 bg-card transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className="h-34 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(2,6,23,0.14),rgba(2,6,23,0.42)),url(${coverBySlug[post.slug]})`,
                    }}
                  />
                  <div className="space-y-2 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {post.category}
                    </p>
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        className="bg-background pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Latest Stories
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Explore every article
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {filteredPosts.length} results
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isFiltering ? (
              <motion.div
                key="feed-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4"
              >
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="grid gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 md:grid-cols-[0.34fr_0.66fr]"
                  >
                    <div className="h-34 animate-pulse rounded-xl bg-muted/60 md:h-full" />
                    <div className="space-y-3 py-1">
                      <div className="h-4 w-2/5 animate-pulse rounded bg-muted/60" />
                      <div className="h-6 w-4/5 animate-pulse rounded bg-muted/60" />
                      <div className="h-4 w-full animate-pulse rounded bg-muted/60" />
                      <div className="h-4 w-3/4 animate-pulse rounded bg-muted/60" />
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`feed-${activeTopic}-${query}-${visibleCount}`}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="grid gap-4"
              >
                {feed.map((post) => (
                  <motion.div
                    key={post.slug}
                    variants={reveal}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 md:grid-cols-[0.34fr_0.66fr]"
                    >
                      <div
                        className="h-34 rounded-xl bg-cover bg-center md:h-full"
                        style={{
                          backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.44)),url(${coverBySlug[post.slug]})`,
                        }}
                      />
                      <div className="space-y-3 py-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 font-medium text-primary">
                            {post.category}
                          </span>
                          <span>{formatDate(post.date)}</span>
                          <span>{post.author}</span>
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                          {post.title}
                        </h3>
                        <p className="text-sm leading-7 text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-sm font-semibold text-primary">
                          Read article
                          <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => setVisibleCount((value) => value + 6)}
                className="rounded-full px-7"
              >
                Load more stories
              </Button>
            </div>
          )}
        </div>
      </motion.section>

      <SiteFooter />
    </main>
  );
}
