"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Email-gated lead-capture form for a single resource. Lives on the
// /resources/[slug] landing page (D-04). Receives only serializable props so it
// can be rendered from a server component.
export function ResourceLeadForm({
  resourceTitle,
  source,
  category,
  ctaLabel,
  onDone,
}: {
  resourceTitle: string;
  source: string;
  category: string;
  ctaLabel: string;
  onDone?: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
      >
        <CheckCircle2 className="size-4 shrink-0" />
        Check your inbox — it's on its way!
      </motion.div>
    );
  }

  return (
    <form
      className="space-y-2"
      onSubmit={async (event) => {
        event.preventDefault();
        setState("loading");
        try {
          const leadResponse = await fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              resource: resourceTitle,
              name,
              email,
              company,
              source,
            }),
          });

          const newsletterResponse = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              source,
              tags: [source, category.toLowerCase()],
            }),
          });

          if (leadResponse.ok) {
            if (!newsletterResponse.ok) {
              console.warn("Newsletter capture failed for resource lead");
            }
            setState("done");
            onDone?.();
          } else {
            setState("error");
          }
        } catch {
          setState("error");
        }
      }}
    >
      <Input
        type="text"
        placeholder="Your name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="bg-background"
      />
      <Input
        type="email"
        placeholder="Work email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="bg-background"
      />
      <Input
        type="text"
        placeholder="Company / brand"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        className="bg-background"
      />
      <Button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full font-semibold"
      >
        {state === "loading" ? (
          "Sending..."
        ) : (
          <>
            <Download className="mr-2 size-4" />
            {ctaLabel}
          </>
        )}
      </Button>
      {state === "error" ? (
        <p className="text-xs text-destructive">
          Could not submit. Please try again.
        </p>
      ) : null}
    </form>
  );
}
