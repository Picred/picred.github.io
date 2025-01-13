import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-4 lg:px-12 py-4 bg-transparent">
      {/* Logo */}
      <p className="text-2xl lg:text-5xl text-info btn btn-ghost overflow-hidden">
        AS.
      </p>

      {/* Tablist */}
      <div
        role="tablist"
        className="tabs tabs-bordered flex flex-row items-center gap-4"
      >
        <p role="tab" className="tab  text-white text-sm lg:text-base">
          <span className="text-info">01. </span>About
        </p>

        <p role="tab" className="tab  text-white text-sm lg:text-base">
          <span className="text-info">02. </span>Projects
        </p>

        <p
          role="tab"
          className="tab tab-active text-white text-sm lg:text-base"
        >
          <span className="text-info">03.</span>Contact
        </p>

        <p
          role="tab"
          className="tab btn-ghost btn-sm text-white text-sm lg:text-base"
        >
          Resume
        </p>
      </div>
    </nav>
  );
};
