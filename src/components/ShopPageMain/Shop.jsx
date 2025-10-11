import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useCart } from '../CartContext/CartContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/items')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...new Set(products.map((car) => car.category || 'Other'))];

  const filteredProducts = products.filter((car) => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


const handleAddToCart = (car) => {
  const itemWithFullImage = {
    ...car,
    image: `http://127.0.0.1:8000/storage/${car.image}`, // full URL
  };
  console.log("Adding to cart:", itemWithFullImage); // check in console
  addToCart(itemWithFullImage);
};

  
  const handleBuyNow = (item) => {
    addToCart(item); // optionally add to cart
    navigate("/checkout", { state: { item } }); // pass item to checkout page
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-xl">Loading products...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen mt-30">
        <div className="max-w-screen-2xl mx-auto px-4 py-10">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-center mb-10">
            Our Products
          </h2>

          {/* Search */}
          <div className="flex flex-col sm:flex-row justify-start sm:items-center gap-4 mb-20 mt-10">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              Search for an item:
              <input
                type="text"
                placeholder="e.g. Mustang"
                className="w-full sm:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-96 flex flex-col justify-between"
                >
                  <div className="h-40 mt-10 overflow-hidden flex justify-center items-center">
                    <img
                      src={`http://127.0.0.1:8000/storage/${car.image}`}
                      alt={car.name}
                      className="h-48 object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-4">
                    <h3 className="mt-4 text-xl font-bold">{car.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      Nrs. {car.price}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-3">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(car)}
                        className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
                      >
                        <FaShoppingCart className="h-5 w-5 mr-3" />
                        Add to Cart
                      </button>

                      <button
                        type="button"
                        onClick={() => handleBuyNow(car)}
                        className="inline-flex items-center justify-center px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition cursor-pointer"
                      >
                        <BsBagCheckFill className="h-5 w-5 mr-3" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No products found.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

