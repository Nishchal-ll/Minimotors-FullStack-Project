<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    // Show admin dashboard with all items
    public function index()
    {
        $items = Item::all();
        return view('dashboard', compact('items'));
    }

    // Show create item form
    public function create()
    {
        return view('items.create');
    }

    // Store new item
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'price' => 'required|integer',
            'image' => 'nullable|image',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $data['image'] = $path;
        }

        Item::create($data);
        return redirect()->route('dashboard')->with('success', 'Item added!');
    }

    // Show edit form
   public function edit($id)
{
    $item = Item::findOrFail($id);
    return view('items.edit', compact('item'));
}

    // Update item
   public function update(Request $request, $id)
{
    $item = Item::findOrFail($id);

    $request->validate([
        'name' => 'required',
        'price' => 'required|numeric',
        'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
    ]);

    // if a new image is uploaded
    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('images', 'public');
        $item->image = $path;
    }

    // update other fields
    $item->name = $request->name;
    $item->price = $request->price;

    $item->save();

    return redirect()->route('dashboard')->with('success', 'Item updated successfully!');
}

    // Delete item
   public function destroy($id)
{
    $item = Item::findOrFail($id);
    $item->delete();

    return redirect()->route('dashboard')->with('success', 'Item deleted successfully!');
}

public function apiIndex()
{
    return response()->json(Item::all());
}

}
