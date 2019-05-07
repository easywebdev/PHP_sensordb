var materialsID = [];
var manufacturersID = [];
var seriesID = [];
var DateTime = '';
var findValue = '';

var itemCount = 5;
var currentPage = '';
var countPages;
var samplesCount;

var voltageUnits = 'mV';
var currentUnits = 'mA';

var orderBy = 'name';
var orderByOrder = 'asc';

var selectedSerie = [''];
var selectedMaterial = [''];
var selectedManufacturer = [''];

var editTable = 'edit';

$(document).ready(function()
{
    //Build Page
    buildPage(currentPage);
});

// Change Current units
$('.iunits').change(function () {
    currentUnits = $(this).val();
    buildPage('?page=' + currentPage);
});

// Change Voltage units
$('.vunits').change(function () {
    voltageUnits = $(this).val();
    buildPage('?page=' + currentPage);
});

// Change Item Counts
$('.items-count__items').change(function () {
    itemCount = $(this).val();
    buildPage('?page=' + currentPage);
});

// Change order By
$('.order-by__items').change(function () {
    orderBy = $(this).val();
    buildPage('?page=' + currentPage);
});

$('.reverce').change(function () {
    if(this.checked) {
        orderByOrder = 'desc';
    }
    else {
        orderByOrder = 'asc';
    }

    buildPage('?page=' + currentPage);
});

