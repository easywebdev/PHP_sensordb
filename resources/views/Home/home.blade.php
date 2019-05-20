@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

    <div class="home container">
        <h2 class="h2">
            Home
        </h2>

        <div class="line-block filters"></div>

        <div class="line-block">
            <div class="pagination"></div>
            <div class="page-info"></div>
            <div class="items-count">Samples in Page:<select class="items-count__items"></select></div>
            <div class="units">
                Units I:<select class="units__item iunits"></select>
                Units V:<select class="units__item vunits"></select>
            </div>
            <div class="order-by">Order By:
                <select class="order-by__items"></select>
                Reverce: <input class="reverce" type="checkbox" />
            </div>
            <div class="manage-buttons"></div>
        </div>

        <div class="table-container">
            <table class="table" id="edit"></table>
        </div>

        <div class="line-block">
            <div class="pagination"></div>
            <div class="page-info"></div>
            <div class="items-count">Samples in Page:<select class="items-count__items"></select></div>
            <div class="units">
                Units I:<select class="units__item iunits"></select>
                Units V:<select class="units__item vunits"></select>
            </div>
            <div class="order-by">Order By:
                <select class="order-by__items"></select>
                Reverce: <input class="reverce" type="checkbox" />
            </div>
            <div class="manage-buttons"></div>
        </div>

        <a class="del" href="#" onclick="removeRow(this)">xxxxx</a>

        <div id="adddialog" class="dialog" title="Add Samples"></div>
        <div id="deldialog" class="dialog" title="Del Samples">
            Are You sure You want to delete selected samples?
        </div>


    </div>

    <script src="{{asset('js/home/home.js')}}"></script>
    <script src="{{asset('js/common/jquery.datetimepicker.full.js')}}"></script>

@endsection

@section('footer')
    @include('Footer/footer')
@endsection
