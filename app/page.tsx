"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site-header";
import { Flagstone } from "@/components/ui/flagstone";
import { restaurant, stones } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const courtyardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>("[data-stone]");
      tiles.forEach((tile, i) => {
        gsap.fromTo(
          tile,
          { opacity: 0, y: 34, scale: 0.94, rotate: i % 2 === 0 ? -2 : 2 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tile,
              start: "top 88%",
            },
          }
        );
      });
    }, courtyardRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-background">
      <SiteHeader />

      {/* The courtyard: content laid out as irregular stone-textured
          flagstones fitted edge to edge, grout showing between them —
          the structural backbone of the page, not a hero+grid template. */}
      <div
        ref={courtyardRef}
        className="relative grid grid-cols-12 gap-[3vw] bg-grout px-[4vw] pb-24 pt-28 md:gap-[1.6vw] md:px-[3vw] md:pt-36"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--flagstone-night-vignette)" }}
        />
        {stones.map((stone, i) => (
          <Flagstone key={stone.id} stone={stone} index={i} />
        ))}
      </div>

      <footer className="flex flex-col gap-2 border-t border-border bg-background px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
        <span className="text-label text-[0.62rem] text-muted-foreground">
          © {new Date().getFullYear()} Konoba {restaurant.name} · {restaurant.village} · Dalmacija
        </span>
        <a href={restaurant.phoneHref} className="text-label text-[0.62rem] text-sea-bright">
          {restaurant.phone}
        </a>
      </footer>
    </main>
  );
}
