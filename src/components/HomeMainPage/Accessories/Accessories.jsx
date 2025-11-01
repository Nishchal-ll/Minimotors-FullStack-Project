import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../CartContext/CartContext';
import axios from "axios";

export default function HotWheelsGrid() {
  const { addToCart } = useCart();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/items")
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (car) => {
    addToCart({
      ...car,
      image: `http://127.0.0.1:8000/storage/${car.image}`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of premium Hot Wheels and collectibles
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="h-1 w-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={`http://127.0.0.1:8000/storage/${car.image}`}
                  alt={car.name}
                  className="max-h-full w-auto object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  NEW
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {car.name}
                </h3>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Nrs. {car.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(car)}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform active:scale-95"
                  >
                    <FaShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {cars.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
              <FaShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-xl font-semibold mb-2">No products available</p>
              <p className="text-gray-400">Check back later for new items</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}