<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailySaleItem extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'daily_sale_id',
        'menu_item_id',
        'qty_sold',
        'qty_produced',
        'qty_wasted',
        'revenue',
    ];

    protected $casts = [
        'qty_sold' => 'decimal:2',
        'qty_produced' => 'decimal:2',
        'qty_wasted' => 'decimal:2',
        'revenue' => 'decimal:2',
    ];

    public function dailySale()
    {
        return $this->belongsTo(DailySale::class);
    }

    public function menuItem()
    {
        return $this->belongsTo(MenuItem::class);
    }
}
