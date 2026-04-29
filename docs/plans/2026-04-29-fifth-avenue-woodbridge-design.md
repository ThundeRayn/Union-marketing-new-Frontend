# Fifth Avenue Woodbridge — Project Page Design

## Summary
New project page for Fifth Avenue Woodbridge, following the established project page pattern.

## Data
- **ID:** woodbridge
- **Title:** Fifth Avenue Woodbridge
- **Type:** TOWNHOMES
- **Location:** Vaughan, Ontario
- **Status:** NOW SELLING
- **Cover Image:** https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777470048/Rendering_zocgjn.heic
- **Route:** /projects/woodbridge

## Page Structure
1. `BackToHome` → /project
2. `Upbadge` → title, status badge, cover image
3. `ProjectInfo` → TOWNHOMES / Vaughan, Ontario
4. `ProjectButtonList` → buttons: [] (placeholder, to be filled)
5. `ProjectBuilder` → same logo as King City
6. `ProjectNavigation` → prev/next based on projects.json order

## Files to Create/Modify
- `src/projects/WoodbridgePage.tsx` — new page component
- `src/data/projects.json` — add woodbridge entry
- `src/App.tsx` — add lazy import + route
