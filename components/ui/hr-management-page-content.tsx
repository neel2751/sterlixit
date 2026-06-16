"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChartColumn,
  FileCheck2,
  GlobeLock,
  Lock,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const architectureItems = [
  {
    icon: Building2,
    title: "Multi-Branch Management",
    body: "Create and manage unlimited branches under one parent company without splitting your workflow across tools.",
  },
  {
    icon: Users,
    title: "Departmental Precision",
    body: "Organise teams at company or branch level for targeted oversight and cleaner reporting lines.",
  },
  {
    icon: Lock,
    title: "Granular Roles & Permissions",
    body: "Define custom roles so each user only sees what they need, nothing more and nothing less.",
  },
];

const workforceItems = [
  "Smart live attendance with clock-in, clock-out, and multiple break support.",
  "Assignable weekly rotas that teams can view instantly.",
  "UK-ready compliance with automatic UK Government bank holiday integration.",
  "Intelligent leave management with entitlement calculations and carry-forward rules.",
];

const securityItems = [
  {
    title: "Antivirus Document Quarantine",
    body: "Every uploaded file is scanned automatically. Threats are isolated instantly before they can spread.",
  },
  {
    title: "Private S3 Storage",
    body: "Documents are stored in encrypted AWS S3 buckets with strict access controls.",
  },
  {
    title: "Security Hardening",
    body: "Enforce 2FA company-wide, review active sessions, and trigger Session Kill when devices are compromised.",
  },
  {
    title: "IP & Geo-Fencing",
    body: "Allow live clock-ins only from trusted office IPs or approved GPS radiuses, with exceptions routed for approval.",
  },
];

const policyHubItems = [
  "Version-controlled policy groups with update history.",
  "Automated expiry alerts for compliance documents.",
  "Centralised media library with usage and storage visibility.",
];

const reportingItems = [
  {
    title: "360 Reporting",
    body: "Generate actionable reports at company, branch, and department level.",
  },
  {
    title: "White-Label Branding",
    body: "Customise platform identity for a truly native employee experience.",
  },
  {
    title: "Automated Communication",
    body: "Deploy branded templates for onboarding, leave requests, and rota updates.",
  },
];

const roadmapItems = [
  {
    feature: "AI Intelligence",
    expectation: "Predictive burnout alerts and automated rota optimisation.",
  },
  {
    feature: "Invoicing",
    expectation:
      "Convert attendance and rota hours into client-ready invoices.",
  },
  {
    feature: "Expense Management",
    expectation: "Snap receipts and track employee spending in real time.",
  },
  {
    feature: "Employee KPIs",
    expectation: "Set targets and track performance data automatically.",
  },
  {
    feature: "Task Management",
    expectation:
      "Assign, track, and complete work across teams and departments.",
  },
];

