"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Code2,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { publicIntegrationConfig } from "@/lib/integrations";
import {
  ExitIntentDialog,
  LiveChatButton,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import CalForm from "../schedule-form";

// ── DATA ───────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "Sterlixit modernized our web presence and improved how we handle inbound opportunities across the business.",
    company: "CDC Construction",
    logo: "/client/cdc.svg",
  },
  {
    quote:
      "From website build to performance campaigns, execution stayed consistent and aligned with our growth goals.",
    company: "CDC Housing",
    logo: "/client/cdchousing.webp",
  },
  {
    quote:
      "They took us from planning to launch with a clean digital foundation and reliable ongoing technical support.",
    company: "Lomash Wood",
    logo: "/client/Lomashwood.svg",
  },
  {
    quote:
      "The delivery model was practical and fast, and post-launch updates have remained smooth and well managed.",
    company: "Interior Studio",
    logo: "/client/interiorstudio.svg",
  },
];

const SERVICE_TECH: Record<string, string[]> = {
  "custom-saas-it-solutions": [
    "AWS",
    "React.js",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
  ],
  "web-design-development": ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  "digital-marketing": ["Google Ads", "Meta Ads", "HubSpot", "Analytics"],
  "support-maintenance": [
    "CI/CD",
    "Monitoring",
    "Security Audits",
    "Scoped SLA Design",
  ],
  "graphics-branding": ["Figma", "Adobe CC", "Brand Strategy", "Motion Design"],
};

const SERVICE_CAPTION: Record<string, string> = {
  "custom-saas-it-solutions": "Custom SaaS/MVP expertise detected",
  "web-design-development": "Full-stack web development stack activated",
  "digital-marketing": "Performance marketing expertise loaded",
  "support-maintenance": "Support coverage assessment ready",
  "graphics-branding": "Creative & branding toolkit activated",
};

const BUDGET_OPTIONS = [
  { value: "under-5k", label: "< £5k", sub: "Starter / Landing Page" },
  { value: "5k-15k", label: "£5k – £15k", sub: "Growth Builds" },
  { value: "15k-50k", label: "£15k – £50k", sub: "Full-Scale Projects" },
  { value: "50k-plus", label: "£50k+", sub: "Enterprise SaaS" },
];

const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP", sub: "< 1 month" },
  { value: "1-3mo", label: "1–3 months", sub: "Standard timeline" },
  { value: "3-6mo", label: "3–6 months", sub: "Complex projects" },
  { value: "flexible", label: "Flexible", sub: "No rush" },
];

const HEARD_ABOUT_OPTIONS = [
  { value: "google_search", label: "Google Search" },
  { value: "referral", label: "Referral" },
  { value: "social_media", label: "Social Media" },
  { value: "previous_client", label: "Previous Client" },
  { value: "event_networking", label: "Event and Networking" },
  { value: "other", label: "Other" },
];

const ROADMAP = [
  {
    num: "01",
    icon: Mail,
    title: "Your brief lands in founders' inboxes",
    detail:
      "Your message lands directly in our founders' inbox — no ticket queue, no waiting room.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Senior architect reviews your brief, no relay",
    detail:
      "A 10-year senior architect personally reads every brief. No junior relay, ever.",
  },
  {
    num: "03",
    icon: CalendarClock,
    title: "Strategy call invite sent within 24 hours",
    detail:
      "Expect an invite for a 30-minute intro call directly from the founding team.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Brief review and strategy call completed",
    detail:
      "We deliver an investment estimate and clear strategy direction within 48 hours of your call.",
  },
];

// ── ROTATING TESTIMONIALS ──────────────────────────────────────────

