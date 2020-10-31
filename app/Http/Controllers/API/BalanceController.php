<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Item;
use Illuminate\Http\Request;

class BalanceController extends Controller
{
    public function getBalance()
    {
        $items = Item::get();
        $plus = $items->where('action', 1)->sum('value');
        $minus = $items->where('action', 0)->sum('value');
        $balance = (int) $plus - (int) $minus;

        return response()->json(['balance' => $balance, 'plus' => $plus, 'minus' => $minus]);
    }
}
