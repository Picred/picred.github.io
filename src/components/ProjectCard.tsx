import { ProjectType } from "../types/ProjectType";

export const ProjectCard = ({ title, description, techStack, link, imgUrl}: ProjectType) => {
  return (
    <div className="card bg-neutral text-neutral-content w-full lg:w-96 flex flex-col">
      <div className="card-body">
        <h2 className="card-title text-lg lg:text-xl font-bold">{title}</h2>

        {imgUrl != "" && (<img src={imgUrl} />)}

        <p className="text-sm lg:text-base mt-2">{description}</p>

        <div className="card-actions flex flex-col sm:flex-row flex-wrap justify-between items-start mt-4 gap-2">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-error btn-outline btn-sm">
              Source
            </a>
          )}

          <div className="flex flex-wrap gap-2">
            {techStack.split(", ").map((tech, idx) => (
              <span key={idx} className="badge badge-ghost text-xs sm:text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
