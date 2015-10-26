$("add-event").dialog({
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