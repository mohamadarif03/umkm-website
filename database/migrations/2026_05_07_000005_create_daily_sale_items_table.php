<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tabel: daily_sale_items — Detail penjualan per menu per hari
     */
    public function up(): void
    {
        Schema::create('daily_sale_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('daily_sale_id')
                  ->constrained('daily_sales')
                  ->cascadeOnDelete();
            $table->foreignId('menu_item_id')
                  ->constrained('menu_items')
                  ->restrictOnDelete();
            $table->decimal('qty_sold', 10, 2)->default(0);         // jumlah terjual
            $table->decimal('qty_produced', 10, 2)->default(0);     // jumlah yang diproduksi hari itu
            $table->decimal('qty_wasted', 10, 2)->default(0);       // sisa/terbuang
            $table->decimal('revenue', 14, 2)->default(0);          // qty_sold * selling_price (disimpan, bukan generated)

            $table->index('daily_sale_id', 'idx_sale_item_daily');
            $table->index('menu_item_id', 'idx_sale_item_menu');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daily_sale_items');
    }
};
