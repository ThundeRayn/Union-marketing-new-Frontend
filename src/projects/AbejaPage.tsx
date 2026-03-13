import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import BackToHome from "@/components/BackToHome"
import PictureRender from "@/components/PictureRender"
import YouTubeVideo from "@/components/YouTubeVideo"
import projectsData from '@/data/projects.json'

const project = projectsData.find(p => p.id === 'abeja')!

const AbejaPage = () => {

  return (
    <div className="bg-(--color-secondary) text-white min-h-screen">
      <BackToHome to="/project" label="PROJECTS" />

      <YouTubeVideo videoId="KX63R85lUOc" title="Project Video" />

      {/* Project Info Section */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-(--color-secondary-light) p-6 rounded-lg border-l-4 border-(--color-primary)">
            <h3 className="text-lg font-bold text-white/60 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-white">CONDOMINIUM</p>
          </div>
          <div className="bg-(--color-secondary-light) p-6 rounded-lg border-l-4 border-(--color-primary)">
            <h3 className="text-lg font-bold text-white/60 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-white">JANE STREET & RUTHERFORD ROAD</p>
          </div>
        </div>
      </div>

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
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279495/AbejaDistrictCondos_logo_zv7baw.jpg', alt: 'Abeja District Condos' }
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

export default AbejaPage
