// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import { FaEnvelope, FaLock, FaUser, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
// import { MdLogin } from 'react-icons/md';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/client/login",
//         { email, password }
//       );

//       // Save client to localStorage
//       localStorage.setItem("client", JSON.stringify(response.data.client));

//       // Success animation delay before redirect
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 500);
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid email or password");
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left Side - Welcome Section */}
//             <div className="hidden md:block">
//               <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black opacity-10"></div>
//                 <div className="absolute inset-0" style={{
//                   backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
//                 }}></div>
                
//                 <div className="relative z-10">
//                   <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
//                     <FaUser className="text-4xl" />
//                   </div>
                  
//                   <h2 className="text-4xl font-extrabold mb-4">Welcome Back!</h2>
//                   <p className="text-xl text-blue-100 mb-8">
//                     Sign in to access your account and continue your Hot Wheels collection journey.
//                   </p>

//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-bold text-lg">Exclusive Access</h4>
//                         <p className="text-blue-100 text-sm">Get early access to rare collections</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start gap-3">
//                       <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-bold text-lg">Order Tracking</h4>
//                         <p className="text-blue-100 text-sm">Track your orders in real-time</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start gap-3">
//                       <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-bold text-lg">Secure Shopping</h4>
//                         <p className="text-blue-100 text-sm">Your data is protected with us</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Login Form */}
//             <div className="w-full">
//               <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <MdLogin className="text-white text-3xl" />
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
//                     Client Login
//                   </h2>
//                   <p className="text-gray-600">Enter your credentials to access your account</p>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                   <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-shake">
//                     <div className="flex items-center">
//                       <FaShieldAlt className="text-red-500 mr-3" />
//                       <p className="text-red-700 font-medium">{error}</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Login Form */}
//                 <form onSubmit={handleLogin} className="space-y-6">
//                   {/* Email Input */}
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                         <FaEnvelope className="text-gray-400" />
//                       </div>
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Password Input */}
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-2">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                         <FaLock className="text-gray-400" />
//                       </div>
//                       <input
//                         type="password"
//                         placeholder="Enter your password"
//                         className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Remember & Forgot */}
//                   <div className="flex items-center justify-between">
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//                       />
//                       <span className="ml-2 text-sm text-gray-600">Remember me</span>
//                     </label>
//                     <Link to="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
//                       Forgot Password?
//                     </Link>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
//                         Signing in...
//                       </div>
//                     ) : (
//                       <div className="flex items-center justify-center">
//                         <MdLogin className="mr-2 text-xl" />
//                         Sign In
//                       </div>
//                     )}
//                   </button>
//                 </form>

//                 {/* Divider */}
//                 <div className="mt-8 flex items-center">
//                   <div className="flex-1 border-t-2 border-gray-200"></div>
//                   <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
//                   <div className="flex-1 border-t-2 border-gray-200"></div>
//                 </div>

//                 {/* Sign Up Link */}
//                 <div className="mt-6 text-center">
//                   <p className="text-gray-600">
//                     Don't have an account?{' '}
//                     <Link
//                       to="/register"
//                       className="font-bold text-blue-600 hover:text-blue-700 transition"
//                     >
//                       Create Account
//                     </Link>
//                   </p>
//                 </div>

//                 {/* Security Badge */}
//                 <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
//                   <FaShieldAlt className="text-green-600" />
//                   <span>Secure login with 256-bit encryption</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//  const handleLogin = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post('http://127.0.0.1:8000/api/client/login', {
//       email,
//       password
//     });

//     console.log('Full response:', res);

//     if (res.data.client) {
//       // Login successful
//       localStorage.setItem('user', res.data.client.email); // save user
//       navigate('/dashboard');
//     } else {
//       // Login failed
//       alert(res.data.message || 'Invalid credentials');
//     }
//   } catch (err) {
//     console.error('Login error:', err.response?.data || err.message);
//     alert('Login failed');
//   }
// };


//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       /><br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/client/login', { email, password });
      console.log('Full response:', res);

      if (res.data.client) {
        localStorage.setItem('user', res.data.client.email);
        navigate('/dashboard');
      } else {
        alert(res.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
