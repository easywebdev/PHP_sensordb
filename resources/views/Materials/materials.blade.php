@extends('layout')

@section('header')
@include('Header/header')
@endsection

@section('content')

<div class="container">
    <h2 class="h2">Materials</h2>

    <div class="line-block bg-color-blue">
        <a class="btn" href="javascript:addMaterialsForm()">Add</a>
    </div>

    <div id="materials" class="line-block table-container">

    </div>

    <div class="line-block bg-color-blue">
        <a class="btn" href="javascript:addMaterialsForm()">Add</a>
    </div>
</div>

<div id="adddialog" class="dialog" title="Add Material"></div>
<div id="editdialog" class="dialog" title="Edit Materia"></div>
<div id="deldialog" class="dialog" title="Del Material"></div>

<script src="{{asset('js/materials/materials.js')}}"></script>

@endsection

@section('footer')
@include('Footer/footer')
@endsection