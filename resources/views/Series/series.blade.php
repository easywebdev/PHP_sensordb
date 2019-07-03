@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

    <div class="container">
        <h2 class="h2">Series</h2>

        <div class="line-block bg-color-blue buttons"></div>

        <div id="series" class="line-block table-container">

        </div>

        <div class="line-block bg-color-blue buttons"></div>
    </div>

    <div id="adddialog" class="dialog" title="Add Series"></div>
    <div id="editdialog" class="dialog" title="Edit Series"></div>
    <div id="deldialog" class="dialog" title="Del Series"></div>

    <script src="{{asset('js/series/series.js')}}"></script>

@endsection

@section('footer')
    @include('Footer/footer')
@endsection