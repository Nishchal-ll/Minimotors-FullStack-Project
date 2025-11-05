import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useCart } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <div className="text-center">
          <div className="mx-auto mb-6 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce-once">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Your Order is Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been confirmed and will
            be processed shortly.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">
                Order confirmation sent to your email
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleBackButton = () => {
    clearCart();
    navigate("/");
  };

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

  const handleKhaltiPay = async () => {
    const backendSaved = await handleBackendSave();
    if (!backendSaved) return;

    const dummyOrder = {
      amount: getCartTotal() * 100, // in paisa
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
        window.location.href = data.payment_url;
      } else {
        alert("Payment initiation failed");
        console.log(data);
      }
    } catch (err) {
      console.error("Khalti Error:", err);
      alert("Payment initiation failed");
    }
  };

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
        setShowSuccessModal(true);
        clearCart();
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

  if (cartItems.length === 0)
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center p-8">
            <div className="mb-6">
              <svg
                className="w-32 h-32 mx-auto text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Add some items to your cart to proceed with checkout
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              Browse Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}

      <div className="min-h-screen bg-white py-12 px-4 mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackButton}
            className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-200 group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
              Checkout
            </h1>
            <p className="text-gray-600 text-lg">
              Complete your purchase securely
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Order Summary
                  </h2>
                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
                  </span>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-4 flex items-center gap-4 border border-gray-200 hover:shadow-md transition duration-200"
                    >
                      <div className="flex-shrink-0 bg-gray-50 rounded-lg p-2 border border-gray-200">
                        <img
                          src={
                            item.image.startsWith("http")
                              ? item.image
                              : `http://127.0.0.1:8000/storage/${item.image}`
                          }
                          alt={item.name}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 mb-2">{item.name}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-600 text-sm">
                            <span className="font-semibold text-blue-600">
                              Nrs. {item.price}
                            </span>
                          </p>
                          <p className="text-gray-600 text-sm">
                            Qty: <span className="font-semibold">{item.quantity || 1}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-gray-800">Nrs. {getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-xl font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      Nrs. {getCartTotal()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-green-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-800">Secure Checkout</p>
                    <p className="text-sm text-green-700">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Information & Payment */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl shadow-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Shipping Information
                </h2>
                <div className="space-y-4">
                  {["name", "email", "password", "phone"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field === "name"
                          ? "Full Name"
                          : field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field === "password" ? "password" : "text"}
                        name={field}
                        placeholder={
                          field === "name"
                            ? "John Doe"
                            : field === "email"
                            ? "john@example.com"
                            : field === "password"
                            ? "********"
                            : "+977 98XXXXXXXX"
                        }
                        value={userInfo[field]}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition bg-white"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      placeholder="Street address, city, postal code"
                      value={userInfo.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition resize-none bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-gray-50 rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Payment</h2>
                  <img
                    src="https://khaltibyime.khalti.com/wp-content/uploads/2025/07/Logo-for-Blog.png"
                    alt="Khalti"
                    className="h-8"
                  />
                </div>
                <button
                  onClick={handleKhaltiPay}
                  className="w-full bg-gradient-to-r from-red-500 to-red-800 hover:from-red-600 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
                >
                  Pay with Khalti 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
