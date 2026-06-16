"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type PanelTab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function TabbedPanel({
  tabs,
  defaultTabId,
  className,
}: {
  tabs: PanelTab[];
  defaultTabId?: string;
  className?: string;
}) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id ?? "");
  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-0", className)}>
      <nav
        className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1 lg:border-r lg:border-border/60 lg:pr-5"
        aria-label="Panel tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveId(tab.id)}
            className={cn(
              "flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-left transition",
              activeId === tab.id
                ? "bg-primary/12 font-medium text-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 shrink-0 rounded-full transition",
                activeId === tab.id ? "bg-primary" : "bg-border",
              )}
            />
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="min-h-[300px] lg:pl-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {activeTab?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
