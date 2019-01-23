@extends('layout')

@section('header')
@include('Header/header')
@endsection

@section('content')

<div class="container">
    Materials
</div>

<script src="{{asset('js/materials/materials.js')}}"></script>

@endsection

@section('footer')
@include('Footer/footer')
@endsection