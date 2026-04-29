"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import type { BlogPost } from "@/lib/site-data";

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
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

const offerBySlug: Record<
  string,
  {
    heading: string;
    description: string;
    subscribeCta: string;
    directCtaLabel: string;
    directCtaHref: string;
  }
> = {
  "how-to-build-a-digital-growth-engine": {
    heading: "Get the 90-Day Growth Engine Blueprint",
    description:
      "Receive a concise execution template to align strategy, website, and demand generation in one operating system.",
    subscribeCta: "Send Me the Blueprint",
    directCtaLabel: "Book Growth Strategy Call",
    directCtaHref: "/book-free-strategy-call",
  },
  "saas-mvp-launch-checklist": {
    heading: "Get the SaaS MVP Launch Checklist PDF",
    description:
      "Use our founder-ready checklist for pre-launch QA, activation flow, and release confidence.",
    subscribeCta: "Send MVP Checklist",
    directCtaLabel: "Book MVP Planning Session",
    directCtaHref: "/book-free-strategy-call",
  },
  "website-speed-and-conversion": {
    heading: "Claim a Free Speed-to-Conversion Audit",
    description:
      "We will share the top friction points likely slowing your pages and hurting conversion opportunities.",
    subscribeCta: "Get Audit Insights",
    directCtaLabel: "Request Performance Review",
    directCtaHref: "/request-proposal",
  },
  "brand-storytelling-that-converts": {
    heading: "Get the Brand Story Framework That Converts",
    description:
      "A practical template to turn your brand narrative into a consistent story that builds trust and drives conversions across every channel.",
    subscribeCta: "Send Me the Framework",
    directCtaLabel: "Book Brand Strategy Session",
    directCtaHref: "/book-free-strategy-call",
  },
  "crm-automation-playbook": {
    heading: "Download the CRM Automation Playbook",
    description:
      "Step-by-step automation sequences for lead scoring, follow-up workflows, and deal pipeline management — ready to deploy in your CRM.",
    subscribeCta: "Send Me the Playbook",
    directCtaLabel: "Book Operations Audit",
    directCtaHref: "/book-free-strategy-call",
  },
  "saas-pricing-page-conversion": {
    heading: "Get the SaaS Pricing Page Conversion Kit",
    description:
      "Copy templates, pricing psychology frameworks, and A/B test ideas to turn your pricing page into your highest-converting asset.",
    subscribeCta: "Send Me the Kit",
    directCtaLabel: "Book Conversion Review",
    directCtaHref: "/request-proposal",
  },
  "launching-b2b-demand-engine": {
    heading: "Get the B2B Demand Engine Launch Roadmap",
    description:
      "A structured 12-week roadmap for building a sustainable demand generation system — from ICP definition to pipeline attribution.",
    subscribeCta: "Send Me the Roadmap",
    directCtaLabel: "Book Demand Gen Strategy Call",
    directCtaHref: "/book-free-strategy-call",
  },
  "design-systems-scale-product-teams": {
    heading: "Get the Product Design System Starter Kit",
    description:
      "Core principles, token architecture, and component documentation templates to build a scalable design system your entire team can use.",
    subscribeCta: "Send Me the Starter Kit",
    directCtaLabel: "Book Product Design Review",
    directCtaHref: "/request-proposal",
  },
};