function RotatingTestimonials({ className }: { className?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        What clients say
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl border border-border/50 bg-card p-5"
        >
          <p className="text-[13px] leading-[1.7] text-muted-foreground">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-white p-1">
              <Image
                src={t.logo}
                alt={`${t.company} logo`}
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">
                {t.company}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-1.5">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            className="flex h-8 w-8 items-center justify-center rounded-full"
            aria-label={`Show testimonial ${i + 1}`}
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === idx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/35",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── SMART MULTI-STEP FORM ──────────────────────────────────────────

type FormState = {
  service: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  heardAboutUs: string;
  message: string;
};

function SmartContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    service: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    heardAboutUs: "",
    message: "",
  });

  const update = (key: keyof FormState, v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  const techBadges = form.service ? (SERVICE_TECH[form.service] ?? null) : null;
  const techCaption = form.service
    ? (SERVICE_CAPTION[form.service] ?? null)
    : null;

  const canStep1 = form.service !== "";
  const canStep2 = form.budget !== "" && form.timeline !== "";
  const canSubmit =
    form.name.length >= 2 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.length >= 7;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsSubmitting(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "contact_page_smart_form" }),
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const STEPS = [
    "What Are We Building?",
    "Investment & Timeline",
    "Your Details",
  ];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-5 rounded-2xl border border-border/50 bg-card p-10 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="size-7 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Brief received!
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            A senior architect will review your requirements and reach out
            within 24 hours.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/book-free-strategy-call">
            Skip the wait — book now <ArrowRight className="ml-1 size-3.5" />
          </Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
      {/* Step indicator */}
      <div className="border-b border-border/50 bg-muted/30 px-6 py-4">
        <div className="flex items-center gap-2">
          {STEPS.map((label, i) => {
            const n = i + 1;
            const active = step === n;
            const done = step > n;
            return (
              <div key={n} className="flex min-w-0 items-center gap-1.5">
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors",
                    done || active
                      ? "bg-primary text-white"
                      : "bg-border text-muted-foreground",
                  )}
                >
                  {done ? <CheckCircle2 className="size-3.5" /> : n}
                </div>
                <span
                  className={cn(
                    "hidden truncate text-xs font-medium sm:block",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
                {i < 2 && (
                  <div
                    className={cn(
                      "mx-1 h-px w-5 shrink-0",
                      done ? "bg-primary" : "bg-border",
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 md:p-7">
        <AnimatePresence mode="wait">
          {/* ── Step 1 ── */}
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
              className="flex flex-col gap-5"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  What are we building?
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Choose the service that best describes your project.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  {
                    value: "custom-saas-it-solutions",
                    label: "Custom SaaS / MVP",
                  },
                  {
                    value: "web-design-development",
                    label: "Web Development",
                  },
                  { value: "digital-marketing", label: "Digital Marketing" },
                  {
                    value: "support-maintenance",
                    label: "Support & Maintenance",
                  },
                  {
                    value: "graphics-branding",
                    label: "Graphics & Branding",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("service", opt.value)}
                    className={cn(
                      "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all",
                      form.service === opt.value
                        ? "border-primary bg-primary/8 text-primary"
                        : "border-border/60 bg-background text-foreground hover:border-primary/40 hover:bg-muted/40",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Tech badge micro-interaction */}
              <AnimatePresence>
                {techBadges && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3.5">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <Sparkles className="size-3" />
                        {techCaption}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {techBadges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full border border-primary/20 bg-background px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                onClick={() => setStep(2)}
                disabled={!canStep1}
                className="w-full"
              >
                Continue <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </motion.div>
          )}

          {/* ── Step 2 ── */}
          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
              className="flex flex-col gap-5"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  Investment & Timeline
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Help us tailor the right approach for your project.
                </p>
              </div>

              <div>
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Budget Range
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("budget", opt.value)}
                      className={cn(
                        "rounded-lg border px-3 py-3 text-left transition-all",
                        form.budget === opt.value
                          ? "border-primary bg-primary/8"
                          : "border-border/60 bg-background hover:border-primary/40",
                      )}
                    >
                      <p
                        className={cn(
                          "text-sm font-semibold",
                          form.budget === opt.value
                            ? "text-primary"
                            : "text-foreground",
                        )}
                      >
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {opt.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Project Timeline
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {TIMELINE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("timeline", opt.value)}
                      className={cn(
                        "rounded-lg border px-3 py-3 text-left transition-all",
                        form.timeline === opt.value
                          ? "border-primary bg-primary/8"
                          : "border-border/60 bg-background hover:border-primary/40",
                      )}
                    >
                      <p
                        className={cn(
                          "text-sm font-semibold",
                          form.timeline === opt.value
                            ? "text-primary"
                            : "text-foreground",
                        )}
                      >
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {opt.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2.5">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canStep2}
                  className="flex-1"
                >
                  Continue <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3 ── */}
          {step === 3 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">
                    Your Details
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    We&apos;ll send the strategy call invite here.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Input
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Work Email *"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  <Input
                    placeholder="Phone Number *"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  <Input
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                  />
                  <select
                    value={form.heardAboutUs}
                    onChange={(e) => update("heardAboutUs", e.target.value)}
                    className="border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
                  >
                    <option value="">
                      How did you hear about us? (optional)
                    </option>
                    {HEARD_ABOUT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Textarea
                  placeholder="Briefly describe your project or goals..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />

                <div className="flex gap-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Brief <ArrowRight className="ml-1.5 size-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── HERO SECTION ───────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.18)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.10)_0%,transparent_60%)]" />
      </div>

      {/* Bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)]" />

      <div className="relative mx-auto w-full max-w-305 px-6 py-24 md:px-10 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left: Headline */}
          <motion.div
            className="flex flex-col gap-7 lg:col-span-7"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01 }}
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
              <Zap className="size-3" />
              Strategic Gateway
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.4rem]">
                Let&apos;s Engineer Your{" "}
                <span className="bg-linear-to-r from-white to-white/55 bg-clip-text text-transparent">
                  Next Big Move.
                </span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-neutral-400 md:text-[17px]">
                Whether you&apos;re looking for a full-scale SaaS build like
                BrickJourney or a high-performance brand overhaul, you&apos;ve
                come to the right place. Speak directly with our founders, each
                with over 10 years&apos; experience.
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: Users, label: "10+ Years' Experience" },
                { icon: Clock, label: "24h Response" },
                { icon: Shield, label: "NDA Ready" },
                { icon: Code2, label: "10+ Projects Delivered" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                >
                  <Icon className="size-3 text-white/50" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full px-7 font-semibold"
              >
                <Link href="#contact-form">
                  Start the Conversation <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white/70 hover:bg-white/8 hover:text-white"
              >
                <Link href="/book-free-strategy-call">Skip to Calendar →</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Founders direct card */}
          <motion.div
            className="lg:col-span-5"
            initial={false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.01 }}
          >
            <div className="rounded-2xl border border-white/12 bg-white/5 p-7 backdrop-blur-sm">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
                Talk directly with our founders
              </p>
              <h2 className="text-xl font-bold text-white">No Gatekeepers.</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Every initial conversation is with a senior partner who has 10+
                years building production-grade software and growth systems.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={`mailto:${publicIntegrationConfig.contactPageEmail}`}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/8"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {publicIntegrationConfig.contactPageEmail}
                </a>
                <a
                  href={`tel:${publicIntegrationConfig.contactPagePhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/8"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {publicIntegrationConfig.contactPagePhone}
                </a>
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[11px] font-medium text-white/65">
                  or
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <Button
                asChild
                className="w-full rounded-full font-semibold"
                size="lg"
              >
                <Link href="/book-free-strategy-call">
                  <CalendarClock className="mr-2 size-4" />
                  Book a Discovery Call
                </Link>
              </Button>

              {/* Founder avatars */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["SA", "NP"].map((init, i) => (
                    <div
                      key={init}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-800 bg-primary text-[10px] font-bold text-white"
                      style={{ zIndex: 2 - i }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-neutral-400">
                  Our founding team is ready for your brief
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── FORM SECTION ───────────────────────────────────────────────────

function FormSection() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section id="contact-form" className="bg-background py-24 md:py-28">
      <div className="mx-auto w-full max-w-305 px-6 md:px-10">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="size-3" />
            Smart Intake Form
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tell Us About Your Project
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Three quick steps. No endless fields. Just what we need to tailor
            the right strategy for your goals.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Form column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SmartContactForm />

            {/* Calendly toggle */}
            <div
              id="calendly"
              className="rounded-xl border border-border/50 bg-muted/30 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Skip the form and book directly
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Choose a slot from our live calendar — no form required.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCalendly((v) => !v)}
                  className="shrink-0"
                >
                  {showCalendly ? "Hide Calendar" : "Open Calendar"}
                </Button>
              </div>

              <AnimatePresence>
                {showCalendly && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 overflow-hidden rounded-lg border border-border/50">
                      <CalForm />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* No Gatekeepers card */}
            <div className="rounded-2xl bg-neutral-950 p-6 ring-1 ring-white/10">
              <div className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                Our Promise
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                No Gatekeepers. Just Experts.
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-neutral-400">
                At Sterlixit, we don&apos;t pass you off to a junior sales rep.
                Every initial strategy session is handled personally by our
                senior architects who have 10+ years of industry experience.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                {[
                  { icon: Shield, text: "10+ years building production SaaS" },
                  { icon: Users, text: "10+ clients in various industries" },
                  {
                    icon: Zap,
                    text: "End-to-end: strategy → launch → scale",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-sm text-neutral-300"
                  >
                    <Icon className="size-4 shrink-0 text-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Rotating testimonials */}
            <RotatingTestimonials />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PRESENCE SECTION ───────────────────────────────────────────────

function PresenceSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-x-0 top-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_100%)]" />

      <div className="mx-auto w-full max-w-305 px-6 py-24 md:px-10 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Global Presence & Availability
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-neutral-400">
            We operate across time zones with async-first collaboration and the
            support for critical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Contact info */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            {[
              {
                icon: Mail,
                label: "Email",
                val: publicIntegrationConfig.contactPageEmail,
                href: `mailto:${publicIntegrationConfig.contactPageEmail}`,
              },
              {
                icon: Phone,
                label: "Phone",
                val: publicIntegrationConfig.contactPagePhone,
                href: `tel:${publicIntegrationConfig.contactPagePhone.replace(/\s+/g, "")}`,
              },
              {
                icon: MapPin,
                label: "Office",
                val: publicIntegrationConfig.contactPageAddress,
                href: "#",
              },
            ].map(({ icon: Icon, label, val, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 transition-colors hover:bg-white/8"
              >
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/65">
                    {label}
                  </p>
                  <p className="text-sm text-white/80 transition-colors group-hover:text-white">
                    {val}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Operating hours */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
              Operating Hours
            </h3>
            <div className="rounded-xl border border-white/10 bg-white/4 p-5">
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 18:00 GMT" },
                { day: "Saturday", hours: "10:00 AM – 17:00 GMT" },
                { day: "Sunday", hours: "Closed (emergencies only)" },
              ].map(({ day, hours }) => (
                <div
                  key={day}
                  className="flex items-start justify-between gap-3 border-b border-white/8 py-2.5 last:border-0"
                >
                  <span className="text-xs text-white/50">{day}</span>
                  <span className="text-right text-xs font-medium text-white/80">
                    {hours}
                  </span>
                </div>
              ))}
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/15 px-3 py-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold text-white">
                  We&apos;re currently online and ready to chat!
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
              Find Us
            </h3>
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Sterlixit location"
                src={publicIntegrationConfig.googleMapsEmbedUrl}
                className="h-55 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  filter:
                    "invert(90%) hue-rotate(180deg) saturate(0.65) brightness(0.85)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ROADMAP SECTION ────────────────────────────────────────────────

function RoadmapSection() {
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="mx-auto w-full max-w-305 px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <CalendarClock className="size-3" />
            What Happens Next?
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            No Black Holes. Just a Clear Process.
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Here&apos;s exactly what happens after you hit send — transparency
            from the very first message.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map(({ num, icon: Icon, title, detail }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-6"
            >
              {/* Desktop connector arrow */}
              {i < 3 && (
                <div className="absolute -right-3 top-8 z-10 hidden -translate-y-1/2 lg:block">
                  <ArrowRight className="size-5 text-border" />
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <span className="text-3xl font-bold text-muted-foreground/20">
                  {num}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-muted-foreground">
                {detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SAAS SYNERGY STRIP ─────────────────────────────────────────────

function SaaSSynergyStrip() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12)_0%,transparent_65%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)]" />

      <div className="relative mx-auto w-full max-w-305 px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/45">
            Proprietary Platforms
          </p>
          <h2 className="max-w-lg text-2xl font-bold text-white md:text-3xl">
            Interested in our proprietary platforms?
          </h2>
          <p className="max-w-md text-sm leading-6 text-neutral-400">
            Request a live demo for BrickJourney (construction management SaaS)
            or our Property Management Suite — built on the same architecture we
            ship for clients.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 font-semibold"
            >
              <Link href="/saas-solutions">
                <Zap className="mr-2 size-4" />
                Explore BrickJourney
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/saas-solutions">
                <Code2 className="mr-2 size-4" />
                Property Management Suite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── MAIN EXPORT ────────────────────────────────────────────────────

export function ContactPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FormSection />
      <PresenceSection />
      <RoadmapSection />
      <SaaSSynergyStrip />
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
