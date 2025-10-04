<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

Route::get('/register', [AuthController::class,'showRegister'])->name('show.register');
Route::get('/login', [AuthController::class,'showLogin'])->name('show.login');

Route::post('/register', [AuthController::class,'Register'])->name('register');
Route::post('/login', [AuthController::class,'Login'])->name('login');

Route::get('/dashboard', function () {
    return "<h1>Welcome to your Dashboard 🎉</h1>";
})->name('dashboard');

