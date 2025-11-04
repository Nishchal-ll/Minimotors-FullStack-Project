import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../CartContext/CartContext";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaUser, FaShoppingBag, FaSignOutAlt, FaBox, FaClock, FaCheckCircle, FaTruck, FaTimesCircle, FaTrash, FaArrowLeft, FaHeart, FaStar } from 'react-icons/fa';
import { MdEmail, MdShoppingCart } from 'react-icons/md';

const Dashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItems, removeFromCart } = useCart();

  // Review form states
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const userEmail = localStorage.getItem("user");

  useEffect(() => {
    if (!userEmail) {
      navigate('/login');
      return;
    }
    // Pre-fill email from logged-in user
    setReviewEmail(userEmail);
    fetchOrders();
  }, [userEmail]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/orders?email=${userEmail}`);
      setOrders(res.data.orders || []);
      setLoading(false);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Get status color and icon
  const getStatusStyle = (status) => {
    switch(status?.toLowerCase()) {
      case 'pending':
        return { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: <FaClock /> };
      case 'processing':
        return { color: 'text-blue-600', bg: 'bg-blue-50', icon: <FaTruck /> };
      case 'completed':
        return { color: 'text-green-600', bg: 'bg-green-50', icon: <FaCheckCircle /> };
      case 'cancelled':
        return { color: 'text-red-600', bg: 'bg-red-50', icon: <FaTimesCircle /> };
      default:
        return { color: 'text-gray-600', bg: 'bg-gray-50', icon: <FaClock /> };
    }
  };

  // Handle review submission
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setSubmittingReview(true);
    
    try {
      await axios.post("http://127.0.0.1:8000/api/site-reviews", {
        name: reviewName,
        email: reviewEmail,
        review: reviewText,
        rating: rating,
      });
      
      // Reset form
      setReviewName("");
      setReviewText("");
      setRating(5);
      
      // Show success modal instead of alert
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setSubmittingReview(false);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform animate-scale-in">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-white text-5xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
              <p className="text-gray-600 text-lg mb-2">Your review has been submitted successfully.</p>
              <p className="text-gray-500 text-sm mb-8">We appreciate your valuable feedback!</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <MdEmail className="text-gray-500" />
                    <p className="text-gray-600">{userEmail}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/shop')}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Shop
                </button>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Cart Items</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{cartItems.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MdShoppingCart className="text-purple-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{orders.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaShoppingBag className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Pending Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {orders.filter(o => o.status?.toLowerCase() === 'pending').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <FaClock className="text-yellow-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Completed Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {orders.filter(o => o.status?.toLowerCase() === 'completed').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-green-600 text-xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Section - Left Side */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-4">
                <div className="flex items-center gap-3 mb-6">
                  <MdShoppingCart className="text-purple-600 text-2xl" />
                  <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                </div>

                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MdShoppingCart className="text-gray-400 text-3xl" />
                    </div>
                    <p className="text-gray-600 mb-4">Your cart is empty</p>
                    <button
                      onClick={() => navigate('/shop')}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/64?text=Product';
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h4>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                              <p className="font-bold text-blue-600 text-sm">Nrs. {item.price}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                              title="Remove item"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold text-gray-700">Total:</span>
                        <span className="text-2xl font-bold text-blue-600">Nrs. {cartTotal.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => navigate('/checkout')}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Orders Section - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaBox className="text-blue-600 text-2xl" />
                  <h2 className="text-2xl font-bold text-gray-900">Your Orders</h2>
                </div>

                {loading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading orders...</p>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaBox className="text-gray-400 text-4xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
                    <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                    <button
                      onClick={() => navigate('/shop')}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                      <MdShoppingCart className="mr-2" />
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.map(order => {
                      const statusStyle = getStatusStyle(order.status);
                      const items = JSON.parse(order.items);
                      
                      return (
                        <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                          {/* Order Header */}
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-200">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {new Date(order.created_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusStyle.bg} ${statusStyle.color} font-semibold text-sm mt-3 md:mt-0`}>
                              {statusStyle.icon}
                              <span className="capitalize">{order.status}</span>
                            </div>
                          </div>

                          {/* Order Items */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Order Items:</h4>
                            <div className="space-y-2">
                              {items.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                      <FaBox className="text-blue-600" />
                                    </div>
                                    <div>
                                      <p className="font-semibold text-gray-900">{item.name}</p>
                                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                  </div>
                                  <p className="font-bold text-gray-900">Nrs. {item.price}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Order Total */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <p className="text-lg font-semibold text-gray-700">Total Amount:</p>
                            <p className="text-2xl font-bold text-blue-600">Nrs. {order.total}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Review Submission Section */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100 mt-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Share Your Experience</h2>
                  <p className="text-gray-600 mt-1">We value your feedback to improve your shopping experience</p>
                </div>
              </div>

              <form onSubmit={handleSubmitReview} className="mt-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={reviewEmail}
                      onChange={(e) => setReviewEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition bg-gray-100"
                      readOnly
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Review *</label>
                  <textarea
                    placeholder="Tell us about your experience with Mini Motors..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition resize-none bg-white"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Rating *</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-4xl transition-all transform hover:scale-110 ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <FaStar />
                      </button>
                    ))}
                    <span className="ml-4 text-gray-700 font-semibold text-lg">
                      {rating} star{rating !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submittingReview}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl ${
                    submittingReview ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {submittingReview ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;