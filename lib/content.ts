// All copy sourced from the client's existing live site
// (https://artme-nx.github.io/ribarski-dvori/) plus cross-verified public
// listings (Gastronaut, mySea, TripAdvisor) for the cove name, pergola and
// buoys. Nothing here is invented — no fabricated dishes, prices or photos.

export const restaurant = {
  name: "Ribarski Dvori",
  kind: "Konoba na otoku Prviću",
  village: "Prvić Šepurine",
  since: 1991,
  address: "Južna obala, ul. IX br. 91, Prvić Šepurine, Hrvatska",
  phone: "+385 22 205 014",
  phoneHref: "tel:+38522205014",
  coordinates: "43°44'20\"N · 15°47'08\"E",
  cove: "uvala Trstevica",
  hours: "13:00 — 23:00",
  closedDay: "Srijedom zatvoreno",
  season: "Svibanj — Listopad",
};

export type Stone = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  sub?: string;
  size: "xl" | "lg" | "md" | "sm";
};

// Each entry becomes one irregular flagstone in the courtyard layout.
export const stones: Stone[] = [
  {
    id: "hero",
    kicker: "Prvić Šepurine · Od 1991.",
    title: "Ribarski Dvori",
    body: "Dođi brodom. Sidri u uvali. Jedi kao da nema sutra.",
    sub: "Come by boat. Anchor in the bay. Eat like there's no tomorrow.",
    size: "xl",
  },
  {
    id: "story",
    kicker: "Priča",
    title: "Iste ruke, ista vatra.",
    body: "Ribarski dvori su tu od 1991. Iste ruke, ista vatra, isti okus.",
    sub: "Neke se stvari ne planiraju. Vjetar te nosi u pravom smjeru, sidro pada na pravo mjesto — i odjednom, tu si.",
    size: "lg",
  },
  {
    id: "riba",
    kicker: "01 · Dnevni ulov",
    title: "Riba i plodovi mora",
    body: "Jutarnji ulov ravno na stol. Na žaru, u buzari, kuhano — svježe, jednostavno, bez pretenzija.",
    sub: "Fish & Seafood",
    size: "md",
  },
  {
    id: "peka",
    kicker: "02 · Ispod čripnje",
    title: "Peka",
    body: "Hobotnica, teletina, piletina ili janjetina ispod peke. Naruči unaprijed.",
    sub: "Octopus, veal, chicken or lamb — order ahead.",
    size: "sm",
  },
  {
    id: "vino",
    kicker: "03 · Podrum",
    title: "Vino i rakija",
    body: "Domaće dalmatinsko vino, bez etiketa, bez viška.",
    sub: "Wine & Spirits",
    size: "sm",
  },
  {
    id: "uvala",
    kicker: "Vezaj brod",
    title: "Mi čekamo.",
    body: "Stol tik nad uvalom Trstevica, pod pergolom vinove loze, u malom ribarskom naselju Šepurine. Plutače u uvali za goste koji dolaze morem.",
    sub: "A table over the very cove you sailed through.",
    size: "lg",
  },
  {
    id: "contact",
    kicker: "Kontakt",
    title: restaurant.phone,
    body: restaurant.address,
    sub: restaurant.coordinates,
    size: "md",
  },
  {
    id: "hours",
    kicker: "Radno vrijeme",
    title: restaurant.hours,
    body: `${restaurant.closedDay} · ${restaurant.season}`,
    size: "sm",
  },
];
