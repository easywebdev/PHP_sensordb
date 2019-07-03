function createDialogue(dialogID, width, applayFunction)
{
    $( dialogID ).dialog({
        width: width,
        //minheight: 270,
        modal: true,
        autoOpen: false,
        resizable: false,
        position: ['center', 100],
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 1000
        },
        buttons: {
            Apply: applayFunction,
            Close: function () {
                $(this).dialog("close");
                location.reload();
            }
        }
    });
    $(dialogID).parent().find('.ui-dialog-titlebar-close').hide(); //убираем крестик в верхнем заголовке диалогового окна

    $( "#useropener" ).click(function() {
        $( dialogID ).dialog( "open" );
    });
}

function createConfirmDialog(dialogID, width, applayFunction)
{
    $( dialogID ).dialog({
        width: width,
        //minheight: 270,
        modal: true,
        autoOpen: false,
        resizable: false,
        //position: [100, 100],
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 1000
        },
        buttons: {
            YES: applayFunction,
            CANCEL: function () {
                $(this).dialog("close");
                location.reload();
            },
            CLOSE: function() {
                $(this).dialog("close");
                location.reload();
            }
        }
    });
    $(dialogID).parent().find('.ui-dialog-titlebar-close').hide(); //убираем крестик в верхнем заголовке диалогового окна

    $( "#useropener" ).click(function() {
        $( dialogID ).dialog( "open" );
    });
}