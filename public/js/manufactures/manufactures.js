$(document).ready(function() {
    if(TOKEN) {
        $.ajax({
            url: baseURL + '/getmanufacturers',
            type: 'GET',
            data: {"userToken": TOKEN},
            success: function(answer) {
                if(!answer.err) {
                    $.each(answer.manufacturers, function (key, value) {
                        alert('Key=' + key + '; Val=' + value.id);
                    })
                }
                else {
                    alert(answer.err);
                }
            }
        });
    }
    else {
        window.location.href = '/authorization';
    }
});