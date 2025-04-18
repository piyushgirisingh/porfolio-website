
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, description, imageUrl, link }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover object-center"
      />
      <div className="bg-white p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          className="mt-4 inline-block text-blue-500 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
