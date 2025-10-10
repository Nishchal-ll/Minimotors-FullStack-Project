<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ClientAuthController extends Controller
{
    // Client Registration
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // Create client
        $client = Client::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Create token
        $token = $client->createToken('client-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user'  => $client
        ], 201);
    }

    // Client Login
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $client = Client::where('email', $data['email'])->first();

        if (!$client || !Hash::check($data['password'], $client->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $client->createToken('client-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user'  => $client
        ]);
    }

    // Optional: Get current authenticated client
    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    // Optional: Logout (delete current token)
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
