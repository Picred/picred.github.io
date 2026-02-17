import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { motion, useScroll, useTransform } from "framer-motion";

export const Home = () => {
  const { update } = useStore(infoStore);
  const { scrollY } = useScroll();
  
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Elegant Background Outline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <motion.h2 
          style={{ y: yParallax, WebkitTextStroke: "1px currentColor" } as any}
          className="text-[25vw] font-black uppercase text-transparent whitespace-nowrap"
        >
          DEVELOPER
        </motion.h2>
      </div>

      {/* Decorative System Metadata */}
      <div className="absolute top-32 left-12 hidden lg:flex flex-col gap-1.5 opacity-20 pointer-events-none">
        <span className="font-mono text-[11px] tracking-[0.5em] uppercase">Node_LAT: 45.0703° N</span>
        <span className="font-mono text-[11px] tracking-[0.5em] uppercase">Node_LNG: 7.6869° E</span>
      </div>
      <div className="absolute bottom-32 right-12 hidden lg:flex flex-col items-end gap-1.5 opacity-20 pointer-events-none">
        <span className="font-mono text-[11px] tracking-[0.5em] uppercase">Protocol: CYBER_GLASS_v2.0</span>
        <span className="font-mono text-[11px] tracking-[0.5em] uppercase">Status: ENCRYPTION_ACTIVE</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 max-w-sm sm:max-w-md mx-auto lg:mx-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] blur-sm animate-pulse" />
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-base-300 shadow-2xl border border-white/5 relative group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="/propic.jpg" 
                  alt="Andrei Stefan"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">Subject_Identity: VERIFIED</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                <h3 className="text-primary font-mono text-sm uppercase tracking-[0.6em] opacity-60">Software // Engineer</h3>
                <div className="h-[1px] w-12 bg-primary/20" />
                <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">Sys_Status: OPTIMIZED</span>
              </div>
              <h1 className="text-7xl sm:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase">
                ANDREI<br /><span className="text-[#ff0000] opacity-80 ">STEFAN</span>
              </h1>
            </div>

            <div className="p-8 sm:p-10 bg-base-100/10 backdrop-blur-md rounded-[2.5rem] border border-white/5 shadow-2xl space-y-8 sm:space-y-10 relative overflow-hidden group mx-auto lg:mx-0">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                 <span className="font-mono text-[11px] font-bold">DOC_REF: MISSION_STMT.INF</span>
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-xl">
                Engineering <span className="text-primary font-bold">high-performance</span> digital experiences from complex logic. 
                I build scalable systems that merge <span className="text-[#ff0000] font-bold">technical precision</span> with intuitive design.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => update("Contact")}
                  className="px-10 py-5 bg-[#ff0000] text-white rounded-2xl font-black uppercase tracking-widest shadow-[0_0_30px_rgba(255,0,0,0.4)] relative overflow-hidden group"
                >
                  <span className="relative z-10">Initialize_Contact</span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    className="absolute inset-0 bg-white/20"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => update("Projects")}
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  View_Projects
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
