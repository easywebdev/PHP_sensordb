<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="{{asset('css/reset.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/site.css')}}">

    <title>Sensor DB</title>
</head>

<body>
    <div class="s-authorization-container">
        <div class="authorization">
            <form id="authorization" class="auth-form">
                <div class="auth-form__item">
                    <label class="auth-form__label" for="name">Login:</label><input name="name" type="text" value="">
                </div>

                <div class="auth-form__item">
                    <label class="auth-form__label" for="name">Password:</label><input name="password" type="password" value="">
                </div>

                <div class="auth-form__item">
                    <a href="javascript:authData(authorization)">Sign In</a>
                </div>
            </form>
        </div>
    </div>

    <script src="{{asset('js/jquery-3.3.1.js')}}"></script>
    <script src="{{asset('js/jquery-ui.js')}}"></script>
    <script src="{{asset('js/config.js')}}"></script>
    <script src="{{asset('js/common/cookies.js')}}"></script>
    <script src="{{asset('js/auth/auth.js')}}"></script>
</body>
</html>