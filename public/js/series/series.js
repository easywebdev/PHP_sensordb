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
        url: baseURL + '/getseries',
        type: 'GET',
        data: {"userToken": TOKEN},
        success: function(answer) {
            if(!answer.err) {
                // Build Table
                if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                    $('#series').html(
                        '<table class="table" id="table-series">' +
                        '<tr>' +
                        '<td>#</td><td>Name</td><td>Structure</td><td>Image</td><td>Thickness</td><td>Current</td><td>Resistance</td>' +
                        '<td>Sensitivity</td><td>Offset</td><td>Material Type</td><td>Current Units</td><td>Voltage Units</td>' +
                        '<td>Edit</td><td>Delete</td>' +
                        '</tr>'
                    );
                }
                else {
                    $('#series').html(
                        '<table class="table" id="table-series">' +
                        '<tr>' +
                        '<td>#</td><td>Name</td><td>Structure</td><td>Image</td><td>Thickness</td><td>Current</td><td>Resistance</td>' +
                        '<td>Sensitivity</td><td>Offset</td><td>Material Type</td><td>Current Units</td><td>Voltage Units</td>' +
                        '</tr>'
                    );
                }

                $.each(answer.series, function (key, value) {
                    //alert('Key=' + key + '; Val=' + value.id);
                    if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                        $('#table-series').append(
                            '<tr>' +
                                '<td>' + (key + 1) + '</td><td>' + value.name + '</td>' +
                                '<td>' + value.structure + '</td>' +
                                '<td>' +
                                    '<a class="" href="javascript:showBigPicture()">' +
                                        '<figure class="thumbinail-container"><img class="thumbinail" src="' + value.image + '"></figure>' +
                                    '</a>' +
                                '</td>' +
                                '<td>' + value.thickness + '</td>' +
                                '<td>' + value.current + '</td>' +
                                '<td>' + value.resistance + '</td>' +
                                '<td>' + value.sensitivity + '</td>' +
                                '<td>' + value.offset + '</td>' +
                                '<td>' + value.material_type + '</td>' +
                                '<td>' + value.iunits + '</td>' +
                                '<td>' + value.vunits + '</td>' +
                                '<td><a class="btn" href="javascript:editSeriesForm(' + value.id + ')">Edit</a></td>' +
                                '<td><a class="btn" href="javascript:delSeriesForm(' + value.id + ')">Delete</a></td>' +
                            '</tr>'
                        );
                    }
                    else {
                        $('#table-series').append(
                            '<tr>' +
                            '<td>' + (key + 1) + '</td><td>' + value.name + '</td><td>' + value.structure + '</td><td>' + value.image + '</td>' +
                            '<td>' + value.thickness + '</td><td>' + value.current + '</td><td>' + value.resistance + '</td>' +
                            '<td>' + value.sensitivity + '</td><td>' + value.offset + '</td><td>' + value.material_type + '</td>' +
                            '<td>' + value.iunits + '</td><td>' + value.vunits + '</td>' +
                            '</tr>'
                        );
                    }

                });

                $('#series').append(
                    '</table>'
                );
            }
            else {
                alert(answer.err);
            }
        }
    });
}

