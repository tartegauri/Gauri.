import React from 'react';

const Process = () => {
  const steps = [
    {
      title: 'Get Started',
      description: `Starting with creating a coming soon page for your website. 
        Why? Because it builds anticipation. A coming soon page generates buzz and excitement 
        about your website before it even launches. This can be particularly helpful for new 
        businesses or startups that want to generate interest and curiosity around their brand.`,
    },
    {
      title: 'Planning',
      description: `All begins by defining the goals and objectives of the website. 
        This includes understanding the target audience, identifying the key features and functionality 
        required, and establishing a timeline for the project. Develop a detailed plan for the project 
        including the site architecture, wireframes, and design concepts. It should also include a content 
        strategy and a plan for search engine optimization.`,
    },
    {
      title: 'Design',
      description: `Identify branding elements. The first step in creating the visual identity for 
        your website is to identify the branding elements. This includes the logo, color palette, typography, 
        and any other design elements that are part of your brand identity. Choose imagery. It's important 
        that the images you choose align with the goals and objectives of the website. This can include 
        photographs, illustrations, icons, and other graphic elements. Create a design concept that aligns 
        with your goals and objectives. This involves creating a mockup or prototype of the website that 
        incorporates these elements and establishes a visual hierarchy for the content.`,
    },
    {
      title: 'Development',
      description: `We will present a fully designed demo website with mobile-responsive approval and 
        will develop the website right. After design testing. I will use platforms like WordPress, Webflow, 
        Elementor, and Shopify to develop your website and will add e-commerce integration to your website. 
        CMS will also manage your website's content without the need for a developer.`,
    },
    {
      title: 'Launching',
      description: `Testing: Conduct thorough testing of the website including functional testing, user 
        testing, and performance testing. This ensures that the website works as intended and meets user 
        expectations. Launch: Once the website has been thoroughly tested and approved, launch it to the public. 
        This will include setting up a hosting domain registration, and any necessary DNS settings.`,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between mb-12">
            <div className="sm:w-1/3">
              <h2 className="text-2xl font-bold">{step.title}</h2>
            </div>
            <div className="sm:w-2/3 text-gray-300">
              <p>{step.description}</p>
              <hr className="border-t-2 border-white mt-2 mb-4"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
