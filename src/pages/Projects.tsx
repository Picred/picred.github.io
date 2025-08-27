import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projects.json"; // Assicurati che TypeScript accetti i json import

export const Projects = () => {
  return (
    <div className="container flex lg:flex-row flex-col flex-wrap lg:mx-auto mx-auto px-4 my-10 lg:max-w-screen lg:gap-10 gap-5 justify-between">
      {projectsData.projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.name}
          description={project.description}
          techStack={project.techStack}
          link={project.link}
          imgUrl={project.imgUrl}
        />
      ))}
    </div>
  );
};
