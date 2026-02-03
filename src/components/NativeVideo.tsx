import { useRef, useEffect } from "react"

interface NativeVideoProps {
  src: string
  title?: string
  controls?: boolean
  loop?: boolean
}

const NativeVideo = ({ src, title = "Video", controls = true, loop = true }: NativeVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="w-full">
      <video 
        ref={videoRef}
        className="w-full"
        loop={loop}
        playsInline
        controls={controls}
        muted
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
