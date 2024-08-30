import React from 'react';

const Skills = () => {
  return (
    <div className="bg-black text-white py-14 px-14">
      <div className="text-center mb-12">
        <h2 className="text-lg text-gray-400">What Do I Do And How?</h2>
        <h1 className="text-3xl font-bold mt-4">
          I love to craft functional solutions for unique problems. These are some skills I've picked up over my career.
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20">
        {/* Skill Cards */}
        {[
          { title: 'ui & ux design', description: 'As a UI/UX designer, I specialize in creating beautiful, intuitive designs that make your website or application stand out.', icon: 'UI' },
          { title: 'webflow', description: 'I specialize in creating custom, performant websites that look great and function seamlessly across all devices. With attention to detail.', icon: 'W' },
          { title: 'elementor', description: 'As an experienced Elementor developer, I provide web development services that encompass website design, redesigns, and a full website.', icon: 'E' },
          { title: 'wordpress', description: 'I offer custom web development services tailored to your unique needs. Whether you need to upgrade your website or just some updates to your existing site.', icon: 'W' },
          { title: 'shopify', description: 'My e-commerce solutions are optimized for conversions. I focus on delivering user-friendly designs that encourage visitors to make purchases.', icon: 'S' },
          { title: 'marketing', description: 'I can help you with develop and execute a social media strategy that engages your audience, drives traffic, and increases conversions.', icon: 'M' }
        ].map((skill, index) => (
          <div key={index} className="p-6 border border-gray-700 hover:border-gray-500 transition">
            <div className="text-4xl font-bold mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
      
      {/* Process Section */}
      <div className="mt-20 px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Planning */}
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold">Planning</div>
            <p className="text-gray-400">Define goal, wireframe, design concept, content write.</p>
          </div>
          <div className="hidden md:block w-8 h-8 border border-gray-700 rounded-full"></div>
          {/* Design */}
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold">Design</div>
            <p className="text-gray-400">Visual design, branding elements, color, typography, and images.</p>
          </div>
          <div className="hidden md:block w-8 h-8 border border-gray-700 rounded-full"></div>
          {/* Development */}
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold">Development</div>
            <p className="text-gray-400">Develop website with responsive design that works across different devices.</p>
          </div>
          <div className="hidden md:block w-8 h-8 border border-gray-700 rounded-full"></div>
          {/* Launch */}
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold">Launch</div>
            <p className="text-gray-400">Once the website has been thoroughly tested and approved, launch it to the public.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