function buildPage(pageLink) {
    if(TOKEN) {
        $.ajax({
            url: baseURL + '/getsamples' + pageLink,
            type: 'GET',
            data: {
                "userToken": TOKEN,
                "materials_id": materialsID,
                "manufacturers_id": manufacturersID,
                "series_id": seriesID,
                "DateTime": DateTime,
                "findvalue": findValue,
                "itemCount":itemCount,
                "order_by": orderBy,
                "order": orderByOrder
            },
            success: function(answer) {
                if(!answer.err) {
                    //alert(JSON.stringify(answer));
                    // build pagination
                    buildPagination(answer.samples);

                    // build filters
                    let seriesList = getSeries();
                    let materialsList = getMaterials();
                    let manufacturersList = getManufacturers();
                    let i = answer.samples.from;

                    $('.filters').html(
                        'Select Serie: ' + filterSelectBuilder('series', seriesList, selectedSerie) +
                        'Select Material: ' + filterSelectBuilder('materials', materialsList, selectedMaterial) +
                        'Select Manufacturer' + filterSelectBuilder('manufacturers', manufacturersList, selectedManufacturer) +
                        'DateTime: <input type="text" id="datetimepicker" value="' + DateTime + '"/>' +
                        'Find (by Name or Note): <input type="text" id="note" value="' + findValue + '"/>' +
                        '<a href="javascript:applyFilters()" class="btn">Apply</a><a href="javascript:clearsFilters()" class="btn">Clear</a>'
                    );
                    $('#datetimepicker').datetimepicker({
                        format:'Y-m-d H:i:s'
                    });


                    // build page info
                    currentPage = answer.samples.current_page;
                    countPages = answer.samples.last_page;
                    samplesCount = answer.samples.total;
                    $('.page-info').html('Samples Count: ' + samplesCount + '; Page: (' + currentPage + ' / ' + countPages + ')');

                    // build items count selector
                    let itemsCountOptions = '';
                    let itemsCountArr = [5, 10, 15, 20, 25, 30, 40, 50, 100];
                    let itemsSelected = ''
                    for (let i = 0; i < itemsCountArr.length; i++) {
                        if(itemsCountArr[i] == itemCount) {
                            itemsSelected = 'selected';
                        }
                        else {
                            itemsSelected = '';
                        }
                        itemsCountOptions += '<option value="' + itemsCountArr[i] + '"' + itemsSelected +'>' + itemsCountArr[i] + '</option>';
                    }

                    $('.items-count__items').html(itemsCountOptions);

                    // build units selectors
                    let iunitsOptionsStr = '';
                    let vunitsOptionsStr = '';
                    let iunitsArr = ['A', 'mA', 'mkA', 'nA'];
                    let vunitsArr = ['V', 'mV', 'mkV', 'nV'];
                    let iunitsSelected = '';
                    let vunitsSelected = '';

                    for (let i = 0; i < iunitsArr.length; i++) {
                        if(iunitsArr[i] == currentUnits) {
                            iunitsSelected = 'selected';
                        }
                        else {
                            iunitsSelected = '';
                        }

                        if (vunitsArr[i] == voltageUnits) {
                            vunitsSelected = 'selected';
                        }
                        else {
                            vunitsSelected = '';
                        }

                        iunitsOptionsStr += '<option value="' + iunitsArr[i] +'"' + iunitsSelected +'>'+ iunitsArr[i] +'</option>';
                        vunitsOptionsStr += '<option value="' + vunitsArr[i] +'"' + vunitsSelected + '>'+ vunitsArr[i] +'</option>';
                    }

                    $('.iunits').html(iunitsOptionsStr);
                    $('.vunits').html(vunitsOptionsStr);

                    // build order By selector
                    let orderByOptionsStr = '';
                    let orderByArr = ['name', 'resistance', 'sensitive_i', 'concentration', 'resistivity', 'mobility', 'date_time'];
                    let orderByOutArr = ['Name', 'R', 'SI', 'n', 'ρ', 'μ', 'DateTime'];
                    let orderBySelected = '';

                    for(let i = 0; i < orderByArr.length; i++) {
                        if(orderByArr[i] == orderBy) {
                            orderBySelected = 'selected';
                        }
                        else {
                            orderBySelected = '';
                        }

                        orderByOptionsStr += '<option value="' + orderByArr[i] + '"' + orderBySelected + '>' + orderByOutArr[i] + '</option>';
                    }

                    $('.order-by__items').html(orderByOptionsStr);

                    if(orderByOrder == 'desc') {
                        $('.reverce').prop('checked', true);
                    }
                    else {
                        $('.reverce').prop('checked', false);
                    }

                    // build manage buttons
                    if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
                        $('.manage-buttons').html(
                            '<a class="btn" href="javascript:saveData(\'edit\')">Save</a>' +
                            '<a class="btn" href="">Add</a>'
                        );
                    }

                    // build samples table
                    let samplesData = recalculateByUnits(answer.samples.data)

                    $('.table').html(
                        '<tr>' +
                        '<td>Select</td>' +
                        '<td>#</td>' +
                        '<td>Name</td>' +
                        '<td>Serie</td>' +
                        '<td>Material</td>' +
                        '<td>Manufacturer</td>' +
                        '<td>I</td>'+
                        '<td><div>R</div><div>[&Omega;]</div></td>' +
                        '<td><div>R&#10065;</div><div>[&Omega;]</div></td>' +
                        '<td><div>V<sub>0</sub></div><div>' + voltageUnits + '</div></td>' +
                        '<td><div>V<sub>H</sub></div><div>' + voltageUnits + '</div></td>' +
                        '<td><div>S<sub>I</sub></div><div>[V/A/T]</div></td>' +
                        '<td><div>S<sub>V</sub></div><div>[V/V/T]</div></td>' +
                        '<td><div>n</div><div>[sm<sup>-3</sup>]</div></td>' +
                        '<td><div>&rho; &times; 10<sup>4</sup></div><div>[&Omega;&middot;cm]</div></td>' +
                        '<td><div>&mu;</div><div>[sm<sup>2</sup>/V/sec]</div></td>' +
                        '<td>DateTime</td>' +
                        '<td>Noties</td>' +
                        '</tr>'
                    );

                    $.each(samplesData, function (key, value) {
                        buildSamplesTable(i, value, seriesList, materialsList, manufacturersList);
                        i++;
                    });

                    // Test selector must be removed at last
                    $('#test').html(
                        '<select id="stest"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select><a class="btn" href="javascript:changeSelectedAtr()">Test</a>'
                    );
                }
                else {
                    alert(answer.err);
                }
            }
        });
    }
}

