<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\KhaltiController;
use App\Http\Controllers\UserCheckoutController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\SiteReviewController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders', [OrderController::class, 'index']); // for admin dashboard


Route::post('/khalti/initiate', [KhaltiController::class, 'initiate']);
Route::post('/khalti/verify', [KhaltiController::class, 'verify']);


Route::post('/checkout/client', [UserCheckoutController::class, 'store']); // save client info in orders
Route::post('/client/login', [ClientController::class, 'login']);

// Route::get('/client/{id}/orders', [ClientController::class, 'getOrders']);
// Route::get('/client/{clientId}/dashboard', [ClientController::class, 'dashboard']);

Route::get('/orders', [OrderController::class, 'getOrdersByEmail']);

Route::post('/client/register', [ClientController::class, 'register']);

Route::post('/cart/clear', function (Request $request) {
    \App\Models\Cart::where('email', $request->email)->delete();
    return response()->json(['message' => 'Cart cleared']);
});


Route::post('/site-reviews', [SiteReviewController::class, 'store']);
Route::get('/site-reviews', [SiteReviewController::class, 'index']);

Route::post('/khalti/initiate', [KhaltiController::class, 'initiate']);