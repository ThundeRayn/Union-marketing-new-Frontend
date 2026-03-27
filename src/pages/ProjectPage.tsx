import ProjectCard from '../components/ProjectCard';
import Upbadge from '@/blocks/Upbadge';
import BackToHome from '@/components/BackToHome';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef, useState, useEffect } from 'react';
import ContactUs from '@/blocks/ContactUs';
import ScrollProgress from '@/components/ScrollProgress';
import projectsData from '@/data/projects.json';

const projectList = projectsData.map(p => ({
  id: p.id,
  title: p.title,
  type: p.infoType,
  address: p.address,
  description: p.status,
  coverImage: p.coverImage,
  path: p.path,
  ratio: p.ratio,
}));

const ProjectPage = () => {
  const { ref, isVisible } = useScrollAnimation(0.05)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = el.offsetHeight
      // Progress: 0 when section top enters viewport, 1 when section bottom leaves viewport
      const scrolled = window.innerHeight - sectionTop
      const total = sectionHeight + window.innerHeight
      setScrollProgress(Math.min(Math.max(scrolled / total, 0), 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <BackToHome />
    <Upbadge title='PROJECTS' description='View our on selling' fullScreen={false} />
    <div ref={sectionRef} className="relative px-4 md:px-5 lg:px-24 py-4 bg-black">
      <ScrollProgress progress={scrollProgress} />

      <div ref={ref} className="pt-4 columns-1 md:columns-2 md:gap-3 lg:columns-3 lg:gap-3">
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
              type={project.type}
              address={project.address}
              description={project.description}
              coverImage={project.coverImage}
              path={project.path}
              ratio={project.ratio}
            />
          </div>
        ))}
      </div>

      <ScrollProgress progress={scrollProgress} />
    </div>
    
    <ContactUs/>

    </>
  )
}

export default ProjectPage