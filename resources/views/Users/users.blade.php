@extends('layout')

@section('header')
    @include('Header/header')
@endsection

@section('content')

    <div class="container">
        <h2 class="h2">
            Users:
        </h2>

        <div class="buttons-container">
            <a class="btn" href="javascript:addUserForm()">Add User</a>
        </div>

        <table class="table">
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Role</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </table>

        <div class="buttons-container">
            <a class="btn" href="javascript:addUserForm()">Add User</a>
        </div>
    </div>

    <div id="editdialog" class="dialog" title="Edit User"></div>
    <div id="adddialog" class="dialog" title="Add User"></div>
    <div id="deldialog" class="dialog" title="Del User"></div>

    <div id="tmp">

    </div>

    <script src="{{asset('js/users/users.js')}}"></script>

@endsection

@section('footer')
    @include('Footer/footer')
@endsection