import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="relative w-full px-6 lg:px-12 py-12 flex flex-col items-center gap-8 overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-base-100/10 backdrop-blur-md border-t border-white/5 pointer-events-none" />

            <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Brand & Rights */}
                <div className="flex flex-col gap-2 text-center lg:text-left">
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-base font-black uppercase tracking-[0.4em]">Andrei Stefan</span>
                    </div>
                    <p className="text-[11px] font-mono opacity-40 uppercase tracking-widest font-bold">
                        © 2026 // Integrated_System_Node
                    </p>
                </div>

                {/* Social Channels */}
                <div className="flex items-center gap-8">
                    {[
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/andreistefand/", id: "LN_01" },
                        { label: "GitHub", href: "https://github.com/Picred", id: "GH_02" },
                        { label: "Telegram", href: "https://t.me/picred1", id: "TG_03" }
                    ].map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            className="flex flex-col items-center group"
                        >
                            <span className="text-[11px] font-mono font-bold opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">[{link.id}]</span>
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all">{link.label}</span>
                        </motion.a>
                    ))}
                </div>

                {/* Metadata */}
                <div className="hidden lg:flex flex-col items-end gap-1.5">
                    <span className="text-[11px] font-mono opacity-20 uppercase tracking-[0.5em] font-bold">Protocol: SECURE_v2</span>
                    <span className="text-[11px] font-mono opacity-20 uppercase tracking-[0.5em] font-bold">Host: PICRED.GITHUB.IO</span>
                </div>
            </div>

            {/* Aesthetic Tagline */}
            <div className="relative pt-8 border-t border-white/5 w-full text-center">
                 <p className="text-[11px] font-mono opacity-30 uppercase tracking-[1em] font-bold">Transforming complex problems into elegant solutions</p>
            </div>
        </footer>
    );
};