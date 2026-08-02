# AI Interaction Guidelines — OPM: The Strongest Guide

## Communication

- Be concise and direct
- Explain non-obvious decisions briefly
- Ask before large refactors or architectural changes
- Don't add features not in `project-overview.md`
- Never delete files without confirmation

## Workflow

This is the common workflow for every feature/fix:

1. **Document** - Document the feature in `@context/current-feature.md`
2. **Branch** - Create a new branch for the feature/fix
3. **Implement** - Implement exactly what's written in `@context/current-feature.md`
4. **Test** - Verify it works in the browser. Run `npm run build` and fix any errors (unit testing to be added later once the project is more stable)
5. **Iterate** - Adjust as needed
6. **Commit** - Only after the build passes and everything works correctly
7. **Merge** - Merge into `main`
8. **Delete Branch** - Delete the branch after merging
9. **Review** - Review AI-generated code periodically or on demand
10. Mark as completed in `@context/current-feature.md` and add it to the history

**Do NOT commit without permission and until the build passes.** If the build fails, fix the issues first.

## Branching

- Create a new branch for every feature/fix
- Name it: `feature/[feature-name]` or `fix/[fix-name]`
- Ask before deleting a branch after it has been merged

## Commits

- Ask before committing (don't auto-commit)
- Use conventional commit messages (`feat:`, `fix:`, `chore:`, etc.)
- Keep each commit focused on one feature/fix, don't bundle multiple changes
- Never include "Generated with Claude" in commit messages

## When Stuck

- If something isn't working after 2-3 attempts, stop and explain the issue
- Don't keep trying random fixes
- Ask for clarification if requirements are unclear

## Code Changes

- Make minimal changes to accomplish the task
- Don't refactor unrelated code unless asked
- Don't add "nice to have" features outside the task scope
- Preserve existing patterns in the codebase (component structure, naming, Server/Client component usage...)

## Code Review

Review AI-generated code periodically, especially for:

- **Performance**: unnecessary re-renders from missing `key`/`memo`, redundant JSON data imports, using `'use client'` when not actually needed
- **Logic errors**: edge cases (missing fields in data, non-existent slugs...)
- **Patterns**: does it match the existing codebase structure/coding standard (see `coding-standards.md`)?
- **Data integrity**: when editing JSON files in `src/data/`, verify they match the type definitions in `src/types/`, with no missing required fields