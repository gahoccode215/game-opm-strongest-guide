"use client";

import { Button } from "@/components/ui/button";
import { CHARACTER_CLASSES, FACTIONS, RARITIES } from "@/lib/characters";
import type { CharacterClass, Faction, Rarity } from "@/types/character";

export interface CharacterFilterState {
  faction: Faction | "all";
  class: CharacterClass | "all";
  rarity: Rarity | "all";
}

interface FilterGroupProps<T extends string> {
  label: string;
  active: T | "all";
  options: { value: T; label: string }[];
  onSelect: (value: T | "all") => void;
}

function FilterGroup<T extends string>({
  label,
  active,
  options,
  onSelect,
}: FilterGroupProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={active === "all" ? "default" : "outline"}
          onClick={() => onSelect("all")}
        >
          All
        </Button>
        {options.map((option) => (
          <Button
            key={option.value}
            size="sm"
            variant={active === option.value ? "default" : "outline"}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

interface CharacterFiltersProps {
  filters: CharacterFilterState;
  onChange: (filters: CharacterFilterState) => void;
}

export function CharacterFilters({ filters, onChange }: CharacterFiltersProps) {
  const hasActiveFilters =
    filters.faction !== "all" ||
    filters.class !== "all" ||
    filters.rarity !== "all";

  return (
    <div className="flex flex-col gap-6">
      <FilterGroup
        label="Faction"
        active={filters.faction}
        options={FACTIONS}
        onSelect={(faction) => onChange({ ...filters, faction })}
      />
      <FilterGroup
        label="Class"
        active={filters.class}
        options={CHARACTER_CLASSES}
        onSelect={(charClass) => onChange({ ...filters, class: charClass })}
      />
      <FilterGroup
        label="Rarity"
        active={filters.rarity}
        options={RARITIES}
        onSelect={(rarity) => onChange({ ...filters, rarity })}
      />
      <Button
        size="sm"
        variant="ghost"
        disabled={!hasActiveFilters}
        onClick={() => onChange({ faction: "all", class: "all", rarity: "all" })}
        className="self-start"
      >
        Clear filters
      </Button>
    </div>
  );
}
