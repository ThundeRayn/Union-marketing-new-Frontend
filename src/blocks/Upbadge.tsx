import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useMediaLoaded } from '@/hooks/useMediaLoaded'
import useIsMobile from '@/hooks/useIsMobile'

interface SubHeroProps {
  title: string;
  description?: string;
  url?: string;
  mobileUrl?: string;
  fullScreen?: boolean;
  iconImage?: string;
}

const SubHero = ({ title, description, url, mobileUrl, fullScreen = true, iconImage }: SubHeroProps) => {
  const isMobile = useIsMobile()
  const bgUrl = (isMobile && mobileUrl) ? mobileUrl : (url || 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png')
  const bgLoaded = useMediaLoaded(bgUrl)
  const [iconLoaded, setIconLoaded] = useState(false)
  const [lockedHeight] = useState<number>(
    () => document.documentElement.clientHeight
  )

  const heightStyle = fullScreen ? `${lockedHeight - 80}px` : `${Math.round(lockedHeight * 0.6)}px`

  return (
    <div
      className="relative flex items-center justify-center bg-black"
      style={{ height: heightStyle }}
    >
      {/* Background image fades in once loaded — no skeleton shimmer fighting with text */}
      <div
        className={`absolute inset-0 parallax-bg transition-opacity duration-700 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {iconImage ? (
        <div className="relative z-10 flex items-center justify-center px-4 w-full">
          <div className="max-w-[240px] sm:max-w-sm md:max-w-md w-full mx-auto relative">
            {!iconLoaded && <Skeleton className="w-full h-[30vh] rounded-md" />}
            <img
              src={iconImage}
              alt={title}
              onLoad={() => setIconLoaded(true)}
              className={`max-h-[40vh] max-w-full object-contain drop-shadow-2xl animate-[iconReveal_1.5s_ease-out_forwards] mx-auto transition-opacity duration-500 ${iconLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
      ) : (
        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="font-serif mx-10 text-2xl md:text-5xl font-normal text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]">
            {title}
          </h1>
          {description && (
            <p className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default SubHero
