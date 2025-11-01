<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;

class UserCheckoutController extends Controller
{
    // Save client info during checkout
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients',
            'password' => 'required|min:6',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:500',
        ]);

        $client = Client::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'address' => $request->address,
        ]);

        return response()->json([
            'message' => 'Client information saved successfully!',
            'client' => $client
        ]);
    }
}
