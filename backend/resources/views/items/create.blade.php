

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Item - MiniMotors</title>
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
                            <span class="text-gray-700 font-medium">Add New Item</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Add New Item</h2>
                    </div>
                </div>
            </header>

            <!-- Form Content -->
            <div class="p-8">
                <div class="max-w-3xl mx-auto">
                    <!-- Form Card -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-6">
                            <h3 class="text-2xl font-bold text-white flex items-center">
                                <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                                Item Information
                            </h3>
                            <p class="text-blue-100 mt-1">Fill in the details below to add a new motor item</p>
                        </div>

                        <form action="{{ route('items.store') }}" method="POST" enctype="multipart/form-data" class="p-8">
                            @csrf

                            <!-- Name Field -->
                            <div class="mb-6">
                                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Item Name <span class="text-red-500">*</span>
                                </label>
                                <input type="text" id="name" name="name" required
                                    class="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                    placeholder="Enter item name (e.g., PowerMax Pro Motor)">
                            </div>

                            <!-- Price Field -->
                            <div class="mb-6">
                                <label for="price" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Price (Nrs) <span class="text-red-500">*</span>
                                </label>
                                <input type="number" id="price" name="price" step="0.01" min="0" required
                                    class="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                    placeholder="0.00">
                            </div>

                            <!-- ✅ Description Field -->
                        <div class="mb-6">
    <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">
        Description
    </label>
    <textarea
        id="description"
        name="description"
        rows="4"
        placeholder="Enter item description"
        class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
    ></textarea>
    <p class="text-xs text-gray-500 mt-1">Add details about your item here</p>
</div>

                            <!-- Image Upload Field -->
                            <div class="mb-8">
                                <label for="image" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Product Image <span class="text-red-500">*</span>
                                </label>
                                <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition duration-200">
                                    <div class="flex flex-col items-center">
                                        <div class="bg-blue-50 p-4 rounded-full mb-4">
                                            <svg class="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <input type="file" id="image" name="image" accept="image/*" required class="hidden" onchange="displayFileName(this)">
                                        <label for="image" class="cursor-pointer bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-lg transition duration-200">
                                            Choose File
                                        </label>
                                        <p class="text-sm text-gray-500 mt-3" id="file-name">No file chosen</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex items-center space-x-4">
                                <button type="submit"
                                    class="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Save Item
                                </button>
                                <a href="{{ route('dashboard') }}"
                                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl border-2 border-gray-300 transition duration-300 flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                    Cancel
                                </a>
                            </div>
                        </form>
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
