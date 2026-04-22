import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender"
import YouTubeVideo from "@/components/YouTubeVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'abeja')!

const AbejaPage = () => {

  const buttons = [
    { id: 1, label: 'PRICE LIST', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776874894/Abeja_District_Price_list_ebirsv.pdf', target: '_blank' },
    //{ id: 2, label: 'FLOOR PLAN', link: '#', target: '_blank' },
    //{ id: 3, label: 'PRICE LIST', link: '#', target: '_blank' },
    //{ id: 4, label: 'INCENTIVES', link: '#', target: '_blank' },
    //{ id: 5, label: 'SITE PLAN', link: '#', target: '_blank' },
  ]

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />
      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
      />
      <ProjectInfo projectId="abeja" />
      <YouTubeVideo videoId="KX63R85lUOc" title="Project Video" />

      {/* Main Content Area */}
      <div className="mx-auto flex flex-col items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-2xl py-10 md:py-20">
          <img
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279495/AbejaDistrictCondos_logo_zv7baw.jpg"
            alt="Abeja District Condos"
            className="w-full h-auto object-cover mb-14"
          />
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

      {/* <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279495/AbejaDistrictCondos_logo_zv7baw.jpg', alt: 'Abeja District Condos' },
        ]}
        noFilter
        title="About"
      /> */}



      {/* Picture Render Section */}
      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095926/render-1_ugefuc.png',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095920/siteplan_xtuiqg.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095900/index-slider-v3_fhhaj5.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095886/index-slider-v4_ps8otu.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095878/index-slider-v2_y1toqv.jpg',
        ]}
      />
     
      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486870/Cortel-Group-with-text_p5vbhf.png', alt: 'Cortel Group' },
        ]}
      />
      

      <ProjectNavigation projectId="abeja" />
    </div>
  )
}

export default AbejaPage
