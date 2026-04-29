# Fifth Avenue Woodbridge Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the "Fifth Avenue Woodbridge" project page at `/projects/woodbridge`, wired into the project list and OnSelling homepage section.

**Architecture:** Three-file change — add JSON entry, create page component, register route. The page follows the existing project page pattern (Upbadge → ProjectInfo → ProjectButtonList → ProjectBuilder → ProjectNavigation). Buttons array is left as a placeholder for later.

**Tech Stack:** React, TypeScript, React Router v6, Tailwind CSS, projects.json as data source

---

### Task 1: Add woodbridge entry to projects.json

**Files:**
- Modify: `src/data/projects.json`

**Step 1: Insert the new entry as the first item in the array**

Add this object at the top of the array (index 0), before `lakewilcox`:

```json
{
  "id": "woodbridge",
  "title": "Fifth Avenue Woodbridge",
  "subtitle": "Woodbridge",
  "infoType": "TOWNHOMES",
  "infoLocation": "Vaughan, Ontario",
  "address": "Woodbridge, Ontario",
  "status": "NOW SELLING",
  "coverImage": "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777470048/Rendering_zocgjn.heic",
  "mobileCoverImage": "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777470048/Rendering_zocgjn.heic",
  "path": "/projects/woodbridge",
  "ratio": "4/3"
},
```

**Step 2: Verify JSON is valid**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/data/projects.json','utf8')); console.log('valid')"
```
Expected: `valid`

**Step 3: Commit**

```bash
git add src/data/projects.json
git commit -m "feat: add Fifth Avenue Woodbridge to projects data"
```

---

### Task 2: Create WoodbridgePage.tsx

**Files:**
- Create: `src/projects/WoodbridgePage.tsx`

**Step 1: Create the file with this exact content**

```tsx
import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'woodbridge')!

const Woodbridge = () => {
  const buttons = [
    // placeholder
  ]

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />

      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
        mobileUrl={project.mobileCoverImage}
      />
      <ProjectInfo projectId="woodbridge" />

      <div className="mx-auto flex flex-col items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-2xl py-10 md:py-20">
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486776/logo-removebg-preview_t0imsb.png', alt: 'Builder logo' }
        ]}
      />

      <ProjectNavigation projectId="woodbridge" />
    </div>
  )
}

export default Woodbridge
```

**Step 2: Commit**

```bash
git add src/projects/WoodbridgePage.tsx
git commit -m "feat: add Fifth Avenue Woodbridge project page"
```

---

### Task 3: Register route in App.tsx

**Files:**
- Modify: `src/App.tsx`

**Step 1: Add lazy import after the last existing project import (line 19)**

```tsx
const WoodbridgePage = lazy(() => import('./projects/WoodbridgePage'))
```

**Step 2: Add route after the lakewilcox route (line 47)**

```tsx
<Route path='projects/woodbridge' element={<WoodbridgePage />} />
```

**Step 3: Verify the dev server starts without errors**

```bash
npm run dev
```
Expected: Server starts, no TypeScript errors

**Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: register /projects/woodbridge route"
```
