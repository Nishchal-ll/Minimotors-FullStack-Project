<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class KhaltiController extends Controller
{
    public function initiate(Request $request)
    {
        $data = $request->only([
            'amount', 'purchase_order_id', 'purchase_order_name', 'return_url', 'website_url'
        ]);

        if (empty($data['amount']) || empty($data['purchase_order_id'])) {
            return response()->json(['error' => 'Missing required fields'], 400);
        }

        try {
            $resp = Http::withHeaders([
                'Authorization' => 'Key ' . env('KHALTI_SECRET_KEY'),
                'Content-Type' => 'application/json',
            ])->post('https://dev.khalti.com/api/v2/epayment/initiate/', $data);
             

            return response()->json($resp->json(), $resp->status());
        } catch (\Exception $e) {
            return response()->json(['error' => 'Payment initiation failed', 'details' => $e->getMessage()], 500);
        }
    }
}
