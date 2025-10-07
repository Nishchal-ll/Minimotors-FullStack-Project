<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Item - MiniMotors</title>
    <link rel="icon" type="image/png" href="{{ asset('logo.png') }}">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="flex h-screen overflow-hidden">
        <!-- Sidebar -->
        <aside class="w-64 bg-gradient-to-b from-slate-900 to-blue-900 text-white flex-shrink-0">
            <div class="p-6">
                <!-- Logo -->
                <div class="flex items-center space-x-3 mb-8">
                    <div class="bg-gradient-to-r from-blue-400 to-cyan-300 p-2 rounded-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold">MiniMotors</h1>
                        <p class="text-xs text-blue-300">Admin Panel</p>
                    </div>
                </div>

                <!-- Navigation -->
                <nav class="space-y-2">
                    <a href="{{ route('dashboard') }}" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                        </svg>
                        <span class="font-medium">Dashboard</span>
                    </a>
                </nav>
            </div>

            <!-- Logout -->
            <div class="absolute bottom-0 w-64 p-6">
                <form action="{{route('logout')}}" method="POST">
                    @csrf
                    <button type="submit" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-600 transition duration-200 w-full">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        <span class="font-medium">Logout</span>
                    </button>
                </form>
            </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 overflow-auto">
            <!-- Top Bar -->
            <header class="bg-white shadow-sm">
                <div class="flex items-center justify-between px-8 py-4">
                    <div>
                        <div class="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                            <a href="{{ route('dashboard') }}" class="hover:text-blue-600">Dashboard</a>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                            <span class="text-gray-700 font-medium">Edit Item</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Edit Item</h2>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="p-2 hover:bg-gray-100 rounded-lg transition duration-200">
                            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </button>
                        <div class="flex items-center space-x-3">
                            <div class="text-right">
                                <p class="text-sm font-semibold text-gray-700">Admin User</p>
                                <p class="text-xs text-gray-500">Administrator</p>
                            </div>
                            <div class="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold">A</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Form Content -->
            <div class="p-8">
                <div class="max-w-3xl mx-auto">
                    <!-- Form Card -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="bg-gradient-to-r from-green-500 to-emerald-400 px-8 py-6">
                            <h3 class="text-2xl font-bold text-white flex items-center">
                                <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                </svg>
                                Update Item Information
                            </h3>
                            <p class="text-green-100 mt-1">Modify the details of your motor item</p>
                        </div>

                        <form action="{{ route('items.update', $item->id) }}" method="POST" enctype="multipart/form-data" class="p-8">
                            @csrf
                            @method('PUT')

                            <!-- Name Field -->
                            <div class="mb-6">
                                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Item Name <span class="text-red-500">*</span>
                                </label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                                        </svg>
                                    </div>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value="{{ $item->name }}"
                                        required
                                        class="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 transition duration-200"
                                        placeholder="Enter item name"
                                    >
                                </div>
                                <p class="text-xs text-gray-500 mt-1">Choose a descriptive name for your motor item</p>
                            </div>

                            <!-- Price Field -->
                            <div class="mb-6">
                                <label for="price" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Price (Nrs) <span class="text-red-500">*</span>
                                </label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <input 
                                        type="number" 
                                        id="price" 
                                        name="price" 
                                        value="{{ $item->price }}"
                                        step="0.01"
                                        min="0"
                                        required
                                        class="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 transition duration-200"
                                        placeholder="0.00"
                                    >
                                </div>
                                <p class="text-xs text-gray-500 mt-1">Enter the price in US dollars</p>
                            </div>

                            <!-- Current Image Display -->
                            <div class="mb-6">
                                <label class="block text-sm font-semibold text-gray-700 mb-3">
                                    Current Image
                                </label>
                                <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 flex items-center justify-center">
                                    <img 
                                        src="{{ asset('storage/' . $item->image) }}" 
                                        alt="{{ $item->name }}"
                                        class="max-w-xs h-48 object-contain rounded-lg shadow-md"
                                    >
                                </div>
                            </div>

                            <!-- Image Upload Field -->
                            <div class="mb-8">
                                <label for="image" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Change Image <span class="text-gray-400">(Optional)</span>
                                </label>
                                <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition duration-200">
                                    <div class="flex flex-col items-center">
                                        <div class="bg-green-50 p-4 rounded-full mb-4">
                                            <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <input 
                                            type="file" 
                                            id="image" 
                                            name="image" 
                                            accept="image/*"
                                            class="hidden"
                                            onchange="displayFileName(this)"
                                        >
                                        <label 
                                            for="image" 
                                            class="cursor-pointer bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold px-6 py-2 rounded-lg transition duration-200"
                                        >
                                            Choose New File
                                        </label>
                                        <p class="text-sm text-gray-500 mt-3" id="file-name">No file chosen</p>
                                        <p class="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB • Leave empty to keep current image</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex items-center space-x-4">
                                <button 
                                    type="submit"
                                    class="flex-1 bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
                                >
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Update Item
                                </button>
                                <a 
                                    href="{{ route('dashboard') }}"
                                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl border-2 border-gray-300 transition duration-300 flex items-center justify-center"
                                >
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>

                    <!-- Helper Card -->
                    <div class="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
                        <div class="flex items-start">
                            <div class="bg-green-100 p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-green-900 mb-2">Editing Tips</h4>
                                <ul class="text-sm text-green-700 space-y-1">
                                    <li>• Only upload a new image if you want to replace the current one</li>
                                    <li>• All changes will be saved when you click "Update Item"</li>
                                    <li>• The current image will remain if no new image is uploaded</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function displayFileName(input) {
            const fileName = input.files[0]?.name || 'No file chosen';
            document.getElementById('file-name').textContent = fileName;
        }
    </script>
</body>
</html>