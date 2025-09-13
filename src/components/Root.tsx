import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "./Background";

export const Root = () => {
    const { activeTab } = useStore(infoStore);

    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
    };

    return (
        
        <div className="min-h-screen flex flex-col">
            <Background />
            <Navbar />

            <div className="flex-1 flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    {activeTab === "Home" && (
                        <motion.div
                            key="home"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="h-full"
                        >
                            <Home />
                        </motion.div>
                    )}

                    {activeTab === "About" && (
                        <motion.div
                            key="about"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="h-full"
                        >
                            <About />
                        </motion.div>
                    )}

                    {activeTab === "Projects" && (
                        <motion.div
                            key="projects"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="h-full"
                        >
                            <Projects />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />

        </div>
    );
};
