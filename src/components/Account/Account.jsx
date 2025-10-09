import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile')
  
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+977 9876543210',
    avatar: 'JD'
  }

  // Sample orders data
  const orders = [
    { id: '#ORD-12345', date: '2024-10-05', total: 'Rs. 4,959', status: 'Delivered', items: 2 },
    { id: '#ORD-12344', date: '2024-09-28', total: 'Rs. 3,200', status: 'Shipped', items: 1 },
    { id: '#ORD-12343', date: '2024-09-15', total: 'Rs. 5,800', status: 'Processing', items: 3 },
  ]

  return (
    <>
    <Navbar/>
    <div className="min-h-screen mt-48">
    
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b border-gray-200">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full text-white text-3xl font-bold flex items-center justify-center mx-auto mb-3 shadow-lg">
                  {user.avatar}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeTab === 'profile'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">👤</span>
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeTab === 'orders'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">📦</span>
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeTab === 'settings'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">⚙️</span>
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                        <div>
                          <p className="font-semibold text-gray-900 text-lg">{order.id}</p>
                          <p className="text-sm text-gray-600">Placed on {order.date}</p>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <span>{order.items} items</span>
                          <span className="mx-2">•</span>
                          <span className="font-semibold text-gray-900">{order.total}</span>
                        </div>
                        <button className="text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors">
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Saved Addresses</h2>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
                    + Add New
                  </button>
                </div>
                <div className="grid gap-4">
                  <div className="border-2 border-blue-400 rounded-xl p-5 bg-blue-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-2">
                          Default
                        </span>
                        <p className="font-semibold text-gray-900">Home</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      123 Main Street, Apartment 4B<br />
                      Kathmandu, 44600<br />
                      Nepal
                    </p>
                    <div className="flex gap-3 mt-4">
                      <button className="text-blue-500 text-sm font-medium hover:text-blue-600">Edit</button>
                      <button className="text-red-500 text-sm font-medium hover:text-red-600">Delete</button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <p className="font-semibold text-gray-900">Office</p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      456 Business Ave, Floor 2<br />
                      Lalitpur, 44700<br />
                      Nepal
                    </p>
                    <div className="flex gap-3 mt-4">
                      <button className="text-blue-500 text-sm font-medium hover:text-blue-600">Edit</button>
                      <button className="text-red-500 text-sm font-medium hover:text-red-600">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                        <span className="text-gray-700">Email notifications</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400" />
                      </label>
                      <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                        <span className="text-gray-700">Order updates</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400" />
                      </label>
                      <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                        <span className="text-gray-700">Promotional emails</span>
                        <input type="checkbox" className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Account