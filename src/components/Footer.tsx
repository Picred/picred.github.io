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
                        <span className="text-base font-black uppercase tracking-[0.4em]">Andrei Stefan</span>
                    </div>
                    <p className="text-[11px] font-mono opacity-40 uppercase tracking-widest font-bold">
                        Made with ❤️ 
                    </p>
                </div>

                {/* Social Channels */}
                <div className="flex items-center gap-8">
                    {[
                        { 
                            label: "LinkedIn", 
                            href: "https://www.linkedin.com/in/andreistefand/", 
                            id: "LN_01",
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            )
                        },
                        { 
                            label: "GitHub", 
                            href: "https://github.com/Picred", 
                            id: "GH_02",
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            )
                        },
                        { 
                            label: "Telegram", 
                            href: "https://t.me/picred1", 
                            id: "TG_03",
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.156-.258.285-.528.285l.182-3.03 5.332-4.815c.232-.206-.05-.32-.36-.118l-6.59 4.15-2.937-.918c-.638-.198-.65-.638.133-.943l11.487-4.426c.532-.192.997.126.852.88z"/>
                                </svg>
                            )
                        }
                    ].map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            className="flex flex-col items-center group gap-1"
                        >
                            <span className="text-[11px] font-mono font-bold opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">[{link.id}]</span>
                            <div className="opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all">
                                {link.icon}
                            </div>
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

        </footer>
    );
};