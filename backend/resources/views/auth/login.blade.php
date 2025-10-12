{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - MiniMotors</title>
    <link rel="icon" type="image/png" href="{{ asset('logo.png') }}">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen font-sans antialiased">
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full">
            <!-- Logo Section -->
            <div class="text-center mb-8">
                <div class="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 p-3 rounded-2xl shadow-lg mb-3 transform hover:scale-105 transition duration-300">
                 <svg class="w-12 h-12 text-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="currentColor" rx="8" ry="8" opacity="0.2"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-size="24" font-family="Arial, sans-serif" font-weight="bold" fill="currentColor">
    M
  </text>
</svg>

                </div>
                <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-1">
                    MiniMotors
                </h1>
                <p class="text-gray-600 text-sm">Admin Panel</p>
            </div>

            <!-- Login Card -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                    <p class="text-gray-500">Login to your account</p>
                </div>
                @if ($errors->any())
    <div class="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
        {{ $errors->first('email') }}
    </div>
@endif

                <form action="{{route('login')}}" method="POST" class="space-y-6">
                    @csrf
                    
                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                </svg>
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                value="{{old('email')}}" 
                                required
                                class="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="Enter your email"
                            >
                        </div>
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required
                                class="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="Enter your password"
                            >
                        </div>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-500 border-blue-300 rounded focus:ring-blue-400">
                            <span class="ml-2 text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit"
                        class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        <span class="flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                            </svg>
                            Sign In
                        </span>
                    </button>
                </form>

                <!-- Register Link -->
                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Don't have an account? 
                        <a href="{{route('show.register')}}" class="text-blue-500 hover:text-blue-600 font-semibold transition duration-200">
                            Register here
                        </a>
                    </p>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-6">
                <p class="text-gray-500 text-sm">&copy; 2024 MiniMotors. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html> --}}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - MiniMotors</title>
    <link rel="icon" type="image/png" href="{{ asset('logo.png') }}">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen font-sans antialiased">
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full">
            <!-- Logo Section -->
            <div class="text-center mb-8">
                <div class="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 p-3 rounded-2xl shadow-lg mb-3 transform hover:scale-105 transition duration-300">
                 <svg class="w-12 h-12 text-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="currentColor" rx="8" ry="8" opacity="0.2"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-size="24" font-family="Arial, sans-serif" font-weight="bold" fill="currentColor">
    M
  </text>
</svg>

                </div>
                <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-1">
                    MiniMotors
                </h1>
                <p class="text-gray-600 text-sm">Admin Panel</p>
            </div>

            <!-- Login Card -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                    <p class="text-gray-500">Login to your account</p>
                </div>
                @if ($errors->any())
    <div class="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
        {{ $errors->first('email') }}
    </div>
@endif

                <!-- Google Sign In Button -->
                <a href="{{route('admin.google.redirect')}}" class="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-md border-2 border-gray-200 flex items-center justify-center mb-6 transition duration-200 hover:shadow-lg">
                    <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                </a>

                <!-- Divider -->
                <div class="relative mb-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-4 bg-white text-gray-500">Or continue with email</span>
                    </div>
                </div>

                <form action="{{route('login')}}" method="POST" class="space-y-6">
                    @csrf
                    
                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                </svg>
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                value="{{old('email')}}" 
                                required
                                class="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="Enter your email"
                            >
                        </div>
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required
                                class="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="Enter your password"
                            >
                        </div>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-500 border-blue-300 rounded focus:ring-blue-400">
                            <span class="ml-2 text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit"
                        class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        <span class="flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                            </svg>
                            Sign In
                        </span>
                    </button>
                </form>

                <!-- Register Link -->
                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Don't have an account? 
                        <a href="{{route('show.register')}}" class="text-blue-500 hover:text-blue-600 font-semibold transition duration-200">
                            Register here
                        </a>
                    </p>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-6">
                <p class="text-gray-500 text-sm">&copy; 2024 MiniMotors. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>