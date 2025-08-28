import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { UnderConstruction } from "./UnderConstruction";
import { useEffect, useState } from "react";

export const Root = () => {
    const { activeTab } = useStore(infoStore);

    const [ alert, setAlert ] = useState(true);

    useEffect(() => {
        setTimeout( () => {
            setAlert(false);
        }, 5000);
    },[])

    return (
        <div className="bg-base-300 min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col justify-center">
                {activeTab == "Home" && (
                    <Home />
                )}

                {activeTab == "About" && (
                    <About />
                )}

                {activeTab == "Projects" && (
                    <Projects />
                )}
            </div>
            <Footer />
            
            {alert && <UnderConstruction />}
            
        </div>
    )
}