import { ProjectType } from "../types/ProjectType";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ title, description, techStack, link, imgUrl, id }: ProjectType) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }}
        className="card bg-base-100/10 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-primary/10 transition-all duration-500 w-full max-w-md flex flex-col group h-full overflow-hidden will-change-transform relative rounded-3xl"
      >
        {/* Subtle Decorative metadata */}
        <div className="absolute top-4 left-4 flex items-center gap-2 opacity-20 group-hover:opacity-60 transition-opacity z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest">{id || "NODE_0X"}</span>
        </div>

        {/* Project Image Node */}
        {imgUrl && (
          <figure 
            className="overflow-hidden aspect-video relative cursor-zoom-in group/img bg-base-300"
            onClick={() => setIsOpen(true)}
          >
            <img 
              src={imgUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-1000 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                <div className="bg-black/60 backdrop-blur-xl p-4 rounded-full border border-white/20 scale-90 group-hover/img:scale-100 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                </div>
            </div>
          </figure>
        )}

        <div className="card-body p-8 flex flex-col h-full gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
              {title}
            </h2>
            <div className="flex items-center gap-2 opacity-40 font-mono text-[10px] uppercase tracking-widest font-bold">
                <span className="text-success">●</span> Status: Verified_Node
            </div>
          </div>

          <p className="text-base-content/70 text-sm lg:text-base leading-relaxed font-medium">
             {description}
          </p>

          <div className="mt-auto space-y-8 pt-4">
            {/* Dependency Nodes (Tech Stack) */}
            <div className="flex flex-wrap gap-2.5">
              {techStack.split(", ").slice(0, 5).map((tech, idx) => {
                return (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono font-bold tracking-tight text-base-content/50 hover:text-primary hover:border-primary/40 transition-all cursor-default uppercase"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            {link && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(link, '_blank')}
                className="w-full flex flex-col items-center group/btn"
              >
                <span className="font-mono text-[11px] font-bold opacity-30 group-hover/btn:opacity-100 group-hover/btn:text-primary transition-all mb-1.5">[ACCESS_NODE]</span>
                <div className="w-full px-10 py-5 bg-[#ff0000] text-white rounded-2xl font-black uppercase text-md shadow-[0_0_30px_rgba(255,0,0,0.4)] relative overflow-hidden group/btn-inner flex items-center justify-center gap-3">
                    <span className="relative z-10 tracking-[0.2em]">Source</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      className="absolute inset-0 bg-white/20"
                      transition={{ duration: 0.3 }}
                    />
                </div>
              </motion.button>
            )}
          </div>
        </div>
        
        {/* Glass corners decoration */}
        <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-white/10 to-transparent" />
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={imgUrl} 
                alt={title} 
                className="max-w-full max-h-full object-contain rounded-xl border border-white/10"
              />
              <button 
                className="absolute -top-12 right-0 text-white/40 hover:text-white transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};