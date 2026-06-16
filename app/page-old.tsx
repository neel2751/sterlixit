import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedReveal,
  ParallaxOnScroll,
  SnapSection,
  AnimatedTextRail,
  ExitIntentDialog,
  HomeHeroMotion,
  LiveChatButton,
  MarketingFeatureStack,
  SiteFooter,
  SiteHeader,
  SiteSection,
} from "@/components/site-shell";
import {
  coreServices,
  differentiators,
  industries,
  portfolioItems,
  processSteps,
  testimonials,
  blogPosts,
} from "@/lib/site-data";
import { NewsletterSignup } from "@/components/site-forms";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background md:h-screen md:snap-y md:snap-proximity md:overflow-y-auto md:scroll-smooth md:scroll-pt-20">
      <SiteHeader />
      <SnapSection className="md:block md:py-8">
        <div className="w-full">
          <HomeHeroMotion />
          <AnimatedTextRail
            items={[
              "Earn trust",
              "Win hearts",
              "Raise round",
              "Move faster",
              "Spark excitement",
            ]}
          />
        </div>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Brands We’ve Worked With"
          description="Trusted by startups and growth-stage companies across multiple industries."
        >
          <ParallaxOnScroll offset={92}>
            <div className="space-y-4 rounded-2xl border border-border/70 bg-[linear-gradient(160deg,rgba(95,110,255,0.08),transparent_45%)] p-5 md:p-8">
              <div className="flex flex-wrap gap-3">
                {[
                  "Atlas",
                  "HealthFlow",
                  "Lumen",
                  "Optima",
                  "Nexa",
                  "Aurora",
                ].map((logo, index) => (
                  <AnimatedReveal key={logo} delay={index * 0.06}>
                    <div className="rounded-full border border-border/80 bg-background/80 px-5 py-2 text-sm tracking-wide text-foreground/85 backdrop-blur">
                      {logo}
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Teams choose Sterlixit when they need one accountable partner
                for strategy, build, and growth execution.
              </p>
            </div>
          </ParallaxOnScroll>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Core Service Pillars"
          description="Five integrated capabilities to accelerate your digital growth."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <AnimatedReveal key={service.slug} delay={index * 0.06}>
                <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/30 to-background p-6 md:p-8 transition hover:border-primary/30 hover:shadow-lg">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition group-hover:opacity-100" />
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="group/btn mt-2 h-auto w-fit p-0 text-primary hover:bg-transparent"
                    >
                      <Link href={`/services/${service.slug}`}>
                        Learn more <ArrowUpRight className="ml-1 size-4 transition group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Why Leading Teams Choose Sterlixit"
          description="Our differentiation is built on speed, rigor, and measurable outcomes."
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.slice(0, 6).map((item, index) => (
              <AnimatedReveal key={item.title} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/40 to-background/50 p-6 md:p-8 transition hover:border-primary/20">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex h-2 w-2 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Recent Case Studies"
          description="Proven outcomes from real client partnerships."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioItems.map((project, index) => (
              <AnimatedReveal key={project.slug} delay={index * 0.08} hover>
                <article className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/20 to-background p-6 md:p-8 transition hover:border-primary/30">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />
                  <p className="text-xs uppercase tracking-wider text-primary/80 font-medium">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn mt-6 h-auto w-fit p-0 text-primary hover:bg-transparent"
                  >
                    <Link href={`/portfolio/${project.slug}`}>
                      Read Case Study <ArrowUpRight className="ml-2 size-4 transition group-hover/btn:translate-x-1 group-hover/btn:translate-y--1" />
                    </Link>
                  </Button>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Our Process"
          description="Predictable, milestone-driven engagement from kickoff to scale."
        >
          <div className="relative pb-4">
            <div className="grid gap-4 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <AnimatedReveal key={step} delay={index * 0.08}>
                  <div className="relative">
                    <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/30 to-background p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="font-semibold text-sm leading-snug">{step}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden absolute top-1/2 -right-2 h-0.5 w-4 bg-gradient-to-r from-primary/60 to-transparent md:block" />
                    )}
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Testimonials"
          description="Client feedback from delivered engagements."
        >
          <ParallaxOnScroll offset={116}>
            <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
              <AnimatedReveal>
                <div className="rounded-2xl border border-border/70 bg-[linear-gradient(145deg,rgba(95,110,255,0.12),transparent_48%)] p-5 md:p-8">
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: testimonials[0].rating }).map(
                      (_, i) => (
                        <Star
                          key={`featured-${i}`}
                          className="size-4 fill-primary text-primary"
                        />
                      ),
                    )}
                  </div>
                  <p className="text-xl font-medium leading-relaxed md:text-2xl">
                    “{testimonials[0].quote}”
                  </p>
                  <p className="mt-5 text-sm font-semibold">
                    {testimonials[0].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[0].role}
                  </p>
                  <Button variant="link" className="mt-3 h-auto p-0" asChild>
                    <Link href="/testimonials">See More Client Stories</Link>
                  </Button>
                </div>
              </AnimatedReveal>
              <div className="space-y-3">
                {testimonials.slice(1).map((item, index) => (
                  <AnimatedReveal key={item.name} delay={index * 0.08}>
                    <div className="rounded-xl border border-border/70 bg-background/70 p-4 md:p-5">
                      <p className="text-sm text-muted-foreground">
                        “{item.quote}”
                      </p>
                      <p className="mt-2 text-sm font-semibold">{item.name}</p>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </ParallaxOnScroll>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Vertical Expertise"
          description="Industry-specific knowledge across sectors."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((industry, index) => (
              <AnimatedReveal key={industry.slug} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/20 to-background p-6 md:p-8 transition hover:border-primary/30">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {industry.challenges.join(" • ")}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn mt-4 h-auto w-fit p-0 text-primary hover:bg-transparent"
                  >
                    <Link href={`/industries/${industry.slug}`}>
                      Explore <ArrowUpRight className="ml-1 size-4 transition group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Let’s Build Your Digital Growth Engine"
          description="Book a strategy session and get a custom execution roadmap."
        >
          <ParallaxOnScroll offset={90}>
            <AnimatedReveal>
              <div className="rounded-2xl border bg-secondary/50 p-5 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Ready to accelerate growth?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get a free consultation with our strategy team.
                    </p>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/book-free-strategy-call">
                      Get Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedReveal>
          </ParallaxOnScroll>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Latest Insights"
          description="Growth strategies, product thinking, and performance marketing."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <AnimatedReveal key={post.slug} delay={index * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/30 to-background p-6 md:p-8 transition hover:border-primary/30">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />
                  <p className="text-xs uppercase tracking-wider text-primary/80 font-medium">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn mt-4 h-auto w-fit p-0 text-primary hover:bg-transparent"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read Article <ArrowUpRight className="ml-1 size-4 transition group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </SiteSection>
      </SnapSection>

      <SnapSection>
        <SiteSection
          title="Growth Strategies & Insights"
          description="Subscribe to get practical playbooks and case studies."
        >
          <AnimatedReveal>
            <div className="mx-auto max-w-2xl">
              <NewsletterSignup />
            </div>
          </AnimatedReveal>
        </SiteSection>
      </SnapSection>

      <SnapSection className="md:min-h-0 md:py-16">
        <MarketingFeatureStack />
      </SnapSection>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
