<?php

use App\Http\Controllers\Web\AuthController as WebAuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('landing');

Route::middleware('guest')->group(function () {
    Route::get('/register', [WebAuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [WebAuthController::class, 'register']);

    Route::get('/login', [WebAuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [WebAuthController::class, 'login']);
});

Route::post('/logout', [WebAuthController::class, 'logout'])->middleware('auth')->name('logout');

Route::prefix('/dashboard')->middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/produk', function () {
        return Inertia::render('Products');
    })->name('products');

    Route::get('/insight', function () {
        return Inertia::render('Insights');
    })->name('insights');

    Route::get('/pengaturan-bisnis', function () {
        return Inertia::render('BusinessSettings');
    })->name('business-settings');

    Route::get('/profile', function () {
        return Inertia::render('Profile');
    })->name('profile');
});
