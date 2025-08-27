import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Root = () => {
    const { activeTab } = useStore(infoStore);


    return (
        <div className="bg-base-300">
            <Navbar/>

            {activeTab == "Home" &&(
                <Home/>
            )}

            {activeTab == "About" &&(
                <About/>
            )}

            {activeTab == "Projects" &&(
                <Projects/>
            )}
            
            <Footer/>
        </div>
    )
}