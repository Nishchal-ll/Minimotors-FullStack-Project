<?php

namespace App\Http\Controllers;

use App\Models\SiteReview;
use Illuminate\Http\Request;

class SiteReviewController extends Controller
{
    // Submit a review
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'nullable|exists:users,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'review' => 'required|string|max:1000',
            'rating' => 'nullable|integer|min:1|max:5',
        ]);

        $review = SiteReview::create($data);

        return response()->json(['message' => 'Review submitted!', 'review' => $review]);
    }

    // Get all reviews
    public function index()
    {
        $reviews = SiteReview::with('user')->orderBy('created_at', 'desc')->get();
        return response()->json($reviews);
    }
}
