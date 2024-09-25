<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log; // Import the logging facade

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            // Validate the incoming request
            $validated = $request->validate([
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            // Log the validated request data (excluding the password for security reasons)
            Log::info('Registration request data:', [
                'email' => $validated['email'],
            ]);

            // Create the user
            $user = User::create([
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']), // Hash the password
            ]);

            // Log successful user registration
            Log::info('User registered successfully', ['user_id' => $user->id]);

            // Return a response
            return response()->json([
                'message' => 'User registered successfully!',
                'user' => $user,
            ], 201);

        } catch (Exception $e) {
            // Log the exception message
            Log::error('Error during registration:', ['error' => $e->getMessage()]);

            // Return a user-friendly error message
            return response()->json([
                'message' => $e->getMessage(),
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
