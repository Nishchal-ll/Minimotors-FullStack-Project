import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/user")
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const handleLogin = () => {
    axios.post("http://127.0.0.1:8000/login", {
      email: "test@gmail.com",
      password: "password123",
    })
    .then(res => setUser(res.data.user))
    .catch(() => alert("Invalid credentials"));
  };

  const handleLogout = () => {
    axios.post("http://127.0.0.1:8000/logout").then(() => setUser(null));
  };

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Please Login or Register</h2>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">My Account</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
