import Fifth from '../projects/FifthPage';
import ProjectCard from '../components/ProjectCard';
import Upbadge from '@/blocks/Upbadge';
import ElevenPage from '@/projects/ElevenPage';
import EversleyPage from '@/projects/EversleyPage';
import GeorginaPage from '@/projects/GeorginaPage';
import CGTowerPage from '@/projects/CGTowerPage';
import AbejaPage from '@/projects/AbejaPage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef, useState, useEffect } from 'react';

// Project list configuration — ratio varies per card for masonry effect
const projectList = [
  {
    id: 'fifth',
    title: 'Fifth Avenue Homes King City',
    type: 'TOWNHOMES',
    address: 'King City, Ontario',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459181/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96-2025-03-16-%E4%B8%8B%E5%8D%8811.44.45_xocjxm.png',
    component: Fifth,
    path: '/projects/fifth',
    ratio: '4/3',
  },
  {
    id: 'eleven',
    title: '11 Altamont Rd.',
    type: 'DETACHED',
    address: 'Scarborough, Ontario',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768275582/Untitled-design-5_xjqyo7.jpg',
    component: ElevenPage,
    path: '/projects/eleven',
    ratio: '3/4',
  },
  {
    id: 'eversley',
    title: 'Eversley Project',
    type: 'SEMI-DETACHED',
    address: 'King, Ontario',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277530/2021_09_28_12_28_44_thomson-c-1024x682-1_wonxfk.jpg',
    component: EversleyPage,
    path: '/projects/eversley',
    ratio: '1/1',
  },
  {
    id: 'georgina',
    title: 'Georgina Project',
    type: 'DETACHED',
    address: 'Keswick, Ontario',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278560/Georgina-Heights-in-Keswick_ideq3b.jpg',
    component: GeorginaPage,
    path: '/projects/georgina',
    ratio: '3/4',
  },
  {
    id: 'cgtower',
    title: 'CG Tower',
    type: 'CONDO',
    address: 'Vaughan, Ontario',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279079/project-part-2_vompfo.jpg',
    component: CGTowerPage,
    path: '/projects/cgtower',
    ratio: '4/3',
  },
  {
    id: 'abeja',
    title: 'Abeja Project',
    type: 'CONDO',
    address: 'Hamilton, Ontario',
    description: 'NOW SELLING',
    coverImage: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279500/index-slider-v1_kamq7j.jpg',
    component: AbejaPage,
    path: '/projects/abeja',
    ratio: '1/1',
  },
];

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
    <Upbadge title='PROJECTS' description='View our on selling' fullScreen={false} />
    <div ref={sectionRef} className="relative px-4 md:px-5 lg:px-24 py-4 bg-black">
      {/* Top bar: scroll progress */}
      <div className="pt-4 pb-2 flex items-center justify-between">
        <div className="flex-1 max-w-xs h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-(--color-primary)/60 transition-all duration-300 ease-out"
            style={{ width: `${Math.max(scrollProgress * 100, 5)}%` }}
          />
        </div>
        <div className="flex items-center gap-3 ml-6">
          <span
            className="text-[9px] tracking-[0.2em] uppercase text-white/30"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Scroll to explore
          </span>
          <div className="h-6 w-px bg-(--color-primary)/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-(--color-primary) animate-[scrollPulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

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
    </div>
    </>
  )
}

export default ProjectPage