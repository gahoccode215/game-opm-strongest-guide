import type { CharacterClass, Faction, Rarity } from "@/types/character";

export const FACTIONS: { value: Faction; label: string }[] = [
  { value: "hero", label: "Hero" },
  { value: "outlaw", label: "Outlaw" },
  { value: "monster", label: "Monster" },
];

export const CHARACTER_CLASSES: { value: CharacterClass; label: string }[] = [
  { value: "grappler", label: "Grappler" },
  { value: "esper", label: "Esper" },
  { value: "duelist", label: "Duelist" },
  { value: "hi-tech", label: "Hi-Tech" },
];

export const RARITIES: { value: Rarity; label: string }[] = [
  { value: "N", label: "N" },
  { value: "R", label: "R" },
  { value: "SR", label: "SR" },
  { value: "SSR", label: "SSR" },
  { value: "SSR+", label: "SSR+" },
  { value: "UR", label: "UR" },
  { value: "UR+", label: "UR+" },
];

export const RARITY_BADGE_CLASSNAME: Record<Rarity, string> = {
  N: "bg-slate-500 text-white",
  R: "bg-sky-500 text-white",
  SR: "bg-violet-500 text-white",
  SSR: "bg-amber-500 text-black",
  "SSR+": "bg-orange-500 text-white",
  UR: "bg-rose-600 text-white",
  "UR+": "bg-fuchsia-600 text-white",
};

export const FACTION_INDICATOR_CLASSNAME: Record<Faction, string> = {
  hero: "bg-sky-500",
  outlaw: "bg-opm-red",
  monster: "bg-violet-600",
};
