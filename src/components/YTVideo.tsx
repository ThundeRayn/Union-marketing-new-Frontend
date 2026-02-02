import { useRef, useEffect } from "react"

interface YTVideoProps {
  videoId: string;
  title?: string;
}

const YTVideo = ({ videoId, title = "Project Video" }: YTVideoProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*'
            );
          } else if (!entry.isIntersecting && iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              '*'
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    const videoContainer = iframeRef.current?.parentElement;
    if (videoContainer) {
      observer.observe(videoContainer);
    }

    return () => {
      if (videoContainer) {
        observer.unobserve(videoContainer);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2> */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&mute=0&controls=1&enablejsapi=1`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default YTVideo;
