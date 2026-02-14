import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
    const { activeTab, update } = useStore(infoStore);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleChange = (tab: string) => {
        update(tab);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-0 left-0 right-0 z-[100] px-3 sm:px-6 lg:px-12 py-2 sm:py-3 lg:py-4 flex items-center justify-between"
            >
                {/* Glass Container with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-base-100/30 to-base-100/10 backdrop-blur-xl border-b border-white/10 pointer-events-none shadow-lg" />

                <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto">
                    {/* Logo & System ID - Enhanced */}
                    <motion.div 
                        className="flex items-center gap-2 sm:gap-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Decorative Icon */}
                        <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-[#ff0000]/20 border border-primary/30 items-center justify-center">
                            <div className="w-5 h-5 border-2 border-primary rounded-sm rotate-45" />
                        </div>
                        
                        <div className="flex flex-col leading-tight">
                            <span className="text-[9px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-40">System_ID</span>
                            <span className="text-[11px] sm:text-[13px] font-mono font-bold tracking-tighter opacity-80 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">ANDREI.STN_v2.0</span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-8 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-1.5 rounded-[1.5rem] border border-white/20 backdrop-blur-sm shadow-xl">
                        {["Home", "About", "Projects", "Contact"].map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => handleChange(tab)}
                                className={`relative px-5 lg:px-6 py-2.5 rounded-2xl transition-all duration-300 group ${
                                    activeTab === tab ? "scale-105" : "hover:scale-105"
                                }`}
                            >
                                {activeTab === tab && (
                                    <motion.div 
                                        layoutId="nav-bg"
                                        className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/20 to-[#ff0000]/15 border border-primary/30 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                
                                {activeTab !== tab && (
                                    <motion.div 
                                        className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                                
                                <div className="relative flex items-center gap-2 lg:gap-3">
                                    <span className={`font-mono text-[11px] font-bold transition-all ${
                                        activeTab === tab 
                                            ? "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                                            : "opacity-30 group-hover:opacity-100 group-hover:text-primary/70"
                                    }`}>
                                        0{i + 1}
                                    </span>
                                    
                                    <span className={`text-[12px] lg:text-[13px] font-black uppercase tracking-widest transition-all ${
                                        activeTab === tab 
                                            ? "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
                                            : "opacity-60 group-hover:opacity-100 group-hover:text-white"
                                    }`}>
                                        {tab}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center"
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <motion.span 
                                className="w-full h-0.5 bg-white rounded-full"
                                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span 
                                className="w-full h-0.5 bg-white rounded-full"
                                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span 
                                className="w-full h-0.5 bg-white rounded-full"
                                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                    </motion.button>

                    {/* Right Side Controls - Desktop Only */}
                    <div className="hidden lg:flex items-center gap-4">
                        <motion.div 
                            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_#10b981]" />
                                <div className="absolute inset-0 w-2 h-2 rounded-full bg-success animate-ping opacity-75" />
                            </div>
                            <span className="text-[11px] font-mono font-extrabold tracking-widest opacity-50 uppercase">
                                Online
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
                        />
                        
                        {/* Menu Panel - Redesigned */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="md:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] z-[120]"
                        >
                            {/* Animated Background with Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#050508] border-l-2 border-primary/40 shadow-[0_0_80px_rgba(59,130,246,0.4)]" />
                            
                            {/* Decorative Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                                backgroundSize: '20px 20px'
                            }} />

                            {/* Glowing Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

                            <div className="relative flex flex-col h-full p-6">
                                {/* Menu Header - Redesigned */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-[#ff0000]/30 border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                                <div className="w-4 h-4 border-2 border-primary rounded-sm rotate-45" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/80 block">Menu</span>
                                                <span className="text-[11px] font-mono font-bold text-white/60">Navigation</span>
                                            </div>
                                        </div>
                                        
                                        <motion.button
                                            onClick={() => setMobileMenuOpen(false)}
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-[#ff0000]/20 border border-primary/40 flex items-center justify-center hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                                        >
                                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                    
                                    {/* Decorative Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                                </div>

                                {/* Menu Items - Redesigned */}
                                <nav className="flex-1 space-y-2">
                                    {["Home", "About", "Projects", "Contact"].map((tab, i) => (
                                        <motion.button
                                            key={tab}
                                            onClick={() => handleChange(tab)}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                                            whileHover={{ x: 5, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full group relative overflow-hidden ${
                                                activeTab === tab ? "" : ""
                                            }`}
                                        >
                                            {/* Active Background */}
                                            {activeTab === tab && (
                                                <motion.div 
                                                    layoutId="mobile-active-bg"
                                                    className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/15 to-transparent border-l-4 border-primary rounded-r-xl shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            
                                            {/* Hover Effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-xl ${activeTab === tab ? "hidden" : ""}`} />
                                            
                                            <div className="relative flex items-center gap-4 p-4">
                                                {/* Number Badge */}
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-black transition-all ${
                                                    activeTab === tab 
                                                        ? "bg-primary/30 border border-primary/50 text-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                                                        : "bg-white/5 border border-white/10 text-white/40 group-hover:border-primary/30 group-hover:text-primary/70"
                                                }`}>
                                                    0{i + 1}
                                                </div>
                                                
                                                {/* Tab Name */}
                                                <span className={`text-base font-black uppercase tracking-wider flex-1 text-left transition-all ${
                                                    activeTab === tab 
                                                        ? "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                                                        : "text-white/70 group-hover:text-white"
                                                }`}>
                                                    {tab}
                                                </span>
                                                
                                                {/* Arrow Icon */}
                                                <motion.svg 
                                                    className={`w-5 h-5 transition-all ${
                                                        activeTab === tab ? "text-primary" : "text-white/30 group-hover:text-primary/70"
                                                    }`}
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                    animate={activeTab === tab ? { x: [0, 5, 0] } : {}}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </motion.svg>
                                            </div>
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Menu Footer - Redesigned */}
                                <div className="space-y-4">
                                    {/* Decorative Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                                    
                                    {/* Status Badge */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-success/10 to-success/5 border border-success/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <div className="w-2.5 h-2.5 rounded-full bg-success shadow-[0_0_10px_#10b981]" />
                                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-success animate-ping" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono font-bold tracking-widest text-success uppercase block">System Online</span>
                                                <span className="text-[9px] font-mono text-success/60">All systems operational</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};