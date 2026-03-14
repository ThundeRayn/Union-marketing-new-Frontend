import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

const YouTubeVideo = ({ videoId, title = "Video" }: YouTubeVideoProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="w-full">
      <div className="w-full aspect-video relative">
        {!loaded && (
          <>
            <Skeleton className="absolute inset-0 rounded-none" />
            <div className="absolute inset-0 flex items-center justify-center z-1">
              <Skeleton className="h-14 w-14 rounded-full" />
            </div>
          </>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=1&modestbranding=1&rel=0`}
          className={`w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}

export default YouTubeVideo
