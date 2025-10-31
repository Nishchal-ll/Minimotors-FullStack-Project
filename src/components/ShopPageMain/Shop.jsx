// import React, { useState, useEffect } from 'react';
// import { FaShoppingCart, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
// import { BsBagCheckFill } from 'react-icons/bs';
// import { MdAttachMoney } from 'react-icons/md';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import { useCart } from '../CartContext/CartContext';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function ShopPage() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [sortBy, setSortBy] = useState('default');
//   const [priceRange, setPriceRange] = useState('all');
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { addToCart } = useCart();

//   useEffect(() => {
//     axios
//       .get('http://127.0.0.1:8000/api/items')
//       .then((response) => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       });
//   }, []);

//   const categories = ['All', ...new Set(products.map((car) => car.category || 'Other'))];

//   // Filter and sort products
//   const filteredProducts = products
//     .filter((car) => {
//       const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
//       const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      
//       // Price range filter
//       let matchesPrice = true;
//       if (priceRange === 'under2.5k') matchesPrice = car.price < 2500;
//       else if (priceRange === '2.5k-5k') matchesPrice = car.price >= 2500 && car.price <= 5000;
//       else if (priceRange === 'over5k') matchesPrice = car.price > 5000;
      
//       return matchesCategory && matchesSearch && matchesPrice;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'name-asc':
//           return a.name.localeCompare(b.name);
//         case 'name-desc':
//           return b.name.localeCompare(a.name);
//         case 'price-asc':
//           return a.price - b.price;
//         case 'price-desc':
//           return b.price - a.price;
//         default:
//           return 0;
//       }
//     });

//   const handleAddToCart = (car) => {
//     const itemWithFullImage = {
//       ...car,
//       image: `http://127.0.0.1:8000/storage/${car.image}`,
//     };
//     console.log("Adding to cart:", itemWithFullImage);
//     addToCart(itemWithFullImage);
//   };

//   const handleBuyNow = (item) => {
//     addToCart(item);
//     navigate("/checkout", { state: { item } });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="text-center py-20 text-xl">Loading products...</div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white min-h-screen mt-30">
//         <div className="max-w-screen-2xl mx-auto px-4 py-10">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-center mb-10">
//             Our Products
//           </h2>

//           {/* Filters Section */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-10">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {/* Search */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Search for an item:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g. Mustang"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>

//               {/* Sort by Name */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                   <FaSortAlphaDown className="text-blue-600" />
//                   Sort by Name:
//                 </label>
//                 <select
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                 >
//                   <option value="default">Default</option>
//                   <option value="name-asc">Name: A to Z</option>
//                   <option value="name-desc">Name: Z to A</option>
//                   <option value="price-asc">Price: Low to High</option>
//                   <option value="price-desc">Price: High to Low</option>
//                 </select>
//               </div>

//               {/* Price Range Filter */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                   <MdAttachMoney className="text-green-600" />
//                   Price Range:
//                 </label>
//                 <select
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   value={priceRange}
//                   onChange={(e) => setPriceRange(e.target.value)}
//                 >
//                   <option value="all">All Prices</option>
//                   <option value="under25k">Under Nrs. 25,000</option>
//                   <option value="25k-50k">Nrs. 25,000 - 50,000</option>
//                   <option value="over50k">Over Nrs. 50,000</option>
//                 </select>
//               </div>

//               {/* Category Filter */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Category:
//                 </label>
//                 <select
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                 >
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Results Counter */}
//             <div className="mt-4 pt-4 border-t border-gray-300">
//               <p className="text-sm text-gray-600">
//                 Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> of{' '}
//                 <span className="font-semibold text-gray-900">{products.length}</span> products
//               </p>
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((car) => (
//                 <div
//                   key={car.id}
//                   className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-96 flex flex-col justify-between"
//                 >
//                   <div className="h-40 mt-10 overflow-hidden flex justify-center items-center">
//                     <img
//                       src={`http://127.0.0.1:8000/storage/${car.image}`}
//                       alt={car.name}
//                       className="h-48 object-contain"
//                     />
//                   </div>
//                   <div className="flex-1 flex flex-col justify-center px-4">
//                     <h3 className="mt-4 text-xl font-bold">{car.name}</h3>
//                     <p className="mt-1 text-lg font-medium text-gray-900">
//                       Nrs. {car.price}
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-3 mt-3">
//                       <button
//                         type="button"
//                         onClick={() => handleAddToCart(car)}
//                         className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
//                       >
//                         <FaShoppingCart className="h-5 w-5 mr-3" />
//                         Add to Cart
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() => handleBuyNow(car)}
//                         className="inline-flex items-center justify-center px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition cursor-pointer"
//                       >
//                         <BsBagCheckFill className="h-5 w-5 mr-3" />
//                         Buy Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center text-gray-500 text-lg">
//                 No products found.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaSortAlphaDown, FaFilter } from 'react-icons/fa';
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
      
      // Price range filter
      let matchesPrice = true;
      if (priceRange === 'under25k') matchesPrice = car.price < 25000;
      else if (priceRange === '25k-50k') matchesPrice = car.price >= 25000 && car.price <= 50000;
      else if (priceRange === 'over50k') matchesPrice = car.price > 50000;
      
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
    console.log("Adding to cart:", itemWithFullImage);
    addToCart(itemWithFullImage);
  };

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/checkout", { state: { item } });
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
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen mt-30">
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
                        value="under25k"
                        checked={priceRange === 'under25k'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Under Nrs. 25,000</span>
                    </label>
                    <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition">
                      <input
                        type="radio"
                        name="priceRange"
                        value="25k-50k"
                        checked={priceRange === '25k-50k'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Nrs. 25,000 - 50,000</span>
                    </label>
                    <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition">
                      <input
                        type="radio"
                        name="priceRange"
                        value="over50k"
                        checked={priceRange === 'over50k'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Over Nrs. 50,000</span>
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
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      {/* Image Container */}
                      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img
                          src={`http://127.0.0.1:8000/storage/${car.image}`}
                          alt={car.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {car.name}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Nrs. {car.price.toLocaleString()}
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => handleBuyNow(car)}
                            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5"
                          >
                            <BsBagCheckFill className="mr-2 text-lg" />
                            Buy Now
                          </button>

                          <button
                            type="button"
                            onClick={() => handleAddToCart(car)}
                            className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5"
                          >
                            <FaShoppingCart className="text-xl" />
                          </button>
                        </div>
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
      <Footer />
    </>
  );
}