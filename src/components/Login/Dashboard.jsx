import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const [client, setClient] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get logged-in client from localStorage
    const storedClient = JSON.parse(localStorage.getItem("client"));
    if (storedClient) {
      setClient(storedClient);

      // Fetch client orders from backend
      axios
        .get(`http://127.0.0.1:8000/api/orders?email=${storedClient.email}`)
        .then((res) => {
          setOrders(res.data.orders || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setLoading(false);
        });
    } else {
      // If no client found, redirect to login
      window.location.href = "/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("client");
    window.location.href = "/login";
  };

  if (!client) return null;

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-12 px-4 mt-24 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome, {client.name}!
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
            >
              Logout
            </button>
          </div>

          {/* Client Info */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Info</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Phone:</strong> {client.phone}</p>
              <p><strong>Address:</strong> {client.address}</p>
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Orders</h2>
            {loading ? (
              <p>Loading orders...</p>
            ) : orders.length === 0 ? (
              <p>You have no orders yet.</p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-gray-50 rounded-xl p-4 flex justify-between items-center border border-gray-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        Order #{order.id}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Total: Nrs. {order.total} | Items: {order.items.length}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Date: {new Date(order.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {order.status || "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
