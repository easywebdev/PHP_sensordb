$(document).ready(function() {
    // Build Page
    buildPage();

    // Dialogs
    createConfirmDialog('#deldialog', 'auto', delData);
    createDialogue('#adddialog', 'auto', addData);
    createDialogue('#editdialog', 'auto', editData);
});

function buildPage()
{
    $.ajax({
        url: baseURL + '/getmanufacturers',
        type: 'GET',
        data: {"userToken": TOKEN},
        success: function(answer) {
            if(!answer.err) {
                // Build Buttons
                if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                    $('.buttons').html('<a class="btn" href="javascript:addManufacturersForm()">Add</a>');
                }

                // Build Table
                if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                    $('#manufacturers').html(
                        '<table class="table" id="table-manufacturers">' +
                        '<tr>' +
                        '<td>#</td><td>Name</td><td>Contact Person</td><td>Edit</td><td>Delete</td>' +
                        '</tr>'
                    );
                }
                else {
                    $('#manufacturers').html(
                        '<table class="table" id="table-manufacturers">' +
                        '<tr>' +
                        '<td>#</td><td>Name</td><td>Contact Person</td>' +
                        '</tr>'
                    );
                }

                $.each(answer.manufacturers, function (key, value) {
                    //alert('Key=' + key + '; Val=' + value.id);
                    if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                        $('#table-manufacturers').append(
                            '<tr>' +
                            '<td>' + (key + 1) + '</td><td>' + value.name + '</td><td>' + value.person + '</td>' +
                            '<td><a class="btn" href="javascript:editManufacturersForm(' + value.id + ')">Edit</a></td>' +
                            '<td><a class="btn" href="javascript:delManufacturersForm(' + value.id + ')">Delete</a></td>' +
                            '</tr>'
                        );
                    }
                    else {
                        $('#table-manufacturers').append(
                            '<tr>' +
                            '<td>' + (key + 1) + '</td><td>' + value.name + '</td><td>' + value.person + '</td>' +
                            '</tr>'
                        );
                    }

                });

                $('#manufacturers').append(
                    '</table>'
                );
            }
            else {
                alert(answer.err);
            }
        }
    });
}

function addManufacturersForm()
{
    $('#adddialog').dialog('open');

    $('#adddialog').html(
        '<form id="addform" class="data-form">' +
        '<div class="data-form__item"><label class="data-form__label" for="name">Name:</label><input id="name" name="name" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="person">Contact Person:</label><input id="person" name="person" type="text"></div>' +
        '</form>' +
        '<div id="answer"></div>'
    );
}

function editManufacturersForm(id)
{
    $('#editdialog').dialog('open');

    $.ajax({
        url: baseURL + '/getmanufacturers/' + id,
        type: 'GET',
        data: {"userToken": TOKEN},
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.answer);
                $('#editdialog').html(
                    '<form id="editform" class="data-form">' +
                    '<div class="data-form__item"><label class="data-form__label" for="name">Name:</label><input id="name" name="name" type="text" value="' + answer.manufacturer.name + '"></div>' +
                    '<div class="data-form__item"><label class="data-form__label" for="person">Contact Person:</label><input id="person" name="person" type="text" value="' + answer.manufacturer.person + '"></div>' +
                    '<input name="id" type="hidden" value="' + answer.manufacturer.id + '">' +
                    '</form>' +
                    '<div id="answer"></div>'
                );
            }
            else {
                //alert(answer.err);
                $('#editdialog').html('<div id="answer"></div>');
                $('#answer').html(answer.err);
            }
        }
    });
}

function delManufacturersForm(id)
{
    $('#deldialog').dialog('open');

    $.ajax({
        url: baseURL + '/getmanufacturers/' + id,
        type: 'GET',
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.material);
                $('#deldialog').html(
                    'Are You sure You want to delete selected manufacturer "' + answer.manufacturer.name + '"?' +
                    '<div id="delid"><input id="id" type="hidden" name="id" value="' + answer.manufacturer.id + '"></div>' +
                    '<div id="answer"></div>'
                );
            }
            else {
                //alert(answer.err);
                $('#deldialog').html('<div id="answer"></div>');
                $('#answer').html(answer.err);
            }
        }
    });
}

function addData()
{
    let data = $('#addform').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
    data['userToken'] = TOKEN;
    //console.log(data);

    $.ajax({
        url: baseURL + '/addmanufacturers',
        type: 'POST',
        data: data,
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.answer);
                $('#answer').html(answer.answer);
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });
}

function editData()
{
    let data = $('#editform').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
    data['userToken'] = TOKEN;
    //console.log(data);

    $.ajax({
        url: baseURL + '/editmanufacturers/' + data['id'],
        type: 'PUT',
        data: data,
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.answer);
                $('#answer').html(answer.answer);
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });
}

function delData()
{
    $.ajax({
        url: baseURL + '/delmanufacturers/' + $('#delid #id').val(),
        type: 'DELETE',
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.answer);
                $('#answer').html(answer.answer);
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });
}