"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { HeroSection } from "./hero-section";

const smoothEase: [number, number, number, number] = [0.25, 1, 0.35, 1];

const slideVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: smoothEase },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: smoothEase },
  },
};

const spineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 1, ease: smoothEase, delay: 0.1 },
  },
};

const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: smoothEase,
      delay: 0.16 + index * 0.08,
    },
  }),
};

const navItems = [
  { label: "Summary", href: "#section-01" },
  { label: "Market", href: "#section-03" },
  { label: "Priorities", href: "#section-05" },
  { label: "Delivery", href: "#section-08" },
  { label: "Security", href: "#section-11" },
  { label: "Outcomes", href: "#section-14" },
  { label: "Investment", href: "#section-15" },
  { label: "FAQ", href: "#section-16" },
];

const metrics = [
  { label: "Senior Delivery Experience", value: "10+ Years" },
  { label: "Typical Go-Live Cycle", value: "8-14 Weeks" },
  { label: "Milestone Success Rate", value: "98%" },
  { label: "Integrated Capability Tracks", value: "3 Core Streams" },
];

const challenges = [
  "Fragmented systems and duplicated workflows",
  "Low visibility across pipeline, delivery, and operations",
  "Slow decision cycles caused by poor reporting structure",
  "Rising security pressure with limited operational governance",
];

const priorities = [
  "Unify business, product, and delivery into one operating view",
  "Reduce manual work with smart automation and orchestration",
  "Improve decision quality through trustworthy real-time analytics",
  "Build resilient operations with enterprise-grade controls",
];

const serviceArchitecture = [
  {
    title: "Business Services",
    body: "Strategic planning, revenue architecture, and GTM alignment with executive-level accountability.",
    subServices: [
      "Business strategy and growth roadmap",
      "Brand and market positioning",
      "Sales process and funnel design",
      "Leadership reporting and decision support",
    ],
  },
  {
    title: "Digital Services",
    body: "Modern websites, SaaS products, integrations, and AI-led automation to accelerate throughput.",
    subServices: [
      "Website and platform development",
      "Custom SaaS product delivery",
      "CRM and third-party integrations",
      "AI workflow automation",
    ],
  },
  {
    title: "Security Services",
    body: "Policy, controls, monitoring, and incident-readiness to protect operations while scaling.",
    subServices: [
      "Security baseline and risk assessment",
      "Access control and policy hardening",
      "Monitoring and incident alerting",
      "Business continuity and recovery planning",
    ],
  },
];

const capabilityMatrix = [
  {
    area: "Growth",
    scope: "Funnels, CRO, demand systems",
    impact: "Higher qualified pipeline",
  },
  {
    area: "Delivery",
    scope: "Product ops, execution rhythm",
    impact: "Faster release velocity",
  },
  {
    area: "Data",
    scope: "Reporting, KPI governance",
    impact: "Better executive decisions",
  },
  {
    area: "Automation",
    scope: "Workflow orchestration",
    impact: "Lower operating cost",
  },
  {
    area: "Reliability",
    scope: "SLA and observability",
    impact: "More predictable outcomes",
  },
  {
    area: "Compliance",
    scope: "Security baseline controls",
    impact: "Reduced risk exposure",
  },
];

const phases = [
  {
    number: "01",
    title: "Discovery",
    detail:
      "Business goals, constraints, risk profile, and baseline diagnostics.",
  },
  {
    number: "02",
    title: "Blueprint",
    detail:
      "Prioritized roadmap, architecture decisions, and operating cadence.",
  },
  {
    number: "03",
    title: "Build",
    detail: "Execution in focused sprints with weekly stakeholder visibility.",
  },
  {
    number: "04",
    title: "Scale",
    detail:
      "Optimisation, governance, and capability transfer for long-term growth.",
  },
];

const roadmap90 = [
  "Week 1-2: Audit systems, process map, and KPI baseline",
  "Week 3-4: Define architecture, data model, and integration plan",
  "Week 5-8: Build core workflows and executive reporting layer",
  "Week 9-10: QA, security hardening, and load validation",
  "Week 11-12: Launch, handover, and optimisation backlog",
];

