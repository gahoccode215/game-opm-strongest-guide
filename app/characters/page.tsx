import type { Metadata } from "next";

import { CharacterListClient } from "@/components/characters/character-list-client";
import characters from "@/data/characters.json";
import type { Character } from "@/types/character";

export const metadata: Metadata = {
  title: "Characters | OPM: The Strongest Guide",
  description: "Browse Heroes, Outlaws, and Monsters with full stats and skills.",
};

export default function CharactersPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Characters</h1>
      <CharacterListClient characters={characters as Character[]} />
    </div>
  );
}
