<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('prediction_factors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prediction_id')
                  ->constrained('predictions')
                  ->cascadeOnDelete();
            $table->enum('factor_type', [
                'weather',
                'holiday',
                'local_event',
                'trend',
                'historical',
            ]);
            $table->string('description', 300);                     // "Diprediksi hujan 5 hari"
            $table->decimal('impact_pct', 6, 2)->default(0);        // dampak dalam persen, negatif = turun
            $table->timestamp('created_at')->useCurrent();

            $table->index('prediction_id', 'idx_pred_factor');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prediction_factors');
    }
};
