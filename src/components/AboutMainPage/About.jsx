import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaShieldAlt, FaGem, FaUsers, FaAward, FaTrophy, FaShippingFast, FaCheckCircle, FaHeart } from 'react-icons/fa';
import { MdVerified, MdSupportAgent } from 'react-icons/md';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-45">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
          }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
                About <span className="text-yellow-300">Mini Motors</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Your premier destination for authentic Hot Wheels collectibles and rare die-cast treasures
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="text-sm font-semibold">🏆 Trusted by Collectors</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="text-sm font-semibold">✓ 100% Authentic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Our Story Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <FaHeart className="text-white text-xl" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  Founded by passionate collectors, Mini Motors was born from a simple idea: to create a trusted 
                  marketplace where Hot Wheels enthusiasts can find authentic, rare, and limited-edition die-cast cars 
                  without the worry of counterfeits or inflated prices.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  We understand the thrill of discovering rare treasures and completing collections. 
                  That's why we're committed to maintaining the trust our community has placed in us 
                  by ensuring every single item meets our strict authenticity standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Every item authenticated by expert collectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Direct partnerships with trusted suppliers worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Competitive pricing for rare and common pieces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Active community of passionate collectors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Feature Cards */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
              Why Choose <span className="text-blue-600">Mini Motors?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Authentic Collections</h3>
                <p className="text-blue-100 leading-relaxed">
                  Every Hot Wheels car is verified for authenticity from trusted suppliers and collectors worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <FaGem className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rare Finds</h3>
                <p className="text-green-100 leading-relaxed">
                  From Super Treasure Hunts to vintage redlines - we source the hard-to-get pieces collectors dream about.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <FaAward className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Knowledge</h3>
                <p className="text-purple-100 leading-relaxed">
                  Our team has deep knowledge of Hot Wheels history, variations, and current market values.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Focused</h3>
                <p className="text-orange-100 leading-relaxed">
                  More than a store - we connect collectors and foster a community that shares the passion.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaShippingFast className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Secure packaging and swift delivery to get your collectibles safely to your door.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MdVerified className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                Each item is inspected and guaranteed to meet our high quality and authenticity standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MdSupportAgent className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our collector support team is always ready to help with questions about items or orders.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 md:p-16 text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTrophy className="text-4xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-blue-50">
                To fuel the passion of collectors worldwide by providing authentic, rare Hot Wheels die-cast cars 
                while building a thriving community where enthusiasts can connect, share, and celebrate their love 
                for miniature automobiles.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                  <p className="text-lg font-bold">🎯 Customer First</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                  <p className="text-lg font-bold">💎 Quality Always</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                  <p className="text-lg font-bold">🤝 Community Driven</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <p className="text-4xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-gray-600 font-medium">Happy Collectors</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <p className="text-4xl font-bold text-green-600 mb-2">500+</p>
              <p className="text-gray-600 font-medium">Rare Items</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <p className="text-4xl font-bold text-purple-600 mb-2">5000+</p>
              <p className="text-gray-600 font-medium">Items Sold</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
              <p className="text-4xl font-bold text-orange-600 mb-2">100%</p>
              <p className="text-gray-600 font-medium">Authentic</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;