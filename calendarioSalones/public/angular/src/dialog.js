$(function() {
    $( "#dialog" ).dialog({
        autoOpen: true
    });
});
/*$(document).ready(function() {
    $(function() {
        var getResponse = function() {
            var answer;
            $("input").each(function() {
                console.log(this);
                (this.checked === true || this !== "") ? answer = $(this).val() : null;
                $("<p>").text(answer).insertAfter($("#titleP"));
            });
            $("#dialog").dialog("close");
        };
        
        var dialogOpts = {
            buttons: [
                {
                    text: "Save",
                    click: getResponse
                },
                {
                    text: "Cancel",
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ],
            autoOpen: false
        };
        $("#dialog").dialog(dialogOpts);
        $("#repeats").change(function() {
            $(".radio-button").prop('disabled', !this.checked);
        }).change();
        
        $("#calendar").on('click', function() {
            $("#dialog").dialog("open");
        });        
    });
});*/
/*$("add-event").dialog({
    autoOpen: false,
    height: 'auto',
    width: 'auto',
    autoResize: true,
    modal: false,
    resizable: false,
    open: function() {
        $("#title").attr("tabindex", "1");
    },
    buttons: {
        "Save Event": function() {
            $ajax({
                type: "POST",
                url: "events.js",
                data: $('#add-event-form').serialize(),
                success: function() {
                    calendar.fullCalendar('refetchEvents');
                }
            });
            
            $(this).dialog("close");
        },
        Cancel: function() {
            $(this).dialog("close");
        }
    },
});
*/