import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-8 bg-black">
      <div className="flex flex-col items-center max-w-5xl w-full text-white">
        {/* Testimonial Content */}
        <div className="bg-black p-6 rounded-lg shadow-lg mb-8 w-full max-w-4xl">
          <h2 className="text-gray-400 uppercase text-xs md:text-sm mb-4 tracking-widest text-center">
            What my clients say?
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Testimonial
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-center">
            I love to craft functional solutions for unique problems. These
            are some skills I've picked up over my career.
          </p>
          <p className="font-bold text-base md:text-lg text-center">~ Najmul Hasan</p>
          <p className="text-gray-400 text-center mb-8 text-sm md:text-base">CEO</p>
        </div>

        {/* Contact Section */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-4xl text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_10px_rgba(107,114,128,0.8)]">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            Let's Work Together -
          </h2>
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center text-white mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 md:mr-4" />
              <a
                href="mailto:hirony16@gmail.com"
                className="underline text-white text-sm md:text-base"
              >
                hirony16@gmail.com
              </a>
            </div>
            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-gray-700 transition text-sm md:text-base"
            >
              Hire me on Upwork
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
