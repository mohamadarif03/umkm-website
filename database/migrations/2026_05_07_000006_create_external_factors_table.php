<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('external_factors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->date('factor_date');
            $table->string('weather_condition', 100)->nullable();   // "Hujan Lebat", "Cerah", "Berawan"
            $table->decimal('rainfall_mm', 6, 2)->default(0);       // curah hujan dalam mm
            $table->decimal('temperature_c', 4, 1)->nullable();     // suhu rata-rata
            $table->boolean('is_national_holiday')->default(false);
            $table->string('holiday_name', 200)->nullable();
            $table->boolean('has_local_event')->default(false);
            $table->string('local_event_desc', 300)->nullable();
            $table->string('source', 100)->default('BMKG');
            $table->timestamp('created_at')->useCurrent();

            $table->unique(['business_id', 'factor_date'], 'uq_ext_factor');
            $table->index(['business_id', 'factor_date'], 'idx_ext_factor_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('external_factors');
    }
};
