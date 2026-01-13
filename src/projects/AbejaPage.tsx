import Upbadge from "@/blocks/Upbadge"
import PictureRender from "@/components/PictureRender"
import { useRef, useEffect } from "react"

const AbejaPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const images = [
    'https://via.placeholder.com/800x600'
  ];

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
    <div>
      <Upbadge 
        title='Abeja Project' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279500/index-slider-v1_kamq7j.jpg"
      />

      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">CONDOMINIUM</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-black">JANE STREET & RUTHERFORD ROAD</p>
          </div>
        </div>
      </div>

      {/* The Builder Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">The Builder</h2>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486870/Cortel-Group-with-text_p5vbhf.png" 
            alt="Builder icon"
            className="w-102 object-cover rounded-lg" 
          />
          <img src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279495/AbejaDistrictCondos_logo_zv7baw.jpg"
            alt="Abeja logo"
            className="w-102 object-cover rounded-lg" 
          />
        </div>
      </div>

      {/* Picture Render Section */}
      <PictureRender
        title="Rendering"
        pictures={[
          'https://via.placeholder.com/1200x800',
          'https://via.placeholder.com/1200x800',
        ]}
      />

      {/* YouTube Video Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Project Video</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/KX63R85lUOc?autoplay=0&loop=1&mute=0&controls=1&enablejsapi=1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default AbejaPage
