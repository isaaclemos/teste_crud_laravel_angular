<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 100; $i++) {
            Product::create([
                'name' => "product $i",
                'description' => "This is product $i",
                'price' => rand(10, 100) + (rand(0,99)/100),
                'stock' => rand(10, 100),
            ]);
    };
}
}
