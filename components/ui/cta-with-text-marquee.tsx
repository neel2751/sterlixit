"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";

interface VerticalMarqueeProps {
  items: string[];
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function VerticalMarquee({
  items,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 24,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn("group flex flex-col overflow-hidden", className)}
      style={{ "--duration": `${speed}s`, "--gap": "2rem" } as CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 flex-col gap-8 animate-marquee-vertical",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused",
        )}
      >
        {items.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="marquee-item py-2 text-4xl font-light tracking-tight text-white/75 md:text-5xl lg:text-6xl"
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col gap-8 animate-marquee-vertical",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused",
        )}
        aria-hidden="true"
      >
        {items.map((item, idx) => (
          <div
            key={`${item}-clone-${idx}`}
            className="marquee-item py-2 text-4xl font-light tracking-tight text-white/75 md:text-5xl lg:text-6xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Founders & Leadership",
  "Product & Engineering",
  "Growth & Marketing",
  "Ops & Integrations",
  "Security & Compliance",
];

type CtaWithTextMarqueeProps = {
  sectionId?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  marqueeList?: string[];
};

export function CtaWithTextMarquee({
  sectionId = "discovery-call",
  badgeText = "Discovery Call",
  title = "Build With One Partner,\nScale Across Every Stage.",
  description = "Start with a 15-minute strategy call. We map your roadmap, identify technical risk, and align the right investment model for your growth stage.",
  primaryLabel = "Book a Strategy Session",
  primaryHref = "/book-free-strategy-call",
  secondaryLabel = "Request a Proposal",
  secondaryHref = "/request-proposal",
  marqueeList = marqueeItems,
}: CtaWithTextMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [showStepTwo, setShowStepTwo] = useState(false);

  const titleLines = title.split("\n");

  const nextSlotText = useMemo(() => {
    const now = new Date();
    const slot = new Date(now);
    slot.setDate(slot.getDate() + 1);
    slot.setHours(10, 30, 0, 0);

    return slot.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }, []);

  const prefilledHref = useMemo(() => {
    const params = new URLSearchParams();
    if (fullName.trim()) params.set("name", fullName.trim());
    if (email.trim()) params.set("email", email.trim());
    const query = params.toString();
    return query ? `${primaryHref}?${query}` : primaryHref;
  }, [primaryHref, fullName, email]);

  const isStepOneValid =
    fullName.trim().length >= 2 && /.+@.+\..+/.test(email.trim());

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    let frame = 0;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalized = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalized * 0.72;
        (item as HTMLElement).style.opacity = opacity.toString();
      });

      frame = requestAnimationFrame(updateOpacity);
    };

    frame = requestAnimationFrame(updateOpacity);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let hasFocused = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasFocused) return;
        const entry = entries[0];
        if (entry.isIntersecting && window.innerWidth >= 1024) {
          nameInputRef.current?.focus();
          hasFocused = true;
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="relative overflow-hidden bg-neutral-950 py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[34vh] w-[34vw] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.18)_0%,transparent_68%)]" />
        <div className="absolute bottom-0 right-0 h-[38vh] w-[38vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.16)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
              <CalendarClock className="size-3.5" />
              {badgeText}
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {titleLines.map((line, i) => (
                <span key={`${line}-${i}`}>
                  {line}
                  {i !== titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <p className="text-base leading-8 text-neutral-300 md:text-lg">
              {description}
            </p>

            <div className="grid gap-2.5 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Clock3 className="size-3.5" />
                  Response
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Within 24 Hours
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Users className="size-3.5" />
                  Session
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Founder-Led Call
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-white/80">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <ShieldCheck className="size-3.5" />
                  NDA Ready
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Private by Default
                </div>
              </div>
            </div>

            {/* <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <div className="flex -space-x-2">
                <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] font-semibold">
                  AS
                </span>
                <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] font-semibold">
                  RK
                </span>
                <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] font-semibold">
                  VP
                </span>
              </div>
              <div className="text-xs uppercase tracking-[0.14em] text-white/55">
                Trusted by 120+ growth teams and founders
              </div>
            </div> */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  Quick Start
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-primary/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                  <Clock3 className="size-3" />
                  Next Slot: {nextSlotText}
                </div>
              </div>

              {!showStepTwo ? (
                <div className="animate-in fade-in-0 zoom-in-95 duration-300 space-y-3">
                  <input
                    ref={nameInputRef}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="Your name"
                    className="h-11 w-full rounded-xl border border-white/15 bg-white/6 px-3.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-primary/45"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Work email"
                    className="h-11 w-full rounded-xl border border-white/15 bg-white/6 px-3.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-primary/45"
                  />
                  <Button
                    type="button"
                    onClick={() => setShowStepTwo(true)}
                    disabled={!isStepOneValid}
                    className="w-full rounded-xl bg-linear-to-r from-primary to-primary/80 text-primary-foreground disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Continue to Booking
                  </Button>
                </div>
              ) : (
                <div className="animate-in fade-in-0 zoom-in-95 duration-300 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/6 px-3.5 py-3 text-sm text-white/85">
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <CheckCircle2 className="size-4" />
                      Details captured for faster scheduling.
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      Name: {fullName || "-"} | Email: {email || "-"}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-xl bg-linear-to-r from-primary to-primary/80 text-primary-foreground"
                    >
                      <Link href={prefilledHref}>Confirm & Book</Link>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowStepTwo(false)}
                      className="rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10"
                    >
                      Edit Details
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-full border border-primary/45 bg-linear-to-r from-primary to-primary/80 px-8 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]"
              >
                <Link href={prefilledHref}>
                  <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                  {primaryLabel}
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>

            <p className="text-xs uppercase tracking-[0.16em] text-white/45">
              Limited founder slots each week. Reserve yours before calendar
              closes.
            </p>
          </div>

          <div ref={marqueeRef} className="relative h-105 md:h-130 lg:h-155">
            <VerticalMarquee
              items={marqueeList}
              pauseOnHover
              speed={22}
              className="h-full"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-linear-to-b from-neutral-950 via-neutral-950/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

type MobileStickyInvestmentCtaProps = {
  label?: string;
  href?: string;
};

export function MobileStickyInvestmentCta({
  label = "Book Strategy Session",
  href = "#discovery-call",
}: MobileStickyInvestmentCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral-950/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            Limited Founder Slots
          </div>
          <div className="truncate text-xs text-white/80">
            Get your roadmap in 15 minutes
          </div>
        </div>
        <Button
          asChild
          size="sm"
          className="rounded-full bg-linear-to-r from-primary to-primary/80 text-primary-foreground"
        >
          <Link href={href}>{label}</Link>
        </Button>
      </div>
    </div>
  );
}
