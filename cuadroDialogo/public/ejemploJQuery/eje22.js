$(document).ready(function() {
    $(function() {
        var cancel = function() {
            $("dialog").dialog("close");
        };
        
        var getResponse = function() {
            var answer;
            $("input").each(function() {
                console.log(this);
                (this.checked === true || this !== "") ? answer = $(this).val() : null;
            $("<p>").text(answer).insertAfter($("#button"));
            });
            $("#dialog").dialog("close");
        };
        
        var dialogOpts = {
            /*modal: true,
            buttons: {
                "Save": getResponse,
                "Cancel": cancel
            },*/
            buttons: [
                {
                    text: "Save",
                    click: getResponse
                },
                {                    
                    text: "Cancel",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            autoOpen:false
        };
        $("#dialog").dialog(dialogOpts);
        $("#button").click(function() {
            $("#dialog").dialog("open");
        });
        
// binds the change-handler:
        $("#repeats").change(function() {
            // sets the 'disabled' property to false (if the 'this' is checked, true if not):
            $(".radio-button").prop('disabled', !this.checked);
            // triggers the change event (so the disabled property is set on page-load:
        }).change();
    });
});