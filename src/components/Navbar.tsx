import { useStore } from "zustand";
import { infoStore } from "../store/infoStore";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
    const info = useStore(infoStore);

    return (
        <>
            <nav className="flex flex-row items-center justify-between px-4 lg:px-12 py-4 bg-transparent">
                <button className="text-3xl lg:text-5xl text-secondary btn btn-ghost overflow-hidden">
                    AS.
                </button>

                <div role="tablist" className="tabs tabs-bordered flex flex-row items-center gap-4">
                    <p role="tab" className="tab tab-active text-sm lg:text-base text-primary">
                        <span className="text-secondary">01. </span>Home
                    </p>
                    
                    <p role="tab" className="tab text-sm lg:text-base text-primary">
                        <span className="text-secondary">02. </span>About
                    </p>

                    <p role="tab" className="tab text-sm lg:text-base text-primary">
                        <span className="text-secondary">03. </span>Projects
                    </p>

                    <p role="tab" className="tab text-sm lg:text-base text-primary">
                        <span className="text-secondary">04.</span>Contact
                    </p>

                    <p role="tab" className="tab btn-ghost btn-sm text-sm lg:text-base text-info">
                        Resume
                    </p>

                    <ThemeSwitcher />
                </div>
            </nav>
    </>
    );
    
};
