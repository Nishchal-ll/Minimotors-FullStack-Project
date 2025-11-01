<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order; // Using orders table
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $client = Order::where('email', $request->email)->first();

        if (!$client || !Hash::check($request->password, $client->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        return response()->json([
            'message' => 'Login successful',
            'client' => $client
        ]);
    }

public function register(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:orders,email',
        'password' => 'required|string|min:6',
        'phone' => 'nullable|string|max:20',
        'address' => 'nullable|string|max:255',
    ]);

    $validated['password'] = bcrypt($validated['password']);

    // Create a new record in the orders table (no items yet)
    \DB::table('orders')->insert([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => $validated['password'],
        'phone' => $validated['phone'] ?? '',
        'address' => $validated['address'] ?? '',
        'items' => json_encode([]),
        'total' => 0,
        'status' => 'none',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json([
        'message' => 'Registration successful',
        'success' => true
    ]);
}


}
