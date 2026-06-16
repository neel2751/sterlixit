"use client";

import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOutCubic },
  },
};

const chips = ["Multi-tenancy", "Security by design", "API-first architecture"];

export function SaasAdvantageSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[50vh] w-[50vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.14)_0%,transparent_66%)]" />
        <div className="absolute bottom-0 right-1/4 h-[38vh] w-[38vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.09)_0%,transparent_66%)]" />
      </div>

      {/* Hairline separator top */}
      <div className="absolute inset-x-0 top-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.18)_0%,transparent_100%)]" />

      <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ── Text column ── */}
          <motion.div
            variants={fadeUp}
            className="flex max-w-130 flex-col gap-5 md:mx-0"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              <Gauge className="size-3.5" />
              SaaS Advantage
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-[2.4rem] md:leading-[1.2]">
              Why We Specialise in{" "}
              <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                Custom SaaS Solutions
              </span>
            </h2>

            <p className="text-sm leading-7 text-neutral-400 md:text-[15px] md:leading-8">
              Building custom SaaS platforms — like our Property Management
              Suite — is one of the most effective ways to automate operations
              and increase enterprise value. Our experienced team handles the
              heavy lifting: security, multi-tenancy, and API integrations, so
              you can stay focused on growth.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {chips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.13em] text-white/65"
                >
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Image / mockup column ── */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-85 md:max-w-115"
          >
            {/* Background decorative image card — offset, blurred */}
            <motion.div
              className="absolute right-[-10%] top-[8%] z-0 h-80 w-70 overflow-hidden rounded-[28px] md:h-110 md:w-95"
              style={{ filter: "blur(2px)" }}
              initial={{ y: 0 }}
              whileInView={{ y: -28 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div
                className="h-full w-full rounded-[28px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80)",
                }}
              />
              {/* Dark overlay to integrate into dark section */}
              <div className="absolute inset-0 rounded-[28px] bg-neutral-950/50" />
            </motion.div>

            {/* Foreground mockup card */}
            <motion.div
              className="relative z-10 h-95 w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/4 backdrop-blur-sm md:h-135"
              initial={{ y: 0 }}
              whileInView={{ y: 28 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80)",
                }}
              />
              {/* Overlay gradient for text legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hairline separator bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)]" />
    </section>
  );
}
