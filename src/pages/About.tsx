import { motion } from "framer-motion";
import React from "react";
import aboutData from "../data/about.json";

const ReportSection = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
  <div className="w-full mb-20 relative group">
    <div className="flex items-center gap-4 mb-6 px-4">
      <div className="flex flex-col">
        <span className="text-primary font-mono text-[10px] uppercase tracking-widest leading-none mb-1 opacity-60">SECTION_{id}</span>
        <h2 className="text-xl font-black uppercase tracking-widest leading-none opacity-40 group-hover:opacity-100 transition-opacity">{title}</h2>
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
    </div>
    <div className="p-8 sm:p-12 bg-base-100/10 backdrop-blur-xl rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
       {/* Aesthetic noise/overlay like Home */}
       <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
       <div className="relative z-10">
          {children}
       </div>
    </div>
  </div>
);

export const About = () => {
    const { identification, skills, timeline } = aboutData;

    return (
        <div className="w-full min-h-screen py-32 px-6 lg:px-20 max-w-7xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-24"
            >
                {/* 01 // IDENTIFICATION */}
                <ReportSection title="SYSTEM_IDENTIFICATION" id="01">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-12 xl:col-span-7 space-y-10">
                        <p className="text-2xl lg:text-3xl text-white font-black tracking-tight uppercase leading-tight">
                            {identification.title}
                        </p>
                        
                        <p className="text-xl lg:text-2xl text-base-content/70 font-light leading-relaxed max-w-3xl">
                            🎓 Currently at <a href={identification.institution.url} className="text-[#ff0000] font-bold underline underline-offset-8 decoration-2 hover:text-red-400 transition-all" target="_blank" rel="noopener noreferrer">{identification.institution.name}</a> (since {identification.institution.since}).
                            <br /><br />
                            {identification.bio}
                        </p>
                     </div>

                     <div className="hidden xl:flex lg:col-span-12 xl:col-span-5 items-center justify-center relative justify-self-center">
                        <div className="p-10 bg-black/40 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-3xl relative overflow-hidden group w-full max-w-sm">
                           <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                           <div className="flex flex-col gap-4">
                              <div className="flex items-center gap-3">
                                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                 <span className="font-mono text-[10px] text-primary tracking-[0.4em] font-bold">NODE_STATUS: ACTIVE</span>
                              </div>
                              <pre className="font-mono text-xs text-white/40 leading-relaxed overflow-x-auto">
{JSON.stringify(identification.nodeStatus, null, 2)}
                              </pre>
                           </div>
                        </div>
                     </div>
                  </div>
                </ReportSection>

                {/* 02 // CAPABILITIES */}
                <ReportSection title="CORE_CAPABILITIES" id="02">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-3 bg-primary/40" />
                                    <h3 className="font-mono text-[11px] font-black uppercase opacity-30 tracking-[0.5em]">_{category}</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {items.map(item => (
                                        <div key={item} className="flex items-center gap-4 group cursor-default">
                                            <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary group-hover:scale-150 transition-all" />
                                            <span className="text-base font-bold tracking-tight opacity-50 group-hover:opacity-100 group-hover:text-white transition-all uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ReportSection>

                {/* 03 // TIMELINE */}
                <ReportSection title="ACCESS_TIMELINE" id="03">
                    <div className="relative py-12 px-4">
                        {/* MAIN VERTICAL SPINE */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-primary -translate-x-1/2 z-0 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent -translate-x-1/2 blur-[2px]" />
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[8px] bg-gradient-to-b from-primary/20 via-transparent to-transparent -translate-x-1/2 blur-[4px]" />
                        
                        <div className="space-y-32 relative">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                        <motion.div 
                                            whileHover={{ y: -5 }}
                                            className="space-y-4"
                                        >
                                            <div className={`inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 font-mono text-[10px] uppercase tracking-[0.3em] font-black
                                                ${item.current ? "text-primary border-primary/40 animate-pulse" : "text-white/40"}`}>
                                                {item.period}
                                            </div>
                                            <h3 className={`text-2xl sm:text-4xl font-black tracking-tighter uppercase leading-none
                                                ${item.current ? "text-white" : "text-white/50"}`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-[#ff0000] font-mono text-[11px] font-bold tracking-[0.2em] opacity-60">
                                                {item.institution}
                                            </p>
                                            <div className={`p-6 bg-white/5 rounded-2xl border border-white/5 inline-block backdrop-blur-md relative group
                                                ${item.current ? 'border-primary/20 ring-1 ring-primary/5' : ''}`}>
                                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                                    </svg>
                                                </div>
                                                <p className="text-base-content/60 text-sm font-light italic leading-relaxed">
                                                    "{item.description}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Central Node */}
                                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                        <div className="relative">
                                            {/* Outer Glow */}
                                            <div className={`absolute -inset-4 rounded-full blur-xl transition-opacity duration-1000
                                                ${item.current ? "bg-primary/30 opacity-100" : "bg-primary/10 opacity-0 group-hover:opacity-40"}`} />
                                            
                                            {/* Geometric Hexagon Node */}
                                            <motion.div 
                                                animate={item.current ? { 
                                                    rotate: [0, 90, 180, 270, 360],
                                                    scale: [1, 1.1, 1]
                                                } : {}}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className={`w-10 h-10 flex items-center justify-center bg-[#020617] border-2 rotate-45 relative
                                                    ${item.current ? "border-primary shadow-[0_0_20px_rgba(34,211,238,0.5)]" : "border-white/10"}`}
                                            >
                                                <div className={`w-2 h-2 rotate-[-45deg] ${item.current ? 'bg-primary animate-ping' : 'bg-white/20'}`} />
                                                
                                                {/* Decorative Chevrons (Like the reference image) */}
                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
                                                    <div className="w-4 h-[1px] bg-primary mb-1" />
                                                    <div className="w-2 h-[1px] bg-primary" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Empty Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-[45%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </ReportSection>

                <div className="pt-20 text-center opacity-20">
                    <div className="h-[1px] w-24 bg-white/20 mx-auto mb-8" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.8em]">End_Of_Dossier // Encryption_Active</p>
                </div>
            </motion.div>
        </div>
    );
};