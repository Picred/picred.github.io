import { useStore } from "zustand";
import { infoStore } from "../store/infoStore"
import { motion } from "motion/react"

export const Home = () => {
    const { update } = useStore(infoStore);

    return (
        <div className="hero bg-transparent px-4 lg:px-12 w-full min-h-screen">
            <div className="hero-content flex flex-col items-center gap-8">

                <div className="relative flex flex-col text-center w-full max-w-3xl p-4 lg:p-10 bg-base-100 rounded-3xl shadow-xl border border-base-content/10">

                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 avatar">
                        <motion.div 
                            className="ring-primary ring-offset-base-100 w-28 h-28 lg:w-48 lg:h-48 rounded-full ring-4 ring-offset-4"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src="/propic.jpg" className="object-cover rounded-full" />
                        </motion.div>
                    </div>

                    <div className="mt-12 lg:mt-32">
                        <motion.p 
                            className="text-lg lg:text-3xl mb-2 text-base-content/80"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hi, my name is
                        </motion.p>

                        <motion.h1 
                            className="text-3xl lg:text-6xl font-bold mb-6 lg:mb-8 text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Andrei Stefan
                        </motion.h1>

                        <motion.p 
                            className="text-base lg:text-xl py-2 text-base-content/90"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Bachelor's Degree in Computer Science at{" "}
                            <a 
                                href="https://www.unict.it/" 
                                className="link link-primary font-semibold hover:text-primary-focus"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                UniCt
                            </a>
                        </motion.p>

                        <motion.p 
                            className="text-base lg:text-xl py-2 text-base-content/90"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Currently pursuing Master's Degree at{" "}
                            <a 
                                href="https://www.polito.it/" 
                                className="link link-primary font-semibold hover:text-primary-focus"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PoliTo
                            </a>
                        </motion.p>

                        <motion.div 
                            className="flex flex-col lg:flex-row gap-4 mt-6 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary w-full lg:w-auto shadow-md"
                                onClick={() => window.location.href = `mailto:andrei.stefand@outlook.com`}
                            >
                                <span className="text-primary-content font-semibold">Contact Me!</span>
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-outline btn-primary w-full lg:w-auto"
                                onClick={() => update("Projects")}
                            >
                                <span className="font-semibold">Browse Projects!</span>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};