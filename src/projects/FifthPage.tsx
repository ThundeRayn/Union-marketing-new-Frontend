//import Upbadge from "@/blocks/Upbadge"
import { Button } from "@/components/ui/button"
import NativeVideo from "@/components/NativeVideo"
import { useRef } from "react"

const Fifth = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const buttons = [
    { id: 1, label: 'AMENITY MAP', link: 'https://drive.google.com/file/d/1dA7KyqEZHfJbGqSIUCs67ZPAplIheGRR/view?usp=sharing',target: '_blank' },
    { id: 2, label: 'INCENTIVE', link: 'https://drive.google.com/file/d/11-iSgsejyMtEchqczBAp_I0asat2O28g/view?usp=sharing', target: '_blank' },
    { id: 3, label: 'VIDEO', link: '#video', onClick: scrollToVideo },
    { id: 4, label: 'SINGLE-GARAGE-FLOOR PLAN', link: 'https://drive.google.com/file/d/1XQ3KB1eIVwUDvSmLqkYzmongkDzMfDBa/view?usp=sharing', target: '_blank' },
    { id: 5, label: 'DOUBLE-GARAGE-FLOOR PLAN', link: 'https://drive.google.com/file/d/1RaBlR1yFYNYrZKSuzooYyYZxfczZrt3O/view?usp=sharing', target: '_blank' },
    { id: 7, label: 'SITE PLAN', link: 'https://drive.google.com/file/d/1QbwY5Y0vgypLbFr1KWYAzcH4rFRks9gk/view?usp=sharing', target: '_blank' },
    { id: 8, label: 'PRICE LIST', link: 'https://drive.google.com/file/d/1IkN9GZX7j665fhWAVT07G2GJDWzNwOSn/view?usp=sharing', target: '_blank' }
  ];

  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768269116/Fifth-Avenue-Homes-King-City-Amenity-Map_uddd75.png'
  ];

  return (
    <div>
      {/* <Upbadge 
        title='Fifth Avenue Homes King City' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459181/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96-2025-03-16-%E4%B8%8B%E5%8D%8811.44.45_xocjxm.png"
      /> */}


       {/* Video Section */}
      <NativeVideo 
        src="https://res.cloudinary.com/dqj2gwlpf/video/upload/v1768270984/Snapinst.app_video_AQNZAZ3s3Pcv0l5g3n8Haw4eZyc_pmc3C1XCmc44toevbCAhJPM9QR5WxYJkN8icoZLijXcj3S7sIdK_Q-ntdHkP85kNlEvXJGL9UJM-1_byxrhs.mp4"
        title="Project Video"
        controls={true}
        loop={true}
      />
      
      
      {/* Main Content Area */}
      <div className="container mx-auto flex flex-col items-center">
          
        <div className="w-full max-w-2xl gap-8 px-4 py-5 md:py-20">
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
          <div className="flex flex-col space-y-4 mt-8">
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
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center">The Builder</h2>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486776/logo-removebg-preview_t0imsb.png" 
            alt="Builder icon"
            className="w-32 h-32 object-cover rounded-lg" 
          />
        </div>
      </div>


      
     

    </div>
  )
}

export default Fifth