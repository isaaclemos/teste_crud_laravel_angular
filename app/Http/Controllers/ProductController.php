<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductValidationRequest;
use App\Models\Product;


class ProductController extends Controller
{
    //
    public function index()
    {
        return Product::all();
    }

    public function store(ProductValidationRequest $request)
    {

        $product = Product::create($request->validated());
        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(ProductValidationRequest $request, Product $product)
    {
        $product->update($request->validated());
        return response()->json($product, 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}