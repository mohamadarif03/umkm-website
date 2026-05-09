<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/me', [AuthController::class, 'me']);

    Route::apiResource('businesses', BusinessController::class);
    
    // Menus
    Route::apiResource('businesses.menus', App\Http\Controllers\MenuItemController::class);
    Route::patch('businesses/{business}/menus/{menu}/toggle-status', [App\Http\Controllers\MenuItemController::class, 'toggleStatus']);
    Route::post('businesses/{business}/menus/import', [App\Http\Controllers\MenuItemController::class, 'import']);

    // Daily Sales
    Route::apiResource('businesses.daily-sales', App\Http\Controllers\DailySaleController::class)->except(['destroy']);
    Route::post('businesses/{business}/daily-sales/import', [App\Http\Controllers\DailySaleController::class, 'import']);
});
