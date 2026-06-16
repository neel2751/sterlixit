"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

type RailSection = {
  id: string;
  label: string;
};

export function ServiceDetailScrollRail({
  sections,
}: {
  sections: RailSection[];
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const { scrollYProgress } = useScroll();

  const validSections = useMemo(
    () => sections.filter((section) => Boolean(section.id)),
    [sections],
  );

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.32;
      let currentId = validSections[0]?.id ?? "";

      for (const section of validSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= threshold) {
          currentId = section.id;
        }
      }

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [validSections]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    // Forces Framer to keep this component reactive to scroll progress updates.
  });

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-0.5 bg-border/30">
        <motion.div
          className="h-full origin-left bg-primary"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <aside className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="pointer-events-auto rounded-2xl border border-border/70 bg-background/88 px-3 py-3 backdrop-blur">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            On This Page
          </div>
          <div className="relative flex gap-3">
            <div className="relative ml-1 w-px bg-border/70">
              <motion.div
                className="absolute left-0 top-0 w-px origin-top bg-primary"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
            <nav className="space-y-1.5">
              {validSections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "group flex items-center gap-2 rounded-full px-2 py-1 text-[11px] transition",
                      isActive
                        ? "bg-primary/12 text-foreground"
                        : "text-muted-foreground hover:bg-primary/7 hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full transition",
                        isActive ? "bg-primary" : "bg-border",
                      )}
                    />
                    {section.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
