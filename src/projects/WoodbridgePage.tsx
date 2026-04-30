import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import YTVideo from "@/components/YTVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'woodbridge')!

const Woodbridge = () => {
  const buttons = [
    // placeholder
    { id: 1, label: 'PRICE LIST', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777467808/FIFTH_AVENUE_HOMES_WOODBRIDGE_-_Price_List_1_axvpu3.pdf', target: '_blank' },
    { id: 2, label: 'SITE PLAN', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777473549/Site_Plan_compressed_bcys9y.pdf', target: '_blank' },
    { id: 3, label: 'FLOOR PLAN', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777474713/Floor_plan_gd2dar.pdf', target: '_blank' },
    { id: 4, label: 'BROCHURE', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777473663/Brochure_l1wcqr.pdf', target: '_blank' },
    { id: 5, label: 'FEATURES & FINISHES', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777473927/Features_Finishes_compressed_xb28gn.pdf', target: '_blank' },
    { id: 6, label: 'WORKSHEET', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777474057/Worksheet_amj6d9.pdf', target: '_blank' },


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
      <ProjectInfo projectId="woodbridge" />

      <YTVideo videoId="MfX2pYPNVW4" title="Promotional Video" />

      <div className="mx-auto flex flex-col items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-2xl py-10 md:py-20">
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

      <YTVideo videoId="gkkty_qPbO8" title="Interactive Video" />

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486776/logo-removebg-preview_t0imsb.png', alt: 'Builder logo' }
        ]}
      />

      <ProjectNavigation projectId="woodbridge" />
    </div>
  )
}

export default Woodbridge
