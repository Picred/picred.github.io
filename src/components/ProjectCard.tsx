import { ProjectType } from "../types/ProjectType";

export const ProjectCard = ({ title, description, techStack, link, imgUrl }: ProjectType) => {
  const techColors = ["primary", "secondary", "accent", "info", "success", "warning"];
  
  return (
    <div className="card bg-gradient-to-br from-base-100/90 to-base-300/90 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:w-96 flex flex-col group hover:border-secondary/30">
      <div className="card-body p-6">
        <h2 className="card-title text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 group-hover:from-secondary group-hover:to-info transition-all">
          {title}
        </h2>

        {imgUrl && (
          <figure className="mb-4 overflow-hidden rounded-xl border-2 border-base-content/10">
            <img 
              src={imgUrl} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </figure>
        )}

        <p className="text-base-content/80 text-sm lg:text-base mb-4 leading-relaxed">
          {description}
        </p>

        <div className="card-actions flex flex-col sm:flex-row justify-between items-start gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {techStack.split(", ").map((tech, idx) => {
              const color = techColors[idx % techColors.length];
              return (
                <span 
                  key={idx} 
                  className={`badge badge-outline badge-sm text-xs border-${color}/40 text-${color}/80 hover:bg-${color} hover:text-${color}-content transition-all cursor-default`}
                >
                  {tech}
                </span>
              );
            })}
          </div>

          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-info btn-sm gap-2 hover:btn-info transition-all group/link shadow-md"
            >
              <span>Source</span>
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};