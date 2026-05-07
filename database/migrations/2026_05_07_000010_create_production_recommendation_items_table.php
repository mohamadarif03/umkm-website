<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tabel: production_recommendation_items — Detail rekomendasi per menu
     */
    public function up(): void
    {
        Schema::create('production_recommendation_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('recommendation_id')
                  ->constrained('production_recommendations')
                  ->cascadeOnDelete();
            $table->foreignId('menu_item_id')
                  ->constrained('menu_items')
                  ->restrictOnDelete();
            $table->decimal('qty_recommended', 10, 2)->default(0);  // saran AI
            $table->decimal('qty_overridden', 10, 2)->nullable();   // jumlah yang owner putuskan (jika beda)
            $table->string('reasoning', 300)->nullable();           // "Cuaca hujan, kurangi es teh"

            $table->index('recommendation_id', 'idx_rec_item');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('production_recommendation_items');
    }
};
