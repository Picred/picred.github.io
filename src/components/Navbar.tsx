import { ThemeSwitcher } from "./ThemeSwitcher";
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full px-3 lg:px-12 py-3 bg-base-100/80 backdrop-blur-md flex items-end justify-between shadow-md border-b border-base-content/10"
        >
            {/* Logo */}
            <motion.div
                className="flex items-center justify-center lg:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
            >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden">
                    <img
                        src="/logo.jpg"
                        alt="Logo"
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleChange("Home")}
                    />
                </div>
            </motion.div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex tabs tabs-bordered gap-4 items-center">
                {["Home", "About", "Projects"].map((tab, i) => (
                    <motion.p
                        key={tab}
                        role="tab"
                        className={`tab text-sm lg:text-base cursor-pointer ${activeTab === tab ? "tab-active text-primary" : "text-base-content/70"}`}
                        onClick={() => handleChange(tab)}
                        whileHover={{ scale: 1.1, color: "oklch(var(--p))" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {`0${i + 1}. `}
                        <span className="font-semibold">{tab}</span>
                    </motion.p>
                ))}

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-semibold btn btn-outline btn-primary text-lg"
                >
                    Resume
                </motion.button>
            </div>

            <div className="flex items-center gap-4">
                <ThemeSwitcher />
                
                {/* Mobile Dropdown */}
                <div className="flex flex-row lg:hidden">
                    <div className="lg:hidden dropdown dropdown-end z-50">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <motion.svg
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2 border border-base-content/10">
                            {["Home", "About", "Projects"].map((tab, i) => (
                                <motion.li
                                    key={tab}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className={`text-sm ${activeTab === tab ? "text-primary" : "text-base-content"}`}>
                                        0{i + 1}.
                                        <span
                                            className="font-semibold"
                                            onClick={() => handleChange(tab)}
                                        >
                                            {tab}
                                        </span>
                                    </span>
                                </motion.li>
                            ))}
                            <motion.li whileHover={{ x: 5 }}>
                                <span className="text-sm text-base-content">👉
                                    <span className="font-semibold">Resume</span>
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};