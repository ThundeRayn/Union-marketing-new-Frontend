import { useEffect, useState } from 'react'

const BrandIntro = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: 'calc(100vh - 80px)',
        backgroundColor: 'var(--color-secondary)',
      }}
    >
      {/* Subtle gold grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-primary) 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, var(--color-primary) 0.5px, transparent 0.5px),
                            radial-gradient(circle at 60% 80%, var(--color-primary) 0.5px, transparent 0.5px)`,
          backgroundSize: '60px 60px, 40px 40px, 50px 50px',
        }}
      />

      {/* Gold accent line — top left */}
      <div
        className={`absolute top-12 left-8 md:left-16 h-px bg-[var(--color-primary)] transition-all duration-[1.5s] ease-out ${
          visible ? 'w-16 md:w-24 opacity-100' : 'w-0 opacity-0'
        }`}
      />

      {/* Main editorial grid */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 lg:px-24 py-12 md:py-16">

        {/* Top — Overline + Brand name */}
        <div>
          <p
            className={`text-[10px] md:text-xs tracking-[0.35em] uppercase text-[var(--color-primary)] mb-6 md:mb-8 transition-all duration-700 ease-out ${
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
            <span className="block text-4xl md:text-7xl lg:text-8xl">
              Union
            </span>
            <span
              className="block text-4xl md:text-7xl lg:text-8xl mt-1 md:mt-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Marketing
            </span>
          </h1>
        </div>

        {/* Middle — Editorial asymmetric content */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0">
          {/* Left column — statement */}
          <div
            className={`md:w-1/2 transition-all duration-1000 ease-out ${
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
            className={`md:w-1/2 md:pl-20 lg:pl-32 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <div className="flex gap-10 md:gap-16">
              <div>
                <span
                  className="block text-3xl md:text-5xl font-normal"
                  style={{
                    fontFamily: "'Prata', serif",
                    color: 'var(--color-primary)',
                  }}
                >
                  50+
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
                  className="block text-3xl md:text-5xl font-normal"
                  style={{
                    fontFamily: "'Prata', serif",
                    color: 'var(--color-primary)',
                  }}
                >
                  10+
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
                  className="block text-3xl md:text-5xl font-normal"
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

        {/* Bottom — tagline + scroll hint */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
            className={`flex items-center gap-3 transition-all duration-700 ease-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-white/30"
              style={{ fontFamily: "'Staatliches', sans-serif" }}
            >
              Scroll
            </span>
            <div className="w-px h-8 bg-[var(--color-primary)]/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-[var(--color-primary)] animate-[scrollPulse_2s_ease-in-out_infinite]" />
            </div>
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
