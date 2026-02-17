import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projects.json"; 
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  
  const categories = ["All", ...new Set(projectsData.projects.map(p => p.category))];
  
  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(6);
  };

  const filteredProjects = filter === "All" 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const getCount = (cat: string) => {
    return cat === "All" 
        ? projectsData.projects.length 
        : projectsData.projects.filter(p => p.category === cat).length;
  };

  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      {/* Header Container */}
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[2px] w-12 bg-primary/30" />
            <h3 className="text-primary font-mono text-sm uppercase tracking-[0.8em] opacity-60">Repository // Workspace</h3>
            <div className="h-[2px] w-12 bg-primary/30" />
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
            PROJECTS<br /><span className="text-[#ff0000] opacity-80">ARCHIVE</span>
          </h1>
          <p className="font-mono text-[11px] opacity-30 uppercase tracking-[0.5em] pt-4">Scanning Repository // Protocol_Ready</p>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-20 sticky top-28 z-20"
      >
        <div className="p-2 bg-base-100/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`
                px-6 py-3 rounded-xl font-mono text-[11px] font-bold uppercase tracking-widest transition-all relative group
                ${filter === cat 
                  ? "text-white" 
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"}
              `}
            >
              {filter === cat && (
                <motion.div 
                    layoutId="filter-bg"
                    className="absolute inset-0 bg-primary rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className={`opacity-40 ${filter === cat ? "text-white/60" : ""}`}>0{i}</span>
                {cat} 
                <span className={`py-0.5 px-1.5 rounded text-[9px] ${filter === cat ? "bg-white/20 text-white" : "bg-white/10 opacity-60"}`}>
                   {getCount(cat).toString().padStart(2, '0')}
                </span>
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center pb-32"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                title={project.name}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
                imgUrl={project.imgUrl}
                id={`PROJECT_0${idx + 1}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expand Button - Redesigned [SYSTEM_EXPANSION_PROTOCOL] */}
      {visibleCount < filteredProjects.length && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center pb-32"
        >
          <motion.button
            onClick={() => setVisibleCount(prev => prev + 6)}
            whileHover="hover"
            className="group relative px-16 py-6 bg-transparent overflow-hidden"
          >
            {/* Main Container with Brackets */}
            <div className="relative flex items-center gap-6">
              {/* Left Bracket */}
              <motion.span 
                variants={{ hover: { x: -8, color: "#3b82f6" } }}
                className="font-mono text-4xl font-light text-white/20 transition-colors"
              >
                [
              </motion.span>

              {/* Central Content */}
              <div className="flex flex-col items-center">
                <span className="text-xl font-black uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors">
                  Expand Projects
                </span>

              </div>

              {/* Right Bracket */}
              <motion.span 
                variants={{ hover: { x: 8, color: "#3b82f6" } }}
                className="font-mono text-4xl font-light text-white/20 transition-colors"
              >
                ]
              </motion.span>
            </div>

            {/* Scanning Line Animation */}
            <motion.div 
              variants={{
                hover: { 
                    left: "100%",
                    transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                }
              }}
              initial={{ left: "-10%" }}
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />

            {/* Corner Decorative Dots */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-white/10 group-hover:bg-primary/40" />
            <div className="absolute top-0 right-0 w-1 h-1 bg-white/10 group-hover:bg-primary/40" />
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-white/10 group-hover:bg-primary/40" />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/10 group-hover:bg-primary/40" />

            {/* Hover Background Glow */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity pointer-events-none" />
          </motion.button>
        </motion.div>
      )}
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 opacity-30">
          <p className="font-mono text-xs uppercase tracking-[0.5em] italic">No nodes identified in current protocol</p>
        </div>
      )}
    </div>
  );
};
