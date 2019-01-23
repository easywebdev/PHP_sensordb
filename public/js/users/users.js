$(document).ready(function()
{
    //Get user role and build navigation menu
    if(TOKEN) {
        $.ajax({
            url: baseURL + '/getusers',
            type: 'GET',
            data: {"userToken": TOKEN},
            success: function(answer) {
                if(!answer.err) {
                    //alert(JSON.stringify(answer.users));
                    var i = 0;

                    $.each(answer.users, function (key, value) {
                        i++;
                        buildUsersTable(i, value);
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

    // Dialogs
    createDialogue('#editdialog', 'auto', editUser);
    createDialogue('#adddialog', 'auto', addUser);
    createConfirmDialog('#deldialog', 'auto', delUser);
});

function buildUsersTable(number, userData)
{
    $('.table').append('<tr>' +
                            '<td>' + number + '</td>' +
                            '<td>' + userData.name + '</td>' +
                            '<td>' + userData.role + '</td>' +
                            '<td><a href="javascript:editUserForm('+ userData.id +')">EDIT</a></td>' +
                            '<td><a href="javascript:delUserForm('+ userData.id +')">DEL</a></td>' +
                        '</tr>');
}

function editUserForm(id)
{
    $( "#editdialog" ).dialog( "open" );
    //alert(TOKEN);

    $.ajax({
        url: baseURL + '/getusers/' + id,
        type: "GET",
        data: {"userToken": TOKEN},
        success: function(answer) {

            if(!answer.err) {
                $('#editdialog').html(
                    '<form id="edituser" class="edit-form">' +
                    '<input id="id" type="hidden" name="id" value="' + answer.user.id + '">' +
                    '<input type="hidden" name="userToken" value="' + TOKEN + '">' +
                    '<label class="auth-form__label" for="name">Login:</label><input type="text" name="name" value="' + answer.user.name + '">' +
                    '<label class="auth-form__label" for="password">Password:</label><input type="text" name="password" value="">' +
                    '<label class="auth-form__label" for="role">Role:</label><select name="role">' +
                        '<option>user</option>' +
                        '<option>admin</option>' +
                    '</select>' +
                    '</form>' +
                    '<div id="result" class="err"></div>'
                );

                if(answer.user.role == 'user') {
                    $('.edit-form select').val("user");
                }
                else {
                    $('.edit-form select').val("admin");
                }
            }
            else {
                alert(answer.err);
            }
        }
    });
}

function addUserForm()
{
    $( "#adddialog" ).dialog( "open" );

    $('#adddialog').html(
        '<form id="adduser" class="edit-form">' +
        '<input type="hidden" name="userToken" value="' + TOKEN + '">' +
        '<label class="auth-form__label" for="name">Login:</label><input type="text" name="name" value="">' +
        '<label class="auth-form__label" for="password">Password:</label><input type="text" name="password" value="">' +
        '<label class="auth-form__label" for="role">Role:</label><select name="role">' +
        '<option selected>user</option>' +
        '<option>admin</option>' +
        '</select>' +
        '</form>' +
        '<div id="result" class="err"></div>'
    );
}

function delUserForm(id)
{
    $('#deldialog').dialog('open');

    $.ajax({
        url: baseURL + '/getusers/' + id,
        type: "GET",
        data: {"userToken": TOKEN},
        success: function(answer) {
            if(!answer.err) {
                $('#deldialog').html(
                    'Are You sure You want to delete user: ' + answer.user.name + '?' +
                    '<input id="delid" type="hidden" name="delid" value="' + id + '">' +
                    '<div id="result" class="err"></div>'
                );
            }
            else {
                alert(answer.err);
            }
        }
    });
}

function editUser()
{
    var data = $('#edituser').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    $.ajax({
        url: baseURL + '/editusers/' + $('#edituser #id').val(),
        type: 'PUT',
        data: data,
        success: function(answer) {
            if(!answer.err) {
                $('#editdialog #result').html(answer.result);
            }
            else {
                //alert(answer.err);
                $('#editdialog #result').html(answer.result + '!&nbsp' + answer.err);
                //alert(answer.result);
            }
        }
    });
}

function addUser()
{
    var data = $('#adduser').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    //alert(JSON.stringify(data));

    $.ajax({
        url: baseURL + '/addusers',
        type: "POST",
        data: data,
        success: function(answer) {
            if(!answer.err) {
                $('#adddialog #result').html(answer.result);
            }
            else {
                $('#adddialog #result').html(answer.result + '!&nbsp' + answer.err);
            }
        }
    });
}

function delUser()
{
    var id = $('#delid').val();

    $.ajax({
        url: baseURL + '/delusers/' + id,
        type: "DELETE",
        data: {"userToken": TOKEN},
        success: function(answer) {
            if(!answer.err) {
                $('#deldialog #result').html(answer.result);
            }
            else {
                $('#deldialog #result').html(answer.result + '!&nbsp' + answer.err);
            }
        }
    });
}