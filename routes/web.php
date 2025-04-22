<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::prefix('blog')->name('blog.')->controller(BlogController::class)->group(function () {
    Route::get('/create', 'create')->name('create');
    Route::post('/create', 'store')->name('store');
    
    Route::get('/', 'index')->name('index');
    Route::get('/{post:slug}', 'show')->name('show');
    });


