import Upbadge from "@/blocks/Upbadge"
import { Button } from "@/components/ui/button"
import ProjectInfo from "@/components/ProjectInfo"
import { useRef, useEffect } from "react"

const ElevenPage = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const cloudinaryVideoRef = useRef<HTMLVideoElement>(null);

  const scrollToVideo = () => {
    videoContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const container = videoContainerRef.current;
    const iframe = iframeRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframe) {
            // Post message to Vimeo iframe to play
            iframe.contentWindow?.postMessage('{"method":"play"}', '*');
          } else if (iframe) {
            // Post message to Vimeo iframe to pause
            iframe.contentWindow?.postMessage('{"method":"pause"}', '*');
          }
        });
      },
      { threshold: 0.25 }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    const video = cloudinaryVideoRef.current;
    
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log("Autoplay was prevented:", error);
              });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const buttons = [
    { id: 1, label: 'UPDATED FEATURES', link: 'https://drive.google.com/file/d/11_gy9k9TARqFPdngmr-AQuLCKgOnSqr9/view?usp=sharing', target: '_blank' },
    { id: 2, label: 'INCENTIVES', link: 'https://drive.google.com/file/d/10l6QPOvw3X0c82pNHib72BfuP5hWIemL/view?usp=sharing', target: '_blank' },
    { id: 3, label: 'VIDEO', link: '#video', onClick: scrollToVideo },
    { id: 4, label: 'PRICE LIST1', link: 'https://drive.google.com/file/d/1V-xDRk9pZBShms4wJ12V4bNd2Dd7J_fO/view?usp=sharing', target: '_blank' },
    { id: 5, label: 'PRICE LIST2', link: 'https://drive.google.com/file/d/1q9K3qvhpnOyacU9fVsBvNoba1IBnC7EW/view?usp=sharing', target: '_blank' },
    { id: 6, label: 'BROCHURE', link: 'https://drive.google.com/file/d/19KeAblPYTYaWRWnX2wzWcwLDsVOi_lx5/view?usp=sharing', target: '_blank' }
  ];

  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768276046/altamont-siteplan-may09-2023-scaled_cfryog.jpg',
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768276043/img-amenitiesmap_yh7tvg.png',
  ];

  return (
    <div>
      <Upbadge 
        title='11 Altamont Rd.' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768275582/Untitled-design-5_xjqyo7.jpg"
      />

      <ProjectInfo 
        type="CONDO TOWNS"
        location="Near Finch Station"
      />
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - Button List */}
          
          <div className="flex flex-col space-y-4">
            <img 
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768275579/logo-11altamont-boxed_n3bqur.png" 
              alt="Main project"
              className="w-full p-6 h-auto object-cover rounded-lg mb-4" 
            />
            {/* eslint-disable-next-line react-hooks/refs */}
            {buttons.map((button) => (
              <Button
                key={button.id}
                variant="price"
                size="union"
                asChild={!button.onClick}
                onClick={button.onClick}
              >
                {button.onClick ? (
                  <span>{button.label}</span>
                ) : (
                  <a href={button.link} target={button.target} rel={button.target === '_blank' ? 'noopener noreferrer' : undefined}>
                    {button.label}
                  </a>
                )}
              </Button>
            ))}
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
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768276135/logo-7_mph9ln.png" 
            alt="Builder icon"
            className="h-32 object-cover rounded-lg" 
          />
        </div>
      </div>

      {/* Video Section */}
      <div ref={videoContainerRef} className="container mx-auto px-4 py-8">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe 
            ref={iframeRef}
            src="https://player.vimeo.com/video/340649441?loop=1&title=0&byline=0&portrait=0" 
            className="w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>

      {/* Cloudinary Video Section */}
      <div className="container mx-auto px-4 py-8">
        <video 
          ref={cloudinaryVideoRef}
          className="w-full rounded-lg shadow-lg"
          loop
          playsInline
          controls
          muted
        >
          <source 
            src="https://res.cloudinary.com/dqj2gwlpf/video/upload/v1768276273/1387_1728769250Video-in-Original-Quality_ssok0v.mov" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default ElevenPage