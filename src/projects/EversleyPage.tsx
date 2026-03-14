import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender"
import Map from "@/components/Map"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'eversley')!

const EversleyPage = () => {
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
