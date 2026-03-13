import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import BackToHome from "@/components/BackToHome"
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

      {/* Project Info Section */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-(--color-secondary-light) p-6 rounded-lg border-l-4 border-(--color-primary)">
            <h3 className="text-lg font-bold text-white/60 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-white">SINGLES</p>
          </div>
          <div className="bg-(--color-secondary-light) p-6 rounded-lg border-l-4 border-(--color-primary)">
            <h3 className="text-lg font-bold text-white/60 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-white">CHURCH STREET & WOODBINE AVENUE</p>
          </div>
        </div>
      </div>

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
    </div>
  )
}

export default GeorginaPage
