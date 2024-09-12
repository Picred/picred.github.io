import React from "react";

export const Hero = () => {
  return (
    <div className="hero bg-transparent min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://pics.craiyon.com/2023-10-03/c64134a721434b048ae228cc6a16643e.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-7xl font-extralight text-clip">Andrei Stefan</h1>
          <p className="py-8 overflow-hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            doloremque eum nostrum aliquid nihil facere similique veniam
            ratione, accusamus ex. Eum nostrum quam iusto sapiente eligendi
            pariatur expedita, qui corrupti, voluptate explicabo eius placeat
            non illo odit voluptas aspernatur iste numquam accusamus!
          </p>
          <button className="btn btn-primary mr-5">
            <p className="text-primary-content">Contact Me!</p>
          </button>

          <button className="btn btn-neutral">
            <p className="text-neutral-content">Browse Projects!</p>
          </button>
        </div>
      </div>
    </div>
  );
};
