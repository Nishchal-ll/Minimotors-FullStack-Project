<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{
    // Client login using orders table
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Find the order record by email
        $order = Order::where('email', $request->email)->first();

        if (!$order || !Hash::check($request->password, $order->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'message' => 'Login successful',
            'client' => $order // treat order as client info
        ]);
    }

    // Fetch orders associated with a client (by email)
    public function getOrders($id)
    {
        // Since ID is in orders table, fetch by order ID
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Client/order not found'], 404);
        }

        return response()->json([
            'orders' => [$order] // return as array for consistency
        ]);
    }

    // Dashboard info
    public function dashboard($clientId)
    {
        $order = Order::find($clientId);

        if (!$order) {
            return response()->json(['message' => 'Client/order not found'], 404);
        }

        return response()->json([
            'client' => $order,
            'orders' => [$order],
        ]);
    }
}
