import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">User Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-64">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" />
        <button className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <p className="mt-3 text-sm">
        Don’t have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
}
