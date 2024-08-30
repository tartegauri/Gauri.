import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 md:py-8 lg:py-10 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12"> {/* Adjusted padding for better responsiveness */}
      
      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center space-x-4 text-gray-400 mb-6 md:mb-0">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-100 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-100 transition duration-300"
        >
          <FontAwesomeIcon icon={faDribbble} size="lg" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-100 transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-100 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-100 transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>

      <div className="text-gray-400 text-xs sm:text-sm md:text-base">
        © {new Date().getFullYear()} all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
