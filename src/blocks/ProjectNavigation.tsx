import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import projectsData from '@/data/projects.json'

interface ProjectNavigationProps {
  projectId: string
}

const ProjectNavigation = ({ projectId }: ProjectNavigationProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const currentIndex = projectsData.findIndex(p => p.id === projectId)
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length]
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length]

  return (
    <div
      ref={ref}
      className="relative w-full h-80 md:h-96 overflow-hidden"
    >
      {/* Parallax background image from next project */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${nextProject.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Navigation content */}
      <div
        className={`relative z-10 h-full flex items-center justify-between px-6 md:px-16 lg:px-24 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Link
          to={prevProject.path}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white hover:text-(--color-primary) transition-all duration-300 ease-out text-xs tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          &larr; {prevProject.title}
        </Link>

        <Link
          to={nextProject.path}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white hover:text-(--color-primary) transition-all duration-300 ease-out text-xs tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          {nextProject.title} &rarr;
        </Link>
      </div>
    </div>
  )
}

export default ProjectNavigation
