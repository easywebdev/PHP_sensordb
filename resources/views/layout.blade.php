<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="{{asset('css/reset.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/jquery-ui.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/site.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/jquery.datetimepicker.min.css')}}">

    <script src="{{asset('js/jquery-3.3.1.js')}}"></script>
    <script src="{{asset('js/jquery-ui.js')}}"></script>
    <script src="{{asset('js/config.js')}}"></script>
    <script src="{{asset('js/common/cookies.js')}}"></script>

    <title>Sensor DB</title>
</head>

<body>
    <header class="s-header">
        @yield('header')
    </header>

    <main class="s-main">
        @yield('content')
    </main>

    <footer class="s-footer">
        @yield('footer')
    </footer>
</body>
</html>