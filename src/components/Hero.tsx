import React from "react";

export const Hero = () => {
  return (
    <div className="hero bg-transparent min-h-screen px-4 lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <img
          src="/propic.jpg"
          className="w-64 h-64 lg:w-96 lg:h-96 rounded-3xl shadow-2xl object-cover"
          alt="Profile"
        />

        <div className="flex flex-col items-start text-center lg:text-left border border-yellow-300 w-full lg:w-1/2 p-4 lg:p-8">
          <p className="text-info text-lg lg:text-xl mb-2">Hi, my name is</p>
          <h1 className="text-5xl lg:text-8xl font-light text-white mb-4">
            Andrei Stefan
          </h1>
          <p className="text-2xl lg:text-4xl py-4 overflow-hidden">
            Computer Science student.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <button className="btn btn-primary w-full lg:w-auto">
              <p className="text-primary-content">Contact Me! </p>
            </button>

            <button className="btn btn-neutral w-full lg:w-auto">
              <p className="text-neutral-content">Browse Projects!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
