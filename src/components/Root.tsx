import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Root = () => {
    const { activeTab, update } = useStore(infoStore);
    
    useEffect(() => {
        update("Home");
        console.log(activeTab);
    }, [activeTab]);


    return (
        <div className="bg-base-300">
            <Navbar/>
            
            <Home/>
            
            <Footer/>
        </div>
    )
}