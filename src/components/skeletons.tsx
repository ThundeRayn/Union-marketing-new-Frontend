import { Skeleton } from '@/components/ui/skeleton'

/**
 * Mirrors BrandIntro layout:
 * - Full viewport background
 * - Top-left: overline label + large two-line heading
 * - Bottom-left: divider + paragraph
 * - Bottom-right: 3 stat columns
 * - Bottom bar: tagline + scroll indicator
 */
function SkeletonBrandIntro() {
  return (
    <div className="relative w-full h-dvh lg:h-[calc(100dvh-80px)] overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <Skeleton className="absolute inset-0 rounded-none" />

      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-[15dvh] pb-12 lg:py-16">
        {/* Top — overline + heading */}
        <div>
          <Skeleton className="h-3 w-48 mb-6 md:mb-8" />
          <Skeleton className="h-12 md:h-16 lg:h-20 w-48 md:w-64 lg:w-80 mb-2" />
          <Skeleton className="h-12 md:h-16 lg:h-20 w-56 md:w-72 lg:w-96" />
        </div>

        {/* Middle — description + stats */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-0">
          <div className="lg:w-1/2">
            <Skeleton className="w-8 h-px mb-6" />
            <div className="space-y-2 max-w-md">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-20 xl:pl-32">
            <div className="flex items-end gap-10 md:gap-16">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <Skeleton className="h-10 md:h-12 w-16 md:w-20 mb-2" />
                  <Skeleton className="h-3 w-14" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom — tagline */}
        <div className="flex items-end justify-between">
          <Skeleton className="h-3 w-48" />
          <Skeleton className="h-8 w-px" />
        </div>
      </div>
    </div>
  )
}

/**
 * Mirrors OnSelling layout:
 * - Header with label + title + nav arrows
 * - Horizontal scroll row of tall cards
 * - Bottom progress bar
 */
function SkeletonOnSelling() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col" style={{ backgroundColor: 'var(--color-secondary)' }}>
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 pt-16 md:pt-20 lg:pt-16 pb-6 shrink-0">
        <Skeleton className="h-px w-12 mb-8" />
        <div className="flex items-end justify-between gap-8">
          <div>
            <Skeleton className="h-3 w-24 mb-4" />
            <Skeleton className="h-8 md:h-12 w-56 md:w-80" />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-none" />
            <Skeleton className="w-12 h-12 rounded-none" />
          </div>
        </div>
      </div>

      {/* Card row */}
      <div className="flex-1 flex items-stretch px-6 md:px-16 lg:px-24 gap-6 pb-6 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div key={i} className="shrink-0 w-[75vw] md:w-[40vw] lg:w-[28vw] relative">
            <Skeleton className="absolute inset-0 rounded-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <Skeleton className="h-3 w-16 mb-2" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10 shrink-0 flex items-center justify-between">
        <Skeleton className="h-px flex-1 max-w-xs" />
        <Skeleton className="h-3 w-24 ml-6" />
      </div>
    </div>
  )
}

/**
 * Mirrors Hero layout:
 * - Full screen background
 * - Centered title + description + button
 * - Bottom arrows + dot indicators
 */
function SkeletonHero() {
  return (
    <div className="relative w-full h-screen" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <Skeleton className="absolute inset-0 rounded-none" />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <Skeleton className="h-6 md:h-10 w-64 md:w-96 mb-4" />
        <Skeleton className="h-4 w-80 md:w-[500px] mb-2" />
        <Skeleton className="h-4 w-60 md:w-[400px] mb-8" />
        <Skeleton className="h-12 w-36 rounded-lg" />
      </div>

      {/* Bottom arrows + indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 md:px-16">
        <div className="flex items-center justify-center gap-6">
          <Skeleton className="w-11 h-11 rounded-full" />
          <div className="flex gap-2">
            <Skeleton className="h-2 w-6 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
          </div>
          <Skeleton className="w-11 h-11 rounded-full" />
        </div>
      </div>
    </div>
  )
}

/**
 * Mirrors Customer layout:
 * - Label + heading
 * - 2-column: description text + 2x2 logo grid
 */
function SkeletonCustomer() {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-12 mb-8" />
        <Skeleton className="h-3 w-24 mb-4" />
        <Skeleton className="h-8 md:h-12 w-56 md:w-80 mb-10" />

        <div className="grid lg:grid-cols-2 lg:gap-16 mt-6">
          <div className="pr-8 xl:pr-16 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full mt-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/5" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center p-4 border border-white/10">
                <Skeleton className="w-32 h-32 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Mirrors ContactUs layout:
 * - Full-width background with form
 */
function SkeletonContactUs() {
  return (
    <div className="relative py-20 px-6 md:px-8" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <Skeleton className="absolute inset-0 rounded-none" />
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <Skeleton className="h-3 w-24 mb-4" />
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-12 rounded-md" />
          <Skeleton className="h-12 rounded-md" />
        </div>
        <Skeleton className="h-12 w-full rounded-md" />
        <Skeleton className="h-12 w-full rounded-md" />
        <Skeleton className="h-32 w-full rounded-md" />
        <Skeleton className="h-12 w-36 rounded-lg" />
      </div>
    </div>
  )
}

/**
 * HomePage skeleton — mirrors actual HomePage structure:
 * BrandIntro → OnSelling → Hero → Customer → ContactUs
 */
export function PageSkeleton() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <SkeletonBrandIntro />
      <SkeletonOnSelling />
      <SkeletonHero />
      <SkeletonCustomer />
      <SkeletonContactUs />
    </div>
  )
}
