import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../CartContext/CartContext';
import axios from "axios";

export default function HotWheelsGrid() {
  const { addToCart } = useCart();
  const [cars, setCars] = useState([]); // state for DB items
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch items from Laravel API
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

  // const handleAddToCart = (car) => {
  //   addToCart(car);
  // };
  const handleAddToCart = (car) => {
  addToCart({
    ...car,
    image: `http://127.0.0.1:8000/storage/${car.image}`, // full URL
  });
};


  if (loading) {
    return <div className="text-center py-20 text-xl">Loading products...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-2 py-16 sm:py-24">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-20">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-96 flex flex-col justify-between cursor-pointer"
            >
           
              <div className="h-48 flex justify-center items-center overflow-hidden mt-4">
  <img
    src={`http://127.0.0.1:8000/storage/${car.image}`}
    alt={car.name}
    className="max-h-full w-auto object-contain"
  />
</div>
              <div className="flex-1 flex flex-col justify-center px-4">
                <h3 className="mt-4 text-xl font-bold">{car.name}</h3>
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
