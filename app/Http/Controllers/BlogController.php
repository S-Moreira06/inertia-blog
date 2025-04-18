<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('blog', [
            'posts' => Post::with('category')->latest()->get(),
        ]);
    }
    public function show($slug)
    {
        $post = Post::where('slug', $slug)->with('category')->firstOrFail();

        return Inertia::render('post', [
            'post' => $post
        ]);
    }
}

