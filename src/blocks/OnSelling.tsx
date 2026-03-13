import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import projectsData from '@/data/projects.json'

const projects = projectsData.map(p => ({
  title: p.title,
  subtitle: p.subtitle,
  type: p.type,
  status: p.status,
  image: p.coverImage,
  path: p.path,
}))

const OnSelling = () => {
  const { ref, isVisible } = useScrollAnimation(0.05)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    setScrollProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth))
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  const smoothScrollTo = (el: HTMLElement, target: number, duration = 500) => {
    const start = el.scrollLeft
    const distance = target - start
    const startTime = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      el.scrollLeft = start + distance * easeOutCubic(progress)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector('a')?.offsetWidth ?? 400
    const delta = direction === 'right' ? cardWidth + 24 : -(cardWidth + 24)
    smoothScrollTo(el, el.scrollLeft + delta)
  }

  return (
    <div
      ref={ref}
      className="relative w-full h-screen bg-(--color-secondary) overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 pt-16 md:pt-20 lg:pt-16 pb-6 shrink-0">
        {/* Gold accent line */}
        <div
          className={`h-px bg-(--color-primary) mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
          }`}
        />

        <div className="flex items-end justify-between gap-8">
          <div>
            <p
              className={`text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                fontFamily: 'var(--font-label)',
                transitionDelay: '200ms',
              }}
            >
              Now Selling
            </p>
            <h2
              className={`font-normal text-white text-3xl md:text-5xl lg:text-[3.2rem] leading-[1.1] transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                fontFamily: 'var(--font-heading)',
                transitionDelay: '400ms',
              }}
            >
              Featured Projects
            </h2>
          </div>

          {/* Navigation arrows — desktop */}
          <div
            className={`hidden md:flex items-center gap-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-(--color-primary) hover:border-(--color-primary) transition-all duration-300 disabled:opacity-20 disabled:cursor-default"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-(--color-primary) hover:border-(--color-primary) transition-all duration-300 disabled:opacity-20 disabled:cursor-default"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className={`flex-1 flex items-stretch overflow-x-auto px-6 md:px-16 lg:px-24 gap-6 pb-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: '600ms',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {projects.filter(p => p.status === 'NOW SELLING').map((project, index) => (
          <Link
            key={project.title}
            to={project.path}
            className="group shrink-0 w-[75vw] md:w-[40vw] lg:w-[28vw] relative overflow-hidden"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Image + overlay scale together */}
            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {project.type}
              </p>
              <h3
                className="text-xl md:text-2xl text-white group-hover:text-(--color-primary) transition-colors duration-300 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.title}
              </h3>
            </div>
          </Link>
        ))}

        {/* End spacer */}
        <div className="shrink-0 w-6 md:w-16 lg:w-24" />
      </div>

      {/* Bottom bar: scroll progress + indicator */}
      <div className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10 shrink-0 flex items-center justify-between">
        {/* Progress bar */}
        <div className="flex-1 max-w-xs h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-(--color-primary)/60 transition-all duration-300 ease-out"
            style={{ width: `${Math.max(scrollProgress * 100, 5)}%` }}
          />
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-3 ml-6">
          <span
            className="text-[9px] tracking-[0.2em] uppercase text-white/30"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Drag to explore
          </span>
          <div className="h-6 w-px bg-(--color-primary)/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-(--color-primary) animate-[scrollPulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnSelling
