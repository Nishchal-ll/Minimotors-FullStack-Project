<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Mail\OrderConfirmationMail;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    // Admin dashboard orders list
    public function adminIndex()
    {
        $orders = Order::latest()->get();
        return view('admin.orders', compact('orders'));
    }

    // Store order and send confirmation mail
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
        $order = Order::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'items' => json_encode($request->items),
            'total' => $request->total,
        ]);

        // ✅ Send confirmation email
        try {
            Mail::to($order->email)->send(new OrderConfirmationMail($order));
        } catch (\Exception $e) {
            \Log::error('Mail sending failed: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Order placed successfully! Confirmation email sent.',
            'order' => $order
        ]);
    }

    // Mark order as completed
    public function markAsComplete($id)
    {
        $order = Order::findOrFail($id);
        $order->status = 'completed';
        $order->save();

        return redirect()->back()->with('success', 'Order marked as completed!');
    }
}
