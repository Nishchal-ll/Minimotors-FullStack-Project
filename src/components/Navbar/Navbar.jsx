import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-poppins ">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 sm:h-18 md:h-20 lg:h-22" />
        </div>

        <ul className="hidden lg:flex space-x-8 xl:space-x-12 text-gray-700 font-semibold text-lg xl:text-xl">
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4 sm:space-x-6">
  
          <div className="flex space-x-4 sm:space-x-6 text-gray-700 text-xl sm:text-2xl cursor-pointer">
            <FaShoppingCart  className="hover:text-blue-600 transition duration-200" />
            <Link to="/login">
  <FaUserCircle className="hover:text-blue-600 transition duration-200 cursor-pointer" />
</Link>
          </div>
          
          <button 
            className="lg:hidden text-gray-700 text-2xl hover:text-blue-600 transition duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

 
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <ul className="flex flex-col space-y-4 pt-6 pb-4 text-gray-700 font-semibold text-lg border-t border-gray-100 mt-4">
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-200">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;