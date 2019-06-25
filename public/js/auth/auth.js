$(document).ready(function(){
    // Check token and redirect to home page
    TOKEN = readCookie("token");
    if(TOKEN) {
        window.location.href = 'http://' + location.host;
    }
});



function authData(formID) {
    var data = $('#' + formID).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
    console.log(data);

    $.ajax({
        url: baseURL + '/login',
        type: 'POST',
        data: data,
        success: function(answer) {
            if(!answer.err) {
                setCookie("token", answer.token, COOKIE_TIME);
                TOKEN = answer.token;
                window.location.href = 'http://' + location.host;
            }
            else {
                alert(answer.err);
            }
        }
    });
}

// 'Enter' Key press reaction
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        authData('authorization');
        //alert('Enter');
    }
});