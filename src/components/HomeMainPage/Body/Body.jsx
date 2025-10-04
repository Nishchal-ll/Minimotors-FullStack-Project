import React from 'react';
import car from '../../../assets/car.png';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-36 sm:mt-12 md:mt-16 lg:mt-55 px-4 sm:px-6 lg:px-0">
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            Find, collect, and shop mini cars <span className="text-blue-500">Easily</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6">
            Discover rare mini cars anytime, from anywhere straight from your phone.
          </p>
          <Link to="/shop" className="bg-blue-500 text-white text-base sm:text-lg md:text-xl lg:text-xl px-4 sm:px-5 md:px-6 lg:px-6 py-2.5 sm:py-3 md:py-3 lg:py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Shop Now
          </Link>
        </div>
        <div className="flex justify-center lg:block">
          <img
            src={car}
            alt="Car"
            className="h-48 sm:h-56 md:h-80 lg:h-160 lg:pl-30 object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default Body;
