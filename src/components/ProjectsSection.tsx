import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, StaggerItem } from "./MotionSection";
import TypeWriter from "./TypeWriter";
import projectsData from "../data/projects.json";

// "featured" = first 2 projects, "showstopper" = third, rest = standard.
const allProjects = projectsData.projects;
const featured = allProjects.slice(0, 2);
const showstopper = allProjects[2];
const standard = allProjects.slice(3);
const domainList = Array.from(
  new Set(allProjects.map((p) => p.category.toLowerCase()))
).join(" · ");

export const ProjectsSection = () => {
  return (
    <MotionSection id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <span className="font-dm-mono text-xs text-primary uppercase tracking-[0.15em]">Projects</span>
      <p className="font-dm-mono text-sm text-text-muted mt-2 mb-2">
        <TypeWriter text="> ls ~/projects" speed={30} />
      </p>
      <p className="font-dm-mono text-xs text-text-muted mb-10">
        {allProjects.length} projects - domains: {domainList}
      </p>

      {/* Featured (2-col grid) */}
      <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-4">
        {featured.map((p) => (
          <StaggerItem key={p.name}>
            <GradientCard variant="featured">
              <ProjectCard project={p} />
            </GradientCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Showstopper (full-width) */}
      {showstopper && (
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GradientCard variant="showstopper">
            <ProjectCard project={showstopper} isShowstopper />
          </GradientCard>
        </motion.div>
      )}

      {/* Standard grid */}
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {standard.map((p) => (
          <StaggerItem key={p.name}>
            <ProjectCard project={p} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </MotionSection>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

type Project = (typeof allProjects)[number];

function GradientCard({ children, variant }: { children: React.ReactNode; variant: "featured" | "showstopper" }) {
  const fromColor = variant === "showstopper"
    ? "hsla(43,72%,58%,0.4)"
    : "hsla(0,88%,62%,0.3)";
  const toColor = variant === "showstopper"
    ? "hsla(0,88%,62%,0.2)"
    : "hsla(0,88%,62%,0.05)";
  const hoverFrom = variant === "showstopper"
    ? "hsla(43,72%,58%,0.7)"
    : "hsla(0,88%,62%,0.6)";
  const hoverTo = variant === "showstopper"
    ? "hsla(0,88%,62%,0.5)"
    : "hsla(0,88%,62%,0.15)";

  return (
    <motion.div
      className="rounded-xl p-[1px]"
      initial={{ background: `linear-gradient(135deg, ${fromColor}, ${toColor})` }}
      whileHover={{ background: `linear-gradient(135deg, ${hoverFrom}, ${hoverTo})` }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function MacDots() {
  return (
    <div className="flex gap-1.5">
      <span className="w-3 h-3 rounded-full bg-border-main group-hover:bg-red-500 transition-colors duration-300" />
      <span className="w-3 h-3 rounded-full bg-border-main group-hover:bg-yellow-400 transition-colors duration-300" />
      <span className="w-3 h-3 rounded-full bg-border-main group-hover:bg-green   transition-colors duration-300" />
    </div>
  );
}

function ProjectCard({ project, isShowstopper = false }: { project: Project; isShowstopper?: boolean }) {
  const techList = project.techStack.split(", ").slice(0);

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
      className="group border border-transparent rounded-[11px] overflow-hidden bg-bg-surface hover:border-border-main transition-colors duration-200"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-dim">
        <div className="flex items-center gap-3">
          <MacDots />
        </div>
        <div className="flex items-center gap-2">
          {isShowstopper && project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="font-dm-mono text-xs text-primary animate-pulse">
              [★ view source]
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-dm-mono text-primary font-medium mb-1 uppercase">{project.name}</h3>
        <p className="font-outfit text-text-primary text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techList.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.1 }}
              className="font-jetbrains text-xs bg-bg-elevated text-primary px-2 py-1 rounded-md cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-dm-mono text-xs border border-border-soft text-text-secondary hover:text-primary hover:border-primary/50 px-3 py-1.5 rounded-md transition-all inline-block"
          >
            GitHub →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
