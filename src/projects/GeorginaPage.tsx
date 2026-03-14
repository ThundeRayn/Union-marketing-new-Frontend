import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import Map from "@/components/Map"
import YTVideo from "@/components/YTVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'georgina')!

const GeorginaPage = () => {
  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278791/Georgina-Heights-Site-Plan-scaled_y38o3y.jpg'
  ];

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />
      
      
      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
      />
      
      <ProjectInfo projectId="georgina" />
      <YTVideo videoId="9BYZTIMmJPA" title="Project Video" />

      

      <Map title="Site Plan" images={images} />

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp', alt: 'Treasure Hill' }
        ]}
      />

      

      <ProjectNavigation projectId="georgina" />
    </div>
  )
}

export default GeorginaPage
