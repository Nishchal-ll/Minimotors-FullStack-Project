<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;

class ClientAuthController extends Controller
{
    // Register
    public function register(Request $request)
    {
        $data = $request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|email|unique:clients,email',
            'password'=>'required|string|min:6|confirmed',
        ]);

        $client = Client::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>Hash::make($data['password']),
        ]);

        // Return client info only
        return response()->json(['user'=>$client],201);
    }

    // Login
    public function login(Request $request)
    {
        $data = $request->validate([
            'email'=>'required|email',
            'password'=>'required|string',
        ]);

        $client = Client::where('email',$data['email'])->first();

        if(!$client || !Hash::check($data['password'],$client->password)){
            return response()->json(['message'=>'Invalid credentials'],401);
        }

        // Return client info only
        return response()->json(['user'=>$client]);
    }
}
