<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('alerts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->enum('alert_type', [
                'weather_warning',     
                'sales_drop',       
                'no_input_reminder',  
                'accuracy_drop',        
                'monthly_report',       
            ]);
            $table->string('title', 200);
            $table->text('message');
            $table->enum('channel', ['whatsapp', 'push', 'email']);
            $table->boolean('is_read')->default(false);
            $table->timestamp('sent_at')->useCurrent();

            $table->index(['business_id', 'is_read'], 'idx_alert_business');
            $table->index(['business_id', 'sent_at'], 'idx_alert_sent');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alerts');
    }
};
