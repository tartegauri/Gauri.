import React from 'react';
import Image from '../assets/myimg2.jpeg';

function Projects() {
  const projects = [
    {
      title: 'Banking Website',
      img: Image,
      year: 2023,
    },
    {
      title: 'Trading Platform',
      img: Image,
      year: 2023,
    },
    {
      title: 'Analytics Tools',
      img: Image,
      year: 2023,
    },
    {
      title: 'Real Estate',
      img: Image,
      year: 2023,
    },
  ];

  return (
    <section className="text-center py-16 bg-gradient-to-b via-black to-gray-900 text-white px-4 sm:px-8 md:px-14 lg:px-20">
      <h2 className="text-gray-400 text-lg">Featured Projects</h2>
      <h1 className="text-2xl md:text-3xl font-bold my-4">
        I craft digital solutions that showcase my passion and expertise in design and development.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 md:h-56 lg:h-64 object-cover transition-opacity duration-300 hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <button className="mt-4 border hover:bg-black transition-colors px-4 py-2 rounded-full text-sm">
                View Project ➔
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 border hover:bg-black transition-colors rounded-full text-lg font-medium">
          Explore all the projects
        </button>
      </div>
    </section>
  );
}

export default Projects;
