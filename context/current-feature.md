# Current Feature

<!-- Feature Name -->

## Status

<!-- Not Started|In Progress|Completed -->

Not Started

## Goals

<!-- Goals & requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest -->

### Homepage (Phase 1)

Established the base layout, header, theme system, and nav entry points for OPM: The Strongest Guide. Initialized shadcn/ui (Button, Card, Badge, NavigationMenu) and next-themes for dark/light mode with an OPM-inspired yellow/red palette. Built the site header (logo, nav, theme toggle, display-only language switch), footer (fan-made disclaimer), hero section, and three placeholder preview cards (Characters / Game Features / Guides). Merged via `feature/homepage-phase-1`.

### Character List Page

Built `/characters` as the first page consuming real static data. Updated the canonical `Character` type (`faction: "outlaw"`, closed `CharacterClass` enum, added `rarity`), seeded `data/characters.json` with 8 characters, and added a client-side filter panel (Faction/Class/Rarity, AND logic, clear filters) over a Card grid with color-coded rarity badges. Added a stub `/characters/[slug]` detail route and wired the homepage/header's placeholder Characters links to the real route. Also fixed a theme-toggle hydration mismatch found during manual testing. Merged via `feature/character-list-page`.
