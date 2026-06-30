// Server-renders a JSON-LD <script> directly into the HTML so crawlers and AI
// agents that read static markup (and don't execute JS) can see structured data
// — unlike next/script's afterInteractive strategy, which injects after
// hydration and never reaches the raw HTML (D-12).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
