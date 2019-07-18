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

Route::get('series', function () {
    return view('Series/series');
});

Route::get('users', function () {
    return view('Users/users');
});

// Test Routes
Route::get('test', function () {
    return view('test/test');
});

Route::get('date', function () {
    $my_date = mktime (00, 00, 0, 00, 00, 0001);
    echo date("Y-m-d H:i:s", $my_date);
});

Route::get('dt', function () {
    $strDate = '01.07.2019 03:23:45';
    $dt = strtotime($strDate);
    $date = date('Y-m-d H:i:s', $dt);
    echo 'Date:<br />';
    echo $strDate . '<br />';
    echo $date;
});


