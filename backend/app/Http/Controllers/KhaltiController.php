<?php

// app/Http/Controllers/KhaltiController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class KhaltiController extends Controller
{
    private $secretKey;

    public function __construct()
    {
        $this->secretKey = env('KHALTI_SECRET_KEY'); // secret key
    }

    // Initiate payment → return order info & redirect URL
    public function initiate(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'productName' => 'required|string',
        ]);

        $orderId = uniqid('order_');

        // Khalti checkout URL
        $khaltiCheckoutUrl = "https://khalti.com/api/v2/payment/initiate/";

        // Here, you could send a request to Khalti to initiate server-to-server if needed
        // But most of the time, frontend uses public key and widget
        // We'll just return info to frontend
        return response()->json([
            'orderId' => $orderId,
            'amount' => $request->amount,
            'productName' => $request->productName,
            'returnUrl' => url('/payment-callback'), // frontend will redirect here
        ]);
    }

    // Verify payment after frontend sends token
    public function verify(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'amount' => 'required|numeric',
        ]);

        $response = Http::withHeaders([
            'Authorization' => 'Key ' . $this->secretKey,
        ])->post('https://khalti.com/api/v2/payment/verify/', [
            'token' => $request->token,
            'amount' => $request->amount,
        ]);

        return response()->json($response->json());
    }
}
