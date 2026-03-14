import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface ProjectTitleImageProps {
  src: string
  alt: string
  noFilter?: boolean
}

const ProjectTitleImage = ({ src, alt, noFilter = false }: ProjectTitleImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center p-6 border border-white/10 relative">
          {!loaded && <Skeleton className="w-48 h-32 rounded-md" />}
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={`max-w-full h-auto object-contain transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0 absolute'}`}
            style={noFilter ? undefined : { filter: 'brightness(0) invert(1)', opacity: loaded ? 0.3 : 0 }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectTitleImage
