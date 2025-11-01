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




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);      
//   const [orders, setOrders] = useState([]);    

//   // Check login on mount
//   useEffect(() => {
//     const email = localStorage.getItem('user');
//     if (!email) {
//       navigate('/login'); 
//       return;
//     }
//     setUser({ email }); 
//     fetchOrders(email);
//   }, []);

//   // Fetch user orders from backend
//   const fetchOrders = async (email) => {
//     try {
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
//               <p><strong>Order ID:</strong> {order.id}</p>
//               <p><strong>Items:</strong></p>
//               <ul>
//                 {JSON.parse(order.items).map((item, idx) => (
//                   <li key={idx}>
//                     {item.name} - {item.quantity} x ${item.price}
//                   </li>
//                 ))}
//               </ul>
//               <p><strong>Total:</strong> ${order.total}</p>
//               <p><strong>Status:</strong> {order.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dashboard;






// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import { FaUser, FaShoppingBag, FaSignOutAlt, FaBox, FaClock, FaCheckCircle, FaTruck, FaTimesCircle } from 'react-icons/fa';
// import { MdEmail, MdShoppingCart } from 'react-icons/md';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);      
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Check login on mount
//   useEffect(() => {
//     const email = localStorage.getItem('user');
//     if (!email) {
//       navigate('/login'); 
//       return;
//     }
//     setUser({ email }); 
//     fetchOrders(email);
//   }, []);

//   // Fetch user orders from backend
//   const fetchOrders = async (email) => {
//     try {
//       const res = await axios.get(`http://127.0.0.1:8000/api/orders?email=${email}`);
//       setOrders(res.data.orders || []);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching orders:', err.response?.data || err.message);
//       setLoading(false);
//     }
//   };

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   // Get status color and icon
//   const getStatusStyle = (status) => {
//     switch(status?.toLowerCase()) {
//       case 'pending':
//         return { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: <FaClock /> };
//       case 'processing':
//         return { color: 'text-blue-600', bg: 'bg-blue-50', icon: <FaTruck /> };
//       case 'completed':
//         return { color: 'text-green-600', bg: 'bg-green-50', icon: <FaCheckCircle /> };
//       case 'cancelled':
//         return { color: 'text-red-600', bg: 'bg-red-50', icon: <FaTimesCircle /> };
//       default:
//         return { color: 'text-gray-600', bg: 'bg-gray-50', icon: <FaClock /> };
//     }
//   };

//   if (!user) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-white flex items-center justify-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-xl font-semibold text-gray-700">Loading...</p>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header Section */}
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//               <div className="flex items-center gap-4 mb-4 md:mb-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//                   <FaUser className="text-blue-600 text-2xl" />
//                 </div>
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
//                   <div className="flex items-center gap-2 mt-1">
//                     <MdEmail className="text-gray-500" />
//                     <p className="text-gray-600">{user.email}</p>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//               >
//                 <FaSignOutAlt className="mr-2" />
//                 Logout
//               </button>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600 text-sm font-medium">Total Orders</p>
//                   <p className="text-3xl font-bold text-gray-900 mt-1">{orders.length}</p>
//                 </div>
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                   <FaShoppingBag className="text-blue-600 text-xl" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600 text-sm font-medium">Pending Orders</p>
//                   <p className="text-3xl font-bold text-gray-900 mt-1">
//                     {orders.filter(o => o.status?.toLowerCase() === 'pending').length}
//                   </p>
//                 </div>
//                 <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                   <FaClock className="text-yellow-600 text-xl" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600 text-sm font-medium">Completed Orders</p>
//                   <p className="text-3xl font-bold text-gray-900 mt-1">
//                     {orders.filter(o => o.status?.toLowerCase() === 'completed').length}
//                   </p>
//                 </div>
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                   <FaCheckCircle className="text-green-600 text-xl" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Orders Section */}
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
//             <div className="flex items-center gap-3 mb-6">
//               <FaBox className="text-blue-600 text-2xl" />
//               <h2 className="text-2xl font-bold text-gray-900">Your Orders</h2>
//             </div>

//             {loading ? (
//               <div className="text-center py-12">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto mb-4"></div>
//                 <p className="text-gray-600">Loading orders...</p>
//               </div>
//             ) : orders.length === 0 ? (
//               <div className="text-center py-12">
//                 <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <MdShoppingCart className="text-gray-400 text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
//                 <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
//                 <button
//                   onClick={() => navigate('/shop')}
//                   className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
//                 >
//                   <MdShoppingCart className="mr-2" />
//                   Start Shopping
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 {orders.map(order => {
//                   const statusStyle = getStatusStyle(order.status);
//                   const items = JSON.parse(order.items);
                  
//                   return (
//                     <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
//                       {/* Order Header */}
//                       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-200">
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {new Date(order.created_at).toLocaleDateString('en-US', {
//                               year: 'numeric',
//                               month: 'long',
//                               day: 'numeric'
//                             })}
//                           </p>
//                         </div>
//                         <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusStyle.bg} ${statusStyle.color} font-semibold text-sm mt-3 md:mt-0`}>
//                           {statusStyle.icon}
//                           <span className="capitalize">{order.status}</span>
//                         </div>
//                       </div>

//                       {/* Order Items */}
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-700 mb-3">Order Items:</h4>
//                         <div className="space-y-2">
//                           {items.map((item, idx) => (
//                             <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                                   <FaBox className="text-blue-600" />
//                                 </div>
//                                 <div>
//                                   <p className="font-semibold text-gray-900">{item.name}</p>
//                                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                                 </div>
//                               </div>
//                               <p className="font-bold text-gray-900">Nrs. {item.price}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Order Total */}
//                       <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                         <p className="text-lg font-semibold text-gray-700">Total Amount:</p>
//                         <p className="text-2xl font-bold text-blue-600">Nrs. {order.total}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../CartContext/CartContext' // import CartContext

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);      
//   const [orders, setOrders] = useState([]);    
//   const { cartItems } = useCart(); // get current cart items

//   // Check login on mount
//   useEffect(() => {
//     const email = localStorage.getItem('user');
//     if (!email) {
//       navigate('/login'); 
//       return;
//     }
//     setUser({ email }); 
//     fetchOrders(email);
//   }, []);

//   // Fetch user orders from backend
//   const fetchOrders = async (email) => {
//     try {
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

//       {/* Current Cart Items */}
//       <h2>Your Current Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - {item.quantity} x ${item.price}
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Order History */}
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <ul>
//           {orders.map(order => (
//             <li key={order.id}>
//               <p><strong>Order ID:</strong> {order.id}</p>
//               <p><strong>Items:</strong></p>
//               <ul>
//                 {JSON.parse(order.items).map((item, idx) => (
//                   <li key={idx}>
//                     {item.name} - {item.quantity} x ${item.price}
//                   </li>
//                 ))}
//               </ul>
//               <p><strong>Total:</strong> ${order.total}</p>
//               <p><strong>Status:</strong> {order.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext/CartContext";
import axios from "axios";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const { cartItems, removeFromCart } = useCart();

  const userEmail = localStorage.getItem("user");

  useEffect(() => {
    if (userEmail) fetchOrders();
  }, [userEmail]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/orders?email=${userEmail}`);
      setOrders(res.data.orders || []);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.product_name} - {item.quantity} x ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id} | Status: {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
