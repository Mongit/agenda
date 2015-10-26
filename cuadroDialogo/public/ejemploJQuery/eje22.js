$(document).ready(function() {
    $(function() {
        var cancel = function() {
            $("dialog").dialog("close");
        }
        
        var getResponse = function() {
            var answer;
            $("input").each(function() {
                console.log(this);
                (this.checked === true || this !== "") ? answer = $(this).val() : null;
            $("<p>").text(answer).insertAfter($("#button"));
            });
            $("#dialog").dialog("close");
        }
        
        var dialogOpts = {
            //modal: true,
            buttons: {
                "Save": getResponse,
                "Cancel": cancel
            },
            autoOpen:false
        };
        $("#dialog").dialog(dialogOpts);
        $("#button").click(function() {
            $("#dialog").dialog("open");
        });
    });
});