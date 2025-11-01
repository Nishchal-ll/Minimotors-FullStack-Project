// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://127.0.0.1:8000/api/client/register', form);
//       console.log('Register response:', res.data);
//       if (res.data.success) {
//         alert('Registration successful! Please login.');
//         navigate('/login');
//       } else {
//         alert('Registration failed.');
//       }
//     } catch (err) {
//       console.error('Register error:', err.response?.data || err.message);
//       alert('Something went wrong.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br/>
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br/>
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br/>
//       <input type="text" name="phone" placeholder="Phone" onChange={handleChange} /><br/>
//       <input type="text" name="address" placeholder="Address" onChange={handleChange} /><br/>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/client/register', form);
      console.log('Register response:', res.data);
      
      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(res.data.message || 'Registration failed.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Register error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
              <MdPersonAdd className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Create Account
            </h1>
            <p className="text-gray-600 text-sm">Register to get started</p>
          </div>

          {/* Register Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <FaShieldAlt className="text-red-500 mr-3 flex-shrink-0" />
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center">
                  <FaCheckCircle className="text-blue-500 mr-3 flex-shrink-0" />
                  <p className="text-blue-700 text-sm font-medium">
                    Registration successful! Redirecting to login...
                  </p>
                </div>
              </div>
            )}

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Address Input - Full Width */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400 text-sm" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    value={form.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

 
              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-base shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Creating Account...
                  </div>
                ) : success ? (
                  <div className="flex items-center justify-center">
                    <FaCheckCircle className="mr-2 text-lg" />
                    Account Created!
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <MdPersonAdd className="mr-2 text-lg" />
                    Create Account
                  </div>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <FaShieldAlt className="text-blue-600" />
              <span>Your information is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;