function addSeriesForm()
{
    $('#adddialog').dialog('open');

    $('#adddialog').html(
        '<div class="greed">' +
            '<div id="image-container" class="greed__item">' +
                '<figure id="userimage" class="picture">' +
                    '<img src="uploads/noimage.png">' +
                '</figure>' +
                '<div class="picture-manage">' +
                    '<form id="file" enctype="multipart/form-data">' +
                        '<label for="image">Select Immage:</label><input id="image" name="image" type="file">' +
                        '<div>' +
                            '<a class="btn btn--blue mr10" href="javascript:uploadImage()">Upload</a>' +
                            '<a class="btn btn--blue" href="javascript:delImage()">Del</a>' +
                        '</div>' +
                    '</form>' +
                '</div>' +
            '</div>' +
            '<div id="form-container" class="greed__item"></div>' +
        '</div>' +
        '<div id="uploadanswer"></div>'
    );

    $('#form-container').html(
        '<form id="addform" method="post" class="data-form">' +
        '<div class="data-form__item"><label class="data-form__label" for="name">Name:</label><input id="name" name="name" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="structure">Structure:</label><input id="structure" name="structure" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="thickness">Thickness:</label><input id="thickness" name="thickness" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="current">Current:</label><input id="current" name="current" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="resistance">Resistance:</label><input id="resistance" name="resistance" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="sensitivity">Sensitivity:</label><input id="sensitivity" name="sensitivity" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="offset">Offset:</label><input id="offset" name="offset" type="text"></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="material_type">Material type:</label>' +
            '<select id="material_type" name="material_type">' +
                '<option value="3D" selected>3D</option>' +
                '<option value="2D">2D</option>' +
            '</select>' +
        '</div>' +
        '<div class="data-form__item"><label class="data-form__label" for="iunits">Current units:</label><select id="iunits" name="iunits">' + buildSelectIunits() + '</select></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="vunits">Voltage units:</label><select id="vunits" name="vunits">' + buildSelectVunits() + '</select></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="manufacturers_id">Manufacturer</label><select id="manufacturers_id" name="manufacturers_id"></select></div>' +
        '<div class="data-form__item"><label class="data-form__label" for="materials_id">Material:</label><select id="materials_id" name="materials_id"></select></div>' +
        '</form>' +
        '<div id="answer"></div>'
    );

    buildSelectManufacturer();
    buildSelectMaterial();
}

function buildSelectIunits()
{
    let iunits = ['A', 'mA', 'mkA', 'nA'];
    let outString = '';

    for (let i = 0; i < iunits.length; i++) {
        if(i == 1) {
            outString += '<option value="' + iunits[i] + '" selected>' + iunits[i] + '</option>'
        }
        else {
            outString += '<option value="' + iunits[i] + '">' + iunits[i] + '</option>';
        }
    }
    return outString;
}

function buildSelectVunits()
{
    let iunits = ['V', 'mV', 'mkV', 'nV'];
    let outString = '';

    for (let i = 0; i < iunits.length; i++) {
        if(i == 1) {
            outString += '<option value="' + iunits[i] + '" selected>' + iunits[i] + '</option>'
        }
        else {
            outString += '<option value="' + iunits[i] + '">' + iunits[i] + '</option>';
        }
    }
    return outString;
}

function buildSelectManufacturer()
{
    $.ajax({
        url: baseURL + '/getmanufacturers',
        type: 'GET',
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.manufacturers);
                $.each(answer.manufacturers, function (key, value) {
                    $('#manufacturers_id').append('<option value="' + value.id + '">' + value.name +'</option>');
                });
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });
}

function buildSelectMaterial()
{
    $.ajax({
        url: baseURL + '/getmaterials',
        type: 'GET',
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.materials);
                $.each(answer.materials, function (key, value) {
                    $('#materials_id').append('<option value="' + value.id + '">' + value.name +'</option>');
                });
            }
            else {
                //alert(answer.err);
                $('#answer').html(answer.err);
            }
        }
    });
}

function uploadImage()
{
    let formData = new FormData($('#file').get(0));
    formData.append('userToken', TOKEN);

    $.ajax({
        url: baseURL + '/addfile',
        type: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                //alert(answer.answer);
                $('#uploadanswer').html(answer.answer);
                $('#userimage').html(
                    '<img src="' + answer.image + '">'
                );
            }
            else {
                //alert(answer.err);
                $('#uploadanswer').html(answer.err);
            }
        }
    });
}

function delImage()
{
    let image = $('#userimage img').attr('src');

    if(image != 'uploads/noimage.png') {
        $.ajax({
            url: baseURL + '/delfile',
            type: 'DELETE',
            data: {
                "userToken": TOKEN,
                "filename": image
            },
            success: function(answer) {
                //alert(JSON.stringify(answer));
                if(!answer.err) {
                    //alert(answer.answer);
                    $('#uploadanswer').html(answer.answer);
                    $('#userimage').html(
                        '<img src="uploads/noimage.png">'
                    );
                }
                else {
                    //alert(answer.err);
                    $('#uploadanswer').html(answer.err);
                }
            }
        });
    }
}

function addData()
{
    let data = $('#addform').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
    data['image'] = $('#userimage img').attr('src');
    data['userToken'] = TOKEN;
    console.log(data);

    $.ajax({
        url: baseURL + '/addseries',
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

}

function delData()
{

}