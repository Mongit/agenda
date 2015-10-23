$(document).ready(function() {
    $(function() {
        $("#dialog").dialog({
            autoOpen: false
        });
        $("#button").on("click", function() {
            $("#dialog").dialog("open");
        });
    });
    $("#cancel").click(function() {
        $("#dialog").dialog("close");
    });
    
    // Validating Form Fields.....
    $("#submit").click(function(e) {
        var answer;
            
            $("input").each(function() {
                (this !== null) ?  answer = $(this).val : null;
            });            
            $("<p>").text("Your answer: " + answer).insertAfter($("dialog"));
            $("#dialog").dialog("close");
        /*
        var eventName = $("#title").val();
        if (eventName ==! '') {
            alert(eventName);
            e.preventDefault();
        }
        
        var name = $("#name").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email === '' || name === '') {
            alert("Please fill all fields...!!!!!!");
            e.preventDefault();
        } else if (!(email).match(emailReg)) {
            alert("Invalid Email...!!!!!!");
            e.preventDefault();
        } else {
            alert("Form Submitted Successfully......");
        }*/
    });
    /*
    $(function() {
        var execute = function(){
            var answer;
            
            $("input").each(function() {
                (this.checked === true) ? answer = $(this).val() : null;
            });
            
            $("<p>").text("Your answer: " + answer).appendTo($("body"));
            $("#dialog").dialog("close");
        };

        var cancel = function() {
            $("#dialog").dialog("close");
        }
    
    
        var dialogOpts = {
            buttons: {
                "Submit": execute,
                "Cancel": cancel
            }
        };
        $("#dialog").dialog(dialogOpts);    
    });
    */
    
});