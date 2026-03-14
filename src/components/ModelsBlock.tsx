import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface ModelsBlockProps {
  title?: string
  modelType: string
  images: string[]
}

const ModelsBlock = ({ title = "Models", modelType, images }: ModelsBlockProps) => {
  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto bg-black/90 border border-white/10 rounded-lg p-6 md:p-8">
        <div className="flex flex-col gap-2 mb-6">
          <p
            className="text-xs tracking-[0.2em] uppercase text-(--color-primary)"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {title}
          </p>
          <p
            className="text-lg md:text-xl text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {modelType}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <ModelImage key={index} src={image} alt={`${modelType} model ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ModelImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="w-full overflow-hidden rounded-lg border border-white/10 relative">
      {!loaded && <Skeleton className="w-full aspect-video rounded-none" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default ModelsBlock
