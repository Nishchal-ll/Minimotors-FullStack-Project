<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Hash;

class UserCheckoutController extends Controller
{
    // Save client info during checkout
    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email', // check uniqueness in orders table now  yesma unique hatako
        'password' => 'required|min:6',
        'phone' => 'required|string|max:20',
        'address' => 'required|string|max:500',
        'items' => 'required|array', // make sure cart items are sent as JSON
        'total' => 'required|numeric',
    ]);

    $order = Order::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'phone' => $request->phone,
        'address' => $request->address,
        'items' => $request->items,
        'total' => $request->total,
    ]);

    return response()->json([
        'message' => 'Order with client info saved successfully!',
        'order' => $order
    ]);
}
}
