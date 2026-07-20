import { useRef, useEffect } from "react"

interface VimeoVideoProps {
  videoId: string
  hash?: string
  title?: string
  /** Native aspect ratio of the source clip. Use '9/16' for vertically-shot video. */
  aspectRatio?: '16/9' | '9/16'
}

const VimeoVideo = ({ videoId, hash, title = "Project Video", aspectRatio = '16/9' }: VimeoVideoProps) => {
  const isPortrait = aspectRatio === '9/16'
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const iframe = iframeRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframe) {
            iframe.contentWindow?.postMessage('{"method":"play"}', '*')
          } else if (iframe) {
            iframe.contentWindow?.postMessage('{"method":"pause"}', '*')
          }
        })
      },
      { threshold: 0.25 }
    )

    if (container) {
      observer.observe(container)
    }

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [])

  const params = new URLSearchParams({
    loop: '1',
    autoplay: '1',
    title: '0',
    byline: '0',
    portrait: '0',
  })
  if (hash) params.set('h', hash)

  return (
    <div ref={containerRef} className="w-full">
      <div
        className={`w-full overflow-hidden ${isPortrait ? 'aspect-9/16 sm:max-w-xs md:max-w-sm mx-auto' : 'aspect-video'}`}
      >
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?${params.toString()}`}
          className="w-full h-full"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  )
}

export default VimeoVideo
