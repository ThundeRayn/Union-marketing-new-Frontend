import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import { Button } from "@/components/ui/button"
import ProjectInfo from "@/components/ProjectInfo"
import Map from "@/components/Map"
import { useRef, useEffect, useState } from 'react'
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'eleven')!

const ElevenPage = () => {
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const container = videoSectionRef.current;
    const iframe = iframeRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframe) {
            iframe.contentWindow?.postMessage('{"method":"play"}', '*');
          } else if (iframe) {
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

  const buttons = [
    { id: 1, label: 'UPDATED FEATURES', link: 'https://drive.google.com/file/d/11_gy9k9TARqFPdngmr-AQuLCKgOnSqr9/view?usp=sharing', target: '_blank' },
    { id: 2, label: 'INCENTIVES', link: 'https://drive.google.com/file/d/10l6QPOvw3X0c82pNHib72BfuP5hWIemL/view?usp=sharing', target: '_blank' },
    { id: 3, label: 'VIDEO', link: '#video', onClick: () => setShowVideo(true) },
    { id: 4, label: 'PRICE LIST1', link: 'https://drive.google.com/file/d/1V-xDRk9pZBShms4wJ12V4bNd2Dd7J_fO/view?usp=sharing', target: '_blank' },
    { id: 5, label: 'PRICE LIST2', link: 'https://drive.google.com/file/d/1q9K3qvhpnOyacU9fVsBvNoba1IBnC7EW/view?usp=sharing', target: '_blank' },
    { id: 6, label: 'BROCHURE', link: 'https://drive.google.com/file/d/19KeAblPYTYaWRWnX2wzWcwLDsVOi_lx5/view?usp=sharing', target: '_blank' }
  ];

  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768276046/altamont-siteplan-may09-2023-scaled_cfryog.jpg',
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768276043/img-amenitiesmap_yh7tvg.png',
  ];

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />

      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
      />

      <ProjectInfo projectId="eleven" />
      
      {/* Video Section */}
      <div ref={videoSectionRef} className="w-full">
        <div className="w-full aspect-video overflow-hidden">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/340649441?loop=1&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      

      {/* Main Content Area */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 py-10 flex flex-col items-center">

        <div className="w-full max-w-2xl">

          <div className="flex flex-col space-y-4">
            <img
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768275579/logo-11altamont-boxed_n3bqur.png"
              alt="Main project"
              className="w-full p-6 h-auto object-cover rounded-lg mb-4"
            />
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

        </div>
      </div>

      <Map title="Site Plan" images={images} />

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768276135/logo-7_mph9ln.png', alt: 'Builder logo' }
        ]}
        noFilter
      />

      <ProjectNavigation projectId="eleven" />

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:opacity-70 transition-opacity cursor-pointer"
            >
              &times;
            </button>
            <video
              src="https://res.cloudinary.com/dqj2gwlpf/video/upload/v1768276273/1387_1728769250Video-in-Original-Quality_ssok0v.mov"
              controls
              autoPlay
              loop
              className="w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ElevenPage
