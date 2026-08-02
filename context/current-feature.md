# Current Feature: Character List Page

## Status

Not Started

## Goals

- Update `types/character.ts` with accurate union types:
  - `Faction`: `"hero" | "outlaw" | "monster"`
  - `CharacterClass`: `"grappler" | "esper" | "duelist" | "hi-tech"`
  - `Rarity`: `"N" | "R" | "SR" | "SSR" | "SSR+" | "UR" | "UR+"`
- Create `data/characters.json` with a small seed set (5-10 characters) covering a mix of factions/classes/rarities, matching the `Character` interface
- Route: `app/characters/page.tsx` — Server Component, imports the JSON directly, renders the initial list
- **Filter UI** (Client Component — needs interactive state):
  - Faction filter: Hero / Outlaw / Monster — toggle group/tabs, supports "All"
  - Class filter: Grappler / Esper / Duelist / Hi-Tech — same pattern
  - Rarity filter: N / R / SR / SSR / SSR+ / UR / UR+ — same pattern, ordered low→high
  - Filters combine with AND logic (e.g. Hero + Esper + UR = match all three)
  - "Clear filters" button
- Filtering is client-side on the already-fetched list — no re-fetch, no URL params this phase
- Each character renders as a Card (shadcn/ui): image, name, Badge for rarity (color-coded by tier), Badge for class, faction indicator
- Card links to `/characters/[slug]` (detail page can be a stub/placeholder — full detail page is a separate feature)
- Empty state: "No characters found." when no character matches filters
- Responsive grid, mobile-first

## Notes

**Overview:** First page to consume real static data from `data/characters.json`. Builds `/characters` as a grid with client-side Faction/Class/Rarity filters.

**Suggested component structure** (paths adapted to this project's root-level `app/`, not `src/`):
- `app/characters/page.tsx` — Server Component, imports data, renders `<CharacterListClient characters={data} />`
- `components/characters/character-list-client.tsx` — `'use client'`, holds filter state, filters the array, renders filters + card grid
- `components/characters/character-filters.tsx` — the three filter groups
- `components/characters/character-card.tsx` — single card; can stay a Server Component (plain props, no interactivity)

**Out of scope for this phase:**
- Character detail page content (`/characters/[slug]`) — stub route only
- Search/text filter
- URL-synced filter state (e.g. `?faction=hero`)
- Sorting (by rarity, stats, etc.)
- Real character artwork — placeholder images are fine

**Resolved — data model:** `context/project-overview.md`'s canonical `Character` interface has been updated to match this spec: `faction` uses `"outlaw"` (not "villain"), `class` is now the closed enum `"grappler" | "esper" | "duelist" | "hi-tech"`, and a required `rarity: "N" | "R" | "SR" | "SSR" | "SSR+" | "UR" | "UR+"` field was added. Canonical types now live at `types/character.ts` and `types/guide.ts` (split out of the old `lib/types.ts`, matching `coding-standards.md`'s `types/[feature].ts` convention).

**References:**
- `context/project-overview.md`
- `context/coding-standards.md`
- `context/ai-interaction.md`
- `types/character.ts`

## History

<!-- Keep this updated. Earliest to latest -->

### Homepage (Phase 1)

Established the base layout, header, theme system, and nav entry points for OPM: The Strongest Guide. Initialized shadcn/ui (Button, Card, Badge, NavigationMenu) and next-themes for dark/light mode with an OPM-inspired yellow/red palette. Built the site header (logo, nav, theme toggle, display-only language switch), footer (fan-made disclaimer), hero section, and three placeholder preview cards (Characters / Game Features / Guides). Merged via `feature/homepage-phase-1`.
