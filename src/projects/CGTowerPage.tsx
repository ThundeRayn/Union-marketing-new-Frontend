import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectButtonList from "@/blocks/ProjectButtonList"
import type { ProjectButton } from "@/blocks/ProjectButtonList"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender"
import ModelsBlock from "@/components/ModelsBlock"
import YouTubeVideo from "@/components/YouTubeVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'cgtower')!

const CGTowerPage = () => {

  const buttons: ProjectButton[] = [
    { id: 1, label: 'FEATURES', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776955749/Features_Finishes_kpaims.pdf', target: '_blank' },
    { id: 2, label: 'PRICE LIST', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776955824/CG_Tower_-_Price_List_to1wdh.pdf', target: '_blank' },
    { id: 3, label: 'INCENTIVES', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776955869/CG_Tower-Incentive_zvz9kt.pdf', target: '_blank' },
    { id: 4, label: 'FLOOR PLAN', link: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776956570/Floor_Plan_merge_b5ufjh.pdf', target: '_blank' },
    //{ id: 5, label: 'SITE PLAN', link: '#', target: '_blank' },
  ]

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />
      {/* Video Section */}

      <Upbadge
        title={project.title}
        description={project.status}
        url={project.coverImage}
      />
      
      <ProjectInfo projectId="cgtower" />

      <YouTubeVideo videoId="G0atJezPcLk" title="Project Video" />

      {/* Main Content Area */}
      <div className="mx-auto flex flex-col items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-2xl py-10 md:py-20">
          <ProjectButtonList buttons={buttons} />
        </div>
      </div>

      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957058/_______1_bzayva.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957038/_______3_e4i8uo.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776957009/_______4_yltsks.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776956967/__32A2_1_ekp6sk.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776956955/__B8B4_1_mulpku.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1776956955/_______2_scq5ke.jpg'
        ]}
      />

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486870/Cortel-Group-with-text_p5vbhf.png', alt: 'Cortel Group' }
        ]}
      />

      {/* Picture Render Section */}

      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279354/summer-view_boayn8.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279350/park_ilvsk1.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279345/Model-Suite-4_yjkwww.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279339/skating-loop-view_tqauyi.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279333/Model-Suite-5_y8oxn5.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279327/Model-Suite-3_tkkc0b.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279318/Model-Suite-1_u5bx0j.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279313/Expo-Tower-2_pxpojx.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279309/Expo-32nd-Floor-Rendering_v2jin7.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279305/Expo-5-Pool-Rendering-2_otncuw.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279300/Expo-Aerial_eglbh9.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279296/Expo-5-Lobby-Rendering_tsgxwa.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279291/Expo-5_wulne7.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279287/Expo-5-Pool-Rendering_o0a46z.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279281/VMC-Aerial-View_yjam91.jpg'
        ]}
      /> 


      <ModelsBlock
        modelType="Condo Models"
        images={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279374/PERIWINKLE_uf1fw8.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279371/SAFFRON_sryraz.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279367/LILAC-3D_s4mkut.png',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279364/PAISLEY_igu4w3.jpg'
        ]}
      />

      

      <ProjectNavigation projectId="cgtower" />
    </div>
  )
}

export default CGTowerPage
