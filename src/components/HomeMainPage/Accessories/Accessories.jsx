import React from 'react';
import hotwheels from './hotwheels.json';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../CartContext/CartContext'; // Import cart hook

export default function HotWheelsGrid() {
  // Get the addToCart function from cart context
  const { addToCart } = useCart();

  // Handle add to cart button click
  const handleAddToCart = (car) => {
    addToCart(car);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-2 py-16 sm:py-24">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-20">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {hotwheels.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-96 flex flex-col justify-between cursor-pointer"
            >
              <div className="h-40 mt-10 overflow-hidden flex justify-center items-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-48 object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4">
                <h3 className="mt-4 text-1xl font-bold">{car.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Nrs. {car.price}</p>
                <button
                  type="button"
                  onClick={() => handleAddToCart(car)}
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
                >
                  <FaShoppingCart className="h-5 w-5 mr-3" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}