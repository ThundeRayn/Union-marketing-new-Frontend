import { useEffect, useState } from 'react'
import OdometerNumber from '@/components/OdometerNumber'
import { Skeleton } from '@/components/ui/skeleton'
import { useMediaLoaded } from '@/hooks/useMediaLoaded'

interface BrandIntroProps {
  backgroundImage?: string
}

const BrandIntro = ({ backgroundImage }: BrandIntroProps) => {
  const [visible, setVisible] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const bgLoaded = useMediaLoaded(backgroundImage)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setCountersStarted(true), 900)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden h-dvh lg:h-[calc(100dvh-80px)]"
      style={{
        backgroundColor: 'var(--color-secondary)',
      }}
    >
      {/* Structural skeleton matching BrandIntro layout */}
      {backgroundImage && !bgLoaded && (
        <>
          <Skeleton className="absolute inset-0 rounded-none" />
          <div className="absolute inset-0 z-1 flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-[15dvh] pb-12 lg:py-16 pointer-events-none">
            <div>
              <Skeleton className="h-3 w-48 mb-6 md:mb-8" />
              <Skeleton className="h-12 md:h-16 lg:h-20 w-48 md:w-64 lg:w-80 mb-2" />
              <Skeleton className="h-12 md:h-16 lg:h-20 w-56 md:w-72 lg:w-96" />
            </div>
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
            <div className="flex items-end justify-between">
              <Skeleton className="h-3 w-48" />
              <Skeleton className="h-8 w-px" />
            </div>
          </div>
        </>
      )}

      {/* Background image */}
      {backgroundImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center parallax-bg transition-opacity duration-700 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gold accent line — top left */}
      <div
        className={`absolute top-12 left-16 h-px bg-[var(--color-primary)] transition-all duration-[1.5s] ease-out hidden md:block ${
          visible ? 'w-24 opacity-100' : 'w-0 opacity-0'
        }`}
      />

      {/* Main editorial grid */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-[15dvh] pb-12 lg:py-16">

        {/* Top — Overline + Brand name */}
        <div>
          <p
            className={`text-xs md:text-sm tracking-[0.35em] uppercase text-[var(--color-primary)] mb-6 md:mb-8 transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              fontFamily: "'Staatliches', sans-serif",
              transitionDelay: '200ms',
            }}
          >
            Ontario&rsquo;s Pre-Construction Specialist
          </p>

          <h1
            className={`font-serif font-normal text-white leading-[1.1] transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              Union
            </span>
            <span
              className="block text-5xl md:text-7xl lg:text-8xl mt-1 md:mt-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Marketing
            </span>
          </h1>
        </div>

        {/* Middle — Editorial asymmetric content */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-0">
          {/* Left column — statement */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="w-8 h-px bg-[var(--color-primary)]/40 mb-6" />
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
              We bridge visionary developers with prospective buyers,
              crafting bespoke strategies that transform pre-construction
              projects into sought-after communities.
            </p>
          </div>

          {/* Right column — key stats, pushed right */}
          <div
            className={`lg:w-1/2 lg:pl-20 xl:pl-32 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <div className="flex items-end gap-10 md:gap-16">
              <div>
                <span
                  className="block text-4xl md:text-5xl font-normal leading-[1.15]"
                  style={{
                    fontFamily: "'Prata', serif",
                    color: 'var(--color-primary)',
                  }}
                >
                  <OdometerNumber target={50} startFrom={30} duration={2000} delay={0} started={countersStarted} suffix="+" />
                </span>
                <span
                  className="block text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mt-2"
                  style={{ fontFamily: "'Staatliches', sans-serif" }}
                >
                  Projects
                </span>
              </div>
              <div>
                <span
                  className="block text-4xl md:text-5xl font-normal leading-[1.15]"
                  style={{
                    fontFamily: "'Prata', serif",
                    color: 'var(--color-primary)',
                  }}
                >
                  <OdometerNumber target={10} startFrom={0} duration={1800} delay={200} started={countersStarted} suffix="+" />
                </span>
                <span
                  className="block text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mt-2"
                  style={{ fontFamily: "'Staatliches', sans-serif" }}
                >
                  Years
                </span>
              </div>
              <div>
                <span
                  className="block text-4xl md:text-5xl font-normal leading-[1.15]"
                  style={{
                    fontFamily: "'Prata', serif",
                    color: 'var(--color-primary)',
                  }}
                >
                  GTA
                </span>
                <span
                  className="block text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mt-2"
                  style={{ fontFamily: "'Staatliches', sans-serif" }}
                >
                  Coverage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom — tagline + scroll */}
        <div className="flex items-end justify-between">
          <p
            className={`text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/30 transition-all duration-700 ease-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              fontFamily: "'Staatliches', sans-serif",
              transitionDelay: '1200ms',
            }}
          >
            Integrity &middot; Excellence &middot; Collaboration
          </p>

          {/* Scroll indicator */}
          <div
            className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 transition-all duration-700 ease-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="h-6 md:h-8 w-px bg-[var(--color-primary)]/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-[var(--color-primary)] animate-[scrollPulse_2s_ease-in-out_infinite]" />
            </div>
            <span
              className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/30"
              style={{ fontFamily: "'Staatliches', sans-serif" }}
            >
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* Decorative gold corner frame — bottom right */}
      <div
        className={`absolute bottom-12 right-8 md:right-16 transition-all duration-[1.5s] ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="w-12 md:w-16 h-12 md:h-16 border-r border-b border-[var(--color-primary)]/20" />
      </div>
    </div>
  )
}

export default BrandIntro
