import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get("http://127.0.0.1:8000/api/user", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data))
      .catch(() => navigate("/login"));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button className="mt-4 bg-red-600 text-white p-2 rounded" onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>
        Logout
      </button>
      <button className="mt-4 bg-blue-600 text-white p-2 rounded" onClick={() => navigate("/orders")}>
        My Orders
      </button>
    </div>
  );
}
