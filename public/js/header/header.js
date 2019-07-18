$(document).ready(function()
{
    // Get user token
    TOKEN = readCookie("token");

    // Get user data

    //Get user name, role and build navigation menu
    if(TOKEN) {
        // Get user role
        $.ajax({
            url: baseURL + '/getrole',
            type: 'GET',
            data: {"token": TOKEN},
            success: function(answer) {
                if(!answer.err) {
                    setCookie('role', answer.role, null);
                    $('#userrole').html('Role: ' + answer.role);
                    buildNav(answer.role);
                }
                else {
                    alert(answer.err);
                }
            }
        });

        // Get user name
        $.ajax({
            url: baseURL + '/getusername',
            type: 'GET',
            data: {"token": TOKEN},
            success: function(answer) {
                if(!answer.err) {
                    $('#username').html('User: ' + answer.name);
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

    // Dialogs
    createDialogue('#resetpassword', 'auto', resetUserPassword);
});

function buildNav(role)
{
    $('.nav').append('<a href="http://' + location.host + '" class="nav__item"><div class="fas fa-home"></div><div>Home</div></a>');
    $('.nav').append('<a href="/materials" class="nav__item"><div class="fas fa-layer-group"></div><div>Materials</div></a>');
    $('.nav').append('<a href="/manufactures" class="nav__item"><div class="fas fa-landmark"></div><div>Manufacturers</div></a>');
    $('.nav').append('<a href="/series" class="nav__item"><div class="fas fa-object-ungroup"></div><div>Series</div></a>');

    if(role == 'root') {
        $('.nav').append('<a href="/users" class="nav__item"><div class="fas fa-user-friends"></div><div>Users</div></a>');
    }
}

function logOut(token)
{
    deleteCookie(token);
    deleteCookie('role');
    TOKEN = null;
    window.location.href = '/authorization';
}

function resetUserPasswordForm()
{
    $('#resetpassword').dialog('open');

    $('#resetpassword').html(
        '<form id="" class="edit-form">' +
            '<input type="hidden" name="token" value="' + TOKEN + '">' +
            '<input type="password" name="oldpassword" value="">' +
            '<input type="password" name="password1" value="">' +
            '<input type="password" name="password2" value="">' +
        '</form>' +
        '<div id="result"></div>'
    );
}

function resetUserPassword()
{
    if(TOKEN) {
        var data = $('#resetpassword form').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

        $.ajax({
            url: baseURL + '/resetpassword',
            type: "POST",
            data: data,
            success: function(answer) {
                if(!answer.err) {
                    if(answer.token) {
                        alert('Password was changed');
                        deleteCookie('token');
                        TOKEN = null;
                        window.location.href = '/authorization';
                    }
                    else {
                        $('#resetpassword #result').html('No new token');
                    }
                }
                else {
                    $('#resetpassword #result').html(answer.result + '!&nbsp' + answer.err);
                }
            }
        });
    }
    else {
        window.location.href = '/authorization';
    }
}

/* Visualization effects functions */
$(function() {
    $('.toggle').on('click', function() {
        $('.user-menu').slideToggle();
    })
});

$(function() {
    $('.hidden').on('click', function () {
       $('.nav .nav__item:not(.hidden)').slideToggle();
       $('.nav__item').css('display', 'flex');
    })
});
/**/