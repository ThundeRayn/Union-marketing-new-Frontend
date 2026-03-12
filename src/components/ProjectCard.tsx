import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  address: string;
  description: string;
  coverImage: string;
  path: string;
  ratio?: string;
}

const ProjectCard = ({ title, type, address, coverImage, path, ratio = '4/3' }: ProjectCardProps) => {
  return (
    <Link
      to={path}
      className="block relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-white/10 hover:border-(--color-primary)/30 group"
    >
      <div className="relative w-full overflow-hidden project-card-ratio" style={{ '--card-ratio': ratio } as React.CSSProperties}>
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p
            className="text-[10px] tracking-[0.15em] uppercase text-(--color-primary) mb-1"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {type}
          </p>
          <h2
            className="text-lg font-normal text-white mb-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
          <p
            className="text-[10px] tracking-[0.1em] text-white/50"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {address}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
