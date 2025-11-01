import React from 'react';
import hotwheels from './hotwheels.json';

export default function CategoryCards() {
  return (
    <div className="px-6 lg:px-40 py-12 mx-auto cursor-pointer">

      <h2 className="text-center text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 mt-24">
           Featured Categories
          </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {hotwheels.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-96 flex flex-col justify-between"
          >
            <div className="h-40 mt-10 overflow-hidden flex justify-center items-center">
              <img
                src={car.image}
                alt={car.name}
                className="h-48 object-contain"
              />
            </div>
            <div className=" text-center flex-1 flex items-center justify-center">
              <h3 className="text-3xl font-bold ">{car.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
