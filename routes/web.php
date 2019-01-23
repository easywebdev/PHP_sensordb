<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Home/home');
});

Route::get('authorization', function () {
    return view('Authorization/index');
});

Route::get('materials', function () {
    return view('Materials/materials');
});

Route::get('manufactures', function () {
    return view('Manufactures/manufactures');
});

Route::get('users', function () {
    return view('Users/users');
});

// Test Routes
Route::get('test', function () {
    return view('test/test');
});


