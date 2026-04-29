"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export type GlassMetric = {
  label: string;
  value: string;
  delta?: string;
  description?: string;
};

function getDeltaStyle(delta?: string) {
  if (!delta) {
    return "border-primary/30 bg-primary/10 text-primary";
  }

  const normalized = delta.trim();
  const isNegative = normalized.startsWith("-");

  return isNegative
    ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300"
    : "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
}

type GlassmorphismMinimalMetricsBlockProps = {
  badgeText?: string;
  heading?: string;
  description?: string;
  metrics?: GlassMetric[];
  footerLabel?: string;
  footerDescription?: string;
  ctaText?: string;
};

const defaultMetrics: GlassMetric[] = [
  {
    label: "Activated teams",
    value: "1.2k",
    delta: "+18%",
    description: "teams shipping faster",
  },
  {
    label: "Daily automations",
    value: "58",
    delta: "+42%",
    description: "manual tasks replaced",
  },
  {
    label: "Customer NPS",
    value: "71",
    delta: "+9",
    description: "in just three sprints",
  },
  {
    label: "Launch lead time",
    value: "6d",
    delta: "-3d",
    description: "from concept to production",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function GlassmorphismMinimalMetricsBlock({
  badgeText = "realtime insights",
  heading = "A snapshot of momentum that refuses to clutter the dashboard",
  description = "Glassy panels surface just the signal, highlighting the metrics that matter while the rest stays gracefully out of the way.",
  metrics = defaultMetrics,
  footerLabel = "concierge insight desk",
  footerDescription = "Curated weekly digests keep leaders aligned without dashboards.",
  ctaText = "Request a sample",
}: GlassmorphismMinimalMetricsBlockProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-95 w-95 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-105 w-105 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.12),rgba(15,23,42,0)_55%)]" />
      </div>

      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur"
          >
            <Zap className="h-3.5 w-3.5" />
            {badgeText}
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/55 p-8 backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-transparent" />
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                      {metric.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-primary/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                  </div>
                  <div className="flex flex-wrap items-end gap-3">
                    <span className="text-5xl font-semibold tracking-tight text-foreground">
                      {metric.value}
                    </span>
                    {metric.delta ? (
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur ${getDeltaStyle(metric.delta)}`}
                      >
                        {metric.delta}
                      </span>
                    ) : null}
                  </div>
                  {metric.description ? (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {metric.description}
                    </p>
                  ) : null}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-primary/30 bg-background/55 px-6 py-6 backdrop-blur-xl md:px-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_15px_40px_rgba(15,23,42,0.25)]">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">
                {footerLabel}
              </p>
              <p className="text-base text-muted-foreground">
                {footerDescription}
              </p>
            </div>
          </div>
          <Link
            href="/book-free-strategy-call"
            className="h-11 flex items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-6 text-sm uppercase tracking-[0.2em] text-primary backdrop-blur hover:bg-primary/15 hover:text-primary"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
