import Fifth from '../projects/FifthPage';
import ProjectCard from '../components/ProjectCard';
import Upbadge from '@/blocks/Upbadge';
import ElevenPage from '@/projects/ElevenPage';
import EversleyPage from '@/projects/EversleyPage';
import GeorginaPage from '@/projects/GeorginaPage';
import CGTowerPage from '@/projects/CGTowerPage';
import AbejaPage from '@/projects/AbejaPage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Project list configuration — ratio varies per card for masonry effect
const projectList = [
  {
    id: 'fifth',
    title: 'Fifth Avenue Homes King City',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459181/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96-2025-03-16-%E4%B8%8B%E5%8D%8811.44.45_xocjxm.png',
    component: Fifth,
    path: '/projects/fifth',
    ratio: '4/3',
  },
  {
    id: 'eleven',
    title: '11 Altamont Rd.',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768275582/Untitled-design-5_xjqyo7.jpg',
    component: ElevenPage,
    path: '/projects/eleven',
    ratio: '3/4',
  },
  {
    id: 'eversley',
    title: 'Eversley Project',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277530/2021_09_28_12_28_44_thomson-c-1024x682-1_wonxfk.jpg',
    component: EversleyPage,
    path: '/projects/eversley',
    ratio: '1/1',
  },
  {
    id: 'georgina',
    title: 'Georgina Project',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278560/Georgina-Heights-in-Keswick_ideq3b.jpg',
    component: GeorginaPage,
    path: '/projects/georgina',
    ratio: '3/4',
  },
  {
    id: 'cgtower',
    title: 'CG Tower',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279079/project-part-2_vompfo.jpg',
    component: CGTowerPage,
    path: '/projects/cgtower',
    ratio: '4/3',
  },
  {
    id: 'abeja',
    title: 'Abeja Project',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279500/index-slider-v1_kamq7j.jpg',
    component: AbejaPage,
    path: '/projects/abeja',
    ratio: '1/1',
  },
];

const ProjectPage = () => {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <>
    <Upbadge title='PROJECTS' description='View our on selling' fullScreen={false} />
    <div ref={ref} className="container mx-auto px-4 md:px-24 py-8">
      <div
        className="pt-12"
        style={{ columnCount: 3, columnGap: '12px' }}
      >
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`mb-3 break-inside-avoid transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              coverImage={project.coverImage}
              path={project.path}
              ratio={project.ratio}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProjectPage