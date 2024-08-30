import React from 'react';
import HeroTwo from '../components/HeroTwo';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WorkTogether from '../components/WorkTogether';

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white flex flex-col">
      <HeroTwo />
      <hr className="border-gray-700 my-6" /> 
      
      <div className="px-4 sm:px-6 lg:px-8">
        <Projects />
        <hr className="border-gray-700 my-6" /> {/* Adjusted margin for better spacing */}
        
        <div className="mx-auto w-full max-w-4xl py-14 px-4 sm:px-6">
          <WorkTogether />
        </div>
      </div>
      <hr className="border-gray-700 my-6" /> 
      <Footer />
    </div>
  );
};

export default PortfolioPage;
