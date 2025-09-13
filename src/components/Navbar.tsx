import { ThemeSwitcher } from "./ThemeSwitcher";
import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { motion } from "framer-motion";

export const Navbar = () => {
    const { activeTab, update } = useStore(infoStore);

    const handleChange = (tab: string) => {
        update(tab);
    };

    const tabColors = {
        Home: "primary",
        About: "secondary", 
        Projects: "accent"
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full px-4 lg:px-12 py-3 bg-base-100/90 backdrop-blur-lg flex items-end justify-between shadow-lg border-b border-base-content/10"
        >
            {/* Logo */}
            <motion.div
                className="flex items-center justify-center lg:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
            >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full ring-2 ring-secondary ring-offset-2 ring-offset-base-100 overflow-hidden shadow-md">
                    <img
                        src="/logo.jpg"
                        alt="Logo"
                        className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-110"
                        onClick={() => handleChange("Home")}
                    />
                </div>
            </motion.div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex items-center gap-6">
                {["Home", "About", "Projects"].map((tab, i) => (
                    <motion.button
                        key={i}
                        className={`btn btn-ghost font-semibold text-lg ${
                            activeTab === tab 
                                ? `text-primary border-b-2 border-primary`
                                : "text-base-content hover:text-accent"
                        }`}
                        onClick={() => handleChange(tab)}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {`0${i + 1}. `}
                        <span className="ml-1">{tab}</span>
                    </motion.button>
                ))}

                {/* <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success text-lg font-semibold shadow-md hover:btn-warning"
                >
                    📄 Resume
                </motion.a> */}
            </div>

            <div className="flex items-center gap-4">
                <ThemeSwitcher />
                
                {/* Mobile Dropdown */}
                <div className="flex flex-row lg:hidden">
                    <div className="dropdown dropdown-end z-50">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-info">
                            <motion.svg
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52 mt-2 border-2 border-accent/20">
                            {["Home", "About", "Projects"].map((tab, i) => (
                                <motion.li
                                    key={tab}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="my-1"
                                >
                                    <button
                                        className={`btn btn-ghost justify-start w-full text-left ${
                                            activeTab === tab ? `text-${tabColors[tab as keyof typeof tabColors]} font-bold` : "text-base-content"
                                        }`}
                                        onClick={() => handleChange(tab)}
                                    >
                                        <span className="text-sm">
                                            0{i + 1}. <span className="font-semibold">{tab}</span>
                                        </span>
                                    </button>
                                </motion.li>
                            ))}
                            {/* <motion.li whileHover={{ x: 5 }} className="my-1">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success btn-sm w-full text-left"
                                >
                                    <span className="text-sm">📄 <span className="font-semibold">Resume</span></span>
                                </a>
                            </motion.li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};