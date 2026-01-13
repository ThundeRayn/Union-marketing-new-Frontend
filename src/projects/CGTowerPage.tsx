import Upbadge from "@/blocks/Upbadge"
import PictureRender from "@/components/PictureRender"
import { useRef, useEffect } from "react"

const CGTowerPage = () => {
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
        title='CG Tower' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279277/project-part-2_q0iobc.jpg"
      />

      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">RESIDENTIAL TOWER</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-black">JANE STREET & RUTHERFORD ROAD</p>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - Logo */}
          
          <div className="flex flex-col space-y-4">
            <img 
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279079/project-part-2_vompfo.jpg" 
              alt="Main project"
              className="w-102 p-6 h-auto object-cover rounded-lg mb-4" 
            />
          </div>

          {/* Right Container - Image List */}
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
        </div>
      </div>

      {/* Picture Render Section */}
      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279354/summer-view_boayn8.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279350/park_ilvsk1.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279345/Model-Suite-4_yjkwww.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279339/skating-loop-view_tqauyi.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279333/Model-Suite-5_y8oxn5.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279327/Model-Suite-3_tkkc0b.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279318/Model-Suite-1_u5bx0j.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279313/Expo-Tower-2_pxpojx.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279309/Expo-32nd-Floor-Rendering_v2jin7.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279305/Expo-5-Pool-Rendering-2_otncuw.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279300/Expo-Aerial_eglbh9.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279296/Expo-5-Lobby-Rendering_tsgxwa.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279291/Expo-5_wulne7.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279287/Expo-5-Pool-Rendering_o0a46z.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279281/VMC-Aerial-View_yjam91.jpg'
        ]}
      />

      {/* YouTube Video Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Project Video</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/G0atJezPcLk?autoplay=0&loop=1&mute=0&controls=1&enablejsapi=1"
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

export default CGTowerPage
