// import React, { useState } from 'react';
import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.email && formData.message) {
//       alert('Thank you for contacting Mini Motors! We\'ll get back to you soon.');
//       setFormData({ name: '', email: '', phone: '', message: '' });
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

  function Contact() {
    return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white py-12 px-4 mt-30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Contact <span className='text-blue-500'>Mini Motors</span> </h1>
         
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                //   value={formData.email}
                //   onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="nishchal@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                //   value={formData.phone}
                //   onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="9812345678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                //   value={formData.message}
                //   onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your Hot Wheels needs or questions..."
                />
              </div>

              <button
                // onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Visit Our Store</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl mt-1">📍</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Address</p>
                    <p className="text-gray-600">Bagmati Province<br />Nakhipot, Lalitpur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl mt-1">📞</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Phone</p>
                    <p className="text-gray-600">9812345678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl mt-1">✉️</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Email</p>
                    <p className="text-gray-600">info@minimotors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl mt-1">🕒</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Store Hours</p>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 8:00 PM<br />
                      Sat - Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Mini Motors?</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🏎️</span>
                  <span>Largest Hot Wheels collection in the area</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">⭐</span>
                  <span>Rare and limited edition models</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🤝</span>
                  <span>Expert knowledge and friendly service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🔄</span>
                  <span>Trade-in programs available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📦</span>
                  <span>Special orders welcomed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    );
  }
  export default Contact;