# HomePage Spec (Phase 1)

## Overview

This is the first feature to build for OPM: The Strongest Guide. It establishes the base layout, header, theme system, and navigation entry points that every other page (Characters, Game Features, Guides) will reuse.

## Requirements for phase 1

- shadcn/ui initialization and component installation (Button, Card, Badge, NavigationMenu)
- next-themes setup for Dark/Light mode toggle, default to system preference
- Homepage route at `src/app/page.tsx`
- Global styles / Tailwind v4 theme setup via `@theme` in `globals.css`, using an OPM-inspired color palette (yellow/black/red accents), with good contrast in both dark and light mode
- **Header**: site logo/name, nav links (Characters, Game Features, Guides — links can be placeholder `#` for now), theme toggle button, language switch button (**display only**, no actual i18n logic yet — that's a separate phase)
- **Hero section**: site title, short tagline, 1-2 call-to-action buttons (e.g. "Explore Characters", "Beginner Guide") — hrefs can be placeholder for now
- **Three preview sections** (Card components), one each for Characters / Game Features / Guides — each with a title, 1-2 line description, and a "View all" link (placeholder href). Use static placeholder text, not real data yet.
- **Footer**: site name + a short line noting this is a fan-made site, not affiliated with the official game
- Responsive layout, mobile-first

## Out of scope for phase 1

- Fetching real data from `/data/characters.json`, `/data/mechanics.json`, `/data/guides.json` (later phase, once those files exist)
- `next-intl` routing/logic — the language switch button is UI-only for now
- Search functionality
- Any interactive mobile menu beyond basic responsive stacking

## References

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction-guidelines.md
