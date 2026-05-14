<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthRoleSeeder extends Seeder
{
    /**
     * Seed test users with explicit roles for runtime auth checks.
     */
    public function run(): void
    {
        $now = now();
        $columns = Schema::getColumnListing('users');

        $ownerPayload = [
            'name' => 'Owner Test',
            'password' => Hash::make('password'),
            'updated_at' => $now,
        ];

        $kasirPayload = [
            'name' => 'Kasir Test',
            'password' => Hash::make('password'),
            'updated_at' => $now,
        ];

        if (in_array('phone', $columns, true)) {
            $ownerPayload['phone'] = '081111111111';
            $kasirPayload['phone'] = '082222222222';
        }

        if (in_array('is_active', $columns, true)) {
            $ownerPayload['is_active'] = true;
            $kasirPayload['is_active'] = true;
        }

        if (in_array('role', $columns, true)) {
            $ownerPayload['role'] = 'owner';
            $kasirPayload['role'] = 'kasir';
        }

        if (in_array('business_id', $columns, true)) {
            $ownerPayload['business_id'] = null;
            $kasirPayload['business_id'] = null;
        }

        if (in_array('created_at', $columns, true)) {
            $ownerPayload['created_at'] = $now;
            $kasirPayload['created_at'] = $now;
        }

        DB::table('users')->updateOrInsert(
            ['email' => 'owner@test.com'],
            $ownerPayload
        );

        DB::table('users')->updateOrInsert(
            ['email' => 'kasir@test.com'],
            $kasirPayload
        );
    }
}
