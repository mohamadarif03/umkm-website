<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'business_id',
        'name',
        'category',
        'unit',
        'selling_price',
        'cogs',
        'is_seasonal',
        'is_active',
        'notes',
    ];

    protected $casts = [
        'selling_price' => 'decimal:2',
        'cogs' => 'decimal:2',
        'is_seasonal' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
