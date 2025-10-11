<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['name', 'email', 'phone', 'address', 'items', 'total'];

    protected $casts = [
        'items' => 'array', // Laravel automatically converts JSON to array
    ];
}