const governance = [
  "Executive steering review every 2 weeks",
  "Weekly operating review with decisions and blockers",
  "Monthly KPI and risk snapshot with corrective actions",
  "Transparent action register and ownership matrix",
];

const securityControls = [
  {
    pillar: "Identity and Access Governance",
    detail:
      "Role-based access, least-privilege enforcement, and controlled approval pathways across systems.",
  },
  {
    pillar: "Data and Transport Protection",
    detail:
      "Encrypted transfer standards, hardened API layers, and secure data handling across integrations.",
  },
  {
    pillar: "Continuous Monitoring and Detection",
    detail:
      "Structured logging, anomaly alerting, and operational visibility for proactive incident prevention.",
  },
  {
    pillar: "Resilience and Incident Readiness",
    detail:
      "Recovery runbooks, response playbooks, and continuity planning to minimize business disruption.",
  },
];

const techStack = [
  "Next.js application architecture",
  "Composable API and integration layer",
  "CRM + marketing automation orchestration",
  "Dashboard and analytics command center",
  "Security monitoring and policy controls",
  "Cloud-first deployment and environment strategy",
];

const kpis = [
  { name: "Cycle Time", target: "-30%", note: "From requirement to deploy" },
  {
    name: "Lead Response",
    target: "< 15 min",
    note: "Across all inbound channels",
  },
  {
    name: "Conversion Lift",
    target: "+18-25%",
    note: "Offer and funnel optimisation",
  },
  {
    name: "Manual Effort",
    target: "-35%",
    note: "Through workflow automation",
  },
];

const caseHighlights = [
  {
    client: "CDC Group",
    outcome:
      "Unified digital foundation and delivery governance across multiple business units.",
  },
  {
    client: "BrickJourney",
    outcome:
      "Connected product ecosystem with operational dashboards for leadership clarity.",
  },
  {
    client: "Scaling SMEs",
    outcome:
      "Improved acquisition-to-fulfillment velocity through process and automation redesign.",
  },
];

const investmentModels = [
  {
    model: "Sprint Partnership",
    detail: "Best for focused transformation programmes with clear milestones.",
  },
  {
    model: "Retained Growth Partner",
    detail:
      "Ongoing strategic + delivery support for high-tempo organisations.",
  },
  {
    model: "Managed Operations",
    detail: "Hands-on build + operate model with SLA-backed accountability.",
  },
];

const faq = [
  {
    q: "How quickly can we start?",
    a: "Most engagements begin within 7-10 days after alignment and scope finalization.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Yes. We integrate with internal teams and vendors while keeping one operating rhythm.",
  },
  {
    q: "How do you report progress?",
    a: "We provide weekly delivery visibility, KPI snapshots, and risk-led governance reviews.",
  },
  {
    q: "Can this be phased by budget?",
    a: "Absolutely. We can structure roadmap phases to match quarterly budget cycles.",
  },
];

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.24em] text-[#c8b4a0]/70">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-6xl font-light leading-[1.1] text-[#f8f7f5]">
        {title}
      </h2>
    </div>
  );
}

