<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tabel: owners — Satu akun bisa punya banyak bisnis
     */
    public function up(): void
    {
        Schema::create('owners', function (Blueprint $table) {
            $table->id();                                           // BIGINT UNSIGNED AUTO_INCREMENT
            $table->string('name', 150);
            $table->string('phone', 20)->unique();                  // dipakai untuk OTP & WhatsApp
            $table->string('email', 255)->unique()->nullable();
            $table->string('password_hash', 255);
            $table->boolean('is_active')->default(true);
            $table->timestamps();                                   // created_at & updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('owners');
    }
};
