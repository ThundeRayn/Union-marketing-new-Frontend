import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import type { ProjectButton } from "@/blocks/ProjectButtonList"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender"
import Map from "@/components/Map"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'eversley')!

const EversleyPage = () => {
  const buttons: ProjectButton[] = [
    { id: 1, label: 'PRICE LIST', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957946/eversley-estates-price-list_ibdrtu.pdf', target: '_blank' },
    { id: 2, label: 'BONUS INCENTIVES', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958071/eversley-estates-eaton-bonus-incentives_wlmf3i.pdf', target: '_blank' },
    { id: 3, label: 'BONUS FEATURES', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958129/eversley-estates-bonus-features_aqamzg.pdf', target: '_blank' },
    { id: 4, label: 'FAIRFIELD FLOOR PLANS', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958201/eversley-estates-fairfield-floorplans_xw9cis.pdf', target: '_blank' },
    { id: 5, label: 'EVALYN FLOOR PLANS', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958283/eversley-estates-evalyn-floorplans_xzuiv8.pdf', target: '_blank' },
    { id: 6, label: 'EATON FLOOR PLANS', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958565/eversley-estates-eaton-floorplans_compressed_xuez6i.pdf', target: '_blank' },
    { id: 7, label: 'SITE PLAN', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958654/eversley-estates-siteplan_mgaqgl.pdf', target: '_blank' },
    { id: 8, label: 'BROCHURE', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776958701/eversley-estates-brochure_qzu7ui.pdf', target: '_blank' },
  ]

  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277534/Site-Map_clyzsu.jpg'
  ];

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />
      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
        mobileUrl={project.mobileCoverImage}
        iconImage="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277511/Eversley-Estate-King-City_kmpfyf.png"
      />

      <ProjectInfo projectId="eversley" />

      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277571/Eversley-Estates-Kitchen_jr3agk.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277567/Eversley-Estates-Family-Room_kffmay.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277563/Eversley-Estates-Ensuite-1_povqsz.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277559/Eversley-Estates-Dining-Room_zcb0rv.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277555/Eversley-Estates-Ensuite_t37zin.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277550/Eversley-Estates-Backyard_dh4vyb.webp',
        ]}
      />

      <Map title="Site Map" images={images} />

      {/* Main Content Area */}
      <div className="mx-auto flex flex-col items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-2xl pt-5 pb-15 md:pt-10 md:pb-20">
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

      <PictureRender
        title="Model Home Gallery"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277605/Eversley-Estates-Model-1-1_kvkfag.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277602/Eversley-Estates-Model-2-1_jkib3s.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277598/Eversley-Estates-Model-4-1_dewbxq.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277595/Eversley-Estates-Model-3-1_o4swiv.webp',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277591/Eversley-Estates-Model-5-1_krykrb.webp'
        ]}
      />

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp', alt: 'Treasure Hill' }
        ]}
      />

      

      <ProjectNavigation projectId="eversley" />
    </div>
  )
}

export default EversleyPage
