<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{!! csrf_token() !!}" />

        <title>Test</title>

        <!-- Styles -->
        <link rel="stylesheet" href="{{asset('css/test.css')}}">
        <!---->

        <!-- Scripts -->
        <script src="{{asset('js/jquery-3.3.1.js')}}"></script>
        <script src="{{asset('js/jquery-ui.js')}}"></script>
        <!---->

    </head>

    <body>
        <div id="test">
            Test View
        </div>

        <div>
            <form method="POST">
                <input id="postform" name="a" type="text" value="test data">
            </form>
        </div>

        <div>
            <a href="javascript:col()">color</a><br/>
            <a href="javascript:getData()">GET data</a><br/>
            <a href="javascript:postData()">POST data</a><br/>
            <a href="javascript:putData()">PUT data</a><br/>
            <a href="javascript:formData()">FORM data</a><br/>
            <a href="javascript:deleteData()">DEL data</a><br/>
        </div>

        <div id="get"></div>
    </body>

    <script>
        function col() {
            $("#test").animate({
                backgroundColor: "#fff"
            });
        }

        function messageBox() {
            alert("Hello");
        }

        /**
         * AJAX request for backend server
         * GET
         */
        function getData() {
            $.ajax({
                type: 'GET',                                                                    // Method
                url: 'http://sensordb.loc/api/test',                                            // URL
                //contentType: 'json',
                //processData: false,
                success: function(data) {                                                       // Processing function
                    alert(JSON.stringify(data));
                    $('#get').html('a=' + data.a + '<br/>b=' + data.b + '<br/>c=' + data.c);
                }
            });
        }

        /**
         * AJAX responce to beckend server
         * POST
         */
        function postData() {
            $.ajax({
                url: 'http://sensordb.loc/api/test',
                type: 'POST',
                data: {"a": "good data"},
                success: function(answer) {
                    alert(JSON.stringify(answer));
                    $('#get').html('Answer=' + answer.Answer);
                }
            });
        }

        /**
         * AJAX responce to beckend server
         * PUT
         */
        function putData() {
            $.ajax({
                url: 'http://sensordb.loc/api/test',
                type: 'PUT',
                data: {"a": "good put data"},
                success: function(answer) {
                    alert(JSON.stringify(answer));
                    $('#get').html('Answer=' + answer.Answer);
                }
            });
        }

        /**
         * AJAX request for Update data, use form data
         * PUT
         */
        function formData() {
            var data = {};
            var msg = $('#postform').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
            console.log(msg);

            $.ajax({
                url: 'http://sensordb.loc/api/test',
                type: 'PUT',
                data: msg,
                success: function(answer) {
                    alert(JSON.stringify(answer));
                    $('#get').html('Answer=' + answer.Answer);
                }
            });
        }

        /**
         * AJAX request for delete data
         * DELETE
         */
        function deleteData() {
            $.ajax({
                url: 'http://sensordb.loc/api/test',
                type: 'DELETE',
                data: {"id": 18},
                success: function(answer) {
                    alert(JSON.stringify(answer));
                    $('#get').html('Deleted Item=' + answer.itemID);
                }
            });
        }
    </script>
</html>