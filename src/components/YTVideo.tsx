import { useRef, useEffect, useState } from "react"

interface YTVideoProps {
  videoId: string;
  title?: string;
}

const YTVideo = ({ videoId, title = "Project Video" }: YTVideoProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (!iframeLoaded) return;

    // Small delay to ensure YouTube player is fully initialized after iframe load
    const timeout = setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const sendCommand = (func: string) => {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func, args: '' }),
          '*'
        );
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              sendCommand('playVideo');
            } else {
              sendCommand('pauseVideo');
            }
          });
        },
        { threshold: 0.25 }
      );

      const wrapper = iframe.parentElement;
      if (wrapper) observer.observe(wrapper);

      return () => {
        if (wrapper) observer.unobserve(wrapper);
      };
    }, 1500);

    return () => clearTimeout(timeout);
  }, [iframeLoaded]);

  return (
    <div className="w-full">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          ref={iframeRef}
          onLoad={() => setIframeLoaded(true)}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&playlist=${videoId}&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=0&enablejsapi=1`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
};

export default YTVideo;
