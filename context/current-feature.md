# Current Feature: Homepage (Phase 1)

## Status

In Progress

## Goals

- Initialize shadcn/ui and install Button, Card, Badge, NavigationMenu components
- Set up `next-themes` for Dark/Light mode toggle, defaulting to system preference
- Build homepage route at `app/page.tsx`
- Set up global Tailwind v4 theme via `@theme` in `globals.css` with an OPM-inspired palette (yellow/black/red accents), good contrast in both modes
- **Header**: logo/site name, nav links (Characters, Game Features, Guides — placeholder `#` hrefs), theme toggle, language switch button (display-only, no i18n logic)
- **Hero section**: title, short tagline, 1-2 CTA buttons ("Explore Characters", "Beginner Guide") with placeholder hrefs
- **Three preview sections** (Card components) for Characters / Game Features / Guides — each with title, 1-2 line description, "View all" placeholder link, static placeholder text (no real data)
- **Footer**: site name + fan-made/not-affiliated disclaimer line
- Responsive, mobile-first layout

## Notes

**Overview:** First feature for OPM: The Strongest Guide. Establishes base layout, header, theme system, and nav entry points that Characters/Game Features/Guides pages will reuse later.

**Out of scope for this phase:**
- Fetching real data from `/data/*.json` (files don't exist yet)
- `next-intl` routing/logic — language switch is UI-only
- Search functionality
- Interactive mobile menu beyond basic responsive stacking

**Resolved:** Project sticks with root-level `app/` (no `src/`). `coding-standards.md` has been updated to match.

**References:**
- `context/project-overview.md`
- `context/coding-standards.md`
- `context/ai-interaction.md`
- No design screenshot provided — propose a clean, content-first layout matching project-overview.md tone (OPM yellow/black/red, reading-first)

## History

<!-- Keep this updated. Earliest to latest -->