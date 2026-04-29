"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Database, Network, ShieldCheck, Wrench } from "lucide-react";

const drivers = [
  {
    title: "Architecture",
    detail:
      "The complexity of your data model, business logic, and platform structure.",
    icon: Database,
  },
  {
    title: "Integrations",
    detail:
      "Connecting third-party APIs, internal tools, or legacy systems without failure risk.",
    icon: Network,
  },
  {
    title: "Compliance",
    detail:
      "Security depth required for HIPAA-aware, GDPR-aware, and FinTech-class operations.",
    icon: ShieldCheck,
  },
  {
    title: "Support Tier",
    detail:
      "Response time, monitoring intensity, and post-launch reliability commitments.",
    icon: Wrench,
  },
];

function genRandomPattern(length = 5): number[][] {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

type Driver = (typeof drivers)[number];

function DriverCard({ driver }: { driver: Driver }) {
  const squares = React.useMemo(() => genRandomPattern(), []);
  const Icon = driver.icon;
  return (
    <div className="relative overflow-hidden p-8 md:p-9">
      {/* Subtle grid pattern overlay */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-linear-to-r from-primary/6 to-transparent mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={squares}
            className="fill-primary/[0.07] stroke-primary/[0.14] absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      <div className="relative z-10 flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
        <Icon className="size-5 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="relative z-10 mt-10 text-base font-semibold tracking-tight">
        {driver.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-muted-foreground leading-7">
        {driver.detail}
      </p>
    </div>
  );
}

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.15,
  children,
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -10, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function InvestmentDriversGrid() {
  return (
    <AnimatedContainer
      delay={0.15}
      className="grid grid-cols-1 divide-y divide-dashed divide-border/60 border border-dashed border-border/60 sm:grid-cols-2 sm:divide-x"
    >
      {drivers.map((driver) => (
        <DriverCard key={driver.title} driver={driver} />
      ))}
    </AnimatedContainer>
  );
}
