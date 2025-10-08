<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniMotors - Register</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-5">
    <div class="w-full max-w-md">
        <!-- Logo Section -->
        <div class="text-center mb-10">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl text-white text-4xl font-bold mb-4 shadow-lg shadow-blue-300/50">
                M
            </div>
            <h1 class="text-3xl font-semibold text-blue-500 mb-1">MiniMotors</h1>
            <p class="text-gray-600 text-sm">User Panel</p>
        </div>

        <!-- Register Card -->
        <div class="bg-white rounded-2xl shadow-xl p-10">
            <h2 class="text-3xl font-semibold text-gray-900 mb-2">Create Account</h2>
            <p class="text-gray-600 text-sm mb-8">Sign up for a new account</p>

            <form method="POST" action="{{ route('user.register.post') }}">
                @csrf
                
                <!-- Name Field -->
                <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-lg">👤</span>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter your name"
                            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                            required
                        >
                    </div>
                </div>

                <!-- Email Field -->
                <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-lg">@</span>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email"
                            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                            required
                        >
                    </div>
                </div>

                <!-- Password Field -->
                <div class="mb-5">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔒</span>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                            required
                        >
                    </div>
                </div>

                <!-- Confirm Password Field -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔑</span>
                        <input 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Confirm your password"
                            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 transition-all"
                            required
                        >
                    </div>
                </div>

                <!-- Submit Button -->
                <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 active:translate-y-0"
                >
                    <span>✨</span>
                    <span>Register</span>
                </button>

                <!-- Login Link -->
                <p class="text-center mt-6 text-sm text-gray-600">
                    Already have an account? <a href="{{ route('user.login') }}" class="text-blue-500 font-semibold hover:underline">Login here</a>
                </p>
            </form>
        </div>

        <!-- Footer -->
        <p class="text-center mt-8 text-gray-500 text-sm">
            © 2024 MiniMotors. All rights reserved.
        </p>
    </div>
</body>
</html>