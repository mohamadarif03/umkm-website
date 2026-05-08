<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->string('name', 200);                            // "Es Teh Manis"
            $table->string('category', 100)->nullable();            // "Minuman Dingin", "Makanan", dll
            $table->string('unit', 50)->default('cup');             // cup, porsi, loyang, dll
            $table->decimal('selling_price', 12, 2);                // harga jual per unit
            $table->decimal('cogs', 12, 2)->default(0);             // cost of goods sold per unit
            $table->decimal('margin_pct', 5, 2)
                  ->nullable()
                  ->storedAs('CASE WHEN selling_price > 0 THEN ROUND(((selling_price - cogs) / selling_price) * 100, 2) ELSE 0 END');
            $table->boolean('is_seasonal')->default(false);         // menu musiman
            $table->boolean('is_active')->default(true);
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index('business_id', 'idx_menu_business');
            $table->index(['business_id', 'is_active'], 'idx_menu_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
