<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tabel: notification_settings — Preferensi notifikasi per bisnis
     */
    public function up(): void
    {
        Schema::create('notification_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')
                  ->unique()
                  ->constrained('businesses')
                  ->cascadeOnDelete();
            $table->boolean('channel_whatsapp')->default(true);
            $table->boolean('channel_push')->default(true);
            $table->boolean('channel_email')->default(false);
            $table->time('daily_recommend_time')->default('06:00:00');   // jam kirim rekomendasi pagi
            $table->decimal('alert_threshold_pct', 5, 2)->default(15.00);// % penurunan yang memicu alert
            $table->integer('remind_if_no_input_days')->default(2);     // ingatkan jika tidak input N hari
            $table->boolean('is_active')->default(true);
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_settings');
    }
};
