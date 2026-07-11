"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/lib/content";

const NAV_TARGETS = [
  { id: "story", label: "Priča" },
  { id: "riba", label: "Kuhinja" },
  { id: "uvala", label: "Uvala" },
  { id: "contact", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-(--duration-base) md:px-10 md:py-6 " +
          (scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : "")
        }
      >
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-[var(--tracking-display)] text-foreground md:text-xl">
            {restaurant.name}
          </span>
          <span className="text-label text-[0.6rem] text-muted-foreground">
            {restaurant.kind}
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="courtyard-nav"
          className="group flex items-center gap-3 border border-stone-face-bright px-4 py-2 text-label text-[0.65rem] text-foreground transition-colors duration-(--duration-base) hover:border-ember"
        >
          {open ? "Zatvori" : "Izbornik"}
          <span className="relative flex h-2.5 w-4 flex-col justify-between">
            <span
              className={
                "block h-px w-full bg-current transition-transform duration-(--duration-base) " +
                (open ? "translate-y-[4.5px] rotate-45" : "")
              }
            />
            <span
              className={
                "block h-px w-full bg-current transition-transform duration-(--duration-base) " +
                (open ? "-translate-y-[4.5px] -rotate-45" : "")
              }
            />
          </span>
        </button>
      </header>

      {/* Sibling of <header>, not nested inside it — a backdrop-blur header
          creates a new containing block, which would trap a `fixed`
          descendant inside the header's own small box instead of the
          viewport. Explicit z-40 keeps it under the header's z-50. */}
      <div
        id="courtyard-nav"
        className={
          "fixed inset-0 z-40 flex flex-col justify-between bg-background px-6 py-24 md:px-16 " +
          (open ? "flex" : "hidden")
        }
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1">
          {NAV_TARGETS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="group flex items-baseline gap-4 border-b border-border py-4 text-left"
            >
              <span className="text-label text-xs text-sea-bright">
                0{i + 1}
              </span>
              <span className="font-display text-4xl italic text-foreground transition-colors duration-(--duration-base) group-hover:text-ember md:text-6xl">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>{restaurant.address}</span>
          <a href={restaurant.phoneHref} className="text-sea-bright">
            {restaurant.phone}
          </a>
        </div>
      </div>
    </>
  );
}
