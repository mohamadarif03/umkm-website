<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PredikAISeeder extends Seeder
{
    /**
     * Seed data awal PredikAI.
     */
    public function run(): void
    {
        // 1. Owner
        $ownerId = DB::table('owners')->insertGetId([
            'name'          => 'Budi Santoso',
            'phone'         => '08123456789',
            'email'         => 'budi@email.com',
            'password_hash' => Hash::make('password'),
            'is_active'     => true,
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);

        // 2. Businesses
        $business1Id = DB::table('businesses')->insertGetId([
            'owner_id'  => $ownerId,
            'name'      => 'Kedai Es Teh Manis',
            'category'  => 'F&B',
            'city'      => 'Malang',
            'address'   => 'Jl. Soekarno Hatta No. 12',
            'latitude'  => -7.9666,
            'longitude' => 112.6326,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $business2Id = DB::table('businesses')->insertGetId([
            'owner_id'  => $ownerId,
            'name'      => 'Es Teh Manis Cabang Batu',
            'category'  => 'F&B',
            'city'      => 'Batu',
            'address'   => 'Jl. Diponegoro No. 5',
            'latitude'  => -7.8715,
            'longitude' => 112.5271,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 3. Menu Items
        DB::table('menu_items')->insert([
            [
                'business_id'   => $business1Id,
                'name'          => 'Es Teh Manis',
                'category'      => 'Minuman Dingin',
                'unit'          => 'cup',
                'selling_price' => 5000,
                'cogs'          => 1500,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'business_id'   => $business1Id,
                'name'          => 'Es Jeruk',
                'category'      => 'Minuman Dingin',
                'unit'          => 'cup',
                'selling_price' => 7000,
                'cogs'          => 2000,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'business_id'   => $business1Id,
                'name'          => 'Teh Hangat',
                'category'      => 'Minuman Panas',
                'unit'          => 'cup',
                'selling_price' => 5000,
                'cogs'          => 1200,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'business_id'   => $business1Id,
                'name'          => 'Es Teh Susu',
                'category'      => 'Minuman Dingin',
                'unit'          => 'cup',
                'selling_price' => 8000,
                'cogs'          => 2500,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'business_id'   => $business1Id,
                'name'          => 'Jeruk Hangat',
                'category'      => 'Minuman Panas',
                'unit'          => 'cup',
                'selling_price' => 6000,
                'cogs'          => 1800,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'business_id'   => $business2Id,
                'name'          => 'Es Teh Manis',
                'category'      => 'Minuman Dingin',
                'unit'          => 'cup',
                'selling_price' => 5000,
                'cogs'          => 1500,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'business_id'   => $business2Id,
                'name'          => 'Teh Hangat',
                'category'      => 'Minuman Panas',
                'unit'          => 'cup',
                'selling_price' => 5000,
                'cogs'          => 1200,
                'is_seasonal'   => false,
                'is_active'     => true,
                'notes'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
        ]);

        // 4. Notification Settings
        DB::table('notification_settings')->insert([
            [
                'business_id'          => $business1Id,
                'channel_whatsapp'     => true,
                'channel_push'         => true,
                'channel_email'        => false,
                'daily_recommend_time' => '06:00:00',
                'alert_threshold_pct'  => 15.00,
                'remind_if_no_input_days' => 2,
                'is_active'            => true,
                'updated_at'           => now(),
            ],
            [
                'business_id'          => $business2Id,
                'channel_whatsapp'     => true,
                'channel_push'         => false,
                'channel_email'        => false,
                'daily_recommend_time' => '06:00:00',
                'alert_threshold_pct'  => 20.00,
                'remind_if_no_input_days' => 2,
                'is_active'            => true,
                'updated_at'           => now(),
            ],
        ]);
    }
}
