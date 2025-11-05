import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useCart } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ShoppingCart, CreditCard, User, Mail, Lock, Phone, MapPin, Package, ArrowRight, CheckCircle } from "lucide-react";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [pidx, setPidx] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleInputChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  // Save order & user info to backend
  const handleBackendSave = async () => {
    try {
      const payload = {
        ...userInfo,
        items: cartItems,
        total: getCartTotal(),
      };
      const res = await axios.post(
        "http://127.0.0.1:8000/api/checkout/client",
        payload
      );
      console.log("✅ Backend saved:", res.data);
      return true;
    } catch (err) {
      console.error("❌ Checkout error:", err);
      alert("Failed to save order. Please check your details.");
      return false;
    }
  };

  // Initiate Khalti payment with dummy data
  const handleKhaltiPay = async () => {
    const backendSaved = await handleBackendSave();
    if (!backendSaved) return;

    const dummyOrder = {
      amount: 1000, // in paisa
      purchase_order_id: "TEST" + Math.floor(Math.random() * 999999),
      purchase_order_name: "Demo Order",
      return_url: window.location.href,
      website_url: window.location.origin,
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/api/khalti/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dummyOrder),
      });
      const data = await res.json();

      if (data.payment_url) {
        setPidx(data.pidx);
        window.location.href = data.payment_url; // redirect to Khalti
      } else {
        alert("Payment initiation failed");
        console.log(data);
      }
    } catch (err) {
      console.error("Khalti Error:", err);
      alert("Payment initiation failed");
    }
  };

  // Verify Khalti payment after redirect
  const verifyKhaltiPayment = async () => {
    if (!pidx) return;
    try {
      const res = await fetch("http://127.0.0.1:8000/api/khalti/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pidx }),
      });
      const data = await res.json();
      if (data.status === "Completed") {
        alert("✅ Payment successful!");
        setPaymentCompleted(true);
        clearCart();
        navigate("/"); // redirect after success
      } else {
        alert("❌ Payment not completed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    verifyKhaltiPayment();
  }, [pidx]);

  return (
    <div className="min-h-screen  flex flex-col mt-24">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Checkout
          </h1>
          <p className="text-gray-600 text-lg">Complete your order in just a few steps</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - User Info Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Customer Information</h2>
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      name="name"
                      placeholder="John Doe"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none text-gray-800"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      name="email"
                      placeholder="john@example.com"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      type="email"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none text-gray-800"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      name="password"
                      placeholder="••••••••"
                      type="password"
                      value={userInfo.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none text-gray-800"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      name="phone"
                      placeholder="+977 9800000000"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none text-gray-800"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="address"
                      placeholder="Enter your complete delivery address..."
                      value={userInfo.address}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none text-gray-800 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Package className="w-5 h-5 text-purple-500" />
                      <div className="flex-grow">
                        <p className="font-medium text-gray-800 text-sm">{item.name || 'Product'}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity || 1}</p>
                      </div>
                      <p className="font-bold text-gray-800">Rs. {item.price || 0}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <p>No items in cart</p>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t-2 border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">Rs. {getCartTotal()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Rs. {getCartTotal()}
                  </span>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handleKhaltiPay}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay with Khalti</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {paymentCompleted && (
                <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3 animate-pulse">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-semibold">Payment Completed!</span>
                </div>
              )}

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  Secure checkout powered by Khalti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;