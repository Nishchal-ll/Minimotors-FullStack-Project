<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function show()
    {
        return view('checkout'); // checkout.blade.php
    }

    public function process(Request $request)
    {
        // Your checkout processing logic here (payment, order saving, etc.)
        return redirect()->route('user.dashboard')->with('success', 'Order placed successfully!');
    }
}
