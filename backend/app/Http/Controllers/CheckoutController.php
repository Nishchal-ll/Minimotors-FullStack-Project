<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function show()
    {
        // User is guaranteed to be logged in here (because of 'auth' middleware)
        return view('checkout', ['user' => Auth::user()]);
    }

    public function process(Request $request)
    {
        // Handle order saving here later
        return redirect()->route('checkout')->with('success', 'Checkout processed successfully!');
    }
}
