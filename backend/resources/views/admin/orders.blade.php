
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orders - MiniMotors</title>
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
                    <a href="{{ route('admin.orders') }}" class="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/20 transition duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                        <span class="font-medium">Orders</span>
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
                            <span class="text-gray-700 font-medium">Orders</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Order Management</h2>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="p-2 hover:bg-gray-100 rounded-lg transition duration-200">
                            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </button>
                        <div class="flex items-center space-x-3">
                            
                                                   <div class="text-right">
    <p class="text-sm font-semibold text-gray-700">
        {{ Auth::user()->name ?? 'Admin User' }}
    </p>
    <p class="text-xs text-gray-500">
        Administrator
    </p>
</div>
                            <div class="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold">A</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Orders Content -->
            <div class="p-8">
                @if($orders->isEmpty())
                    <!-- Empty State -->
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                            <div class="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">No Orders Yet</h3>
                            <p class="text-gray-500 mb-6">When customers place orders, they will appear here.</p>
                            <a href="{{ route('dashboard') }}" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition duration-200">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                </svg>
                                Back to Dashboard
                            </a>
                        </div>
                    </div>
                @else
                    <!-- Orders List -->
                    <div class="space-y-8">
                        <!-- Stats Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-sm text-gray-500 font-medium">Total Orders</p>
                                        <p class="text-3xl font-bold text-gray-800 mt-1">{{ $orders->count() }}</p>
                                    </div>
                                    <div class="bg-blue-50 p-4 rounded-lg">
                                        <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-sm text-gray-500 font-medium">Pending</p>
                                        <p class="text-3xl font-bold text-orange-600 mt-1">{{ $orders->where('status', 'pending')->count() }}</p>
                                    </div>
                                    <div class="bg-orange-50 p-4 rounded-lg">
                                        <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-sm text-gray-500 font-medium">Processing</p>
                                        <p class="text-3xl font-bold text-blue-600 mt-1">{{ $orders->where('status', 'processed')->count() }}</p>
                                    </div>
                                    <div class="bg-blue-50 p-4 rounded-lg">
                                        <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-sm text-gray-500 font-medium">Delivered</p>
                                        <p class="text-3xl font-bold text-green-600 mt-1">{{ $orders->where('status', 'delivered')->count() }}</p>
                                    </div>
                                    <div class="bg-green-50 p-4 rounded-lg">
                                        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Navigation -->
                        <div class="flex flex-wrap gap-3">
                            <a href="#pending-orders" class="bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold px-6 py-3 rounded-lg transition duration-200 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                Pending Orders
                            </a>
                            <a href="#processed-orders" class="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-6 py-3 rounded-lg transition duration-200 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                </svg>
                                Processed Orders
                            </a>
                            <a href="#delivered-orders" class="bg-green-100 hover:bg-green-200 text-green-700 font-semibold px-6 py-3 rounded-lg transition duration-200 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                Delivered Orders
                            </a>
                            <a href="#refunded-orders" class="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-6 py-3 rounded-lg transition duration-200 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/>
                                </svg>
                                Refunded Orders
                            </a>
                        </div>

                        <!-- Pending Orders Table -->
                        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" id="pending-orders">
                            <div class="bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-6">
                                <h3 class="text-2xl font-bold text-white flex items-center">
                                    <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Pending Orders
                                </h3>
                                <p class="text-orange-100 mt-1">Orders awaiting processing</p>
                            </div>

                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead class="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        @foreach($orders->where('status', 'pending') as $order)
                                        <tr class="hover:bg-gray-50 transition duration-200">
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="bg-orange-100 p-2 rounded-lg mr-3">
                                                        <svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                                                        </svg>
                                                    </div>
                                                    <span class="text-sm font-bold text-gray-900">#{{ $order->id }}</span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm font-semibold text-gray-900">{{ $order->name }}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm font-bold text-gray-900">
                                                    Nrs {{ number_format($order->total, 2) }}
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <form action="{{ route('orders.process', $order->id) }}" method="POST">
                                                    @csrf
                                                    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200 flex items-center">
                                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                                        </svg>
                                                        Process
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Processed Orders Table -->
                        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" id="processed-orders">
                            <div class="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-6">
                                <h3 class="text-2xl font-bold text-white flex items-center">
                                    <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                    </svg>
                                    Processed Orders
                                </h3>
                                <p class="text-blue-100 mt-1">Orders ready for delivery or refund</p>
                            </div>

                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead class="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
                                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        @foreach($orders->where('status', 'processed') as $order)
                                        <tr class="hover:bg-gray-50 transition duration-200">
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="bg-blue-100 p-2 rounded-lg mr-3">
                                                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                                                        </svg>
                                                    </div>
                                                    <span class="text-sm font-bold text-gray-900">#{{ $order->id }}</span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm font-semibold text-gray-900">{{ $order->name }}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm font-bold text-gray-900">
                                                    Nrs {{ number_format($order->total, 2) }}
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex space-x-2">
                                                    <form action="{{ route('orders.deliver', $order->id) }}" method="POST" style="display:inline">
                                                        @csrf
                                                        <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 flex items-center">
                                                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                                            </svg>
                                                            Deliver
                                                        </button>
                                                    </form>
                                                    <form action="{{ route('orders.refund', $order->id) }}" method="POST" style="display:inline">
                                                        @csrf
                                                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 flex items-center">
                                                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                                            </svg>
                                                            Out of Stock
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Delivered Orders -->
                        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" id="delivered-orders">
                            <div class="bg-gradient-to-r from-green-500 to-emerald-400 px-8 py-6">
                                <h3 class="text-2xl font-bold text-white flex items-center">
                                    <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Delivered Orders
                                </h3>
                                <p class="text-green-100 mt-1">Successfully delivered orders</p>
                            </div>

                            <div class="p-8">
                                @if($orders->where('status', 'delivered')->isEmpty())
                                    <p class="text-gray-500 text-center py-8">No delivered orders yet.</p>
                                @else
                                    <ul class="space-y-3">
                                        @foreach($orders->where('status', 'delivered') as $order)
                                            <li class="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                                                <div class="flex items-center">
                                                    <div class="bg-green-100 p-2 rounded-lg mr-4">
                                                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <span class="text-sm font-bold text-gray-900">#{{ $order->id }}</span>
                                                        <span class="text-sm text-gray-600 ml-3">{{ $order->name }}</span>
                                                    </div>
                                                </div>
                                                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                    Delivered
                                                </span>
                                            </li>
                                        @endforeach
                                    </ul>
                                @endif
                            </div>
                        </div>

                        <!-- Refunded Orders -->
                        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" id="refunded-orders">
                            <div class="bg-gradient-to-r from-red-500 to-rose-400 px-8 py-6">
                                <h3 class="text-2xl font-bold text-white flex items-center">
                                    <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/>
                                    </svg>
                                    Refunded Orders
                                </h3>
                                <p class="text-red-100 mt-1">Orders refunded due to out of stock</p>
                            </div>

                            <div class="p-8">
                                @if($orders->where('status', 'refunded')->isEmpty())
                                    <p class="text-gray-500 text-center py-8">No refunded orders yet.</p>
                                @else
                                    <ul class="space-y-3">
                                        @foreach($orders->where('status', 'refunded') as $order)
                                            <li class="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                                                <div class="flex items-center">
                                                    <div class="bg-red-100 p-2 rounded-lg mr-4">
                                                        <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <span class="text-sm font-bold text-gray-900">#{{ $order->id }}</span>
                                                        <span class="text-sm text-gray-600 ml-3">{{ $order->name }}</span>
                                                    </div>
                                                </div>
                                                <span class="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                    Refunded
                                                </span>
                                            </li>
                                        @endforeach
                                    </ul>
                                @endif
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <script>
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>