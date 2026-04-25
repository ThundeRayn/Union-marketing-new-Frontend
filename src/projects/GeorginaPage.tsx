import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import type { ProjectButton } from "@/blocks/ProjectButtonList"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import Map from "@/components/Map"
import YTVideo from "@/components/YTVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'georgina')!

const GeorginaPage = () => {
  const buttons: ProjectButton[] = [
    { id: 1, label: 'PRICE LIST', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957488/Price_List-Georgina_Height_rwhlnu.pdf', target: '_blank' },
    { id: 2, label: 'BROCHURE 1', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957563/Georgina-Heights-By-Treasure-Hill-Brochure-Floor-Plans_gkbuss.pdf', target: '_blank' },
    { id: 3, label: 'BROCHURE 2', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957637/Georgina-Heights-Brochure_grjhkw.pdf', target: '_blank' },
    { id: 4, label: 'SITE PLAN', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957730/Site-Plan_ksa00d.pdf', target: '_blank' },
    //{ id: 5, label: 'SITE PLAN', link: '#', target: '_blank' },
  ]

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
        mobileUrl={project.mobileCoverImage}
      />
      
      <ProjectInfo projectId="georgina" />
      <YTVideo videoId="9BYZTIMmJPA" title="Project Video" />

      

      <Map title="Site Plan" images={images} />

      {/* Main Content Area */}
      <div className="mx-auto flex flex-col items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-2xl py-10 md:py-20">
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

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
