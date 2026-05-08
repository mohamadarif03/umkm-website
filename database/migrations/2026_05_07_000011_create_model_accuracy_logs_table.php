<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('model_accuracy_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->char('year_month', 7);                          // format: "2026-05"
            $table->integer('total_predictions')->default(0);
            $table->decimal('avg_accuracy_pct', 5, 2)->nullable();  // rata-rata akurasi bulan ini
            $table->decimal('best_accuracy_pct', 5, 2)->nullable(); // akurasi terbaik bulan ini
            $table->decimal('worst_accuracy_pct', 5, 2)->nullable();// akurasi terburuk bulan ini
            $table->enum('accuracy_badge', ['pemula', 'berkembang', 'andal'])
                  ->default('pemula');
            $table->integer('data_points_used')->default(0);        // jumlah hari data yang dipakai training
            $table->timestamp('calculated_at')->useCurrent();

            $table->unique(['business_id', 'year_month'], 'uq_accuracy');
            $table->index(['business_id', 'year_month'], 'idx_accuracy_month');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('model_accuracy_logs');
    }
};
