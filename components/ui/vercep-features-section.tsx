import { ShieldCheck, Sparkles, Target, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

const marqueeData = [
  "What is the smartest growth channel for this quarter?",
  "How do we reduce CAC while improving lead quality?",
  "What should we automate first in operations?",
  "How can we improve conversion on core pages?",
  "What KPIs should leadership review weekly?",
  "How do we stand out in a crowded market?",
  "Which offer resonates best with our ICP?",
  "How do we scale without losing brand consistency?",
  "What timeline is realistic for launch?",
  "How do we prioritize high-impact experiments?",
  "How can we improve retention after acquisition?",
  "What does a reliable growth system look like?",
];

const features = [
  {
    description:
      "No noise, no complexity. You get clear execution plans and practical decisions your team can implement fast.",
    icon: ShieldCheck,
    title: "Simple and actionable",
  },
  {
    description:
      "Every sprint is tied to growth outcomes, so design and marketing decisions move revenue forward.",
    icon: TrendingUp,
    title: "Built for measurable results",
  },
  {
    description:
      "We bring proven frameworks from product, web, and performance so you avoid expensive trial and error.",
    icon: Sparkles,
    title: "Proven execution playbook",
  },
  {
    description:
      "From strategy to post-launch optimisation, we stay in the loop as your long-term growth partner.",
    icon: Target,
    title: "Support beyond launch",
  },
];

export function VercepFeaturesSection() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2,
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-[linear-gradient(180deg,rgba(99,102,241,0.14)_0%,rgba(99,102,241,0.04)_100%)] py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-[feature-float_12s_ease-in-out_infinite]" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-primary/14 blur-3xl animate-[feature-float_15s_ease-in-out_infinite_reverse]" />
      </div>
      <div className="mx-auto max-w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-5 px-5 text-center md:px-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Sterlixit Framework
          </p>
          <h2 className="max-w-3xl text-[2rem] font-medium leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-6xl">
            Removing the roadblocks to your success
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            It is easy to get trapped in conflicting advice and endless to-do
            lists. We strip away the noise and focus your team on the actions
            that create real momentum.
          </p>
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-background/76 p-2.5 shadow-[0_20px_56px_rgba(79,70,229,0.14)] backdrop-blur-xl md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
            <div className="absolute left-0 z-40 h-full w-24 bg-linear-to-r from-background to-transparent" />
            <div className="absolute right-0 z-40 h-full w-24 bg-linear-to-l from-background to-transparent" />

            <div className="relative z-10 flex w-full flex-col gap-3 py-1">
              <Marquee
                className="[--duration:45s] [--gap:0.9rem] py-1"
                repeat={2}
                pauseOnHover
              >
                {m1.map((q) => (
                  <Badge
                    className="my-1 rounded-full border-primary/30 bg-primary/12 px-3 py-1.5 text-primary shadow-[0_8px_22px_rgba(79,70,229,0.1)]"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:50s] [--gap:0.9rem] py-1"
                repeat={2}
                reverse
                pauseOnHover
              >
                {m2.map((q) => (
                  <Badge
                    className="my-1 rounded-full border-primary/30 bg-primary/12 px-3 py-1.5 text-primary shadow-[0_8px_22px_rgba(79,70,229,0.1)]"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:42s] [--gap:0.9rem] py-1"
                repeat={2}
                pauseOnHover
              >
                {m3.map((q) => (
                  <Badge
                    className="my-1 rounded-full border-primary/30 bg-primary/12 px-3 py-1.5 text-primary shadow-[0_8px_22px_rgba(79,70,229,0.1)]"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 px-5 md:mt-14 md:px-10 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="group rounded-2xl border border-border/60 bg-background/72 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-background/85 hover:shadow-[0_18px_40px_rgba(79,70,229,0.1)]"
                key={feature.title}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition group-hover:border-primary/50 group-hover:bg-primary/15">
                  <Icon className="size-6" />
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold tracking-tight leading-tight sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
