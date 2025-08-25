// import { useStore } from "zustand";
// import { infoStore } from "../store/infoStore";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
    // const info = useStore(infoStore);

    return (
        <nav className="sticky top-0 z-50 w-full px-3 lg:px-12 py-3 bg-neutral backdrop-blur-md flex items-end justify-between shadow-md">
            <button className="btn btn-ghost text-4xl lg:text-5xl text-secondary">
                AS.
            </button>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex tabs tabs-bordered gap-4 items-center">
                <p role="tab" className="tab tab-active text-sm lg:text-base text-secondary">01.
                    <span className="text-primary">Home</span>
                </p>

                <p role="tab" className="tab text-sm lg:text-base text-secondary">02.
                    <span className="text-primary">About</span>
                </p>

                <p role="tab" className="tab text-sm lg:text-base text-secondary">03.
                    <span className="text-primary">Projects</span>
                </p>

                <p role="tab" className="tab text-sm lg:text-base text-secondary">04.
                    <span className="text-primary">Contact</span>
                </p>

                <p className="text-primary font-semibold">👉 Resume</p>

                <ThemeSwitcher />
            </div>

            {/* Mobile Dropdown */}
            <div className="flex flex-row lg:hidden">
                <ThemeSwitcher />

                <div className="lg:hidden dropdown dropdown-end z-50">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">

                        <li>
                            <span className="text-sm text-secondary">01.
                                <span className="text-primary font-semibold">Home</span>
                            </span>
                        </li>

                        <li>
                            <span className="text-sm text-secondary">02.
                                <span className="text-primary font-semibold">About</span>
                            </span>
                        </li>

                        <li>
                            <span className="text-sm text-secondary">03.
                                <span className="text-primary font-semibold">Projects</span>
                            </span>
                        </li>

                        <li>
                            <span className="text-sm text-secondary">04.
                                <span className="text-primary font-semibold">Contact</span>
                            </span>
                        </li>

                        <li>
                            <span className="text-sm text-secondary">👉
                                <span className="text-primary font-semibold">Resume</span>
                            </span>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
};
