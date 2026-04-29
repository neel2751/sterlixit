"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type SupportFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  systemType: string;
  hostingEnvironment: string;
  coverageWindow: string;
  preferredContact: string;
  currentPainPoint: string;
};

const supportReadinessPoints = [
  "We review your platform, dependencies, and operational risk before suggesting any SLA model.",
  "Support can be coordinated by email, review call, or live incident communication depending on your needs.",
  "Coverage is scoped case by case so you are not paying for a generic support promise that does not fit the system.",
];

const supportWorkflow = [
  {
    title: "Share the current environment",
    copy: "Tell us what stack you run, where it is hosted, and what support gaps you are trying to solve.",
  },
  {
    title: "We assess risk and coverage",
    copy: "Our sales or maintenance team reviews business-critical workflows, escalation needs, and likely support volume.",
  },
  {
    title: "We follow up with the right format",
    copy: "Depending on the case, we respond by email, schedule a call, or set up a deeper technical review.",
  },
];

export function SupportSlaPageContent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState<SupportFormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    systemType: "",
    hostingEnvironment: "",
    coverageWindow: "",
    preferredContact: "",
    currentPainPoint: "",
  });

  const update = (key: keyof SupportFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/api/support-sla", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        router.push(
          `/support-sla/thank-you?name=${encodeURIComponent(form.name)}&company=${encodeURIComponent(form.company)}`,
        );
        return;
      }

      setSubmitError(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
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
            Support SLA Enquiry
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Tell us what your support coverage actually needs.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            We do not publish one-size-fits-all SLA pricing. Share your system,
            support risk, and preferred response model, and our sales or
            maintenance team will follow up by email or call.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground">Case-by-case</p>
              <p className="text-sm text-muted-foreground">SLA scoping</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                Email or call
              </p>
              <p className="text-sm text-muted-foreground">Follow-up format</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Risk-first</p>
              <p className="text-sm text-muted-foreground">Support design</p>
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
            className="overflow-hidden rounded-2xl border border-border/60 bg-card md:grid md:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="p-7 md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                <Sparkles className="size-3.5" />
                Before We Recommend an SLA
              </span>
              <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Support models should reflect system complexity, not a generic
                plan table.
              </h2>
              <div className="mt-5 space-y-3">
                {supportReadinessPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-4"
                  >
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                      <ShieldCheck className="size-4 text-primary" />
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/60 bg-primary/5 p-7 md:border-l md:border-t-0 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                What Happens Next
              </p>
              <div className="mt-5 space-y-4">
                {supportWorkflow.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-border/60 bg-card p-4"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border border-border/60 bg-card p-6 md:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                  <Wrench className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Request an SLA review
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tell us what needs protecting
                  </p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Work email"
                  required
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                />
                <Input
                  placeholder="Phone number"
                  required
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                />
                <Input
                  placeholder="Company"
                  value={form.company}
                  onChange={(event) => update("company", event.target.value)}
                />

                <Select
                  value={form.systemType}
                  onValueChange={(value) => update("systemType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="System type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marketing-website">
                      Marketing website
                    </SelectItem>
                    <SelectItem value="ecommerce-platform">
                      E-commerce platform
                    </SelectItem>
                    <SelectItem value="saas-product">SaaS product</SelectItem>
                    <SelectItem value="internal-business-system">
                      Internal business system
                    </SelectItem>
                    <SelectItem value="multi-system-stack">
                      Multi-system stack
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={form.hostingEnvironment}
                  onValueChange={(value) => update("hostingEnvironment", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Hosting / environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vercel">Vercel</SelectItem>
                    <SelectItem value="aws">AWS</SelectItem>
                    <SelectItem value="shared-hosting">
                      Shared hosting
                    </SelectItem>
                    <SelectItem value="shopify">Shopify</SelectItem>
                    <SelectItem value="wordpress-managed">
                      Managed WordPress
                    </SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={form.coverageWindow}
                  onValueChange={(value) => update("coverageWindow", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Desired coverage window" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business-hours">
                      Business hours
                    </SelectItem>
                    <SelectItem value="extended-hours">
                      Extended hours
                    </SelectItem>
                    <SelectItem value="24-5-critical">
                      24/5 critical systems
                    </SelectItem>
                    <SelectItem value="not-sure">Need guidance</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={form.preferredContact}
                  onValueChange={(value) => update("preferredContact", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Preferred follow-up" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="video-call">Video call</SelectItem>
                    <SelectItem value="phone-call">Phone call</SelectItem>
                    <SelectItem value="email-first-then-call">
                      Email first, then call if needed
                    </SelectItem>
                  </SelectContent>
                </Select>

                <div className="md:col-span-2">
                  <Textarea
                    rows={6}
                    placeholder="Tell us about the current system, support gaps, incident history, or what kind of SLA coverage you think you may need."
                    required
                    value={form.currentPainPoint}
                    onChange={(event) =>
                      update("currentPainPoint", event.target.value)
                    }
                  />
                </div>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full px-6 font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Request SLA Review"}
                  </Button>
                  {submitError ? (
                    <p className="mt-3 text-sm text-destructive">
                      Could not submit right now. Please try again.
                    </p>
                  ) : null}
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: 0.04, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                  <Server className="size-4 text-primary" />
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">
                  What helps us scope faster
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Where the platform is hosted and who currently has access",
                    "Whether the system is revenue-critical or customer-facing",
                    "Any recent outages, security issues, or performance incidents",
                    "How your team wants communication handled during urgent issues",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/75" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                  <Mail className="size-4 text-primary" />
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">
                  Prefer to email directly?
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  If you already have a support brief prepared, send it straight
                  to our team and we will route it appropriately.
                </p>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <Link href="mailto:hello@sterlixit.com?subject=Support%20and%20Maintenance%20SLA%20Enquiry">
                    Email hello@sterlixit.com
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                  <MessageSquare className="size-4 text-primary" />
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">
                  Need broader delivery support too?
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Once support is stable, we can also help with platform
                  cleanup, performance improvements, and feature expansion.
                </p>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <Link href="/services/custom-saas-it-solutions">
                    Explore Product Support Paths
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
