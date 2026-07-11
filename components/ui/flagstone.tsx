import { cn } from "@/lib/utils";
import type { Stone } from "@/lib/content";

// Irregular, hand-cut-looking polygon outlines — one family per stone size.
// Deliberately NOT rectangles and NOT small uniform tiles: these are large,
// jagged-edged blocks like real quarried flagstones fitted into a courtyard,
// as opposed to a colorful terrazzo/mosaic-tile mechanic.
const CLIP_PATHS: Record<Stone["size"], string[]> = {
  xl: [
    "polygon(2% 9%, 23% 0%, 79% 2%, 98% 12%, 100% 46%, 96% 89%, 79% 100%, 38% 96%, 7% 100%, 0% 58%)",
    "polygon(0% 14%, 20% 1%, 61% 0%, 96% 8%, 100% 40%, 99% 83%, 84% 99%, 41% 100%, 4% 92%, 1% 52%)",
  ],
  lg: [
    "polygon(0% 13%, 16% 0%, 86% 3%, 100% 19%, 98% 83%, 87% 100%, 19% 97%, 1% 84%)",
    "polygon(3% 0%, 90% 4%, 100% 27%, 96% 78%, 100% 96%, 62% 100%, 12% 100%, 0% 70%, 4% 22%)",
  ],
  md: [
    "polygon(0% 21%, 21% 0%, 100% 7%, 96% 91%, 74% 100%, 6% 96%)",
    "polygon(6% 0%, 100% 9%, 94% 82%, 100% 100%, 24% 97%, 0% 68%)",
  ],
  sm: [
    "polygon(0% 16%, 26% 0%, 100% 11%, 91% 100%, 9% 93%)",
    "polygon(9% 0%, 100% 6%, 92% 90%, 60% 100%, 0% 84%)",
  ],
};

const TILT: Record<number, string> = {
  0: "rotate(-0.6deg)",
  1: "rotate(0.9deg)",
};

const SPAN: Record<string, string> = {
  hero: "col-span-12 row-span-2 md:col-span-7",
  story: "col-span-12 row-span-2 md:col-span-5",
  riba: "col-span-6 md:col-span-4",
  peka: "col-span-6 md:col-span-3",
  vino: "col-span-12 md:col-span-3",
  uvala: "col-span-12 md:col-span-7",
  contact: "col-span-6 md:col-span-3",
  hours: "col-span-6 md:col-span-2",
};

export function Flagstone({ stone, index }: { stone: Stone; index: number }) {
  const clip = CLIP_PATHS[stone.size][index % 2];
  const tilt = TILT[index % 2];
  const isDark = stone.size === "xl" || stone.size === "lg";

  return (
    <div
      id={stone.id}
      data-stone
      className={cn(
        "relative min-h-[13rem] p-[7%] scroll-mt-24",
        SPAN[stone.id] ?? "col-span-12 md:col-span-4"
      )}
      style={{ transform: tilt }}
    >
      <div
        className={cn(
          "stone-grain relative flex h-full w-full flex-col justify-end gap-3 bg-stone-face p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_28px_-16px_rgba(0,0,0,0.65)] md:p-9",
          "border border-black/30"
        )}
        style={{ clipPath: clip }}
      >
        <p className="text-label text-[0.62rem] text-sea-bright">{stone.kicker}</p>
        <h3
          className={cn(
            "font-display leading-[1.02] tracking-[var(--tracking-display)] text-foreground",
            stone.size === "xl"
              ? "text-4xl md:text-6xl lg:text-7xl"
              : stone.size === "lg"
              ? "text-3xl md:text-5xl"
              : "text-xl md:text-2xl"
          )}
        >
          {stone.title}
        </h3>
        <p
          className={cn(
            "max-w-md text-foreground/85",
            stone.size === "xl" || stone.size === "lg" ? "text-base md:text-lg" : "text-sm"
          )}
        >
          {stone.body}
        </p>
        {stone.sub ? (
          <p className="text-xs italic text-muted-foreground">{stone.sub}</p>
        ) : null}
      </div>
      {isDark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[7%]"
          style={{ clipPath: clip, background: "var(--flagstone-glow, none)" }}
        />
      ) : null}
    </div>
  );
}
