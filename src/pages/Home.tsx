import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <>
      {/* <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> */}
      <Navbar />
      <Hero />
      {/* </div> */}
    </>
  );
};
