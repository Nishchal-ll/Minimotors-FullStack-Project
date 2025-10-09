import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true; // important for session auth

const Account = () => {
  const [client, setClient] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState("");

  // Check if logged in on mount
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/client/account")
      .then(res => {
        if (res.data.client) {
          setClient(res.data.client);
          setOrders(res.data.orders);
        }
      })
      .catch(() => setClient(null));
  }, []);

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/client/login", loginData)
      .then(res => {
        setClient(res.data.client);
        setOrders(res.data.orders);
        setErrors("");
      })
      .catch(err => setErrors(err.response.data.message || "Login failed"));
  };

  // Register
  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/client/register", registerData)
      .then(res => {
        setClient(res.data.client);
        setOrders([]);
        setErrors("");
      })
      .catch(err => setErrors(err.response.data.message || "Registration failed"));
  };

  // Logout
  const handleLogout = () => {
    axios.post("http://127.0.0.1:8000/api/client/logout")
      .then(() => {
        setClient(null);
        setOrders([]);
      });
  };

  if (!client) {
    // Show login/register forms
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-green-50">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-xl"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-xl"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
              {errors && <p className="text-red-500 text-sm">{errors}</p>}
              <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-xl">
                Login
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-xl"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-xl"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-xl"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-xl"
                value={registerData.password_confirmation}
                onChange={(e) => setRegisterData({ ...registerData, password_confirmation: e.target.value })}
                required
              />
              {errors && <p className="text-red-500 text-sm">{errors}</p>}
              <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-xl">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Logged-in client view
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-green-50">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-2">Welcome, {client.name}</h2>
        <p className="text-gray-600 mb-4">Email: {client.email}</p>

        <h3 className="text-2xl font-semibold mb-2">Your Orders</h3>
        {orders.length > 0 ? (
          <ul className="space-y-2 mb-4">
            {orders.map((order) => (
              <li key={order.id} className="p-3 border rounded-xl bg-green-50">
                {order.product_name} - Quantity: {order.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mb-4">You have no orders yet.</p>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-3 px-6 rounded-xl hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