function PresentationSection({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-t border-[#c8b4a0]/12 py-24 md:py-32 ${className || ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">{children}</div>
    </section>
  );
}

export function BusinessPresentationPageContent() {
  return (
    <>
      <HeroSection />

      <main className="business-presentation relative min-h-screen overflow-hidden bg-[#0f120f]">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 top-28 h-80 w-80 rounded-full bg-[#6b5545]/20 blur-3xl" />
          <div className="absolute right-10 top-1/3 h-96 w-96 rounded-full bg-[#3c4237]/30 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-[#8a7060]/15 blur-3xl" />
        </div>

        <nav className="sticky top-0 z-40 border-b border-[#c8b4a0]/15 bg-[#0f120f]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5 md:px-12">
            <p className="text-sm tracking-[0.22em] uppercase text-[#e6e1d7]">
              Sterlixit
            </p>
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.18em] text-[#c8b4a0]/70 transition-colors hover:text-[#e6e1d7]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <PresentationSection id="section-01">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideVariants}
            className="max-w-5xl space-y-10"
          >
            <SectionHeader
              eyebrow="01 Executive Summary"
              title="A premium operating model for business, digital, and security transformation."
            />
            <p className="text-lg md:text-xl font-light leading-relaxed text-[#e6e1d7]/85 max-w-4xl">
              This presentation outlines a practical path to increase growth
              velocity, reduce delivery friction, and improve operational
              resilience. The model is designed for decision-makers who need
              measurable results, clear ownership, and confidence at scale.
            </p>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-02" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className="border-l border-[#c8b4a0]/30 pl-5"
              >
                <p className="text-3xl md:text-4xl font-light text-[#f8f7f5]">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.12em] text-[#c8b4a0]/75">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-03">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid gap-14 lg:grid-cols-12"
          >
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <SectionHeader
                eyebrow="03 Market Context"
                title="Growth is available, but only for teams that can execute with precision."
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-5 text-[#e6e1d7]/80 font-light leading-relaxed"
            >
              <p>
                Markets are rewarding businesses that can move quickly while
                maintaining quality and governance. The gap between strategy and
                execution is now the largest value leak in most organisations.
              </p>
              <p>
                Sterlixit closes this gap by aligning leadership priorities with
                day-to-day delivery systems, so momentum is sustained instead of
                restarting every quarter.
              </p>
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-04" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="04 Core Challenges"
              title="What typically slows performance today."
            />
            <motion.div
              variants={containerVariants}
              className="relative border-t border-[#c8b4a0]/20"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge}
                  variants={itemVariants}
                  className="grid grid-cols-12 items-start border-b border-[#c8b4a0]/15 py-8 md:py-10"
                >
                  <div className="col-span-12 md:col-span-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#8a7060]">
                      CH {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-8 mt-3 md:mt-0">
                    <p className="text-2xl md:text-3xl font-light leading-snug text-[#f8f7f5]">
                      {challenge}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-2 mt-4 md:mt-1 flex justify-start md:justify-end">
                    <div className="h-px w-12 bg-[#c8b4a0]/35" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-05">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <SectionHeader
              eyebrow="05 Strategic Priorities"
              title="The decisions that create disproportionate value."
            />

            <motion.div
              variants={containerVariants}
              className="grid gap-14 lg:grid-cols-12 lg:gap-20"
            >
              <motion.div variants={itemVariants} className="lg:col-span-4">
                <div className="space-y-7 border-l border-[#c8b4a0]/35 pl-6 py-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8a7060]">
                    Strategic Manifesto
                  </p>
                  <p className="text-3xl md:text-4xl font-light leading-tight text-[#f8f7f5]">
                    Priorities are treated as operating principles, not
                    checklist items.
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-[#e6e1d7]/80">
                    Every priority is designed to influence decisions across
                    product, process, and governance so the organisation scales
                    with clarity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="lg:col-span-8 space-y-12"
              >
                {priorities.map((priority) => (
                  <motion.blockquote
                    key={priority}
                    variants={itemVariants}
                    className="relative pl-12 md:pl-14"
                  >
                    <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[#c8b4a0]/90" />
                    <span className="absolute left-1.25 top-5 h-[calc(100%-0.25rem)] w-px bg-linear-to-b from-[#c8b4a0]/60 to-transparent" />
                    <p className="text-2xl md:text-[2.6rem] font-light leading-[1.32] text-[#f8f7f5]">
                      {priority}
                    </p>
                  </motion.blockquote>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-06" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="06 Service Architecture"
              title="Three integrated service streams working as one system."
            />
            <motion.div
              variants={containerVariants}
              className="grid gap-10 md:grid-cols-3"
            >
              {serviceArchitecture.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="space-y-6 border-t border-[#c8b4a0]/35 pt-6"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-[#f8f7f5]">
                    {service.title}
                  </h3>
                  <p className="text-[#e6e1d7]/80 font-light leading-relaxed">
                    {service.body}
                  </p>
                  <div className="space-y-3 pt-2">
                    {service.subServices.map((subService) => (
                      <div key={subService} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8b4a0]/80" />
                        <p className="text-sm md:text-base font-light leading-relaxed text-[#e6e1d7]/85">
                          {subService}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-07">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="07 Capability Matrix"
              title="From capability to measurable business impact."
            />
            <motion.div
              variants={containerVariants}
              className="overflow-x-auto border border-[#c8b4a0]/20"
            >
              <table className="w-full min-w-190 text-left">
                <thead className="bg-[#1a1d18]">
                  <tr>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.16em] text-[#c8b4a0]/80">
                      Area
                    </th>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.16em] text-[#c8b4a0]/80">
                      Scope
                    </th>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.16em] text-[#c8b4a0]/80">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {capabilityMatrix.map((row) => (
                    <tr key={row.area} className="border-t border-[#c8b4a0]/15">
                      <td className="px-6 py-4 text-[#f8f7f5] font-light">
                        {row.area}
                      </td>
                      <td className="px-6 py-4 text-[#e6e1d7]/80 font-light">
                        {row.scope}
                      </td>
                      <td className="px-6 py-4 text-[#e6e1d7]/80 font-light">
                        {row.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-08" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="08 Delivery Method"
              title="A four-phase model that reduces risk while accelerating output."
            />
            <motion.div variants={containerVariants} className="space-y-9">
              {phases.map((phase) => (
                <motion.div
                  key={phase.number}
                  variants={itemVariants}
                  className="flex gap-6 md:gap-10 items-start"
                >
                  <p className="min-w-16 text-5xl md:text-6xl font-light text-[#6b5545]">
                    {phase.number}
                  </p>
                  <div className="pt-2">
                    <h3 className="text-2xl md:text-3xl font-light text-[#f8f7f5]">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-[#e6e1d7]/80 font-light leading-relaxed">
                      {phase.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-09">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="09 90-Day Roadmap"
              title="Execution timeline designed for visible progress every week."
            />
            <motion.div
              variants={containerVariants}
              className="grid gap-5 md:grid-cols-2"
            >
              {roadmap90.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 border-l border-[#c8b4a0]/30 pl-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#c8b4a0]" />
                  <p className="text-[#e6e1d7]/80 font-light">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-10" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="10 Governance Model"
              title="Decision cadence and ownership designed for accountability."
            />
            <motion.div variants={containerVariants} className="space-y-6">
              {governance.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="border-b border-[#c8b4a0]/20 pb-4"
                >
                  <p className="text-[#e6e1d7]/80 font-light leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-11">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="11 Security and Compliance"
              title="Protection by design, not as an afterthought."
            />
            <motion.div
              variants={containerVariants}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <motion.div variants={itemVariants} className="lg:col-span-4">
                <div className="space-y-6 border-l border-[#c8b4a0]/30 pl-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8a7060]">
                    Security Control Tower
                  </p>
                  <p className="text-3xl md:text-4xl font-light leading-tight text-[#f8f7f5]">
                    Compliance is embedded into delivery, not added after
                    launch.
                  </p>
                  <p className="text-base font-light leading-relaxed text-[#e6e1d7]/80">
                    Every initiative is governed through explicit controls,
                    audit-ready workflows, and resilience practices that protect
                    growth momentum.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="lg:col-span-8 relative pl-8 md:pl-10"
              >
                <motion.div
                  variants={spineVariants}
                  className="absolute left-0 top-0 h-full w-px origin-top bg-linear-to-b from-[#c8b4a0]/55 via-[#c8b4a0]/25 to-transparent"
                />
                <div className="space-y-10">
                  {securityControls.map((control, index) => (
                    <motion.div
                      key={control.pillar}
                      variants={itemVariants}
                      className="relative"
                    >
                      <motion.span
                        custom={index}
                        variants={nodeVariants}
                        className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full border border-[#c8b4a0]/70 bg-[#141915]"
                      />
                      <p className="text-xs uppercase tracking-[0.18em] text-[#c8b4a0]/65">
                        Security Protocol
                      </p>
                      <h3 className="mt-2 text-2xl md:text-3xl font-light leading-tight text-[#f8f7f5]">
                        {control.pillar}
                      </h3>
                      <p className="mt-3 text-[#e6e1d7]/80 font-light leading-relaxed">
                        {control.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-12" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="12 Technology Foundation"
              title="Composable stack aligned to growth, stability, and scale."
            />
            <motion.div
              variants={containerVariants}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {techStack.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="border-l border-[#c8b4a0]/30 pl-4 py-2"
                >
                  <p className="text-[#e6e1d7]/80 font-light">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-13">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="13 KPI Framework"
              title="A scorecard that leadership can trust and act on."
            />
            <motion.div
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {kpis.map((kpi) => (
                <motion.div
                  key={kpi.name}
                  variants={itemVariants}
                  className="border border-[#c8b4a0]/20 p-6"
                >
                  <p className="text-sm uppercase tracking-[0.14em] text-[#c8b4a0]/70">
                    {kpi.name}
                  </p>
                  <p className="mt-3 text-3xl font-light text-[#f8f7f5]">
                    {kpi.target}
                  </p>
                  <p className="mt-3 text-sm text-[#e6e1d7]/75 font-light">
                    {kpi.note}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-14" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="14 Delivery Proof"
              title="Selected outcomes from real client engagements."
            />
            <motion.div variants={containerVariants} className="space-y-8">
              {caseHighlights.map((item) => (
                <motion.div
                  key={item.client}
                  variants={itemVariants}
                  className="border-l border-[#c8b4a0]/30 pl-6"
                >
                  <p className="text-xl font-light text-[#f8f7f5]">
                    {item.client}
                  </p>
                  <p className="mt-2 text-[#e6e1d7]/80 font-light leading-relaxed">
                    {item.outcome}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-15">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="15 Investment Options"
              title="Commercial models designed for different operating realities."
            />
            <motion.div
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-3"
            >
              {investmentModels.map((model) => (
                <motion.div
                  key={model.model}
                  variants={itemVariants}
                  className="border-t border-[#c8b4a0]/30 pt-6"
                >
                  <h3 className="text-2xl font-light text-[#f8f7f5]">
                    {model.model}
                  </h3>
                  <p className="mt-3 text-[#e6e1d7]/80 font-light leading-relaxed">
                    {model.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-16" className="bg-[#141915]/35">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <SectionHeader
              eyebrow="16 Frequently Asked Questions"
              title="Clear answers before we begin."
            />
            <motion.div variants={containerVariants} className="space-y-7">
              {faq.map((item) => (
                <motion.div
                  key={item.q}
                  variants={itemVariants}
                  className="border-b border-[#c8b4a0]/20 pb-6"
                >
                  <p className="text-lg font-light text-[#f8f7f5]">{item.q}</p>
                  <p className="mt-3 text-[#e6e1d7]/80 font-light leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </PresentationSection>

        <PresentationSection id="section-17">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideVariants}
            className="max-w-5xl space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#c8b4a0]/70">
              17 Next Step
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-[1.1] text-[#f8f7f5]">
              If this aligns with your direction, we can start with a focused
              strategy workshop.
            </h2>
            <p className="text-lg text-[#e6e1d7]/85 font-light leading-relaxed max-w-4xl">
              We will map your current state, identify priority opportunities,
              and produce a practical execution blueprint with clear milestones
              and ownership.
            </p>
            <a
              href="/book-free-strategy-call"
              className="inline-flex items-center gap-2 border border-[#c8b4a0]/40 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#f8f7f5] transition-colors hover:bg-[#c8b4a0]/15"
            >
              Book Strategy Session
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </PresentationSection>

        <footer className="border-t border-[#c8b4a0]/12 py-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
            <p className="text-xs tracking-[0.16em] uppercase text-[#c8b4a0]/60">
              Sterlixit Business Presentation
            </p>
            <p className="text-xs text-[#c8b4a0]/50">
              © 2026 Sterlix IT Solutions
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
