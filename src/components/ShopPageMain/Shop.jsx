import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaSortAlphaDown, FaFilter, FaTimes } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useCart } from '../CartContext/CartContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // Filter and sort products
  const filteredProducts = products
    .filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesPrice = true;
      if (priceRange === 'under1k') matchesPrice = car.price < 1000;
      else if (priceRange === '1k-2k') matchesPrice = car.price >= 1000 && car.price <= 2000;
      else if (priceRange === 'over2k') matchesPrice = car.price > 2000;
      
      return matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const handleAddToCart = (car) => {
    const itemWithFullImage = {
      ...car,
      image: `http://127.0.0.1:8000/storage/${car.image}`,
    };
    addToCart(itemWithFullImage);
  };

  const handleBuyNow = (item) => {
    const itemWithFullImage = {
      ...item,
      image: `http://127.0.0.1:8000/storage/${item.image}`,
    };
    addToCart(itemWithFullImage);
    navigate("/checkout", { state: { item: itemWithFullImage } });
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
            <p className="text-xl font-semibold text-gray-700">Loading products...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-30">
        <div className="max-w-screen-2xl mx-auto px-4 py-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Our Products
            </h2>
            <p className="text-gray-600 text-lg">Discover amazing products at great prices</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4 border border-gray-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                  <FaFilter className="text-2xl text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Filters</h3>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <FaSearch className="text-blue-600" />
                    Search Products
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name..."
                      className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Sort by Name */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <FaSortAlphaDown className="text-purple-600" />
                    Sort By
                  </label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white transition cursor-pointer"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Default Order</option>
                    <option value="name-asc">Name: A → Z</option>
                    <option value="name-desc">Name: Z → A</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <MdAttachMoney className="text-green-600 text-xl" />
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition">
                      <input
                        type="radio"
                        name="priceRange"
                        value="all"
                        checked={priceRange === 'all'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">All Prices</span>
                    </label>
                    <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition">
                      <input
                        type="radio"
                        name="priceRange"
                        value="under1k"
                        checked={priceRange === 'under1k'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Under Nrs. 1000</span>
                    </label>
                    <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition">
                      <input
                        type="radio"
                        name="priceRange"
                        value="1k-2k"
                        checked={priceRange === '1k-2k'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Nrs. 1000 - 2000</span>
                    </label>
                    <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition">
                      <input
                        type="radio"
                        name="priceRange"
                        value="over2k"
                        checked={priceRange === 'over2k'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Over Nrs. 2000</span>
                    </label>
                  </div>
                </div>

                {/* Results Counter */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      Showing <span className="font-bold text-blue-600 text-lg">{filteredProducts.length}</span> of{' '}
                      <span className="font-bold text-purple-600 text-lg">{products.length}</span> products
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((car) => (
                    <div
                      key={car.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 cursor-pointer"
                      onClick={() => openProductDetail(car)}
                    >
                      {/* Image Container */}
                      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img
                          src={`http://127.0.0.1:8000/storage/${car.image}`}
                          alt={car.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">View Details</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {car.name}
                        </h3>
                        <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Nrs. {car.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center py-20">
                    <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaSearch className="text-4xl text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                      <p className="text-gray-500 mb-6">Try adjusting your filters or search term</p>
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSortBy('default');
                          setPriceRange('all');
                        }}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0  bg-opacity-100 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Close Button */}
            <button
              onClick={closeProductDetail}
              className="sticky top-4 float-right mr-6 mt-6 p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition z-10"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center">
                  <img
                    src={`http://127.0.0.1:8000/storage/${selectedProduct.image}`}
                    alt={selectedProduct.name}
                    className="max-w-full max-h-96 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h2>

                  <div className="mb-6">
                    <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Nrs. {selectedProduct.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description || 'No description available for this product.'}
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Product ID</p>
                        <p className="text-gray-900 font-bold">#{selectedProduct.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Availability</p>
                        <p className="text-green-600 font-bold">In Stock</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(selectedProduct);
                      }}
                      className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                    >
                      <BsBagCheckFill className="mr-2 text-xl" />
                      Buy Now
                    </button>

                    <button
                      onClick={(e) => {
                        
                        e.stopPropagation();
                        handleAddToCart(selectedProduct);
                      }}
                      className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all"
                    >
                      <FaShoppingCart className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}