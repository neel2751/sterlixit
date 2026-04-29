"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const AUTO_PLAY_DURATION = 6000;

const investmentModels = [
  {
    key: "launch",
    id: "01",
    label: "The Project Launch",
    subtitle: "Fixed-scope builds for high-impact market entry.",
    bestFor: "Fixed-scope builds — Logo, Website, MVP",
    investment: "One-time milestone-based payments",
    focus: "Speed to market and high-impact launch",
    outcomes: [
      "Clear scope and implementation milestones",
      "Fast execution with founder-level oversight",
      "Launch-ready delivery with handover documentation",
    ],
  },
  {
    key: "retainer",
    id: "02",
    label: "The Growth Retainer",
    subtitle: "Monthly partnership for continuous scaling and optimisation.",
    bestFor: "Ongoing Marketing, SEO, and Maintenance",
    investment: "Monthly subscription / retainer",
    focus: "Data-driven scaling and uptime",
    outcomes: [
      "Continuous optimisation across channels and product",
      "Performance reporting tied to business KPIs",
      "SLA-backed maintenance and iterative improvements",
    ],
  },
  {
    key: "team",
    id: "03",
    label: "Dedicated Product Team",
    subtitle: "Enterprise SaaS partnership with full technical leadership.",
    bestFor: "Scaling Custom SaaS or Enterprise IT",
    investment: "Quarterly / Annual strategic partnership",
    focus: "Innovation, API development, and feature velocity",
    outcomes: [
      "Cross-functional squad aligned to your roadmap",
      "Multi-tenancy, integration, and architecture expansion",
      "Continuous product evolution with senior technical leadership",
    ],
  },
];

export function AnimatedInvestmentTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % investmentModels.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + investmentModels.length) % investmentModels.length,
    );
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const active = investmentModels[activeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
      {/* Left column: tab list */}
      <div className="flex flex-col pl-4">
        {investmentModels.map((model, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={model.key}
              onClick={() => handleTabClick(index)}
              className={cn(
                "group relative flex items-start gap-5 py-7 text-left transition-all duration-500 border-t border-border/50 first:border-0",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/50 hover:text-muted-foreground",
              )}
            >
              {/* Vertical progress indicator */}
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-border/40">
                {isActive && (
                  <motion.div
                    key={`progress-${index}-${isPaused}`}
                    className="absolute top-0 left-0 w-full bg-primary origin-top"
                    initial={{ height: "0%" }}
                    animate={isPaused ? { height: "0%" } : { height: "100%" }}
                    transition={{
                      duration: AUTO_PLAY_DURATION / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </div>

              <span className="text-[10px] font-medium tabular-nums text-primary/40 uppercase tracking-[0.25em] mt-1.5">
                {model.id}
              </span>

              <div className="flex-1 min-w-0">
                <span
                  className={cn(
                    "text-xl md:text-2xl lg:text-[1.65rem] font-normal tracking-tight transition-colors duration-500 block leading-snug",
                    isActive ? "text-foreground" : "",
                  )}
                >
                  {model.label}
                </span>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden text-sm text-muted-foreground mt-2 pr-2 pb-1 leading-relaxed"
                    >
                      {model.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right column: content panel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative min-h-105 rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-primary/4 to-transparent overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, y: direction >= 0 ? 18 : -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction >= 0 ? -18 : 18 }}
              transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
              className="p-7 md:p-9"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55 mb-2">
                Best For
              </div>
              <p className="text-lg font-semibold text-foreground md:text-xl leading-snug">
                {active.bestFor}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-primary/15 bg-background/70 p-4">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary/50 mb-2">
                    Investment
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {active.investment}
                  </div>
                </div>
                <div className="rounded-xl border border-primary/15 bg-background/70 p-4">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary/50 mb-2">
                    Focus
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {active.focus}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {active.outcomes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next nav */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            {investmentModels.map((_, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === activeIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-border/60 hover:bg-border",
                )}
                aria-label={`Go to model ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-border/60 bg-background/85 flex items-center justify-center text-muted-foreground hover:bg-primary/8 hover:border-primary/30 hover:text-foreground transition-all active:scale-90"
              aria-label="Previous model"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-border/60 bg-background/85 flex items-center justify-center text-muted-foreground hover:bg-primary/8 hover:border-primary/30 hover:text-foreground transition-all active:scale-90"
              aria-label="Next model"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
