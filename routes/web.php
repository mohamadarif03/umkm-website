<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('landing');

Route::middleware('frontend.guest')->group(function () {
    Route::get('/register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');

    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
});

Route::prefix('/dashboard')->middleware('frontend.auth')->group(function () {
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
