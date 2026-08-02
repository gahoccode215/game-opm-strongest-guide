# Character List Page Spec

## Overview

Build the character list page at `/characters`, displaying all characters as a grid of cards with client-side filters for Faction, Class, and Rarity. This is the first page to consume real static data from `/data/characters.json`.

## Requirements

- Update `src/types/character.ts` with the accurate union types:
  - `Faction`: `"hero" | "outlaw" | "monster"`
  - `CharacterClass`: `"grappler" | "esper" | "duelist" | "hi-tech"`
  - `Rarity`: `"N" | "R" | "SR" | "SSR" | "SSR+" | "UR" | "UR+"`
- Create `src/data/characters.json` with a small seed set (5-10 characters) covering a mix of factions/classes/rarities, matching the `Character` interface
- Route: `src/app/characters/page.tsx` — a Server Component that imports the JSON directly and renders the initial list
- **Filter UI** (Client Component, since it needs interactive state):
  - Faction filter: Hero / Outlaw / Monster — toggle group or tabs, supports selecting "All"
  - Class filter: Grappler / Esper / Duelist / Hi-Tech — same pattern
  - Rarity filter: N / R / SR / SSR / SSR+ / UR / UR+ — same pattern, order low→high in the UI
  - Filters are combinable (AND logic — e.g. Hero + Esper + UR shows only characters matching all three)
  - "Clear filters" button
- Filtering happens **client-side** on the already-fetched list (no re-fetch, no URL params needed for this phase — keep it simple)
- Each character renders as a Card (shadcn/ui): image, name, Badge for rarity (color-coded by tier), Badge for class, faction indicator
- Card links to `/characters/[slug]` (detail page route can be a stub/placeholder for now — full detail page is a separate feature)
- Empty state: if no character matches the filters, show "No characters found."
- Responsive grid, mobile-first

## Component structure suggestion

- `src/app/characters/page.tsx` — Server Component, imports data, renders `<CharacterListClient characters={data} />`
- `src/components/characters/CharacterListClient.tsx` — `'use client'`, holds filter state, filters the array, renders `<CharacterFilters />` + grid of `<CharacterCard />`
- `src/components/characters/CharacterFilters.tsx` — the three filter groups
- `src/components/characters/CharacterCard.tsx` — single card, can stay a Server Component if it receives plain props and has no interactivity itself

## Out of scope for this phase

- Character detail page content (`/characters/[slug]`) — stub route only
- Search/text filter
- URL-synced filter state (e.g. `?faction=hero`)
- Sorting (by rarity, stats, etc.)
- Real character artwork — placeholder images are fine

## References

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction-guidelines.md
- @src/types/character.ts