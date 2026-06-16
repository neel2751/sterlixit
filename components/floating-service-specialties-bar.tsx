"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Code2,
  LayoutGrid,
  Megaphone,
  Palette,
  Rocket,
  Wrench,
} from "lucide-react";

const specialtyLinks = [
  { label: "Branding", href: "/services/graphics-branding", icon: Palette },
  {
    label: "Web Dev",
    href: "/services/web-design-development",
    icon: LayoutGrid,
  },
  { label: "Marketing", href: "/services/digital-marketing", icon: Megaphone },
  { label: "MVP", href: "/services/mvp-development", icon: Rocket },
  { label: "SaaS", href: "/services/custom-saas-it-solutions", icon: Code2 },
  { label: "Support", href: "/services/support-maintenance", icon: Wrench },
];

export function FloatingServiceSpecialtiesBar() {
  const pathname = usePathname();
  const [isHiddenNearFooter, setIsHiddenNearFooter] = useState(false);

  useEffect(() => {
    const syncVisibility = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      setIsHiddenNearFooter(footerTop <= window.innerHeight - 96);
    };

    syncVisibility();
    window.addEventListener("scroll", syncVisibility, { passive: true });
    window.addEventListener("resize", syncVisibility);

    return () => {
      window.removeEventListener("scroll", syncVisibility);
      window.removeEventListener("resize", syncVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-20 z-40 px-4 transition-all duration-300 md:bottom-5 ${
        isHiddenNearFooter
          ? "pointer-events-none translate-y-8 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto w-full max-w-max rounded-[1.4rem] border border-primary/25 bg-[linear-gradient(160deg,rgba(79,70,229,0.2)_0%,rgba(79,70,229,0.04)_40%,rgba(255,255,255,0.96)_100%)] px-4 py-3 shadow-[0_20px_56px_rgba(79,70,229,0.22)] backdrop-blur-xl md:px-5">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground text-center">
          Need a different solution? Browse our other specialties:
        </div>

        <div className="flex flex-wrap gap-2">
          {specialtyLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all md:text-sm ${
                  isActive
                    ? "border-primary/40 bg-primary/16 text-primary shadow-[0_8px_20px_rgba(79,70,229,0.18)]"
                    : "border-border/60 bg-background/90 text-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                <item.icon className="size-3.5 md:size-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
