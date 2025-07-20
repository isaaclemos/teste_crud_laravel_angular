<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = ['name', 'description', 'price', 'stock'];

    protected $hidden = ['created_at', 'updated_at'];

    protected $guarded = ['created_at', 'updated_at'];
}
