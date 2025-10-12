<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class GoogleController extends Controller
{
    /**
     * Redirect the user to the Google authentication page.
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from Google and log the user in.
     */
    public function handleGoogleCallback()
    {
        try {
            // 1. Get Google user data (using stateless to prevent session issues)
            $googleUser = Socialite::driver('google')->stateless()->user();
            
            // **NOTE:** The previous dd($googleUser); statement has been removed.

            // 2. Find or create the user based on their Google ID
            $user = User::updateOrCreate(
                [
                    'google_id' => $googleUser->id,
                ],
                [
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'avatar' => $googleUser->avatar,
                    'google_email' => $googleUser->email,
                    // Set a secure, random password, which is required by the User model/database
                    'password' => Hash::make(Str::random(16)),
                ]
            );

            // **NOTE:** The previous dd($user); statement has been removed.

            // 3. Log the user in
            Auth::login($user);

            // 4. Redirect to dashboard
            return redirect()->route('dashboard');

        } catch (\Exception $e) {
            // Log the error for better debugging in production
            Log::error('Google login failed: ' . $e->getMessage());

            // Redirect to the login page with a friendly error message
            return redirect()->route('login')->with('error', 'Google authentication failed. Please try again.');
        }
    }
}
