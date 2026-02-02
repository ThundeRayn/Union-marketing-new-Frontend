import Upbadge from "@/blocks/Upbadge"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"

const Fifth = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const floorPlanRef = useRef<HTMLDivElement>(null);
  const [layoutType, setLayoutType] = useState<'double' | 'single'>('double');

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToFloorPlan = () => {
    floorPlanRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

  const buttons = [
    { id: 1, label: 'FEATURES & FINISHES', link: 'https://drive.google.com/file/d/15aiUkCq8d4q3PiRF4jx6uNxVx6ktsf1A/view?usp=sharing' },
    { id: 2, label: 'BROCHER', link: 'https://drive.google.com/file/d/1MezmxgSo62ofhhaiQPBe28jSLjZM2qIE/view?usp=sharing', target: '_blank' },
    { id: 3, label: 'VIDEO', link: '#video', onClick: scrollToVideo },
    { id: 4, label: 'FLOOR PLAN', link: '#floorplan', onClick: scrollToFloorPlan },
    { id: 5, label: 'SITE PLAN', link: 'https://drive.google.com/file/d/17s4JyyoPxJCFtpG8leLkctwoSFdNAUcP/view?usp=sharing', target: '_blank' },
    { id: 7, label: 'PRICE LIST', link: 'https://drive.google.com/file/d/13v4GCFyi6PnuhkZFSss7lNc5BMCHQ5n9/view?usp=sharing', target: '_blank' },
    { id: 8, label: 'AMENITIES MAP', link: 'https://drive.google.com/file/d/1eCj4BmgpHA4EPMQhQ5l-Y3erJSKvqPRN/view?usp=sharing', target: '_blank' },
    { id: 9, label: 'WORKSHEET', link: 'https://drive.google.com/file/d/1GIcib_2DQblIQmeY_E-fuaJkhWT9tYEi/view?usp=sharing' , target: '_blank' },
  ];

  const doubleCarFloorPlans = [
    { id: 'dc1', label: 'THR-1 End & Corner', link: 'https://drive.google.com/file/d/1MTpvAKcrki8SbuMh9Qi8uay82IS9FjV3/view?usp=sharing', target: '_blank' },
    { id: 'dc2', label: 'THR-1', link: 'https://drive.google.com/file/d/1l4hFDuroUfmJtliGlWdMDI2b1qEUs26S/view?usp=sharing',target: '_blank' },
    { id: 'dc3', label: 'THR-2', link: 'https://drive.google.com/file/d/1bClYi29cCxs3A3VEQPWpqOaB3_gSLket/view?usp=sharing', target: '_blank' },
    { id: 'dc4', label: 'THR-3 End & Corner', link: 'https://drive.google.com/file/d/1bClYi29cCxs3A3VEQPWpqOaB3_gSLket/view?usp=sharing', target: '_blank' },
    { id: 'dc5', label: 'THR-3', link: 'https://drive.google.com/file/d/1-JKX1bYk2b0Yy3jv5ZV6p2k9g0k1Y1b2/view?usp=sharing', target: '_blank' },
    { id: 'dc6', label: 'THR-4', link: 'https://drive.google.com/file/d/19ZzE0QRvUb0S_BxGDV4CXbszWcp6-wLW/view?usp=sharing', target: '_blank' },
  ];

  const singleCarFloorPlans = [
    { id: 'sc1', label: 'THF-2', link: 'https://drive.google.com/file/d/1BhdKjw_I9omaRRPUmrPnZimAYP-rMLwi/view?usp=sharing', target: '_blank' },
    { id: 'sc2', label: 'THF-3 End', link: 'https://drive.google.com/file/d/1_nnbgnrgFA97JxI66ZnFuITUKxLX_Fm6/view?usp=sharing', target: '_blank' },
    { id: 'sc3', label: 'THF-3', link: 'https://drive.google.com/file/d/1lOiR7rLqVtWR8oR1JbKRv7n4P23dV_zX/view?usp=sharing', target: '_blank' },
    { id: 'sc4', label: 'TH-4', link: 'https://drive.google.com/file/d/14rKmbMPaA7MYgoRpT9nhXtmlSHHFPNWJ/view?usp=sharing', target: '_blank' },
  ];

  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768269116/Fifth-Avenue-Homes-King-City-Amenity-Map_uddd75.png'
  ];

  return (
    <div>
      <Upbadge 
        title='Fifth Avenue Homes King City' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459181/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96-2025-03-16-%E4%B8%8B%E5%8D%8811.44.45_xocjxm.png"
      />
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - Button List */}
          
          <div className="flex flex-col space-y-4">
            <img 
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768269691/king_city-1_ici26g.png" 
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

      {/* Floor Plan Section */}
      <div ref={floorPlanRef} className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Floor Plans</h2>
        
        {/* Layout Type Switch */}
        <div className="flex justify-center gap-8 mb-8">
          <h3
            onClick={() => setLayoutType('double')}
            className={`text-2xl font-semibold cursor-pointer transition-all duration-300 ${
              layoutType === 'double' 
                ? 'text-black border-b-4 border-yellow-400 pb-2' 
                : 'text-gray-400 hover:text-gray-600 pb-2'
            }`}
          >
            Double Garage
          </h3>
          <h3
            onClick={() => setLayoutType('single')}
            className={`text-2xl font-semibold cursor-pointer transition-all duration-300 ${
              layoutType === 'single' 
                ? 'text-black border-b-4 border-yellow-400 pb-2' 
                : 'text-gray-400 hover:text-gray-600 pb-2'
            }`}
          >
            Single Garage
          </h3>
        </div>

        {/* Floor Plan Buttons */}
        <div className="flex flex-col space-y-4 max-w-md mx-auto">
          {(layoutType === 'double' ? doubleCarFloorPlans : singleCarFloorPlans).map((plan) => (
            <Button
              key={plan.id}
              variant="price"
              size="union"
              asChild
            >
              <a href={plan.link} target="_blank" rel="noopener noreferrer">
                {plan.label}
              </a>
            </Button>
          ))}
        </div>
      </div>

      {/* The Builder Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">The Builder</h2>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486776/logo-removebg-preview_t0imsb.png" 
            alt="Builder icon"
            className="w-32 h-32 object-cover rounded-lg" 
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 py-8">
        <video 
          ref={videoRef}
          className="w-full rounded-lg shadow-lg"
          loop
          playsInline
          controls
          muted
        >
          <source 
            src="https://res.cloudinary.com/dqj2gwlpf/video/upload/v1768270984/Snapinst.app_video_AQNZAZ3s3Pcv0l5g3n8Haw4eZyc_pmc3C1XCmc44toevbCAhJPM9QR5WxYJkN8icoZLijXcj3S7sIdK_Q-ntdHkP85kNlEvXJGL9UJM-1_byxrhs.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Fifth