// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);      // Logged-in user
//   const [orders, setOrders] = useState([]);    // Orders for user

//   // Check login on mount
//   useEffect(() => {
//     const email = localStorage.getItem('user');
//     if (!email) {
//       navigate('/login'); // redirect if not logged in
//       return;
//     }
//     setUser({ email }); // minimal info, can fetch more from API
//     fetchOrders(email);
//   }, []);

//   // Fetch user orders from backend
//   const fetchOrders = async (email) => {
//     try {
//       // Replace with your API endpoint
//       const res = await axios.get(`http://127.0.0.1:8000/api/orders?email=${email}`);
//       setOrders(res.data.orders || []);
//     } catch (err) {
//       console.error('Error fetching orders:', err.response?.data || err.message);
//     }
//   };

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Logged in as: {user.email}</p>
//       <button onClick={handleLogout}>Logout</button>

//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <ul>
//           {orders.map(order => (
//             <li key={order.id}>
//               <p>Order ID: {order.id}</p>
//               <p>Items: {JSON.stringify(order.items)}</p>
//               <p>Total: {order.total}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);      
  const [orders, setOrders] = useState([]);    

  // Check login on mount
  useEffect(() => {
    const email = localStorage.getItem('user');
    if (!email) {
      navigate('/login'); 
      return;
    }
    setUser({ email }); 
    fetchOrders(email);
  }, []);

  // Fetch user orders from backend
  const fetchOrders = async (email) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/orders?email=${email}`);
      setOrders(res.data.orders || []);
    } catch (err) {
      console.error('Error fetching orders:', err.response?.data || err.message);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>

      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {JSON.parse(order.items).map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ${order.total}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
