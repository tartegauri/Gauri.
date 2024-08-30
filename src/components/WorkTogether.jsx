import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-4xl text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_10px_rgba(107,114,128,0.8)]">
      <h2 className="text-4xl font-bold text-white mb-8">
        Let's Work Together -
      </h2>
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center text-white mb-4">
          <FontAwesomeIcon 
            icon={faEnvelope} 
            className="mr-4" 
            aria-label="Email icon" 
          />
          <a
            href="mailto:hirony16@gmail.com"
            className="underline text-white"
            aria-label="Send an email to hirony16@gmail.com"
          >
            hirony16@gmail.com
          </a>
        </div>
        <a
          href="https://www.upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
          aria-label="Hire me on Upwork"
        >
          Hire me on Upwork
        </a>
      </div>
    </div>
  );
}

export default WorkTogether;
