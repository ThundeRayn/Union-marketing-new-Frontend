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
      className="block rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
