<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $categoryId = $request->query('category');
        $categories = Category::all();

        $postsQuery = Post::with('category')->latest();

        // Si une catégorie est sélectionnée, filtre les posts
        if ($categoryId) {
            $postsQuery->where('category_id', $categoryId);
        }

        $posts = $postsQuery->paginate(5);

        return Inertia::render('blog', [
            'posts' => $posts,
            'categories' => $categories,
            'currentCategory' => $categoryId,
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

