import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", form);
      localStorage.setItem("token", res.data.token);
      alert("Registration successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3 w-64">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded" />
        <button className="bg-green-600 text-white p-2 rounded">Register</button>
      </form>
      <p className="mt-3 text-sm">
        Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}
