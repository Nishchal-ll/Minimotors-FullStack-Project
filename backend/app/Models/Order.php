<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Order extends Model
{
    protected $fillable = ['name', 'email','password', 'phone', 'address', 'items', 'total','status'];

    

    protected $casts = [
        'items' => 'array', // Laravel automatically converts JSON to array
    ];

     public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
