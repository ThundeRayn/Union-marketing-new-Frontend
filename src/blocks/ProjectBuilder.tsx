import { useEffect, useRef, useCallback } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ProjectBuilderProps {
  images: { src: string; alt: string }[]
  noFilter?: boolean
}

const ProjectBuilder = ({ images, noFilter = false }: ProjectBuilderProps) => {
  const { ref, isVisible } = useScrollAnimation(0.05)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el
  }, [])

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    if (cards.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img = (entry.target as HTMLDivElement).querySelector('img')
          const card = entry.target as HTMLDivElement
          if (img) {
            if (entry.isIntersecting) {
              img.style.opacity = '1'
              img.style.transform = 'scale(1.05)'
              card.style.borderColor = 'rgba(251, 201, 68, 0.3)'
            } else {
              img.style.opacity = '0.3'
              img.style.transform = 'scale(1)'
              card.style.borderColor = ''
            }
          }
        })
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mx-auto px-6 md:px-16 lg:px-24 py-16">
      {/* Gold accent line */}
      <div
        className={`h-px bg-(--color-primary) mb-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
        }`}
      />

      <p
        className={`text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-4 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ fontFamily: 'var(--font-label)', transitionDelay: '200ms' }}
      >
        The Builder
      </p>

      <div
        className={`flex flex-wrap items-center justify-center gap-8 mt-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => setCardRef(el, index)}
            className={`flex items-center justify-center p-6 border border-white/10 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-48 max-h-32 object-contain transition-[opacity,transform] duration-500"
              style={noFilter ? undefined : { filter: 'brightness(0) invert(1)', opacity: 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectBuilder
