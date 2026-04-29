"use client";

import { useState, useEffect, useRef } from "react";
import { Cpu, Layers3, LifeBuoy, LineChart, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Branding",
    detail: "Defining the identity and market position.",
    icon: Palette,
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Web / App",
    detail: "Building the customer-facing interface.",
    icon: Layers3,
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "SaaS / IT",
    detail: "Engineering logic, APIs, and infrastructure.",
    icon: Cpu,
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Marketing",
    detail: "Scaling the user base and acquisition engine.",
    icon: LineChart,
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Support",
    detail: "Protecting uptime, security, and investment value.",
    icon: LifeBuoy,
  },
];

const RADIUS = 155;

export function LifecycleOrbital() {
  const [angle, setAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.22) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const getPos = (index: number) => {
    const deg = ((index / phases.length) * 360 + angle) % 360;
    const rad = (deg * Math.PI) / 180;
    const x = RADIUS * Math.cos(rad);
    const y = RADIUS * Math.sin(rad);
    const depth = Math.sin(rad); // -1 (back) to +1 (front)
    const opacity = 0.38 + 0.62 * ((1 + depth) / 2);
    const zIndex = Math.round(30 + 50 * ((1 + depth) / 2));
    return { x, y, depth, opacity, zIndex };
  };

  const handleNodeClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeId === id) {
      setActiveId(null);
      setAutoRotate(true);
    } else {
      setActiveId(id);
      setAutoRotate(false);
    }
  };

  const handleBgClick = () => {
    setActiveId(null);
    setAutoRotate(true);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleBgClick}
      className="relative mx-auto flex aspect-square w-full max-w-120 cursor-default items-center justify-center select-none"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.10)_0%,transparent_68%)]" />

      {/* Orbit ring */}
      <div className="pointer-events-none absolute h-77.5 w-77.5 rounded-full border border-dashed border-primary/18" />

      {/* Second faint outer ring */}
      <div className="pointer-events-none absolute h-97.5 w-97.5 rounded-full border border-primary/[0.07]" />

      {/* Center hub */}
      <div className="relative z-20 flex h-30 w-30 items-center justify-center rounded-full border border-primary/30 bg-background">
        {/* Pulse rings */}
        <span className="absolute h-34 w-34 animate-ping rounded-full border border-primary/18 opacity-70" />
        <span
          className="absolute h-40 w-40 animate-ping rounded-full border border-primary/10 opacity-50"
          style={{ animationDelay: "0.7s" }}
        />
        {/* Inner radial fill */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.22)_0%,transparent_72%)]" />
        {/* Inner ring */}
        <div className="absolute h-16 w-16 rounded-full border border-primary/20" />
        {/* Text */}
        <div className="relative z-10 text-center">
          <div className="text-[8px] font-semibold uppercase tracking-[0.22em] text-primary/55">
            Core
          </div>
          <div className="mt-0.5 text-[11px] font-semibold leading-tight text-foreground">
            Business
            <br />
            Core
          </div>
        </div>
      </div>

      {/* Orbital nodes */}
      {phases.map((phase, index) => {
        const { x, y, depth, opacity, zIndex } = getPos(index);
        const Icon = phase.icon;
        const isActive = activeId === phase.id;
        // Show popup above for nodes in lower half, below for upper half
        const popupAbove = y > 30;
        const scale = 0.82 + 0.18 * ((1 + depth) / 2);

        return (
          <div
            key={phase.id}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              zIndex: isActive ? 200 : zIndex,
              opacity: isActive ? 1 : opacity,
              transition: "opacity 100ms linear",
            }}
          >
            {/* Clickable node */}
            <button
              onClick={(e) => handleNodeClick(phase.id, e)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : scale})`,
              }}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_22px_rgba(79,70,229,0.45)]"
                    : "border-primary/35 bg-background/92 text-primary hover:border-primary/65 hover:shadow-[0_0_14px_rgba(79,70,229,0.25)]",
                )}
              >
                <Icon className="size-4.5" />
              </div>
            </button>

            {/* Label — always below node */}
            <div
              className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 text-center"
              style={{
                transform: `translate(-50%, 0) scale(${isActive ? 1 : scale})`,
              }}
            >
              <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-primary/45">
                {phase.phase}
              </div>
              <div
                className={cn(
                  "mt-0.5 text-[11px] font-semibold whitespace-nowrap transition-colors duration-300",
                  isActive ? "text-primary" : "text-foreground/80",
                )}
              >
                {phase.title}
              </div>
            </div>

            {/* Expanded popup */}
            {isActive && (
              <div
                className={cn(
                  "absolute left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl border border-primary/25 bg-background/97 p-4 shadow-[0_16px_44px_rgba(0,0,0,0.14)] backdrop-blur-sm",
                  popupAbove ? "bottom-11" : "top-14",
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Connector line */}
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 h-2.5 w-px bg-primary/35",
                    popupAbove ? "-bottom-2.5" : "-top-2.5",
                  )}
                />
                <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary/55 mb-1">
                  {phase.phase}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {phase.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {phase.detail}
                </p>
                <div className="mt-3 h-px w-full bg-primary/10" />
                <div className="mt-2.5 h-0.5 w-full overflow-hidden rounded-full bg-primary/10">
                  <div
                    className="h-full bg-linear-to-r from-primary to-primary/50 transition-all duration-700"
                    style={{ width: `${(phase.id / phases.length) * 100}%` }}
                  />
                </div>
                <div className="mt-1 text-right text-[9px] text-primary/40 uppercase tracking-wider">
                  Lifecycle progression
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Hint text */}
      <div
        className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-[9px] uppercase tracking-[0.25em] text-muted-foreground/30 transition-opacity duration-500"
        style={{ opacity: activeId ? 0 : 1 }}
      >
        Click a node to explore
      </div>
    </div>
  );
}
