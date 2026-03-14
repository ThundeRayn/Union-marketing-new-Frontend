import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface MapProps {
  title: string
  images: string[]
}

const Map = ({ title, images }: MapProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div ref={ref} className="mx-auto px-6 md:px-16 lg:px-24 py-16">
      {/* Gold accent line */}
      <div
        className={`h-px bg-(--color-primary) mb-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
        }`}
      />

      <p
        className={`text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ fontFamily: 'var(--font-label)', transitionDelay: '200ms' }}
      >
        {title}
      </p>

      {/* Map Image */}
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full overflow-hidden rounded-lg transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? `${(index + 1) * 120}ms` : '0ms' }}
          >
            <img
              src={image}
              alt={`${title} image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Map
