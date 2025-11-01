<?php

// app/Http/Controllers/CartController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    public function getCart($email)
    {
        $cart = Cart::where('email', $email)->get();
        return response()->json(['cart' => $cart]);
    }

    public function addToCart(Request $request)
    {
        $cartItem = Cart::updateOrCreate(
            ['email' => $request->email, 'product_id' => $request->product_id],
            ['quantity' => \DB::raw('quantity + ' . $request->quantity)]
        );

        return response()->json(['message' => 'Item added to cart', 'cart' => $cartItem]);
    }

    public function removeFromCart(Request $request)
    {
        Cart::where('email', $request->email)
            ->where('product_id', $request->product_id)
            ->delete();

        return response()->json(['message' => 'Item removed']);
    }
}
