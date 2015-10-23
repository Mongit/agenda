$(function() {
    $( "#dialog" ).dialog({
        dialogClass: "no-close",
        buttons: [
            {
                text: "OK",
                icons: {
                    primary: "ui-icon-heart"
                },
                click: function() {
                    $(this).dialog("close");
                }
            // Uncommenting the following line would hide the text,
            // resulting in the label being used as a tooltip
            //tooltip a message that appears when a cursor is positioned over an icon, image, hyperlink, or other element in a graphical user interface.
            //showText: false
            }
        ],
        modal: true,
        show: {
            effect: "blind",
            duration: 800
        }
    });
});
//Initialize the dialog with the buttons option specified
/*
$( ".selector" ).dialog({
    dialogClass: "alert",
});
*/