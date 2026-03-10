import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  path: string;
}

const ProjectCard = ({ title, description, coverImage, path }: ProjectCardProps) => {
  return (
    <Link
      to={path}
      className="block rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-200 hover:border-yellow-400/30 group"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
