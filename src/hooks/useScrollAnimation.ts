import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getStaggerClass = (i: number) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`,
    style: { transitionDelay: isVisible ? `${i * 120}ms` : '0ms' } as React.CSSProperties
  })

  return { ref, isVisible, getStaggerClass }
}
