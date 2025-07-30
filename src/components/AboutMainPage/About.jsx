import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 pt-45 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
 
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3">
            About <span className="text-blue-500">Mini Motors</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your premier destination for authentic Hot Wheels collectibles
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded by passionate collectors, Mini Motors connects Hot Wheels enthusiasts 
              with rare die-cast cars. We provide authentic, high-quality collectibles.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              We understand the thrill of discovering rare treasures and completing collections. 
              That's why we're committed to maintaining the trust our community has placed in us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">Why Choose Mini Motors?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Authentic Collections</h3>
                <p className="text-gray-700 text-sm">
                  Every Hot Wheels car is verified for authenticity from trusted suppliers.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Rare Finds</h3>
                <p className="text-gray-700 text-sm">
                  Super Treasure Hunts to vintage redlines - we find hard-to-get pieces.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Expert Knowledge</h3>
                <p className="text-gray-700 text-sm">
                  Our team knows Hot Wheels history, variations, and market values.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-700 mb-2">Community Focused</h3>
                <p className="text-gray-700 text-sm">
                  More than a store - we connect collectors and share the passion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 md:p-8 text-white text-center mb-4">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            To fuel collector passion by providing authentic, rare Hot Wheels while building 
            a community for enthusiasts to share their love for miniature automobiles.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;