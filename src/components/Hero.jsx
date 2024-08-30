import React from 'react';

function Hero() {
  return (
    <section className="bg-black h-screen flex flex-col justify-center items-center gap-4 relative overflow-hidden">
      
      {/* Cube Animation Background */}
      <div className="cube-container absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-center gap-4 z-10 text-center">
        <div className="flex flex-col sm:flex-row gap-2">
          <h1 className="text-gray-500 text-4xl sm:text-6xl md:text-7xl font-thin">
            Designing with
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold">
            Purpose,
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <h1 className="text-gray-500 text-4xl sm:text-6xl md:text-7xl font-thin">
            Building with
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold">
            Webflow.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
