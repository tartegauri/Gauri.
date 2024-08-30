import React from "react";

function HeroThree() {
  return (
    <section className="bg-black h-screen flex flex-col justify-center items-center gap-4 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="gap-4 flex flex-col justify-center items-center text-center">
        <div className="flex flex-col sm:flex-row gap-2 z-10">
          <h1 className="text-gray-500 text-4xl sm:text-6xl md:text-7xl font-thin">
            Working
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold">
            Process
          </h1>
        </div>
        <h1 className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl">
          How I combine design and technology to create exceptional user
          experiences.
        </h1>
      </div>
    </section>
  );
}

export default HeroThree;
