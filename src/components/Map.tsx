import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Skeleton } from '@/components/ui/skeleton'

interface MapProps {
  title: string
  images: string[]
}

function MapImage({ src, alt, isVisible, index }: { src: string; alt: string; isVisible: boolean; index: number }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={`w-full overflow-hidden rounded-lg transition-all duration-700 ease-out relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${(index + 1) * 120}ms` : '0ms' }}
    >
      {!loaded && <Skeleton className="w-full aspect-video rounded-none" />}
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300 ${loaded ? '' : 'opacity-0 absolute'}`}
        />
      </a>
    </div>
  )
}

const Map = ({ title, images }: MapProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div ref={ref} className="mx-auto px-6 md:px-16 lg:px-24 py-10 sm:py-16">
      {/* Gold accent line */}
      <div
        className={`h-px bg-(--color-primary) mb-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
        }`}
      />

      <p
        className={`text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-6 sm:mb-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ fontFamily: 'var(--font-label)', transitionDelay: '200ms' }}
      >
        {title}
      </p>

      {/* Map Image */}
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <MapImage key={index} src={image} alt={`${title} image ${index + 1}`} isVisible={isVisible} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Map
