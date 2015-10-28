$(document).ready(function() {
    var arr = [];
    $('#calendar').fullCalendar({
       // hiddenDays: [0],//hiddes Sunday
        header: {
            left: 'Today prev, next',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
        },
        dayClick: function() {
            $( ".selector" ).dialog({ 
               buttons: [{ 
                  text: "Ok", 
                  click: function() { 
                     $( this ).dialog( "close" ); 
                  }
               }]
            });
            //$("#dialog").dialog("open");
          //  return false;
        },
        
        //Specify where to pull the events from.
        //events: "fullcalendar/src/calendar_events.js",
/*
        eventSources: [{
            //url: './../../../routes/events.js',
            url: '/calendar_events.js',
            type: 'GET',
            error: function() {
                alert('There was an error whule fetching events!');
            }
        }],
*/        
        editable: true,
        //defaultView: 'agendaWeek',
        //allDayDefault: false,
        
        businessHours: true
    /*     minTime: '7:00am',
        maxTime: '8:00pm',
        selectable: true,
        droppable: true,
        select: function(start, jsEvent, view) {
            var today = !start.hasTime();
            arr.push(moment(start).format('lll'));
            console.dir(arr);
            alert(["Event today date: " + moment(start).format('lll')]);
        }
    */
    });
    

});