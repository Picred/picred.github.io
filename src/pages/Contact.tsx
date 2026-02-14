import { motion } from "framer-motion";
import contactData from "../data/contact.json";

export const Contact = () => {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
            
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
                <h2 className="text-[25vw] sm:text-[20vw] font-black uppercase text-transparent whitespace-nowrap" style={{ WebkitTextStroke: "1px currentColor" }}>
                    CONTACT
                </h2>
            </div>

            {/* Decorative System Metadata */}
            <div className="absolute top-32 left-12 hidden lg:flex flex-col gap-1.5 opacity-20 pointer-events-none">
                <span className="font-mono text-[11px] tracking-[0.5em] uppercase">COMM_PROTOCOL: DIRECT</span>
                <span className="font-mono text-[11px] tracking-[0.5em] uppercase">ENCRYPTION: SECURE</span>
            </div>
            <div className="absolute bottom-32 right-12 hidden lg:flex flex-col items-end gap-1.5 opacity-20 pointer-events-none">
                <span className="font-mono text-[11px] tracking-[0.5em] uppercase">STATUS: {contactData.availability.status}</span>
                <span className="font-mono text-[11px] tracking-[0.5em] uppercase">RESPONSE_TIME: &lt;24H</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6"
                    >
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="h-[1px] w-8 sm:w-12 bg-primary/20" />
                            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.4em] sm:tracking-[0.6em] text-primary opacity-60">
                                04 // CONTACT
                            </span>
                            <div className="h-[1px] w-8 sm:w-12 bg-primary/20" />
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter px-4">
                            {contactData.title}
                        </h1>
                        
                        <p className="text-base sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto opacity-80 px-4">
                            {contactData.description}
                        </p>

                        {/* Availability Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-success/10 border border-success/20 rounded-full"
                        >
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-success animate-pulse shadow-[0_0_10px_#10b981]" />
                            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest text-success font-bold">
                                {contactData.availability.message}
                            </span>
                        </motion.div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                        
                        {/* Direct Email */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="p-6 sm:p-8 lg:p-10 bg-base-100/10 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl space-y-4 sm:space-y-6 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase tracking-wider text-xl">Direct Email</h3>
                                        <p className="font-mono text-xs uppercase tracking-widest opacity-40">PRIMARY_CHANNEL</p>
                                    </div>
                                </div>
                                
                                <a 
                                    href={`mailto:${contactData.email}`}
                                    className="block text-2xl font-light text-primary hover:text-primary/80 transition-colors break-all mb-6"
                                >
                                    {contactData.email}
                                </a>

                                <motion.a
                                    href={`mailto:${contactData.email}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="block w-full px-8 py-5 bg-[#ff0000] text-white rounded-2xl font-black uppercase tracking-widest shadow-[0_0_30px_rgba(255,0,0,0.4)] relative overflow-hidden group text-center"
                                >
                                    <span className="relative z-10">Send Email</span>
                                    <motion.div 
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "0%" }}
                                        className="absolute inset-0 bg-white/20"
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>

                                <div className="pt-4 border-t border-white/5">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-1">Response Protocol</p>
                                            <p className="text-sm opacity-70 leading-relaxed">
                                                I typically respond within 24 hours. For urgent matters, please mention it in your email subject.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="p-8 sm:p-10 bg-base-100/10 backdrop-blur-md rounded-[2.5rem] border border-white/5 shadow-2xl space-y-6 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase tracking-wider text-xl">Connect Online</h3>
                                        <p className="font-mono text-xs uppercase tracking-widest opacity-40">SOCIAL_NETWORKS</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {contactData.socials.map((social, index) => (
                                        <motion.a
                                            key={social.platform}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 hover:bg-white/10 transition-all group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    {social.icon === "github" && (
                                                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                    )}
                                                    {social.icon === "linkedin" && (
                                                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                        </svg>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-lg">{social.platform}</p>
                                                    <p className="font-mono text-xs uppercase tracking-widest opacity-40">{social.label}</p>
                                                </div>
                                            </div>
                                            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};