function buildPagination(paginationData)
{
    let firstPage = '';
    let prevPage = '';
    let prevPages = '';
    let currPape = '';
    let nextPage = '';
    let nextPages = '';
    let lastPages = '';

    // If exist more then one page
    if(paginationData.last_page > 1) {
        currPape = '<a class="pagination__item pagination__item--active" href="javascript:buildPage(\'?page=' + (paginationData.current_page) + '\')">' + paginationData.current_page + '</a>';
    }

    // If exist pages before current
    if(paginationData.current_page > 1) {
        prevPage = '<a class="pagination__item" href="javascript:buildPage(\'?page=' + (paginationData.current_page - 1) + '\')"><</a>';
        prevPages = '<a class="pagination__item" href="javascript:buildPage(\'?page=' + (paginationData.current_page - 1) + '\')">' + (paginationData.current_page - 1) + '</a>';
    }

    // If exist two or more pages before current page
    if((paginationData.current_page - 2) > 0) {
        firstPage = '<a class="pagination__item" href="javascript:buildPage(' + '\'?page=1\'' +')"><<</a>';
        prevPages = '<a class="pagination__item" href="javascript:buildPage(\'?page=' + (paginationData.current_page - 2) + '\')">' + (paginationData.current_page - 2) + '</a>' + prevPages;
    }

    // If exist pages after current page
    if(paginationData.current_page < paginationData.last_page) {
        nextPages = '<a class="pagination__item" href="javascript:buildPage(\'?page=' + (paginationData.current_page + 1) + '\')">' + (paginationData.current_page + 1) + '</a>';
        nextPage = '<a class="pagination__item" href="javascript:buildPage(\'?page=' + (paginationData.current_page + 1) + '\')">></a>';
    }

    // If exist two or more pages after current page
    if((paginationData.current_page + 2) <= paginationData.last_page) {
        nextPages = nextPages + '<a class="pagination__item" href="javascript:buildPage(\'?page=' + (paginationData.current_page + 2) + '\')">' + (paginationData.current_page + 2) + '</a>';
        lastPages = '<a class="pagination__item" href="javascript:buildPage(\'?page=' + paginationData.last_page + '\')">>></a>';
    }

    // Render full pagination stack
    $('.pagination').html(firstPage + prevPage + prevPages + currPape + nextPages + nextPage + lastPages);
}

function buildSamplesTable(number, sampleData, seriesList, materialsList, manufacturersList)
{
    let editableTD = '';

    if(readCookie('role') == 'root' || readCookie('role') == 'admin') {
        editableTD = ' contenteditable="true" ';
    }

    $('.table').append('<tr>' +
        '<td><input type="checkbox" /></td>' +
        '<td>' + number + '</td>' +
        '<td>' + sampleData.name + '</td>' +
        '<td>' + buildSeries(seriesList, sampleData.series_id) + '</td>' +
        '<td>' + buildMaterials(materialsList, sampleData.materials_id) + '</td>' +
        '<td>' + buildManufacturers(manufacturersList, sampleData.manufacturers_id) + '</td>' +
        '<td' + editableTD + '>' + sampleData.current + '</td>' +
        '<td' + editableTD + '>' + sampleData.resistance + '</td>' +
        '<td' + editableTD + '>' + sampleData.sqr_resistance + '</td>' +
        '<td' + editableTD + '>' + sampleData.offset + '</td>' +
        '<td' + editableTD + '>' + sampleData.hall_voltage + '</td>' +
        '<td' + editableTD + '>' + sampleData.sensitive_i + '</td>' +
        '<td' + editableTD + '>' + sampleData.sensitive_v + '</td>' +
        '<td' + editableTD + '>' + sampleData.concentration.toExponential() + '</td>' +
        '<td' + editableTD + '>' + sampleData.resistivity + '</td>' +
        '<td' + editableTD + '>' + sampleData.mobility + '</td>' +
        '<td' + editableTD + '>' + sampleData.date_time + '</td>' +
        '<td' + editableTD + '>' + sampleData.noties + '</td>' +
        '<td class="hidden-dt">' + sampleData.id + '</td>' +
        //'<td><a href="javascript:editUserForm('+ userData.id +')">EDIT</a></td>' +
        //'<td><a href="javascript:delUserForm('+ userData.id +')">DEL</a></td>' +
        '</tr>');
}

