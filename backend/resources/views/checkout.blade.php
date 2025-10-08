<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniMotors - Checkout</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
    <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-blue-300/50">
                    M
                </div>
                <div>
                    <h1 class="text-2xl font-semibold text-blue-500">MiniMotors</h1>
                    <p class="text-sm text-gray-600">Checkout</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-sm text-gray-600">Welcome,</p>
                <p class="font-semibold text-gray-900">{{ auth()->user()->name }}</p>
            </div>
        </div>

        <form method="POST" action="{{ route('checkout.process') }}">
            @csrf
            
            <div class="grid lg:grid-cols-3 gap-6">
                <!-- Left Column - Shipping & Payment -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Shipping Information -->
                    <div class="bg-white rounded-2xl shadow-lg p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span class="text-xl">📦</span>
                            </div>
                            <h2 class="text-xl font-semibold text-gray-900">Shipping Information</h2>
                        </div>

                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value="{{ auth()->user()->name }}"
                                    placeholder="Enter your full name"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                                    required
                                >
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Enter your phone number"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                                    required
                                >
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Shipping Address</label>
                                <textarea 
                                    name="address" 
                                    rows="4"
                                    placeholder="Enter your complete shipping address"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        placeholder="City"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                                        required
                                    >
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                                    <input 
                                        type="text" 
                                        name="postal_code" 
                                        placeholder="Postal Code"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                                        required
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Payment Method -->
                    <div class="bg-white rounded-2xl shadow-lg p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span class="text-xl">💳</span>
                            </div>
                            <h2 class="text-xl font-semibold text-gray-900">Payment Method</h2>
                        </div>

                        <div class="space-y-3">
                            <!-- Khalti Payment -->
                            <label class="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all">
                                <input 
                                    type="radio" 
                                    name="payment_method" 
                                    value="khalti" 
                                    class="w-5 h-5 text-purple-600 focus:ring-purple-500"
                                    checked
                                >
                                <div class="flex items-center gap-3 flex-1">
                                    <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <span class="text-white font-bold text-sm">K</span>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-gray-900">Khalti</p>
                                        <p class="text-sm text-gray-600">Pay with Khalti Wallet</p>
                                    </div>
                                </div>
                            </label>

                            <!-- eSewa Payment -->
                            <label class="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all">
                                <input 
                                    type="radio" 
                                    name="payment_method" 
                                    value="esewa" 
                                    class="w-5 h-5 text-green-600 focus:ring-green-500"
                                >
                                <div class="flex items-center gap-3 flex-1">
                                    <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                        <span class="text-white font-bold text-sm">e</span>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-gray-900">eSewa</p>
                                        <p class="text-sm text-gray-600">Pay with eSewa</p>
                                    </div>
                                </div>
                            </label>

                            <!-- Cash on Delivery -->
                            <label class="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all">
                                <input 
                                    type="radio" 
                                    name="payment_method" 
                                    value="cod" 
                                    class="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                >
                                <div class="flex items-center gap-3 flex-1">
                                    <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span class="text-white text-xl">💵</span>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-gray-900">Cash on Delivery</p>
                                        <p class="text-sm text-gray-600">Pay when you receive</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Order Summary -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                        <!-- Sample Order Items -->
                        <div class="space-y-4 mb-6 pb-6 border-b border-gray-200">
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="font-medium text-gray-900">Product 1</p>
                                    <p class="text-sm text-gray-600">Qty: 2</p>
                                </div>
                                <p class="font-semibold text-gray-900">Rs. 2,500</p>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="font-medium text-gray-900">Product 2</p>
                                    <p class="text-sm text-gray-600">Qty: 1</p>
                                </div>
                                <p class="font-semibold text-gray-900">Rs. 1,800</p>
                            </div>
                        </div>

                        <!-- Price Breakdown -->
                        <div class="space-y-3 mb-6 pb-6 border-b border-gray-200">
                            <div class="flex justify-between text-gray-700">
                                <p>Subtotal</p>
                                <p class="font-medium">Rs. 4,300</p>
                            </div>
                            <div class="flex justify-between text-gray-700">
                                <p>Shipping</p>
                                <p class="font-medium">Rs. 100</p>
                            </div>
                            <div class="flex justify-between text-gray-700">
                                <p>Tax (13%)</p>
                                <p class="font-medium">Rs. 559</p>
                            </div>
                        </div>

                        <!-- Total -->
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-lg font-semibold text-gray-900">Total</p>
                            <p class="text-2xl font-bold text-blue-600">Rs. 4,959</p>
                        </div>

                        <!-- Place Order Button -->
                        <button 
                            type="submit"
                            class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 active:translate-y-0"
                        >
                            <span>🛒</span>
                            <span>Place Order</span>
                        </button>

                        <!-- Secure Payment Info -->
                        <div class="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                            <span>🔒</span>
                            <span>Secure Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>
</html