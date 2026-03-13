import Upbadge from "@/blocks/Upbadge"
import ProjectBuilder from "@/blocks/ProjectBuilder"
import ProjectNavigation from "@/blocks/ProjectNavigation"
import BackToHome from "@/components/BackToHome"
import ProjectInfo from "@/components/ProjectInfo"
import PictureRender from "@/components/PictureRender";
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
      />

      <ProjectInfo projectId="eversley" />

      {/* Main Content Area */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - Logo */}
          <div className="flex flex-col space-y-4">
            <img
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277511/Eversley-Estate-King-City_kmpfyf.png"
              alt="Main project"
              className="w-102 p-6 h-auto object-cover rounded-lg mb-4"
            />
          </div>

          {/* Right Container - Image List */}
          <div className="flex flex-col space-y-4">
            {images.map((image, index) => (
              <div key={index} className="w-full overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectBuilder
        images={[
          { src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp', alt: 'Treasure Hill' }
        ]}
      />

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

      <ProjectNavigation projectId="eversley" />
    </div>
  )
}

export default EversleyPage