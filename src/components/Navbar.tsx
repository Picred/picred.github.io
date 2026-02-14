import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { motion } from "framer-motion";

export const Navbar = () => {
    const { activeTab, update } = useStore(infoStore);

    const handleChange = (tab: string) => {
        update(tab);
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-[100] px-3 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between"
        >
            {/* Glass Container */}
            <div className="absolute inset-0 bg-base-100/20 backdrop-blur-md border-b border-white/5 pointer-events-none" />

            <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto">
                {/* Logo & System ID */}
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-[0.3em] uppercase opacity-30">System_ID</span>
                        <span className="text-[13px] font-mono font-bold tracking-tighter opacity-70">ANDREI.STN_v2.0</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-8 bg-white/5 p-1 rounded-[1.5rem] border border-white/10 backdrop-blur-sm">
                    {["Home", "About", "Projects"].map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => handleChange(tab)}
                            className={`relative px-3 sm:px-6 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 group`}
                        >
                            {activeTab === tab && (
                                <motion.div 
                                    layoutId="nav-bg"
                                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-2xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <div className="relative flex items-center gap-2 sm:gap-3">
                                <span className={`hidden sm:block font-mono text-[10px] sm:text-[11px] font-bold ${activeTab === tab ? "text-primary" : "opacity-30 group-hover:opacity-100"}`}>0{i + 1}</span>
                                <span className={`text-[11px] sm:text-[13px] font-black uppercase tracking-widest ${activeTab === tab ? "text-primary" : "opacity-60 group-hover:opacity-100"}`}>
                                    {tab}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right Side Controls */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_#10b981]" />
                        <span className="text-[11px] font-mono font-extrabold tracking-widest opacity-40 uppercase">Awaits_Input</span>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};