function getSeries()
{
    var seriesList = new Map();

    $.ajax({
        url: baseURL + '/getseries',
        type: 'GET',
        async: false,
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            if(!answer.err) {
                //alert(JSON.stringify(answer));
                $.each(answer.series, function (key, value) {
                    //seriesList.push(value.name);
                    seriesList.set(value.id.toString(), value.name);
                });
            }
            else {
                alert(answer.err);
            }
        }
    });

    return seriesList;
}

function getMaterials()
{
    var materialsList = new Map();

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
                $.each(answer.materials, function (key, value) {
                    //seriesList.push(value.name);
                    materialsList.set(value.id.toString(), value.name);
                });
            }
            else {
                alert(answer.err);
            }
        }
    });

    return materialsList;
}

function getManufacturers()
{
    var manufacturersList = new Map();

    $.ajax({
        url: baseURL + '/getmanufacturers',
        type: 'GET',
        async: false,
        data: {
            "userToken": TOKEN
        },
        success: function(answer) {
            if(!answer.err) {
                //alert(JSON.stringify(answer));
                $.each(answer.manufacturers, function (key, value) {
                    //seriesList.push(value.name);
                    manufacturersList.set(value.id.toString(), value.name);
                });
            }
            else {
                alert(answer.err);
            }
        }
    });

    return manufacturersList;
}

function buildSeries(seriesList, id)
{
    var serieName = '<select>';
    var serie;

    // Get Serie Name by ID
    for(let pair of seriesList) {
        let selected = '';
        if(id == pair[0]) {
            selected = 'selected';
            serie = pair[1];
        }
        serieName += '<option value="' + pair[0] +'"' + selected + '>' + pair[1] + '</option>';
    }

    serieName += '</select>';


    if(readCookie('role') == 'user') {
        serieName = serie;
    }

    return serieName;
}

function buildMaterials(materialsList, id)
{
    var materialName = '<select>';
    var material;

    // Get Serie Name by ID
    for(let pair of materialsList) {
        let selected = '';
        if(id == pair[0]) {
            selected = 'selected';
            material = pair[1];
        }
        materialName += '<option value="' + pair[0] +'"' + selected +'>' + pair[1] + '</option>';
    }

    materialName += '</select>';

    if(readCookie('role') == 'user') {
        materialName = material;
    }

    return materialName;
}

function buildManufacturers(manufacturersList, id)
{
    var manufacturerName = '<select>';
    var manufacturer;

    // Get Serie Name by ID
    for(let pair of manufacturersList) {
        let selected = '';
        if(id == pair[0]) {
            selected = 'selected';
            manufacturer = pair[1];
        }
        manufacturerName += '<option value="' + pair[0] +'"' + selected +'>' + pair[1] + '</option>';
    }

    manufacturerName += '</select>';

    if(readCookie('role') == 'user') {
        manufacturerName = manufacturer;
    }

    return manufacturerName;
}

function recalculateByUnits(data)
{
    let kCiI;
    let kCiV;
    let kUnI;
    let kUnV;

    for(let i = 0; i < data.length; i++) {
        // Set kCiI
        switch (data[i].iunits) {
            case 'mA':
                kCiI = 1E-3;
                break;
            case 'mkA':
                kCiI = 1E-6;
                break;
            case 'nA':
                kCiI = 1E-9;
            default:
                kCiI = 1;
        }

        // Set kCiV
        switch (data[i].vunits) {
            case 'mV':
                kCiV = 1E-3;
                break;
            case 'mkV':
                kCiV = 1E-6;
                break;
            case 'nV':
                kCiV = 1E-9;
            default:
                kCiV = 1;
        }

        // Set kUnI
        switch (currentUnits) {
            case 'mA':
                kUnI = 1E3;
                break;
            case 'mkA':
                kUnI = 1E6;
                break;
            case 'nA':
                kUnI = 1E9;
            default:
                kUnI = 1;
        }

        // Set kUnV
        switch (voltageUnits) {
            case 'mV':
                kUnV = 1E3;
                break;
            case 'mkV':
                kUnV = 1E6;
                break;
            case 'nV':
                kUnV = 1E9;
            default:
                kUnV = 1;
        }

        // Recalculate data
        data[i].current = data[i].current * kCiI * kUnI;
        data[i].hall_voltage = data[i].hall_voltage * kCiV * kUnV;
        data[i].offset = data[i].offset * kCiV * kUnV;
    }

    return data;
}

