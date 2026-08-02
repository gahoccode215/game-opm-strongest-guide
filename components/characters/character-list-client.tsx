"use client";

import { useMemo, useState } from "react";

import { CharacterCard } from "@/components/characters/character-card";
import {
  CharacterFilters,
  type CharacterFilterState,
} from "@/components/characters/character-filters";
import type { Character } from "@/types/character";

const INITIAL_FILTERS: CharacterFilterState = {
  faction: "all",
  class: "all",
  rarity: "all",
};

export function CharacterListClient({
  characters,
}: {
  characters: Character[];
}) {
  const [filters, setFilters] = useState<CharacterFilterState>(INITIAL_FILTERS);

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      if (filters.faction !== "all" && character.faction !== filters.faction) {
        return false;
      }
      if (filters.class !== "all" && character.class !== filters.class) {
        return false;
      }
      if (filters.rarity !== "all" && character.rarity !== filters.rarity) {
        return false;
      }
      return true;
    });
  }, [characters, filters]);

  return (
    <div className="grid gap-8 sm:grid-cols-[220px_1fr]">
      <CharacterFilters filters={filters} onChange={setFilters} />

      {filteredCharacters.length === 0 ? (
        <p className="text-sm text-muted-foreground">No characters found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}
