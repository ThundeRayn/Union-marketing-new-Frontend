import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'georgina')!

const GeorginaPage = () => {
  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278791/Georgina-Heights-Site-Plan-scaled_y38o3y.jpg'
  ];

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />

      {/* Video Section */}
      <div className="w-full">
        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/9BYZTIMmJPA?autoplay=1&loop=1&mute=1&controls=1&modestbranding=1"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Project Video"
          />
        </div>
      </div>

      <ProjectInfo projectId="georgina" />

      {/* Main Content Area */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 py-8">
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

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp', alt: 'Treasure Hill' }
        ]}
      />

      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
      />

      <ProjectNavigation projectId="georgina" />
    </div>
  )
}

export default GeorginaPage