const platformModules = [
  {
    icon: Building2,
    title: "Company Management",
    points: [
      "Manage multiple companies from one parent account.",
      "Create custom roles and permission rules.",
      "Set up and maintain branches and departments at scale.",
    ],
  },
  {
    icon: Users,
    title: "Employee Management",
    points: [
      "Employee overview for central workforce visibility.",
      "Attendance, weekly rota, documents, leave, and security in one place.",
      "UK live bank holiday sync for planning accuracy.",
    ],
  },
  {
    icon: CalendarDays,
    title: "Attendance Engine",
    points: [
      "Live attendance powered by sockets for real-time updates.",
      "Clock-in and clock-out with smart validation controls.",
      "Supports operational monitoring across branch locations.",
    ],
  },
  {
    icon: CalendarDays,
    title: "Weekly Rota Management",
    points: [
      "Build and publish rotas by team, branch, or department.",
      "Employees can view their own rota instantly.",
      "Reduce scheduling confusion with one source of truth.",
    ],
  },
  {
    icon: Shield,
    title: "Document Quarantine & Compliance",
    points: [
      "All uploaded files are scanned before acceptance.",
      "Virus-detected files are blocked and quarantined automatically.",
      "Compliance controls are enforced before files enter workflows.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Policy Group Management",
    points: [
      "Create and manage policy groups by company structure.",
      "Maintain version history for policy changes.",
      "Keep teams aligned to current policy versions.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Media Library",
    points: [
      "Centralised storage for compliance and internal assets.",
      "Track usage and storage health across the platform.",
      "Understand exactly which files are in active use.",
    ],
  },
  {
    icon: CalendarDays,
    title: "Leave Management",
    points: [
      "Entitlements, leave requests, calendar, and leave history.",
      "Leave settings, carry-forward rules, and approval flows.",
      "Dedicated leave reporting for planning and compliance.",
    ],
  },
  {
    icon: ChartColumn,
    title: "Reporting Suite",
    points: [
      "All-reports view across company, branch, and department levels.",
      "Operational reporting for attendance, leave, and compliance.",
      "Insights designed for quick decision-making.",
    ],
  },
  {
    icon: Sparkles,
    title: "Communication & Branding",
    points: [
      "Custom email templates for onboarding and HR workflows.",
      "White-label settings for a branded internal experience.",
      "Platform branding controls with room for future modules.",
    ],
  },
];

const hrFaqs = [
  {
    q: "Can we manage multiple companies and branches in one account?",
    a: "Yes. Sterlix HR is built for multi-company and multi-branch operations under one parent structure with department-level control.",
  },
  {
    q: "Does attendance update in real time?",
    a: "Yes. Live attendance uses socket-based updates so operations and managers can monitor status changes in real time.",
  },
  {
    q: "Can employees see only their own weekly rota?",
    a: "Yes. Weekly rota management supports role-based visibility so employees view their own schedule while managers control rota planning.",
  },
  {
    q: "How does document quarantine and virus scanning work?",
    a: "Uploaded documents are scanned automatically. If a threat is detected, the file is quarantined and blocked from operational workflows.",
  },
  {
    q: "Do you support UK bank holidays and leave carry-forward rules?",
    a: "Yes. Sterlix HR includes UK bank holiday integration, leave entitlement controls, carry-forward settings, leave history, and reporting.",
  },
  {
    q: "Is the mobile app available now?",
    a: "Not yet. The mobile companion app is currently in development and will be released in a later phase.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function HrManagementPageContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industryType: "",
    teamSize: "",
    message: "",
    intent: "request_demo",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/hr-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("done");
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        teamSize: "",
        industryType: "",
        message: "",
        intent: "request_demo",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a1222] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09101f]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:px-10">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-white"
          >
            Sterlix IT
          </Link>
          <nav className="hidden items-center gap-5 text-xs text-slate-300 md:flex">
            <Link href="/" className="transition hover:text-white">
              Back to Main Website
            </Link>
            <Link
              href="#enterprise-architecture"
              className="transition hover:text-white"
            >
              Architecture
            </Link>
            <Link
              href="#platform-modules"
              className="transition hover:text-white"
            >
              Features
            </Link>
            <Link href="#faq" className="transition hover:text-white">
              FAQs
            </Link>
            <Link href="#hr-lead-form" className="transition hover:text-white">
              Demo / Trial
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-104 w-104 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute right-0 top-10 h-88 w-88 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-lg -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <section
          id="hero"
          className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-14 md:px-10 md:pt-20"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <Sparkles className="size-3.5" />
                Sterlix HR Platform
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                The Only HR Ecosystem Built for Scale, Security, and Success.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Manage multiple branches, secure your compliance, and automate
                your workforce from one unified dashboard.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#hr-lead-form"
                  className="inline-flex items-center rounded-full border border-cyan-200/50 bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <span className="text-sm text-slate-300">
                  No credit card required
                </span>
              </div>
            </motion.div>

            <motion.div
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="overflow-hidden rounded-3xl border border-white/15 bg-white/5"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.14em] text-cyan-100/90">
                  Product Dashboard · Attendance and Workforce Insights
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="HR dashboard with analytics and attendance charts"
                  width={700}
                  height={900}
                  className="h-88 w-full object-cover"
                  unoptimized
                />
                <div className="border-t border-white/10 bg-slate-950/60 px-4 py-2 text-xs text-slate-300">
                  Mobile app is currently in development and will launch in a
                  later phase.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      <motion.section
        id="enterprise-architecture"
        className="border-y border-white/10 bg-slate-950/40 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              Built for Complex Organisations
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Enterprise Architecture That Scales Cleanly
            </h2>
            <p className="mt-4 text-slate-300">
              Most HR platforms break when you add a second office. Sterlix HR
              is designed to handle your full hierarchy from day one.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {architectureItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/4 p-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/10">
                    <Icon className="size-5 text-cyan-100" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <section id="workforce-engine" className="py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/80">
              The Workforce Engine
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Day-to-Day Operations, Simplified
            </h2>
            <div className="mt-6 space-y-3">
              {workforceItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/3"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="HR team managing schedules and workforce operations"
              width={900}
              height={900}
              className="h-full min-h-96 w-full object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      <section
        id="security-vault"
        className="border-y border-white/10 bg-slate-950/45 py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
            The Security Vault
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Your Data, Protected by Sterlix IT
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            We do not just store files. We protect your business reputation with
            enterprise-grade security controls.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {securityItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/3 p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                  <Shield className="size-4" />
                  Security Layer
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="content-policy-hub" className="py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-2 md:px-10">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/3 p-6"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100/80">
              <FileCheck2 className="size-4" />
              Content & Policy Hub
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Total Compliance at Your Fingertips
            </h2>
            <div className="mt-5 space-y-3">
              {policyHubItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/10 bg-white/3 p-6"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: 0.05 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
              <ChartColumn className="size-4" />
              Reporting & Branding
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Insights You Can Act On
            </h2>
            <div className="mt-5 space-y-4">
              {reportingItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3"
                >
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="roadmap"
        className="border-y border-white/10 bg-slate-950/40 py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
            The Sterlix Roadmap · Coming Soon
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            We Are Just Getting Started
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Join Sterlix HR today and get immediate access to upcoming modules
            as they launch, with no extra setup required.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 bg-slate-900/70 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 md:grid-cols-[0.38fr_0.62fr]">
              <div className="border-b border-white/10 px-4 py-3 md:border-b-0 md:border-r">
                Feature
              </div>
              <div className="px-4 py-3">What to Expect</div>
            </div>
            {roadmapItems.map((item) => (
              <div
                key={item.feature}
                className="grid grid-cols-1 border-t border-white/10 md:grid-cols-[0.38fr_0.62fr]"
              >
                <div className="px-4 py-3 text-sm font-semibold text-white md:border-r md:border-white/10">
                  {item.feature}
                </div>
                <div className="px-4 py-3 text-sm leading-7 text-slate-300">
                  {item.expectation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform-modules" className="py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              Full Feature Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Built for Real HR Operations, Not Surface Features
            </h2>
            <p className="mt-4 text-slate-300">
              Sterlix HR includes company control, operational workflows,
              compliance tools, and reporting modules designed for multi-branch
              organisations.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platformModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.article
                  key={module.title}
                  className="rounded-2xl border border-white/10 bg-white/4 p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/10">
                    <Icon className="size-5 text-cyan-100" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {module.title}
                  </h3>
                  <div className="mt-3 space-y-2">
                    {module.points.map((point) => (
                      <p
                        key={point}
                        className="text-sm leading-7 text-slate-300"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-y border-white/10 bg-slate-950/35 py-16"
      >
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Common Questions from HR Teams
            </h2>
            <p className="mt-4 text-slate-300">
              Clear answers on scale, compliance, security, and platform
              readiness.
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-white/10 bg-white/3 px-5"
          >
            {hrFaqs.map((item, index) => (
              <AccordionItem key={item.q} value={`hr-faq-${index}`}>
                <AccordionTrigger className="text-left text-sm text-white md:text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-300">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="hr-lead-form" className="py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-cyan-200/20 bg-linear-to-br from-cyan-300/12 via-slate-900/70 to-slate-950 p-7 md:p-12"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-cyan-300/20 blur-3xl" />
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/85">
              Final Call to Action
            </p>
            <h2 className="relative z-10 mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
              Ready to Upgrade Your HR Experience?
            </h2>
            <p className="relative z-10 mt-4 max-w-2xl text-slate-300">
              Join the managers using Sterlix IT to power their workforce with
              secure, scalable, and future-ready infrastructure.
            </p>

            <form
              className="relative z-10 mt-8 grid gap-4 md:grid-cols-2"
              onSubmit={submit}
            >
              <Input
                required
                placeholder="Full name"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400"
              />
              <Input
                required
                type="email"
                placeholder="Work email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400"
              />
              <Input
                required
                placeholder="Company"
                value={form.company}
                onChange={(event) => update("company", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400"
              />
              <Input
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400"
              />
              <Input
                placeholder="Industry Type (optional)"
                value={form.industryType}
                onChange={(event) => update("industryType", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400"
              />
              <Input
                placeholder="Team size (optional)"
                value={form.teamSize}
                onChange={(event) => update("teamSize", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400"
              />
              <Textarea
                rows={5}
                placeholder="Tell us about your current HR setup, branch structure, and what you want to improve."
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                className="border-white/20 bg-slate-900/45 text-white placeholder:text-slate-400 md:col-span-2"
              />

              <div className="md:col-span-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  onClick={() => update("intent", "request_demo")}
                  disabled={status === "loading"}
                  className="inline-flex items-center rounded-full border border-cyan-200/50 bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200 disabled:opacity-70"
                >
                  Request a Personal Demo
                </button>
                <button
                  type="submit"
                  onClick={() => update("intent", "start_trial")}
                  disabled={status === "loading"}
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 disabled:opacity-70"
                >
                  Start 14-Day Free Trial
                </button>
              </div>

              <div className="md:col-span-2 text-sm text-slate-300">
                {status === "loading" ? "Submitting..." : null}
                {status === "done"
                  ? "Thanks - your request has been sent to our HR sales team."
                  : null}
                {status === "error"
                  ? "Could not submit right now. Please try again."
                  : null}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="font-semibold text-white">
              Sterlix IT - Innovating Corporate Infrastructure.
            </p>
            <p className="mt-1 text-slate-400">
              © 2026 Sterlix IT Solutions. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/legal/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/support-sla"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              Security Whitepaper
              <GlobeLock className="size-3.5" />
            </Link>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40 hidden md:block">
        <Link
          href="#hr-lead-form"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_26px_rgba(6,182,212,0.35)] transition hover:bg-cyan-200"
        >
          <CalendarDays className="size-4" />
          Start Trial
        </Link>
      </div>
    </main>
  );
}
