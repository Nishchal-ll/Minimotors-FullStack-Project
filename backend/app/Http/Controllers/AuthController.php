<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function showRegister()
    {
        return view('auth.register');
    }

    public function showLogin()
    {
        return view('auth.login');
    }
    
    public function Register(Request $request)
    {
        $validatedData=$request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Hash the password before saving
        $validatedData['password'] = bcrypt($validatedData['password']);

        $user = User::create($validatedData);
        return redirect()->route('dashboard');
    }
    public function Login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (auth()->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect('http://localhost:5173/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');

    }


public function showUserLogin()
{
    return view('auth.user_login');
}

public function showUserRegister()
{
    return view('auth.user_register');
}

public function userRegister(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8|confirmed',
    ]);

    $validatedData['password'] = bcrypt($validatedData['password']);

    $user = User::create($validatedData);

    auth()->login($user);

    return redirect()->intended('user/dashboard'); // redirect after signup
}

public function userLogin(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    if (auth()->attempt($credentials)) {
        $request->session()->regenerate();
        return redirect()->intended('user/dashboard');
    }

    return back()->withErrors([
        'email' => 'Invalid credentials',
    ]);
}
}