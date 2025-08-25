import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";

export const Home = () => {
    const info = useStore(infoStore);

    return (
        <div className="bg-base-300">
        <Navbar />
        <Hero />
        </div>
    );
};