export function BlogDetailContent({
  post,
  related,
  readTime,
}: {
  post: BlogPost;
  related: BlogPost[];
  readTime: number;
}) {
  const articleRef = useRef<HTMLElement | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");
  const popupShownRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start 70%", "end 35%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  const offer = offerBySlug[post.slug] ?? {
    heading: "Get a Custom Growth Playbook for Your Business",
    description:
      "Subscribe for practical frameworks and implementation-ready templates from the Sterlixit team.",
    subscribeCta: "Get Free Playbook",
    directCtaLabel: "Book Strategy Call",
    directCtaHref: "/book-free-strategy-call",
  };

  const popupStorageKey = `sterlixit-blog-offer-${post.slug}`;

  const openPopupOnce = () => {
    if (popupShownRef.current) return;
    popupShownRef.current = true;
    setPopupOpen(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(popupStorageKey, "shown");
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyShown = sessionStorage.getItem(popupStorageKey) === "shown";
    if (alreadyShown) {
      popupShownRef.current = true;
      return;
    }

    const timer = window.setTimeout(() => openPopupOnce(), 15000);

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) openPopupOnce();
    };

    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [popupStorageKey]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.45) openPopupOnce();
  });

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: `blog_offer_popup_${post.slug}`,
          tags: ["blog", post.slug, post.category.toLowerCase()],
        }),
      });

      if (!response.ok) throw new Error("Newsletter subscription failed");

      setSubmitState("done");
      setEmail("");
      window.setTimeout(() => setPopupOpen(false), 1200);
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-60 h-1 origin-left bg-primary"
        style={{ scaleX: progress }}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-18 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-primary"
            >
              <ArrowRight className="mr-2 size-4 rotate-180" />
              Back to blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
          >
            <span className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 font-medium text-primary">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{readTime} min read</span>
            <span>By {post.author}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
            className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
            className="mt-8 h-70 rounded-2xl border border-border/60 bg-cover bg-center shadow-[0_22px_64px_rgba(15,23,42,0.1)] md:h-88"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.16),rgba(15,23,42,0.5)),url(${coverBySlug[post.slug]})`,
            }}
          />
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-305 gap-8 px-6 md:grid-cols-[0.7fr_0.3fr] md:px-10">
          <article ref={articleRef} className="space-y-7">
            {post.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.38,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="text-base leading-8 text-foreground/90"
              >
                {paragraph}
              </motion.p>
            ))}
          </article>

          <aside className="space-y-4 md:sticky md:top-24 md:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Topics
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35, delay: 0.06, ease: "easeOut" }}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Share
              </p>
              <div className="mt-3 grid gap-2 text-sm text-foreground">
                <span>LinkedIn</span>
                <span>X</span>
                <span>Facebook</span>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className="bg-background pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Related stories
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.34,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/blog/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35"
                >
                  <div
                    className="h-36 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.12),rgba(15,23,42,0.46)),url(${coverBySlug[item.slug]})`,
                    }}
                  />
                  <div className="space-y-2 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {item.category}
                    </p>
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
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
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-7"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Want more strategic insights like this?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Subscribe for new playbooks on growth systems, SaaS execution, and
              digital product strategy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6 font-semibold">
                <Link href="/contact">Subscribe to Insights</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 font-semibold"
              >
                <Link href="/book-free-strategy-call">Book Strategy Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />

      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="max-w-2xl border-border/70 bg-card p-0 overflow-hidden">
          <div className="grid md:grid-cols-[1fr_220px]">
            <div className="bg-[linear-gradient(140deg,rgba(79,70,229,0.16),rgba(59,130,246,0.08),rgba(15,23,42,0.02))] p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Exclusive Reader Offer
              </p>
              <DialogHeader className="mt-2 space-y-2 text-left">
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {offer.heading}
                </DialogTitle>
                <DialogDescription className="text-sm leading-7 text-muted-foreground">
                  {offer.description}
                </DialogDescription>
              </DialogHeader>

              <form className="mt-5 space-y-3" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="bg-background"
                />
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="rounded-full px-5 font-semibold"
                  >
                    {submitState === "loading"
                      ? "Submitting..."
                      : offer.subscribeCta}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-5 font-semibold"
                  >
                    <Link href={offer.directCtaHref}>
                      {offer.directCtaLabel}
                    </Link>
                  </Button>
                </div>

                {submitState === "done" ? (
                  <p className="text-sm text-emerald-600">
                    Great. Check your inbox for the next step.
                  </p>
                ) : null}
                {submitState === "error" ? (
                  <p className="text-sm text-destructive">
                    Could not submit right now. Please try again.
                  </p>
                ) : null}
              </form>
            </div>

            <div
              className="relative hidden overflow-hidden md:block"
              style={{
                backgroundImage: `url(${coverBySlug[post.slug] ?? coverBySlug["how-to-build-a-digital-growth-engine"]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-black/10 to-black/50" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
