import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useCart } from "../CartContext/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handlePlaceOrder = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.address) {
      alert("Please fill all details!");
      return;
    }

    if (cartItems.length === 0) {
      alert("No items in checkout!");
      return;
    }

    const total = getCartTotal();
    const order = {
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      address: userInfo.address,
      items: cartItems,
      total,
    };
console.log("Order to send:", order);

    try {
      // Send order to Laravel backend
      const response = await axios.post("http://127.0.0.1:8000/api/orders", order);
      
      console.log(response.data);
      alert("Order placed successfully!");

      // Clear cart after order
      clearCart();
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
      return;
    }

    // Trigger Khalti Payment if available
    if (window.KhaltiCheckout) {
      const config = {
        publicKey: "test_public_key_your_khalti_key",
        productIdentity: cartItems.map((i) => i.id).join(","),
        productName: cartItems.map((i) => i.name).join(", "),
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

  // If cart is empty
  if (cartItems.length === 0)
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-center font-extrabold text-blue-700 text-6xl">
            No items in checkout.
          </p>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-8 px-4 mt-36">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-black text-blue-600 mb-8 text-center">
            Checkout
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h2 className="text-xl font-black text-blue-600 mb-4">Order Summary</h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 mb-4 flex items-center gap-4 border"
                >
                  <img
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : `http://127.0.0.1:8000/storage/${item.image}`
                    }
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg"
                  />
                  <div>
                    <p className="font-black text-gray-800 mb-1">{item.name}</p>
                    <p className="text-gray-600 text-sm">
                      Price: <span className="font-semibold">Nrs. {item.price}</span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Quantity: <span className="font-semibold">{item.quantity || 1}</span>
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t-2 border-blue-200 pt-4">
                <p className="text-xl font-black text-blue-600">
                  Total: Nrs. {getCartTotal()}
                </p>
              </div>
            </div>

            {/* User Information */}
            <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
              <h2 className="text-xl font-black text-blue-600 mb-4">Your Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
                <textarea
                  name="address"
                  placeholder="Delivery Address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
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
              Place Order & Pay
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
