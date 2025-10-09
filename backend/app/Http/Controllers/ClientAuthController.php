<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Auth;

class ClientAuthController extends Controller
{
    // Show register page
    public function showRegister() {
        return view('client.register');
    }

    // Show login page
    public function showLogin() {
        return view('client.login');
    }

    // Register client
    public function register(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $client = Client::create($validated);

        Auth::guard('client')->login($client);

        return redirect()->route('client.account');
    }

    // Login client
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::guard('client')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('client.account');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    // Logout client
    public function logout(Request $request) {
        Auth::guard('client')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('client.login');
    }

public function account()
{
    if (!Auth::guard('client')->check()) {
        // User not logged in → show login/register forms
        return view('client.account', ['client' => null, 'orders' => null]);
    }

    $client = Auth::guard('client')->user();
    $orders = $client->orders()->get();

    return view('client.account', compact('client', 'orders'));
}

}
