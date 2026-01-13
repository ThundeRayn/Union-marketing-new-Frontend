import Upbadge from "@/blocks/Upbadge"
import PictureRender from "@/components/PictureRender"
import { useRef, useEffect } from "react"

const GeorginaPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278791/Georgina-Heights-Site-Plan-scaled_y38o3y.jpg'
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
        title='Georgina Project' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278560/Georgina-Heights-in-Keswick_ideq3b.jpg"
      />

      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">SINGLES</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-black">CHURCH STREET.& WOODBINE AVENUE.</p>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          {images.map((image, index) => (
            <div key={index} className="w-full overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* The Builder Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">The Builder</h2>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp" 
            alt="Builder icon"
            className="w-102 object-cover rounded-lg" 
          />
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Project Video</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/9BYZTIMmJPA?autoplay=0&loop=1&mute=0&controls=1&enablejsapi=1"
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

export default GeorginaPage
