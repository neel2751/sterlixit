"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Quote,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { portfolioItems, testimonials } from "@/lib/site-data";

type ClientStory = {
  title: string;
  client: string;
  href: string;
  quote: string;
  results: string[];
  technologies: string[];
};

const clientStories: ClientStory[] = portfolioItems.slice(0, 6).map((item) => ({
  title: item.title,
  client: item.client,
  href: `/portfolio/${item.slug}`,
  quote: item.testimonial,
  results: item.results,
  technologies: item.technologies,
}));

const trustSignals = [
  {
    title: "Strategic thinking with execution speed",
    copy: "Clients consistently value the combination of clear commercial thinking and fast implementation, without needing to manage multiple vendors.",
  },
  {
    title: "Senior-led collaboration",
    copy: "Engagements stay close to decision-makers. Clients work with experienced operators who can move from high-level strategy into delivery detail quickly.",
  },
  {
    title: "Measured outcomes, not vague promises",
    copy: "The strongest feedback shows up around performance gains, cleaner operations, better lead quality, and faster delivery cycles.",
  },
];

function InitialBadge({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-sm font-bold text-primary">
      {initials}
    </div>
  );
}

export function TestimonialsPageContent() {
  const featured = testimonials[0];

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
            Client Testimonials
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            What clients say after the work ships.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Feedback from founders, operators, and growth teams that partnered
            with Sterlixit across branding, web development, SaaS, and demand
            generation.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground">5.0</p>
              <p className="text-sm text-muted-foreground">
                Average satisfaction signal
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {testimonials.length}+
              </p>
              <p className="text-sm text-muted-foreground">
                Featured written testimonials
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {clientStories.length}
              </p>
              <p className="text-sm text-muted-foreground">
                Linked proof stories
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
                Featured Client Perspective
              </span>
              <div className="mt-5 flex items-center gap-1 text-primary">
                {Array.from({ length: featured.rating }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <InitialBadge name={featured.name} />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {featured.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {featured.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/60 bg-primary/5 p-7 md:border-l md:border-t-0 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Common Themes
              </p>
              <div className="mt-5 space-y-4">
                {trustSignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-card p-4"
                  >
                    <div className="flex size-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                      <BadgeCheck className="size-4 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                ))}
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
                Written Reviews
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Short, direct feedback from active client relationships.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              These are the recurring signals we hear after launches, redesigns,
              growth campaigns, and operational rollouts.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
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
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <InitialBadge name={item.name} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <Quote className="size-5 text-primary/60" />
                </div>
                <div className="mt-4 flex items-center gap-1 text-primary">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
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
                Client Stories
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Proof connected to real delivery outcomes.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Testimonials are more credible when they sit next to the work, the
              results, and the stack choices that produced them.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {clientStories.map((story, index) => (
              <motion.div
                key={story.href}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.36,
                  delay: (index % 2) * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {story.client}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {story.title}
                    </h3>
                  </div>
                  <TrendingUp className="size-5 text-primary/70" />
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  &ldquo;{story.quote}&rdquo;
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {story.results.slice(0, 3).map((result) => (
                    <div
                      key={result}
                      className="rounded-xl border border-border/60 bg-background px-3 py-3 text-xs font-medium text-foreground/85"
                    >
                      {result}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {story.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href={story.href}>
                    View Case Study
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="mx-auto grid w-full max-w-305 gap-4 px-6 md:grid-cols-3 md:px-10">
          {[
            {
              icon: Users,
              title: "Founder and operator confidence",
              copy: "Clients keep highlighting clarity, responsiveness, and the feeling that the team understands the commercial context behind the brief.",
            },
            {
              icon: BadgeCheck,
              title: "Delivery quality that holds up after launch",
              copy: "Feedback does not stop at launch-day excitement. The strongest testimonials are tied to better ongoing performance and smoother operations.",
            },
            {
              icon: TrendingUp,
              title: "Business outcomes over aesthetics alone",
              copy: "Even brand and web projects are remembered because they improved adoption, efficiency, conversion, or strategic confidence.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                  <Icon className="size-4 text-primary" />
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {item.copy}
                </p>
              </motion.div>
            );
          })}
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
                Ready to become the next success story?
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Let&apos;s build something clients talk about for the right
                reasons.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                If you need a sharper website, a SaaS product that actually
                ships, or a growth system that performs beyond the first month,
                we can map the right next step.
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
                  <Link href="/portfolio">See More Case Studies</Link>
                </Button>
              </div>
            </div>

            <div className="hidden items-center justify-center border-l border-border/60 bg-primary/5 px-10 md:flex">
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                  <Quote className="size-8 text-primary" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Client-led proof
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Strategy, delivery, and outcomes aligned
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
