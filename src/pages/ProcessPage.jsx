import React from 'react';
import HeroTwo from '../components/HeroTwo';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Process from '../components/process';
import WorkTogether from '../components/WorkTogether';
import HeroThree from '../components/HeroThree';

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white flex flex-col">
      {/* Hero Section */}
      <HeroThree />
      
      {/* Process Section */}
      <Process />
      
      {/* Divider */}
      <hr className="border-gray-700 my-6" />
      
      {/* Work Together Section */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-4xl py-10 sm:py-12 lg:py-14">
        <WorkTogether />
      </div>
      <hr className="border-gray-700 my-6" />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
