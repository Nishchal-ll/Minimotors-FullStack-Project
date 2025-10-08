<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniMotors</title>
    <link rel="icon" type="image/png" href="{{ asset('logo.png') }}">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen font-sans antialiased">
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-5xl w-full">
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
                <p class="text-blue-200 text-lg">Choose Your Access Portal</p>
            </div>

            <!-- Two Cards Side by Side -->
            <div class="grid md:grid-cols-2 gap-6">
                
                <!-- User Portal Card -->
                <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 transform hover:scale-105 transition duration-300">
                    <div class="text-center mb-6">
                        <div class="inline-block bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-2xl mb-4">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </div>
                        <h2 class="text-3xl font-bold text-white mb-2">User Portal</h2>
                        <p class="text-blue-200">Access your account and shop motors</p>
                    </div>

                    <!-- User Buttons -->
                    <div class="space-y-4">
                        <a href="/user/login" class="block w-full bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-center">
                            <span class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                </svg>
                                User Login
                            </span>
                        </a>

                        <a href="/user/register" class="block w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl border-2 border-purple-400/50 hover:border-purple-400 backdrop-blur-sm transform hover:scale-105 transition duration-300 text-center">
                            <span class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                </svg>
                                User Register
                            </span>
                        </a>
                    </div>

                    <!-- User Info -->
                    <div class="mt-6 pt-6 border-t border-white/20 text-center">
                        <p class="text-purple-200 text-sm">Shop and manage your orders</p>
                    </div>
                </div>

                <!-- Admin Portal Card -->
                <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 transform hover:scale-105 transition duration-300">
                    <div class="text-center mb-6">
                        <div class="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-2xl mb-4">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <h2 class="text-3xl font-bold text-white mb-2">Admin Panel</h2>
                        <p class="text-blue-200">Manage your motors with ease</p>
                    </div>

                    <!-- Admin Buttons -->
                    <div class="space-y-4">
                        <a href="/admin/login" class="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-center">
                            <span class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                </svg>
                                Admin Login
                            </span>
                        </a>

                        <a href="/admin/login" class="block w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transform hover:scale-105 transition duration-300 text-center">
                            <span class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                </svg>
                                Admin Register
                            </span>
                        </a>
                    </div>

                    <!-- Admin Info -->
                    <div class="mt-6 pt-6 border-t border-white/20 text-center">
                        <p class="text-blue-200 text-sm">Secure administration dashboard</p>
                    </div>
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