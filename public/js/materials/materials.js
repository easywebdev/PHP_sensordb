$(document).ready(function () {
    // Build Page
    buildPage();

    // Dialogs
    createConfirmDialog('#deldialog', 'auto', delData);
    createDialogue('#adddialog', 'auto', addData);
    createDialogue('#editdialog', 'auto', editData);
});

function buildPage() {
    $.ajax({
        url: baseURL + '/getmaterials',
        type: 'GET',
        async: false,
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            if(!answer.err) {
                //alert(JSON.stringify(answer));

                // Build Buttons
                if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                    $('.buttons').html('<a class="btn" href="javascript:addMaterialsForm()">Add</a>');
                }

                // Build Table
                if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                    $('#materials').html(
                        '<table class="table" id="table-materials">' +
                        '<tr>' +
                        '<td>#</td><td>Name</td><td>Edit</td><td>Delete</td>' +
                        '</tr>'
                    );
                }
                else {
                    $('#materials').html(
                        '<table class="table" id="table-materials">' +
                        '<tr>' +
                        '<td>#</td><td>Name</td>' +
                        '</tr>'
                    );
                }

                let materialsNumber = 0;
                $.each(answer.materials, function (key, value) {
                    //seriesList.push(value.name);
                    //seriesList.set(value.id.toString(), value.name);
                    //alert('Key = ' + key + '; Value = ' + value.id);

                    materialsNumber++;
                    if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                        $('#table-materials').append(
                            '<tr>' +
                            '<td>' + materialsNumber + '</td><td>' + value.name + '</td>' +
                            '<td><a class="btn" href="javascript:editMaterialsForm(' + value.id + ')">Edit</a></td>' +
                            '<td><a class="btn" href="javascript:delMaterialsForm(' + value.id + ')">Delete</a></td>' +
                            '</tr>'
                        );
                    }
                    else {
                        $('#table-materials').append(
                            '<tr>' +
                            '<td>' + materialsNumber + '</td><td>' + value.name + '</td>' +
                            '</tr>'
                        );
                    }
                });

                $('#materials').append(
                    '</table>'
                );
            }
            else {
                alert(answer.err);
            }
        }
    });
}

function addMaterialsForm()
{
    $('#adddialog').dialog('open');

    $('#adddialog').html(
        '<form id="addform" class="data-form">' +
        '<div class="data-form__item"><label class="data-form__label" for="name">Name:</label><input id="name" name="name" type="text"></div>' +
        '</form>' +
        '<div id="answer"></div>'
    );
}

function editMaterialsForm(id)
{
    $('#editdialog').dialog('open');

    $.ajax({
        url: baseURL + '/getmaterials/' + id,
        type: 'GET',
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.material);
                $('#editdialog').html(
                    '<form id="editform" class="data-form">' +
                    '<div class="data-form__item"><label class="data-form__label" for="name">Name:</label><input id="name" name="name" type="text" value="' + answer.material.name + '"></div>' +
                    '<input id="id" type="hidden" name="id" value="' + answer.material.id + '">' +
                    '</form>' +
                    '<div id="answer"></div>'
                );
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });
}

function delMaterialsForm(id)
{
    $('#deldialog').dialog('open');

    $.ajax({
        url: baseURL + '/getmaterials/' + id,
        type: 'GET',
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.material);
                $('#deldialog').html(
                    'Are You sure You want to delete selected material "' + answer.material.name + '"?' +
                    '<div id="delid"><input id="id" type="hidden" name="id" value="' + answer.material.id + '"></div>' +
                    '<div id="answer"></div>'
                );
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });


}

function addData()
{
    $.ajax({
        url: baseURL + '/addmaterials',
        type: 'POST',
        data: {
            "userToken": TOKEN,
            "name": $('#name').val()
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

function editData()
{
    $.ajax({
        url: baseURL + '/editmaterials/' + $('#editdialog #id').val(),
        type: 'PUT',
        data: {
            "userToken": TOKEN,
            "name": $('#editdialog #name').val()
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

function delData()
{
    $.ajax({
        url: baseURL + '/delmaterials/' + $('#delid #id').val(),
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