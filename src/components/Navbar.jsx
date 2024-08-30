import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <nav className="bg-black text-white px-4 py-4 md:px-14 md:py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Link to='/' className="text-white font-extrabold text-2xl px-2 md:px-13">
              Gauri
            </Link>
            <div className="text-red-500 font-extrabold text-2xl">.</div>
          </div>
          <div className="relative md:hidden">
            <FontAwesomeIcon
              icon={isDropdownOpen ? faTimes : faBars}
              className={`text-white text-2xl cursor-pointer transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : 'rotate-0'}`}
              onClick={toggleDropdown}
            />
          </div>
          <div className="hidden md:flex gap-8">
            <Link to="/home" className="text-white hover:text-gray-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/portfolio" className="text-white hover:text-gray-400 transition-colors duration-300">
              Visit Portfolio
            </Link>
            <Link to="/process" className="text-white hover:text-gray-400 transition-colors duration-300">
              Process
            </Link>
            <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white z-20 md:hidden">
            <ul className="flex flex-col items-center py-4">
              <li>
                <Link
                  to="/home"
                  className="block py-2 w-full text-center transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block py-2 w-full text-center transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Visit Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="block py-2 w-full text-center transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 w-full text-center transition-all duration-300 ease-in-out transform hover:text-gray-400 hover:scale-105"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
