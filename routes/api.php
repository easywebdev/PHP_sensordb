<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Test routes
Route::get('test', 'TestController@testGET');
Route::post('test', 'TestController@testPOST');
Route::put('test', 'TestController@testPUT');
Route::delete('test', 'TestController@testDELETE');

