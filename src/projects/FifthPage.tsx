import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import BackToHome from "@/components/BackToHome"
import NativeVideo from "@/components/NativeVideo"
import { useRef } from "react"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'fifth')!

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
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />

      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
      />

      {/* Main Content Area */}
      <div className="mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">

        <div className="w-full max-w-2xl py-10 md:py-20">

          <img
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768269691/king_city-1_ici26g.png"
            alt="Main project"
            className="w-full h-auto object-cover mb-14 brightness-0 invert opacity-80"
          />
          <ProjectButtonList buttons={buttons} />

          {/* Image List */}
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

      

      {/* Video Section */}
      <NativeVideo
        src="https://res.cloudinary.com/dqj2gwlpf/video/upload/v1768270984/Snapinst.app_video_AQNZAZ3s3Pcv0l5g3n8Haw4eZyc_pmc3C1XCmc44toevbCAhJPM9QR5WxYJkN8icoZLijXcj3S7sIdK_Q-ntdHkP85kNlEvXJGL9UJM-1_byxrhs.mp4"
        title="Project Video"
        controls={true}
        loop={true}
      />
      
      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486776/logo-removebg-preview_t0imsb.png', alt: 'Builder logo' }
        ]}
      />

      <ProjectNavigation projectId="fifth" />
    </div>
  )
}

export default Fifth