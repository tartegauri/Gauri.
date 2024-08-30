import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Column from '../components/Column';


function HomePage() {
  return (
    <div className="bg-black text-white max-w-full overflow-hidden">
  
     <div className='grid gird-cols-1 divide-y'>
     <Hero />
      
      <About />
      <Column/>
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
    
     </div>
      
    </div>
  );
}

export default HomePage;
