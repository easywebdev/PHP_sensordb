@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

    <div class="home container">
        <h2 class="h2">
            Home
        </h2>

        <div class="line-block line-block--wrap line-block--justify filters"></div>

        <div class="line-block page-settings">
            <div class="page-settings__item"><label class="label" for="items-count">Samples in Page:</label><select id="items-count" class="items-count__items"></select></div>
            <div class="page-settings__item">
                <label class="label" for="iunits">Units I:</label><select id="iunits" class="units__item iunits"></select>
                <label class="label" for="vunits">Units V:</label><select id="vunits" class="units__item vunits"></select>
            </div>
            <div class="page-settings__item">
                <label class="label" for="order-by">Order By:</label><select id="order-by" class="order-by__items"></select>
                <label class="label" for="reverce">Reverce:</label><input id="reverce" class="reverce" type="checkbox" />
            </div>
            <div class="page-settings__item manage-buttons"></div>
        </div>

        <div class="line-block page-inform">
            <div class="pagination"></div>
            <div class="page-info"></div>
        </div>

        <div class="line-block table-container">
            <table class="table" id="edit"></table>
        </div>

        <div class="line-block page-inform">
            <div class="pagination"></div>
            <div class="page-info"></div>
        </div>

        <div class="line-block page-settings">
            <div class="page-settings__item"><label class="label" for="items-count">Samples in Page:</label><select id="items-count" class="items-count__items"></select></div>
            <div class="page-settings__item">
                <label class="label" for="iunits">Units I:</label><select id="iunits" class="units__item iunits"></select>
                <label class="label" for="vunits">Units V:</label><select id="vunits" class="units__item vunits"></select>
            </div>
            <div class="page-settings__item">
                <label class="label" for="order-by">Order By:</label><select id="order-by" class="order-by__items"></select>
                <label class="label" for="reverce">Reverce:</label><input id="reverce" class="reverce" type="checkbox" />
            </div>
            <div class="page-settings__item manage-buttons"></div>
        </div>

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
