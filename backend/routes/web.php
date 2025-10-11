<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\Authenticate;
use App\Http\Controllers\OrderController;


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
    return redirect()->route('show.login');
});

Route::get('admin/register', [AuthController::class,'showRegister'])->name('show.register');
Route::get('admin/login', [AuthController::class,'showLogin'])->name('show.login');

Route::post('admin/register', [AuthController::class,'register'])->name('register');
Route::post('admin/login', [AuthController::class,'login'])->name('login');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth')->name('dashboard');


Route::post('/logout', function (Request $request) {
    Auth::logout(); // log out the user

    $request->session()->invalidate();      // clear session
    $request->session()->regenerateToken(); // prevent CSRF issues

    return redirect()->route('show.login'); // redirect to login page
})->name('logout');

Route::get('/dashboard', [ItemController::class, 'index'])->name('dashboard');
Route::get('/items/create', [ItemController::class, 'create'])->name('items.create');
Route::post('/items', [ItemController::class, 'store'])->name('items.store');
Route::get('/items/{id}/edit', [ItemController::class, 'edit'])->name('items.edit');
Route::put('/items/{id}', [ItemController::class, 'update'])->name('items.update');
Route::delete('/items/{id}', [ItemController::class, 'destroy'])->name('items.destroy');

Route::get('api/items', [ItemController::class, 'apiIndex']);

Route::get('/orders', [OrderController::class, 'index']); // for admin dashboard
