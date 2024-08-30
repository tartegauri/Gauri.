import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDribbble, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col md:flex-row">
      {/* Profile Section */}
      <div className="flex-1 flex flex-col justify-center items-start p-6 md:pl-16">
        <div className='flex flex-row'>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">Gauri</h1>
          <h1 className='text-4xl md:text-5xl font-bold text-red-600'>.</h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
          Hi, I am Gauri! I am a developer based in India.
        </h2>
        <div className="mb-6">
          <p className="text-lg mb-1">Age - 20</p>
          <p className="text-lg mb-1">Country - India</p>
          <p className="text-lg mb-1">WhatsApp - +91 7385104707</p>
          <p className="text-lg mb-4">Email - tartegauri30@gmail.com</p>
          <a
            href="https://drive.google.com/file/d/1HIniITh9RTNPQEduwjppixlbKZFt6sGv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border text-white font-semibold text-lg rounded-full hover:bg-gray-600 transition duration-300"
          >
            View Resume
          </a>
        </div>
        
        <div className="flex space-x-4 text-xl md:text-2xl">
          <a href="https://www.linkedin.com/in/gauri-tarte-278720270" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 flex flex-col justify-center items-end p-6 md:pr-16">
        <nav className="text-right text-5xl md:text-7xl space-y-2 md:space-y-4">
          <Link
            to="/home"
            className="block transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="block transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
          >
            Portfolio
          </Link>
          <Link
            to="/process"
            className="block transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
          >
            Process
          </Link>
          
        </nav>
      </div>
    </div>
  );
};

export default Contact;
