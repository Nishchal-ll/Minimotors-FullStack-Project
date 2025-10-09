<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen font-sans antialiased">
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full">

            <!-- Logo Section -->
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 mb-1">
                    Client Portal
                </h1>
                <p class="text-gray-600 text-sm">Login to your account</p>
            </div>

            <!-- Login Card -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
                <form action="{{ route('client.login') }}" method="POST" class="space-y-6">
                    @csrf

                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value="{{ old('email') }}"
                            required
                            class="w-full px-4 py-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 transition duration-200"
                            placeholder="Enter your email"
                        >
                        @error('email')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            class="w-full px-4 py-3 border-2 border-green-100 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 transition duration-200"
                            placeholder="Enter your password"
                        >
                        @error('password')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Remember Me -->
                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-green-500 border-green-300 rounded focus:ring-green-400">
                            <span class="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <a href="#" class="text-green-500 hover:text-green-600 font-semibold transition duration-200">Forgot password?</a>
                    </div>

                    <!-- Submit Button -->
                    <button
                        type="submit"
                        class="w-full bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <!-- Register Link -->
                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Don't have an account?
                        <a href="{{ route('client.register') }}" class="text-green-500 hover:text-green-600 font-semibold transition duration-200">Register here</a>
                    </p>
                </div>
            </div>

        </div>
    </div>
</body>
</html>
