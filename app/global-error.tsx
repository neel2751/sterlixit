"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en-GB">
      <body className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
        <main className="w-full max-w-xl rounded-2xl border border-border/70 bg-card p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Application Error
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            We hit an unexpected issue while rendering this page. Please retry,
            or go back to the homepage.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={reset}>Try again</Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
