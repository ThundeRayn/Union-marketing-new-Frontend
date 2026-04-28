import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import type { ProjectButton } from "@/blocks/ProjectButtonList"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'lakewilcox')!

const LakeWilcoxPage = () => {
  const buttons: ProjectButton[] = [
    // Add buttons here
    { id: 1, label: 'PRICE LIST', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118500/Lake_Wilcox_Towns-Price_List_j8bb5q.pdf', target: '_blank' },
    { id: 2, label: 'INCENTIVES', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118524/Lake_Wilcox_Towns-Incentive_ji0bma.pdf', target: '_blank' },
    { id: 3, label: 'SITE PLAN', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118534/site-plan_zeb04h.pdf', target: '_blank' },
    { id: 4, label: 'BROCHURE', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777396767/Brochure_Lake_Wilcox_1__compressed_compressed_1_z5hgho.pdf', target: '_blank' },
  ]

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />

      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
        mobileUrl={project.mobileCoverImage}
      />

      <ProjectInfo projectId="lakewilcox" />

      {/* Main Content Area */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 pt-5 pb-15 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118556/Brochure_Page_09_k31fos.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118553/Brochure_Page_08_xphci4.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118554/lake-wilcox-town-rendering_hwudcm.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777118557/Greatroom-_gh1hku.jpg',
        ]}
      />

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777218549/centralpark-logo-footer_xrbf9o.png', alt: 'Builder logo' }
        ]}
        noFilter
      />

      <ProjectNavigation projectId="lakewilcox" />
    </div>
  )
}

export default LakeWilcoxPage
