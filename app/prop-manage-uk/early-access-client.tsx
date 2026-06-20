"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Gift,
  Layers,
  LineChart,
  Loader2,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

/** The three early-access audiences offered on the launch landing page. */
export type AccountType = "Landlord" | "Agency" | "Enterprise Firm";

/** Account types that operate across multiple branches. */
function hasBranches(accountType: AccountType) {
  return accountType === "Agency" || accountType === "Enterprise Firm";
}

/** Campaign attribution parsed from the URL, with safe defaults applied. */
interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

/** Exact shape pushed to the GTM dataLayer on a successful signup. */
interface EarlyAccessSignupEvent extends UtmParams {
  event: "early_access_signup";
  event_location: "launch_event_qr";
  account_type: AccountType;
  portfolio_size: string;
  branches: string;
}

// `window.dataLayer` is already declared globally by @next/third-parties.

const ACCOUNT_TYPES: readonly AccountType[] = [
  "Landlord",
  "Agency",
  "Enterprise Firm",
];

const PORTFOLIO_SIZES = [
  "1–5 properties",
  "6–20 properties",
  "21–100 properties",
  "100+ properties",
] as const;

const BRANCH_COUNTS = [
  "1 branch",
  "2–5 branches",
  "6–10 branches",
  "10+ branches",
] as const;

/** Page accent — the Sterlix brand indigo. */
const BRAND = "#4f39f6";

/** PropManage is a product of Sterlix IT Ltd. */
const COMPANY = "Sterlix IT Ltd";
const WEBSITE_URL = "https://sterlixit.co.uk";

const TAGLINE =
  "No endless paperwork. No digital clutter. No unnecessary complexity.";

/** Tagline split so each clause's keyword can be highlighted + animated in. */
const TAGLINE_PARTS = [
  { lead: "No endless ", key: "paperwork" },
  { lead: "No digital ", key: "clutter" },
  { lead: "No unnecessary ", key: "complexity" },
] as const;

/** Reinforces the tagline with three at-a-glance proof points. */
const HERO_FEATURES = [
  { icon: ShieldCheck, label: "Industry-grade encryption" },
  { icon: Layers, label: "One unified ledger" },
  { icon: Zap, label: "Live in minutes" },
] as const;

const FEATURES = [
  {
    icon: FileText,
    title: "Tenancy & lease management",
    desc: "Track every tenancy, renewal and break clause with automated reminders before they lapse.",
  },
  {
    icon: Wallet,
    title: "Rent collection & reconciliation",
    desc: "Automated rent runs, arrears chasing and instant bank reconciliation — no spreadsheets.",
  },
  {
    icon: Wrench,
    title: "Maintenance & work orders",
    desc: "Log issues, assign contractors and follow every job through to completion in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance, automated",
    desc: "Stay ahead of gas, EICR and EPC deadlines with live, property-by-property compliance tracking.",
  },
  {
    icon: Users,
    title: "Owner & tenant portals",
    desc: "Branded self-service portals for statements, documents and maintenance requests.",
  },
  {
    icon: LineChart,
    title: "Reporting & analytics",
    desc: "Real-time dashboards across rent, occupancy, arrears and yield — exportable any time.",
  },
] as const;

const AUDIENCES = [
  {
    name: "Landlord" as const,
    tagline: "For private landlords",
    points: [
      "Manage 1–50 units without spreadsheets",
      "Automated rent collection & arrears chasing",
      "Tax-ready income statements on demand",
    ],
  },
  {
    name: "Agency" as const,
    tagline: "For letting agents",
    points: [
      "Branded owner & tenant portals",
      "Client accounting & landlord statements",
      "Multi-branch, multi-user ready",
    ],
  },
  {
    name: "Enterprise Firm" as const,
    tagline: "For enterprise & build-to-rent",
    points: [
      "Open API, SSO & granular permissions",
      "Bulk imports and portfolio-wide reporting",
      "Dedicated success manager & SLA",
    ],
  },
] as const;

