<div class="header-top container">
    <div class="header-top__item">
        <img class="logo" src="images/msl_logo_0.png" alt="logo">
    </div>

    <div class="header-top__item header-text">
        <h1 class="h1">msl sensors data base</h1>
    </div>

    <div class="header-top__item header-manage">
        <div id="username" class="header-manage__text">User:</div>
        <div id="userrole" class="header-manage__text">Role:</div>
    </div>

    <div class="user-icon toggle">
        <i class="fas fa-user-cog"></i>
    </div>

    <ul class="user-menu">
        <li class="user-menu__item"><a class="user-menu-link" href="javascript:resetUserPasswordForm()">Change password</a></li>
        <li class="user-menu__item"><a class="user-menu-link" href="javascript:logOut('token')">Sign Out</a></li>
    </ul>
</div>

<nav class="nav container">
    <a href="#" class="nav__item hidden"><div class="fas fa-align-justify"></div></a>
</nav>

<div id="resetpassword" class="dialog" title="Reset Password"></div>

<script src="{{asset('js/common/dialogue.js')}}"></script>
<script src="{{asset('js/header/header.js')}}"></script>