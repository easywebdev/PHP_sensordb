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
                            '<td>' + (key + 1) + '</td><td>' + value.name + '</td><td>' + value.structure + '</td><td>' + value.image + '</td>' +
                            '<td>' + value.thickness + '</td><td>' + value.current + '</td><td>' + value.resistance + '</td>' +
                            '<td>' + value.sensitivity + '</td><td>' + value.offset + '</td><td>' + value.material_type + '</td>' +
                            '<td>' + value.iunits + '</td><td>' + value.vunits + '</td>' +
                            '<td><a class="btn" href="javascript:editManufacturersForm(' + value.id + ')">Edit</a></td>' +
                            '<td><a class="btn" href="javascript:delManufacturersForm(' + value.id + ')">Delete</a></td>' +
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

function addData()
{

}

function editData()
{

}

function delData()
{

}