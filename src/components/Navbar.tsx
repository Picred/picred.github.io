import React from "react";

export const Navbar = () => {
  return (
    <>
      <p className="absolute text-5xl text-info pl-5 btn btn-ghost overflow-hidden">
        AS.
      </p>

      <div role="tablist" className="tabs tabs-bordered mx-96">
        <p role="tab" className="tab tab-active text-white">
          Home
        </p>
        <p role="tab" className="tab text-white">
          About
        </p>
        <p role="tab" className="tab text-white">
          Projects
        </p>
      </div>
    </>
  );
};
