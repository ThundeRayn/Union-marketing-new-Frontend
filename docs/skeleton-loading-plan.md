# Skeleton Loading System for Union Frontend

## Context
The site currently shows blank states while images/videos load from Cloudinary CDN, and all page JS is bundled together (no code splitting). The goal is to ensure users **never see a blank state** — every component shows a dark-mode-aware shimmer skeleton until its content is ready.

---

## Architecture: Two Loading Layers

### Layer 1: Route-level code splitting (React.lazy + Suspense)
Show a full-page skeleton while page JS chunks download on navigation.

### Layer 2: Media-level skeletons (image/video onLoad states)
Show per-element skeleton placeholders while Cloudinary images and videos load after JS is ready.

---

## Phase 1: Foundation

### 1a. CSS — shimmer keyframes + skeleton color variables
**File:** `src/index.css`

Add to `:root`:
```css
--skeleton-base: #1a1a1a;      /* slightly lighter than #070707 bg */
--skeleton-highlight: #2a2a2a;  /* visible shimmer peak */
```

Add new keyframe:
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

Add utility class:
```css
.skeleton-shimmer {
  background: linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 50%, var(--skeleton-base) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.8s ease-in-out infinite;
}
```

### 1b. Base Skeleton component
**New file:** `src/components/ui/skeleton.tsx`

A simple `<div>` that applies `.skeleton-shimmer` + `rounded-md` + any passed className (for width/height/aspect-ratio). Uses existing `cn()` from `src/lib/utils.ts`.

### 1c. `useImageLoaded` hook
**New file:** `src/hooks/useImageLoaded.ts`

Returns `{ loaded: boolean, onLoad: () => void }`. Simple `useState(false)` — call `onLoad` from `<img onLoad>`.

### 1d. `useMediaLoaded` hook (for background-image components)
**New file:** `src/hooks/useMediaLoaded.ts`

Takes a URL (or array of URLs), creates `new Image()` to preload, returns `loaded: boolean`. Needed for Hero, Upbadge, BrandIntro which use CSS `background-image` instead of `<img>` tags.

---

## Phase 2: Composed Skeleton Variants

**New file:** `src/components/skeletons.tsx` (single file, all variants exported)

| Variant | Shape | Used for |
|---------|-------|----------|
| `SkeletonText` | 3-4 horizontal bars, varying widths | Text blocks |
| `SkeletonImage` | Rectangle with configurable aspect-ratio | Any image placeholder |
| `SkeletonCard` | Image + text bars at bottom | ProjectCard |
| `SkeletonHero` | Full viewport height, centered text bars | Hero, BrandIntro |
| `SkeletonVideo` | aspect-video rectangle + play icon circle | NativeVideo, YouTube |
| `PageSkeleton` | Hero-height block + content section blocks | Suspense fallback |

All composed from the base `<Skeleton>` primitive with Tailwind sizing.

---

## Phase 3: Route-Level Code Splitting

### 3a. `App.tsx` — convert 12 static imports to `React.lazy()`
```tsx
const HomePage = lazy(() => import('./pages/HomePage'))
const ElevenPage = lazy(() => import('./projects/ElevenPage'))
// ... all 12 pages
```

### 3b. `Layout.tsx` — wrap `<Outlet>` with `<Suspense>`
```tsx
<Suspense fallback={<PageSkeleton />}>
  <Outlet />
</Suspense>
```

Navbar and Footer stay static (loaded with main bundle) — user always sees navigation immediately while page content shows skeleton.

---

## Phase 4: Media-Level Skeletons

Apply per-component. Pattern for `<img>` components:
```tsx
const [loaded, setLoaded] = useState(false)
// Render <Skeleton> absolutely positioned behind img
// img gets opacity-0 until loaded, then crossfade with transition-opacity
```

Pattern for `background-image` components:
```tsx
const loaded = useMediaLoaded(imageUrl)
// Render <Skeleton> absolutely positioned, hidden when loaded
```

### Components to update:

| Component | File | Media type | Hook |
|-----------|------|-----------|------|
| **Hero** | `src/blocks/Hero.tsx` | background-image carousel | `useMediaLoaded` — preload first slide, gate interval timer behind `loaded` |
| **BrandIntro** | `src/blocks/BrandIntro.tsx` | background-image | `useMediaLoaded` |
| **Upbadge** | `src/blocks/Upbadge.tsx` | background-image + icon | `useMediaLoaded` |
| **OnSelling** | `src/blocks/OnSelling.tsx` | card images | `useImageLoaded` per card |
| **Customer** | `src/blocks/Customer.tsx` | logo images | `useImageLoaded` per logo |
| **ProjectCard** | `src/components/ProjectCard.tsx` | cover image | `useImageLoaded` |
| **PictureRender** | `src/components/PictureRender.tsx` | gallery images | `useImageLoaded` |
| **ModelsBlock** | `src/components/ModelsBlock.tsx` | model images | `useImageLoaded` |
| **ProjectTitleImage** | `src/components/ProjectTitleImage.tsx` | title image | `useImageLoaded` |
| **ProjectBuilder** | `src/blocks/ProjectBuilder.tsx` | builder logos | `useImageLoaded` |
| **NativeVideo** | `src/components/NativeVideo.tsx` | `<video>` | `onLoadedData` |
| **YouTubeVideo** | `src/components/YouTubeVideo.tsx` | `<iframe>` | `onLoad` |
| **Map** | `src/components/Map.tsx` | map image | `useImageLoaded` |

---

## Files Summary

### New files (4)
- `src/components/ui/skeleton.tsx` — base primitive
- `src/components/skeletons.tsx` — composed variants + PageSkeleton
- `src/hooks/useImageLoaded.ts` — single image load hook
- `src/hooks/useMediaLoaded.ts` — background-image preload hook

### Modified files (16)
- `src/index.css` — shimmer keyframes + CSS variables
- `src/App.tsx` — React.lazy imports + Suspense import
- `src/layout/Layout.tsx` — Suspense wrapper around Outlet
- 13 block/component files listed in Phase 4 table

---

## Verification
1. `npm run build` — ensure no TypeScript errors and chunks are split
2. Dev server — navigate between routes, confirm PageSkeleton shows during chunk load
3. Throttle network (Chrome DevTools > Slow 3G) — confirm every image/video shows shimmer before loading, never a blank white/black gap
4. Check dark mode visibility — skeleton shimmer should be clearly visible against the `#070707` background
5. Check Hero carousel — first slide skeleton should show until image loads, then interval starts
