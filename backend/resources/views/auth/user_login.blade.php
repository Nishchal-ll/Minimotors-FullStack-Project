
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniMotors - Admin Panel</title>
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

        <!-- Login Card -->
        <div class="bg-white rounded-2xl shadow-xl p-10">
            <h2 class="text-3xl font-semibold text-gray-900 mb-2">Welcome Back</h2>
            <p class="text-gray-600 text-sm mb-8">Sign in to your account</p>

            <form method="POST" action="{{ route('user.login.post') }}">
                @csrf
                
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

                <!-- Remember Me -->
                <div class="flex items-center mb-6">
                    <input 
                        type="checkbox" 
                        id="remember" 
                        name="remember"
                        class="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:ring-2 cursor-pointer"
                    >
                    <label for="remember" class="ml-2 text-sm text-gray-700 cursor-pointer">Remember me</label>
                </div>

                <!-- Submit Button -->
                <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 active:translate-y-0"
                >
                    <span>🔐</span>
                    <span>Sign In</span>
                </button>

                <!-- Register Link -->
                <p class="text-center mt-6 text-sm text-gray-600">
                    Don't have an account? <a href="{{ route('user.register') }}" class="text-blue-500 font-semibold hover:underline">Register here</a>
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