<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('predictions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->enum('period_type', ['weekly', 'monthly']);
            $table->date('period_start');
            $table->date('period_end');
            $table->decimal('predicted_revenue_min', 14, 2)->default(0);    // estimasi minimum
            $table->decimal('predicted_revenue_max', 14, 2)->default(0);    // estimasi maksimum
            $table->decimal('predicted_revenue', 14, 2)->default(0);        // estimasi tengah
            $table->decimal('actual_revenue', 14, 2)->nullable();           // diisi setelah periode selesai
            $table->decimal('accuracy_pct', 5, 2)->nullable();              // diisi setelah periode selesai
            $table->string('model_version', 50)->nullable();                // versi model AI yang digunakan
            $table->timestamp('generated_at')->useCurrent();

            $table->index(
                ['business_id', 'period_type', 'period_start'],
                'idx_prediction_period'
            );
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('predictions');
    }
};
