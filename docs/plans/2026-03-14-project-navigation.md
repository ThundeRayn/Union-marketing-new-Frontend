# ProjectNavigation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a reusable `ProjectNavigation` block that sits at the bottom of every project page, showing the next project's cover image and prev/next navigation buttons with wrap-around.

**Architecture:** Single component receives `projectId`, looks up prev/next from `projects.json`. Uses `coverImage` from the next project as background with dark overlay. Styled consistently with `BackToHome` (uppercase, `--font-label`, arrows). Uses `useScrollAnimation` for scroll-in animation. Added to all 6 project pages.

**Tech Stack:** React, TypeScript, react-router-dom `Link`, Tailwind CSS, existing `useScrollAnimation` hook.

---

### Task 1: Create the ProjectNavigation component

**Files:**
- Create: `src/blocks/ProjectNavigation.tsx`

**Step 1: Create the component file**

```tsx
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import projectsData from '@/data/projects.json'

interface ProjectNavigationProps {
  projectId: string
}

const ProjectNavigation = ({ projectId }: ProjectNavigationProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const currentIndex = projectsData.findIndex(p => p.id === projectId)
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length]
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length]

  return (
    <div
      ref={ref}
      className="relative w-full h-80 md:h-96 overflow-hidden"
    >
      {/* Background image from next project */}
      <img
        src={nextProject.coverImage}
        alt={nextProject.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Navigation content */}
      <div
        className={`relative z-10 h-full flex items-center justify-between px-6 md:px-16 lg:px-24 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Link
          to={prevProject.path}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white hover:text-(--color-primary) transition-all duration-300 ease-out text-xs tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          &larr; {prevProject.title}
        </Link>

        <Link
          to={nextProject.path}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white hover:text-(--color-primary) transition-all duration-300 ease-out text-xs tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          {nextProject.title} &rarr;
        </Link>
      </div>
    </div>
  )
}

export default ProjectNavigation
```

**Step 2: Verify no build errors**

Run: `npm run build` (or dev server check)

---

### Task 2: Add ProjectNavigation to FifthPage

**Files:**
- Modify: `src/projects/FifthPage.tsx`

**Step 1: Add import at top**

Add `import ProjectNavigation from "@/blocks/ProjectNavigation"` to the imports.

**Step 2: Add component before closing `</div>`**

Place `<ProjectNavigation projectId="fifth" />` after the `<NativeVideo>` section, before the final `</div>`.

---

### Task 3: Add ProjectNavigation to ElevenPage

**Files:**
- Modify: `src/projects/ElevenPage.tsx`

**Step 1: Add import and component**

Add import. Place `<ProjectNavigation projectId="eleven" />` after the Cloudinary video `</div>`, before the final `</div>`.

---

### Task 4: Add ProjectNavigation to EversleyPage

**Files:**
- Modify: `src/projects/EversleyPage.tsx`

**Step 1: Add import and component**

Add import. Place `<ProjectNavigation projectId="eversley" />` before the final `</div>`.

---

### Task 5: Add ProjectNavigation to GeorginaPage

**Files:**
- Modify: `src/projects/GeorginaPage.tsx`

**Step 1: Add import and component**

Add import. Place `<ProjectNavigation projectId="georgina" />` before the final `</div>`.

---

### Task 6: Add ProjectNavigation to CGTowerPage

**Files:**
- Modify: `src/projects/CGTowerPage.tsx`

**Step 1: Add import and component**

Add import. Place `<ProjectNavigation projectId="cgtower" />` before the final `</div>`.

---

### Task 7: Add ProjectNavigation to AbejaPage

**Files:**
- Modify: `src/projects/AbejaPage.tsx`

**Step 1: Add import and component**

Add import. Place `<ProjectNavigation projectId="abeja" />` before the final `</div>`.

---

### Task 8: Verify build and test all pages

**Step 1: Run build**

Run: `npm run build`
Expected: No errors.
