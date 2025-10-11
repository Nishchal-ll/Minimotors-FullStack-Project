import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Checkout = () => {
  const location = useLocation();
  // Either get items from CartContext or from state passed by navigate
  const items = location.state?.items || location.state?.item ? [location.state.item] : [];

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.address) {
      alert("Please fill all details!");
      return;
    }

    const total = items.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );

    const order = {
      user: userInfo,
      items,
      total,
    };

    console.log("Order placed:", order);

    if (window.KhaltiCheckout) {
      const config = {
        publicKey: "test_public_key_your_khalti_key",
        productIdentity: items.map((i) => i.id).join(","),
        productName: items.map((i) => i.name).join(", "),
        productUrl: window.location.href,
        eventHandler: {
          onSuccess(payload) {
            console.log("Payment Success:", payload);
            alert("Payment Successful! Order Confirmed.");
          },
          onError(error) {
            console.log("Payment Error:", error);
            alert("Payment Failed!");
          },
          onClose() {
            console.log("Payment widget closed");
          },
        },
        paymentPreference: ["KHALTI"],
      };

      const checkout = new window.KhaltiCheckout(config);
      checkout.show({ amount: total * 100 }); // Amount in paisa
    } else {
      alert("Khalti Checkout not loaded.");
    }
  };

  if (!items.length) return <p className="text-center mt-10 text-lg">No items in checkout.</p>;

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-8 px-4 mt-36">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-blue-600 mb-8 text-center">Checkout</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h2 className="text-xl font-black text-blue-600 mb-4">Order Summary</h2>
              
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 mb-4 flex items-center gap-4"
                >
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.image}`}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg border"
                  />
                  <div>
                    <p className="font-black text-gray-800 mb-2">{item.name}</p>
                    <p className="text-gray-600">
                      Price: <span className="font-black">${item.price}</span>
                    </p>
                    <p className="text-gray-600">
                      Quantity: <span className="font-black">{item.quantity || 1}</span>
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t-2 border-blue-200 pt-4">
                <p className="text-xl font-black text-blue-600">Total: ${totalPrice}</p>
              </div>
            </div>

            {/* User Information Form */}
            <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
              <h2 className="text-xl font-black text-blue-600 mb-4">Your Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <textarea
                  name="address"
                  placeholder="Delivery Address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Pay with Khalti
            </button>
            <div className="mt-4 flex items-center justify-center gap-2">
              <p className="text-gray-600">Powered by</p>
              <span className="text-purple-600 font-black text-xl">Khalti</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
