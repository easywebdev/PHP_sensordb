@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

    <div class="container">
        Manufactures
    </div>

    <script src="{{asset('js/manufactures/manufactures.js')}}"></script>

@endsection

@section('footer')
    @include('Footer/footer')
@endsection