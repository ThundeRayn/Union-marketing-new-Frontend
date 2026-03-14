import { useRef, useEffect, useState } from "react"
import { Skeleton } from '@/components/ui/skeleton'

interface NativeVideoProps {
  src: string
  title?: string
  controls?: boolean
  loop?: boolean
}

const NativeVideo = ({ src, controls = true, loop = true }: NativeVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video) {
            video.play().catch((error) => {
              console.log("Autoplay was prevented:", error);
            });
          } else if (video) {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className="w-full relative">
      {!videoLoaded && (
        <div className="w-full aspect-video relative">
          <Skeleton className="absolute inset-0 rounded-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="h-14 w-14 rounded-full" />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        loop={loop}
        playsInline
        controls={controls}
        muted
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source 
          src={src}
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default NativeVideo
