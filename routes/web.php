<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/produk', function () {
    return Inertia::render('Products');
});

Route::get('/insight', function () {
    return Inertia::render('Insights');
});

Route::get('/pengaturan-bisnis', function () {
    return Inertia::render('BusinessSettings');
});

Route::get('/profile', function () {
    return Inertia::render('Profile');
});
