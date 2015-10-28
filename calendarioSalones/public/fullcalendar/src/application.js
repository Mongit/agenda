$(document).ready(function() {
    $myCalendar = $('#calendar').fullCalendar({
        header: {
            left: 'Today prev, next',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
        },
        theme: true,
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            $( "#dialog" ).dialog('open');
        },
        eventClick: function(calEvent, jsEvent, view) {
            $('#dialog #titulo').val(calEvent.titulo);
            $('#dialog #nombre').val(calEvent.nombre);
            $('#dialog #numControl').val(calEvent.numControl);
        $('#dialog #allday').val([calEvent.className == "gbcs-allday-event" ? "1" : "0"]).prop('checked', true);//radio
        $("#dialog").dialog("option", "buttons", [
            {
                text: "Save",
                click: function() {
                    $(this).dialog("close");
                }},
            {
                text: "Cancel",
                click: function() {
                    $(this).dialog("close");
                }}
        ]);
            $("#dialog").dialog("option", "title", "Edit Event");
            $("#dialog").dialog('open');
        },//select function ends,
        editable: true,
        businessHours: true
    });
    
    var titulo = $('#titulo');
    var nombre = $('#nombre');
    var numControl = $('#numControl');
    var eventClass, color;
    $('#dialog').dialog({
        resizable: false,
        autoOpen: false,
        title: "Add Event",//poner fecha del dia seleccionado
        width: 400,
        buttons: {
            Save: function() {
                if($('input:checkbox[name=allday]:checked').val() == '1') {
                    eventClass = "gbcs-halfday-event";
                    color = '#9E6320';
                    //end.val(start.val());
                    titulo.val();
                    nombre.val();
                    numControl.val();
                }
                else {
                    eventClass = "gbcs-allday-event";
                    color  = "#875DA8";
                }
                if (titulo.val() !== '') {
                    $myCalendar.fullCalendar('renderEvent', {
                        title: titulo.val(),
                        nombre: nombre.val(),
                        numControl: numControl.val(),
                        allDay: true,
                        className: eventClass,
                        color: color
                    }, true // make the event "stick"
                    );
                }
                $myCalendar.fullCalendar('unselect');
                $(this).dialog('close');
            },
            Cancel: function() {
                $(this).dialog('close');
            }
        }
    });
});