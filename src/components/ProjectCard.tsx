import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  path: string;
  ratio?: string;
}

const ProjectCard = ({ title, description, coverImage, path, ratio = '4/3' }: ProjectCardProps) => {
  return (
    <Link
      to={path}
      className="block overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-white/10 hover:border-(--color-primary)/30 bg-(--color-secondary) group"
      style={{ borderRadius: '12px' }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
        />
      </div>
      <div className="p-5">
        <h2
          className="text-lg font-normal text-white mb-1"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
        <p
          className="text-[10px] tracking-[0.15em] uppercase text-(--color-primary)"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
