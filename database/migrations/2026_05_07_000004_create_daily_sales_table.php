<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tabel: daily_sales — Header input penjualan harian (satu record per hari per bisnis)
     */
    public function up(): void
    {
        Schema::create('daily_sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->date('sale_date');
            $table->text('notes')->nullable();                      // catatan kejadian hari itu
            $table->enum('input_method', ['manual', 'ocr', 'pos_sync'])
                  ->default('manual');
            $table->timestamps();

            // 1 record per hari per bisnis
            $table->unique(['business_id', 'sale_date'], 'uq_daily_sale');
            $table->index(['business_id', 'sale_date'], 'idx_daily_sale_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daily_sales');
    }
};
