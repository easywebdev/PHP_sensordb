@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

    <div class="home container">
        Home
    </div>

    <script src="{{asset('js/home/home.js')}}"></script>

@endsection

@section('footer')
    @include('Footer/footer')
@endsection
