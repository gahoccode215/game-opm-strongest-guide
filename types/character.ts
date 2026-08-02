export type Faction = "hero" | "outlaw" | "monster";
export type CharacterClass = "grappler" | "esper" | "duelist" | "hi-tech";
export type Rarity = "N" | "R" | "SR" | "SSR" | "SSR+" | "UR" | "UR+";

export interface Character {
  id: string;
  slug: string;
  name: string;
  faction: Faction;
  rank?: string;
  class: CharacterClass;
  rarity: Rarity;
  image: string;
  stats: {
    hp: number;
    atk: number;
    def: number;
    spd: number;
  };
  skills: {
    name: string;
    description: string;
  }[];
  description?: string;
}
