"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background/70 p-6 backdrop-blur",
      )}
    >
      <h1 className="mb-2 text-2xl font-bold">Component Example</h1>
      <h2 className="text-xl font-semibold text-primary">{count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="rounded-lg border border-border px-3 py-1 transition hover:border-primary/40 hover:bg-primary/10"
          aria-label="decrease"
        >
          -
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-lg border border-border px-3 py-1 transition hover:border-primary/40 hover:bg-primary/10"
          aria-label="increase"
        >
          +
        </button>
      </div>
    </div>
  );
};
