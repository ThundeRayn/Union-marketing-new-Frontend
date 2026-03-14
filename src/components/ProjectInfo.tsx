import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import projectsData from '@/data/projects.json'

interface ProjectInfoProps {
  projectId: string
}

const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const project = projectsData.find(p => p.id === projectId)

  if (!project) return null

  return (
    <div ref={ref} className="px-6 md:px-16 lg:px-24 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div
          className={`p-6 border border-white/10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-3"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Project Type
          </p>
          <p
            className="text-xl text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {project.infoType}
          </p>
        </div>
        <div
          className={`p-6 border border-white/10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-3"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Location
          </p>
          <p
            className="text-xl text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {project.infoLocation}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
