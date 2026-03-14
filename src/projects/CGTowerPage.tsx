import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender"
import ModelsBlock from "@/components/ModelsBlock"
import YouTubeVideo from "@/components/YouTubeVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'cgtower')!

const CGTowerPage = () => {
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
