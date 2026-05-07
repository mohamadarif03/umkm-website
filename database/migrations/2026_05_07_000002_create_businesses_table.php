<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tabel: businesses — Setiap bisnis milik satu owner (multi-bisnis per owner)
     */
    public function up(): void
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner_id')
                  ->constrained('owners')
                  ->cascadeOnDelete();
            $table->string('name', 200);                            // "Kedai Es Teh Manis"
            $table->string('category', 100)->default('F&B');        // bisa dikembangkan ke ENUM
            $table->string('city', 100);
            $table->text('address')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('owner_id', 'idx_business_owner');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businesses');
    }
};
