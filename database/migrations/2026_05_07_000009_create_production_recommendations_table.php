<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('production_recommendations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->date('recommend_date');
            $table->text('summary_note')->nullable();               // ringkasan alasan rekomendasi hari ini
            $table->boolean('is_overridden')->default(false);       // apakah owner mengubah rekomendasi
            $table->text('override_reason')->nullable();            // alasan owner jika override
            $table->timestamp('generated_at')->useCurrent();

            $table->unique(['business_id', 'recommend_date'], 'uq_prod_rec');
            $table->index(['business_id', 'recommend_date'], 'idx_prod_rec_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('production_recommendations');
    }
};
