<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
 public function adminIndex()
{
    // Fetch all orders
    $orders = Order::latest()->get();

    // Return the dashboard view and pass the orders
    return view('admin.orders', compact('orders'));
}
    public function store(Request $request)
    {
        // Validate request
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'address' => 'required|string',
            'items' => 'required|array',
            'total' => 'required|numeric',
        ]);

        // Create order
        $order = Order::create($request->all());

        return response()->json([
            'message' => 'Order placed successfully!',
            'order' => $order
        ]);
    }
public function markAsComplete($id)
{
    $order = Order::findOrFail($id);
    $order->status = 'completed';
    $order->save();

    return redirect()->back()->with('success', 'Order marked as completed!');
}
}
