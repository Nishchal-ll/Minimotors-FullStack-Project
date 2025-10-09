<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('admin/register', [AuthController::class,'showRegister'])->name('show.register');
Route::get('admin/login', [AuthController::class,'showLogin'])->name('show.login');

Route::post('admin/register', [AuthController::class,'Register'])->name('register');
Route::post('admin/login', [AuthController::class,'Login'])->name('login');

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::post('/logout', function () {
    Auth::logout();
    return redirect('admin/login');
})->name('logout');

Route::get('/dashboard', [ItemController::class, 'index'])->name('dashboard');
Route::get('/items/create', [ItemController::class, 'create'])->name('items.create');
Route::post('/items', [ItemController::class, 'store'])->name('items.store');
Route::get('/items/{id}/edit', [ItemController::class, 'edit'])->name('items.edit');
Route::put('/items/{id}', [ItemController::class, 'update'])->name('items.update');
Route::delete('/items/{id}', [ItemController::class, 'destroy'])->name('items.destroy');

Route::get('api/items', [ItemController::class, 'apiIndex']);

Route::middleware(['auth'])->group(function () {
    Route::get('/checkout', [CheckoutController::class, 'show'])->name('checkout');
    Route::post('/checkout', [CheckoutController::class, 'process'])->name('checkout.process');
});

Route::get('/register', [ClientAuthController::class, 'showRegister'])->name('client.register');
Route::post('/register', [ClientAuthController::class, 'register']);

Route::get('/login', [ClientAuthController::class, 'showLogin'])->name('client.login');
Route::post('/login', [ClientAuthController::class, 'login']);

Route::middleware('auth:client')->group(function() {
    Route::get('/account', [ClientAuthController::class, 'account'])->name('client.account');
    Route::post('/logout', [ClientAuthController::class, 'logout'])->name('client.logout');
});