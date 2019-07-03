@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

<div class="container">
    <h2 class="h2">Manufacturers</h2>

    <div class="line-block bg-color-blue buttons"></div>

    <div id="manufacturers" class="line-block table-container">

    </div>

    <div class="line-block bg-color-blue buttons"></div>
</div>

<div id="adddialog" class="dialog" title="Add Manufacturer"></div>
<div id="editdialog" class="dialog" title="Edit Manufacturer"></div>
<div id="deldialog" class="dialog" title="Del Manufacturer"></div>

<script src="{{asset('js/manufactures/manufactures.js')}}"></script>

@endsection

@section('footer')
    @include('Footer/footer')
@endsection