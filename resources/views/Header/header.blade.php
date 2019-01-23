<div class="header-top container">
    <div class="header-top__item logo">
        Logo
    </div>

    <div class="header-top__item header-text">
        MSL
    </div>

    <div class="header-top__item header-manage">
        <div id="username" class="">User:</div>
        <div id="userrole" class="">Role:</div>
        <div>
            <a class="btn" href="javascript:resetUserPasswordForm()">Change password</a>
        </div>
        <div>
            <a class="btn" href="javascript:logOut('token')">Sign Out</a>
        </div>
    </div>
</div>

<nav class="nav container"></nav>

<div id="resetpassword" class="dialog" title="Reset Password"></div>

<script src="{{asset('js/common/dialogue.js')}}"></script>
<script src="{{asset('js/header/header.js')}}"></script>