const STATS = [
  { value: "12k+", label: "Units under management" },
  { value: "98%", label: "Rent collected on time" },
  { value: "5 min", label: "To go live" },
  { value: "24/7", label: "UK-based support" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function PropManageEarlyAccess() {
  const searchParams = useSearchParams();

  // Parse incoming UTM parameters on mount, defaulting per spec.
  const utm = useMemo<UtmParams>(
    () => ({
      utm_source: searchParams.get("utm_source") ?? "direct",
      utm_medium: searchParams.get("utm_medium") ?? "none",
      utm_campaign: searchParams.get("utm_campaign") ?? "none",
    }),
    [searchParams],
  );

  // Compare against the *raw* value so the default ("direct") never matches.
  const isLaunchEventAttendee =
    searchParams.get("utm_source") === "launch-event";

  const [accountType, setAccountType] = useState<AccountType>("Landlord");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioSize, setPortfolioSize] = useState("");
  const [branches, setBranches] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError(null);

    // Branches only apply to multi-branch account types.
    const branchValue = hasBranches(accountType) ? branches : "n/a";

    try {
      // Persist the lead to Mailchimp (tag "Early Access") + Zoho CRM.
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          accountType,
          portfolioSize,
          branches: branchValue,
          utm,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      // Only fire the GTM conversion event once the lead is safely stored.
      const payload: EarlyAccessSignupEvent = {
        event: "early_access_signup",
        event_location: "launch_event_qr",
        account_type: accountType,
        portfolio_size: portfolioSize,
        branches: branchValue,
        ...utm,
      };
      // Defensive init — the layout's <GoogleTagManager> normally creates this.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);

      setSubmitted(true);
    } catch (submitError) {
      console.error("Early access submission failed", submitError);
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#050505] text-white">
      {/* Animated gradient highlight + ambient brand glow (scoped to page). */}
      <style>{`
        @keyframes pm-shimmer { to { background-position: -200% center; } }
        .pm-shimmer { background-size: 200% auto; animation: pm-shimmer 6s linear infinite; }
        @keyframes pm-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .pm-rise { display: inline-block; opacity: 0; animation: pm-rise 0.6s ease-out forwards; }
        @keyframes pm-grow-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .pm-grow-x { transform: scaleX(0); transform-origin: left; animation: pm-grow-x 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes pm-grow-y { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .pm-grow-y { transform: scaleY(0); transform-origin: bottom; animation: pm-grow-y 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes pm-pop { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
        .pm-pop { animation: pm-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
        @keyframes pm-draw { to { stroke-dashoffset: 0; } }
        .pm-check { stroke-dasharray: 42; stroke-dashoffset: 42; animation: pm-draw 0.5s 0.25s ease-out forwards; }
        @keyframes pm-ring { 0% { opacity: 0.55; transform: scale(0.8); } 100% { opacity: 0; transform: scale(1.9); } }
        .pm-ring { animation: pm-ring 0.9s 0.15s ease-out forwards; }
      `}</style>

      {/*
        Solid, uniform pitch-black canvas with a single restrained brand glow
        bleeding from the top. This fixed layer sits above the global ambient
        gradient defined on `.dark body`, guaranteeing a controlled backdrop.
      */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div
          className="absolute inset-x-0 top-0 h-[60vh]"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% -10%, ${BRAND}26, transparent 70%)`,
          }}
        />
      </div>

      {/* Header — memorable brand lockup + Sterlix attribution. */}
      <header className="flex flex-col items-center gap-2 px-6 pt-9">
        <BrandLockup />
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] tracking-wide text-slate-500 transition-colors hover:text-slate-300"
        >
          a product by{" "}
          <span className="font-medium text-slate-400">{COMPANY}</span>
        </a>
      </header>

      <main className="flex-1">
        {/* ---------------------------------------------------------------- */}
        {/*  Hero + early-access form                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 pt-14 pb-20 sm:pt-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <span
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em]"
                style={{
                  borderColor: `${BRAND}40`,
                  backgroundColor: `${BRAND}14`,
                  color: "#b3a8ff",
                }}
              >
                <span
                  className="size-1.5 animate-pulse rounded-full"
                  style={{ backgroundColor: BRAND }}
                  aria-hidden
                />
                Early Access · 2026 Cohort
              </span>
              <h1 className="group cursor-default text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white transition-transform duration-300 will-change-transform group-hover:-translate-y-0.5 hover:-translate-y-0.5 sm:text-4xl md:text-5xl">
                Property management,{" "}
                <span className="relative inline-block">
                  <span
                    className="pm-shimmer bg-clip-text italic text-transparent transition-[filter,animation-duration] duration-300 group-hover:[animation-duration:2s] group-hover:[filter:drop-shadow(0_0_18px_rgba(79,57,246,0.6))]"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${BRAND}, #a78bfa, ${BRAND})`,
                    }}
                  >
                    without the busywork.
                  </span>
                  {/* Gradient underline that sweeps in on hover. */}
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${BRAND}, #a78bfa)`,
                    }}
                  />
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-slate-400 sm:text-lg">
                {TAGLINE_PARTS.map((part, index) => (
                  <span
                    key={part.key}
                    className="pm-rise"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    {part.lead}
                    <span
                      className="font-semibold"
                      style={{ color: "#b3a8ff" }}
                    >
                      {part.key}
                    </span>
                    {index < TAGLINE_PARTS.length - 1 ? ". " : "."}
                  </span>
                ))}
              </p>
              <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                {HERO_FEATURES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    <Icon
                      className="size-3.5"
                      style={{ color: BRAND }}
                      aria-hidden
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Obsidian dashboard sheet with razor-thin brand border accents. */}
            <div id="early-access" className="scroll-mt-10">
              <ObsidianSheet>
                <div
                  className="grid gap-px overflow-hidden rounded-[15px] lg:grid-cols-2"
                  style={{ backgroundColor: `${BRAND}26` }}
                >
                  {/* Visual — abstract digital vault ledger. */}
                  <div className="relative flex flex-col items-center justify-center gap-7 bg-[#070707] p-8 sm:p-10">
                    {isLaunchEventAttendee && <LaunchEventBadge />}
                    <PropertyDashboard />
                    <p className="max-w-xs text-center text-sm leading-relaxed text-slate-400">
                      Every property, tenancy and payment — live in one
                      dashboard, updated in real time.
                    </p>
                  </div>

                  {/* Form / success panel. */}
                  <div className="flex flex-col justify-center bg-[#070707] p-8 sm:p-10">
                    {submitted ? (
                      <SuccessState accountType={accountType} email={email} />
                    ) : (
                      <EarlyAccessForm
                        name={name}
                        onNameChange={setName}
                        email={email}
                        onEmailChange={setEmail}
                        accountType={accountType}
                        onAccountTypeChange={setAccountType}
                        portfolioSize={portfolioSize}
                        onPortfolioSizeChange={setPortfolioSize}
                        branches={branches}
                        onBranchesChange={setBranches}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        error={error}
                      />
                    )}
                  </div>
                </div>
              </ObsidianSheet>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Trust band — headline metrics                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-y border-white/5 bg-white/[0.015] px-6 py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                  style={{ color: "#b3a8ff" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Features                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="The platform"
              title="Everything your portfolio needs, in one place."
              subtitle="Lettings, accounting, maintenance and compliance — one connected ledger instead of a dozen disconnected tools."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group bg-[#070707] p-7 transition-colors hover:bg-[#0a0a0a]"
                >
                  <span
                    className="inline-flex size-11 items-center justify-center rounded-xl border transition-colors"
                    style={{
                      borderColor: `${BRAND}33`,
                      backgroundColor: `${BRAND}14`,
                      color: "#b3a8ff",
                    }}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Audiences                                                       */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Built for you"
              title="Whatever you manage, PropManage fits."
              subtitle="From a single landlord to a multi-branch agency — the same platform scales with your portfolio."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {AUDIENCES.map((audience) => (
                <div
                  key={audience.name}
                  className="flex flex-col rounded-2xl border border-white/10 bg-[#070707] p-7 transition-colors hover:border-[color:var(--pm-brand)]"
                  style={
                    { "--pm-brand": `${BRAND}66` } as React.CSSProperties
                  }
                >
                  <span
                    className="text-xs font-medium uppercase tracking-[0.18em]"
                    style={{ color: "#b3a8ff" }}
                  >
                    {audience.tagline}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {audience.name}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {audience.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0"
                          style={{ color: BRAND }}
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Final CTA                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 pb-24">
          <div
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border p-10 text-center sm:p-14"
            style={{
              borderColor: `${BRAND}40`,
              background: `radial-gradient(ellipse 80% 120% at 50% 0%, ${BRAND}1f, transparent 70%)`,
            }}
          >
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Be first to the future of property management.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-slate-400">
              Join the private launch cohort — the{" "}
              <span className="font-semibold text-white">first 30 members</span>{" "}
              get <span className="font-semibold" style={{ color: "#b3a8ff" }}>
                30 days free
              </span>
              , plus early-access pricing before public release.
            </p>
            <a
              href="#early-access"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{
                backgroundColor: BRAND,
                boxShadow: `0 0 28px -6px ${BRAND}cc`,
              }}
            >
              Claim your early access
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>

      {/* Sticky page footer — tagline, Sterlix attribution + website link. */}
      <footer className="mt-auto border-t border-white/5 px-6 py-10 text-center">
        <p className="text-sm tracking-wide text-slate-400">{TAGLINE}</p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <span className="text-xs text-slate-500">
            A product by{" "}
            <span className="font-medium text-slate-300">{COMPANY}</span>
          </span>
          <span aria-hidden className="hidden text-slate-700 sm:inline">
            ·
          </span>
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
            style={{ color: "#b3a8ff" }}
          >
            Check out our website
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <p className="mt-6 text-xs tracking-widest text-slate-600">
          © {new Date().getFullYear()} {COMPANY} · ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pieces                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Brand wordmark — a building mark in a glowing indigo tile beside the
 * "PropManage" wordmark with a "UK" badge, so the name reads as a real logo
 * and is easy to remember.
 */
function BrandLockup() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span
        className="flex size-9 items-center justify-center rounded-xl text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${BRAND}, #8b7cff)`,
          boxShadow: `0 8px 22px -8px ${BRAND}`,
        }}
        aria-hidden
      >
        <Building2 className="size-5" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        Prop<span style={{ color: "#b3a8ff" }}>Manage</span>
        <span
          className="ml-1.5 rounded-md px-1.5 py-0.5 align-middle text-[10px] font-bold tracking-wider"
          style={{ backgroundColor: `${BRAND}26`, color: "#b3a8ff" }}
        >
          UK
        </span>
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className="text-xs font-medium uppercase tracking-[0.22em]"
        style={{ color: "#b3a8ff" }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-slate-400">{subtitle}</p>
    </div>
  );
}

/**
 * High-gloss, reflective pitch-black sheet framed by an ultra-thin glowing
 * brand-indigo border. The wrapper paints the 1px frame + outer glow; the
 * gloss is a faint top-down white sheen overlaid on the obsidian fill.
 */
function ObsidianSheet({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-2xl p-px"
      style={{ boxShadow: `0 0 60px -18px ${BRAND}8c` }}
    >
      {/* Razor-thin brand frame. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset"
        style={{ "--tw-ring-color": `${BRAND}66` } as React.CSSProperties}
      />
      {/* High-gloss reflective sheen. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] via-transparent to-white/[0.02]"
      />
      <div className="relative rounded-[15px] bg-[#070707]">{children}</div>
    </div>
  );
}

function LaunchEventBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
      style={{
        borderColor: `${BRAND}66`,
        backgroundColor: `${BRAND}1a`,
        color: "#b3a8ff",
      }}
    >
      <Sparkles className="size-3.5" aria-hidden />
      Welcome Launch Event Attendee
    </span>
  );
}

/** Styled native select that matches the obsidian/indigo form fields. */
function SelectField({
  id,
  label,
  placeholder,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.02] py-3 pl-4 pr-10 text-sm focus:outline-none [&>option]:bg-[#0b0b0e] [&>option]:text-white"
          style={{ color: value ? "#fff" : "#64748b" }}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500"
          aria-hidden
        />
      </div>
    </div>
  );
}

interface EarlyAccessFormProps {
  name: string;
  onNameChange: (value: string) => void;
  email: string;
  onEmailChange: (value: string) => void;
  accountType: AccountType;
  onAccountTypeChange: (value: AccountType) => void;
  portfolioSize: string;
  onPortfolioSizeChange: (value: string) => void;
  branches: string;
  onBranchesChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  error: string | null;
}

function EarlyAccessForm({
  name,
  onNameChange,
  email,
  onEmailChange,
  accountType,
  onAccountTypeChange,
  portfolioSize,
  onPortfolioSizeChange,
  branches,
  onBranchesChange,
  onSubmit,
  submitting,
  error,
}: EarlyAccessFormProps) {
  const showBranches = hasBranches(accountType);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Claim your early access
        </h2>
        <p className="mt-1.5 text-sm text-slate-400">
          Reserve your place in the private launch cohort.
        </p>
      </div>

      {/* Launch offer — limited free access for the earliest sign-ups. */}
      <div
        className="flex items-center gap-3 rounded-lg border px-3.5 py-3"
        style={{ borderColor: `${BRAND}40`, backgroundColor: `${BRAND}14` }}
      >
        <Gift className="size-5 shrink-0" style={{ color: "#b3a8ff" }} aria-hidden />
        <p className="text-xs leading-relaxed text-slate-300">
          <span className="font-semibold text-white">First 30 members</span>{" "}
          get <span className="font-semibold" style={{ color: "#b3a8ff" }}>30
          days free</span> — full software access, no card required.
        </p>
      </div>

      {/* Account type — accessible segmented radio group. */}
      <fieldset>
        <legend className="mb-2.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          I am a…
        </legend>
        <div role="radiogroup" className="grid gap-2.5">
          {ACCOUNT_TYPES.map((type) => {
            const selected = accountType === type;
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onAccountTypeChange(type)}
                style={
                  selected
                    ? {
                        borderColor: `${BRAND}99`,
                        backgroundColor: `${BRAND}1a`,
                        boxShadow: `0 0 18px -8px ${BRAND}`,
                      }
                    : undefined
                }
                className={cn(
                  "flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2",
                  selected
                    ? "text-white"
                    : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white",
                )}
              >
                {type}
                <span
                  aria-hidden
                  className="flex size-4 items-center justify-center rounded-full border transition-colors"
                  style={
                    selected
                      ? {
                          borderColor: BRAND,
                          backgroundColor: BRAND,
                          color: "#fff",
                        }
                      : { borderColor: "rgba(255,255,255,0.2)" }
                  }
                >
                  {selected && <Check className="size-3" strokeWidth={3} />}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Portfolio size. */}
      <SelectField
        id="early-access-portfolio"
        label="Portfolio size"
        placeholder="Select portfolio size"
        value={portfolioSize}
        onChange={onPortfolioSizeChange}
        options={PORTFOLIO_SIZES}
      />

      {/* Branches — only for multi-branch account types. */}
      {showBranches && (
        <SelectField
          id="early-access-branches"
          label="How many branches?"
          placeholder="Select number of branches"
          value={branches}
          onChange={onBranchesChange}
          options={BRANCH_COUNTS}
        />
      )}

      {/* Name (full name or company). */}
      <div>
        <label
          htmlFor="early-access-name"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
        >
          Full name or company name
        </label>
        <div className="relative">
          <Building2
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500"
            aria-hidden
          />
          <input
            id="early-access-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
            placeholder="Jordan Patel or Patel Lettings Ltd"
            className="w-full rounded-lg border border-white/10 bg-white/[0.02] py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none"
            style={{ caretColor: BRAND }}
          />
        </div>
      </div>

      {/* Email. */}
      <div>
        <label
          htmlFor="early-access-email"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
        >
          Work email
        </label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500"
            aria-hidden
          />
          <input
            id="early-access-email"
            type="email"
            required
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            placeholder="you@company.co.uk"
            className="w-full rounded-lg border border-white/10 bg-white/[0.02] py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none"
            style={{ caretColor: BRAND }}
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_#4f39f6cc] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-4px_#4f39f6] active:scale-[0.98] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        style={{ backgroundColor: BRAND }}
      >
        {/* Light sweep that glides across on hover. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Securing your access…
          </>
        ) : (
          <>
            Request Early Access
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </>
        )}
      </button>
    </form>
  );
}

function SuccessState({
  accountType,
  email,
}: {
  accountType: AccountType;
  email: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center py-6 text-center"
    >
      {/* Animated success mark: a popping circle, a one-shot ring, and a
          checkmark that draws itself in. */}
      <span className="relative flex size-16 items-center justify-center">
        <span
          className="pm-ring absolute inset-0 rounded-full"
          style={{ border: `2px solid ${BRAND}` }}
          aria-hidden
        />
        <span
          className="pm-pop flex size-16 items-center justify-center rounded-full border"
          style={{
            borderColor: `${BRAND}66`,
            backgroundColor: `${BRAND}1a`,
            boxShadow: `0 0 34px -6px ${BRAND}cc`,
          }}
        >
          <svg viewBox="0 0 52 52" className="size-8" aria-hidden>
            <path
              className="pm-check"
              d="M14 27 l8 8 l16 -18"
              fill="none"
              stroke={BRAND}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>

      <h2
        className="pm-rise mt-6 text-2xl font-bold tracking-tight text-white"
        style={{ animationDelay: "0.15s" }}
      >
        Thank you — you’re on the list!
      </h2>
      <p
        className="pm-rise mt-2 max-w-xs text-pretty text-base text-slate-400"
        style={{ animationDelay: "0.28s" }}
      >
        Check your inbox shortly. We’ll email your early-access invite to{" "}
        <span className="font-medium text-white">{email || "you"}</span> the
        moment your spot opens.
      </p>
      <p
        className="pm-rise mt-6 text-xs uppercase tracking-[0.18em]"
        style={{ color: "#9c8eff", animationDelay: "0.4s" }}
      >
        {accountType} · Early Access
      </p>
    </div>
  );
}

/** A single labelled KPI row with an animated fill bar. */
function KpiRow({
  label,
  value,
  pct,
}: {
  label: string;
  value: string;
  pct: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-xs font-semibold text-white">{value}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="pm-grow-x h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: BRAND }}
        />
      </div>
    </div>
  );
}

/**
 * A mock PropManage dashboard — the product itself rather than an abstract
 * graphic, so the panel clearly reads as property-management software. KPI
 * bars and the rent chart animate in on load (and a "Live" dot pulses),
 * all honouring the global prefers-reduced-motion rule.
 */
function PropertyDashboard() {
  // Relative heights (%) for the "monthly rent" mini bar chart.
  const rentBars = [44, 58, 50, 70, 62, 86];

  return (
    <div
      className="w-full max-w-[300px] rounded-2xl border border-white/10 bg-[#0b0b0e] p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
      role="img"
      aria-label="PropManage dashboard preview showing rent, occupancy and compliance for a property"
    >
      {/* Header — the property + a live status. */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="flex size-9 items-center justify-center rounded-lg border"
            style={{
              borderColor: `${BRAND}33`,
              backgroundColor: `${BRAND}14`,
              color: "#b3a8ff",
            }}
          >
            <Building2 className="size-4.5" aria-hidden />
          </span>
          <div>
            <div className="text-sm font-semibold leading-tight text-white">
              Riverside Court
            </div>
            <div className="text-[11px] text-slate-500">
              24 flats · London E14
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300">
          <span
            className="size-1.5 animate-pulse rounded-full"
            style={{ backgroundColor: BRAND }}
            aria-hidden
          />
          Live
        </span>
      </div>

      {/* KPI rows. */}
      <div className="mt-5 space-y-3.5">
        <KpiRow label="Rent collected" value="£42,800" pct={92} />
        <KpiRow label="Occupancy" value="23 / 24" pct={96} />
        <KpiRow label="Compliance" value="On track" pct={100} />
      </div>

      {/* Mini rent chart. */}
      <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
        <div className="flex h-16 items-end gap-1.5">
          {rentBars.map((height, index) => (
            <span
              key={index}
              className="pm-grow-y flex-1 rounded-sm"
              style={{
                height: `${height}%`,
                backgroundColor:
                  index === rentBars.length - 1 ? BRAND : `${BRAND}59`,
                animationDelay: `${index * 90}ms`,
              }}
            />
          ))}
        </div>
        <div className="mt-2 text-[10px] uppercase tracking-wider text-slate-500">
          Monthly rent · last 6 months
        </div>
      </div>
    </div>
  );
}
