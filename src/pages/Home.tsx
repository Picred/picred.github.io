import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";

export const Home = () => {
    const info = useStore(infoStore);

    return (
        // <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-primary">
        <div className="bg-base-200">
        <Navbar />
        <Hero />
        </div>
    );
};
