import React from 'react';

const HeroTwo = () => {
  return (
    <section className="bg-black h-screen flex flex-col justify-center items-center gap-4 relative overflow-hidden">
      
      {/* Cube Animation Background (If Needed) */}
      <div className="cube-container absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center">
        {/* Add cube animation content here */}
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-center gap-4 z-10 text-center">
        <div className="flex flex-col sm:flex-row gap-2">
          <h1 className="text-gray-500 text-4xl sm:text-6xl md:text-7xl font-thin">
            Showcasing my
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold">
            talent
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <h1 className="text-gray-500 text-4xl sm:text-6xl md:text-7xl font-thin">
            and
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold">
            passion
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroTwo;
