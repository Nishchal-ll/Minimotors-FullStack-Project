<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniMotors - Admin Panel</title>
    <link rel="icon" type="image/png" href="{{ asset('logo.png') }}">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen font-sans antialiased">
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full">
            <!-- Logo Section -->
            <div class="text-center mb-8">
                <div class="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition duration-300">
                   <svg class="w-12 h-12 text-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="currentColor" rx="8" ry="8" opacity="0.2"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-size="24" font-family="Arial, sans-serif" font-weight="bold" fill="currentColor">
    M
  </text>
</svg>

                </div>
                <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                    MiniMotors
                </h1>
                <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
            </div>

            <!-- Welcome Card -->
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-white mb-2">Welcome to Admin Panel</h2>
                    <p class="text-blue-200">Manage your motors with ease and efficiency</p>
                </div>

                <!-- Buttons -->
                <div class="space-y-4">
                    <a href="{{ route('show.login') }}" class="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-center">
                        <span class="flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                            </svg>
                            Login
                        </span>
                    </a>

                    <a href="{{ route('show.register') }}" class="block w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transform hover:scale-105 transition duration-300 text-center">
                        <span class="flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                            </svg>
                            Register
                        </span>
                    </a>
                </div>

                <!-- Additional Info -->
                <div class="mt-8 pt-6 border-t border-white/20 text-center">
                    <p class="text-blue-200 text-sm">Secure access to your administration dashboard</p>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-8">
                <p class="text-blue-300 text-sm">&copy; 2024 MiniMotors. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>