function filterSelectBuilder(selectID, selectList, selectedItem)
{
    let renderString = '<select id="' + selectID + '" multiple>';

    selectList.set('', 'All');

    for(let pair of selectList) {
        let selected = '';
        if(selectedItem.includes(pair[0])) {
            selected = 'selected';
        }
        renderString += '<option value="' + pair[0] +'"' + selected +'>' + pair[1] + '</option>';
    }

    renderString += '</select>';

    return renderString;
}

function applyFilters()
{
    seriesID = $('#series').val();
    materialsID = $('#materials').val();
    manufacturersID = $('#manufacturers').val();
    DateTime = $('#datetimepicker').val();
    findValue = $('#note').val();

    selectedSerie = seriesID;
    selectedMaterial = materialsID;
    selectedManufacturer = manufacturersID;

    if(seriesID == '')
    {
        seriesID = [];
    }
    if(materialsID == '')
    {
        materialsID = [];
    }
    if(manufacturersID == '')
    {
        manufacturersID = [];
    }

    buildPage('?page=' + currentPage);
}

function clearsFilters()
{
     seriesID = [];
     materialsID = [];
     manufacturersID = [];
     DateTime = '';
     findValue = '';

     selectedSerie = [''];
     selectedMaterial = [''];
     selectedManufacturer = [''];

    buildPage('?page=' + currentPage);
}

function saveData(tableID) {
    let jsonStr = parceTableDataToJson(tableID);

    $.ajax({
        url: baseURL + '/editsamples',
        type: 'PUT',
        data: {
            "userToken": TOKEN,
            "iunits": currentUnits,
            "vunits": voltageUnits,
            "samples": jsonStr
        },
        success: function(answer) {
            //alert(JSON.stringify(answer));
            if(!answer.err) {
                alert(answer.answer);
            }
            else {
                alert(answer.err);
            }
        }
    });

    console.log(jsonStr);
}

function parceTableDataToJson(tableID)
{
    let data = [];
    let row = [];
    let dataObj = new Object();
    let outArr = [];
    let jsonStr = '';

    // Change select option atribut for all select
    changeSelectedAtr();

    // create row array from table
    $('#' + tableID + ' tr').each(function (i, elem) {
        row[i] = $(elem).html();
    });

    // create array of data
    for (let m = 0; m < row.length; m++) {
        data[m] = [];
        $(row[m] + ' td').each( function (j, col) {
            data[m][j] = $(col).html();
        })
    }

    // find select value where <select> exist
    for (let i = 1; i < row.length; i++) {
        for (let j = 3; j < 6; j++) {
            data[i][j] = $(data[i][j]).val();
        }
    }

    // create object from array
    for (let i = 0; i < row.length; i++) {
        if(i > 0) {
            dataObj = {
                id: data[i][18],
                name: data[i][2],
                current: data[i][6],
                resistance: data[i][7],
                sqr_resistance: data[i][8],
                offset: data[i][9],
                hall_voltage: data[i][10],
                sensitive_i: data[i][11],
                sensitive_v: data[i][12],
                concentration: data[i][13],
                resistivity: data[i][14],
                mobility: data[i][15],
                date_time: data[i][16],
                noties: data[i][17],
                materials_id: data[i][4],
                manufacturers_id: data[i][5],
                series_id: data[i][3]
            }
            //outArr[i - 1] = JSON.stringify(dataObj)
            outArr.push(dataObj);
        }
    }

    jsonStr = JSON.stringify(dataObj);

    return outArr;
}

function changeSelectedAtr()
{
    let xxx = $('.table select');
    $(xxx).each(function(i, sel) {
        let selectedVal = $(sel).val();
        $(sel).children('option').attr('selected', false);
        $(sel).children('option[value="' + selectedVal + '"]').attr('selected', true);
    });
}