import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useCart} from '../CartContext/CartContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  const { cartItems, getCartCount, removeFromCart, updateQuantity, getCartTotal } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-poppins transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-16 sm:h-18 md:h-20 lg:h-22" />
          </div>

          {/* Center: Navigation Links */}
          <ul className="hidden lg:flex space-x-8 xl:space-x-12 text-gray-700 font-semibold text-lg xl:text-xl">
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/contact">Contact</Link>
            </li>
             <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/account">Account</Link>
            </li>
          </ul>

          {/* Right: Cart & User Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex space-x-4 sm:space-x-6 text-gray-700 text-xl sm:text-2xl cursor-pointer">
              {/* Cart Icon with Badge */}
              <div className="relative">
                <FaShoppingCart 
                  className="hover:text-blue-600 transition duration-200 cursor-pointer"
                  onClick={() => setShowCart(!showCart)}
                />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}

                {/* Cart Dropdown */}
                {showCart && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white text-gray-800 rounded-lg shadow-2xl max-h-96 overflow-y-auto border border-gray-200">
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Shopping Cart</h3>
                        <button 
                          onClick={() => setShowCart(false)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FaTimes />
                        </button>
                      </div>
                      
                      {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                      ) : (
                        <>
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-3 border-b py-3 last:border-b-0"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-16 w-16 object-contain"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm">{item.name}</h4>
                                <p className="text-sm text-gray-600">
                                  Nrs. {item.price}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xs transition"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xs transition"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:text-red-800 text-sm font-medium transition"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          
                          <div className="mt-4 pt-4 border-t">
                            <div className="flex justify-between font-bold mb-4 text-lg">
                              <span>Total:</span>
                              <span>Nrs. {getCartTotal()}</span>
                            </div>
                           <button
  onClick={() => window.open("http://127.0.0.1:8000/checkout", "_blank")}
  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
>
  Checkout
</button>

                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
 </div>

<FaUserCircle
  className="hover:text-blue-600 transition duration-200 cursor-pointer"
  onClick={() => window.open('http://127.0.0.1:8000/', '_blank')}
  title="Open Admin Panel"
/>
</div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-gray-700 text-2xl hover:text-blue-600 transition duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <ul className="flex flex-col space-y-4 pt-6 pb-4 text-gray-700 font-semibold text-lg border-t border-gray-100 mt-4">
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to="/account" onClick={() => setIsMenuOpen(false)}>Account</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

