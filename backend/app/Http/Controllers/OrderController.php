<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // Store new order
    public function store(Request $request)
    {
        $request->validate([
            'user.name' => 'required|string',
            'user.email' => 'required|email',
            'user.phone' => 'required|string',
            'user.address' => 'required|string',
            'items' => 'required|array|min:1',
        ]);

        $order = Order::create([
            'name' => $request->user['name'],
            'email' => $request->user['email'],
            'phone' => $request->user['phone'],
            'address' => $request->user['address'],
            'total' => $request->total,
        ]);

        foreach ($request->items as $item) {
            $order->items()->create([
                'product_id' => $item['id'],
                'name' => $item['name'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
            ]);
        }

        return response()->json(['message' => 'Order placed successfully']);
    }

    // Fetch all orders
    public function index()
    {
        $orders = Order::with('items')->orderBy('created_at', 'desc')->get();
        return response()->json($orders);
    }
}
