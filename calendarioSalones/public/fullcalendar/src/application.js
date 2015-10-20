//var event = require(['./calendar_events'])();

$(document).ready(function() {
    var arr = [];
    $('#calendar').fullCalendar({
       // hiddenDays: [0],//hiddes Sunday
        header: {
            left: 'Today prev, next',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
        },
        default: 'agendaWeek',
        minTime: '7:00am',
        maxTime: '8:00pm',
        businessHours: true,
        editable: true,
        selectable: true,
        /*select: function(start, end, jsEvent, view){
            // start contains the date you have selected
         // end contains the end date. 
         // Caution: the end date is exclusive (new since v2).
         var allDay = !start.hasTime() && !end.hasTime();
         alert(["Event Start date: " + moment(start).format(),
                "Event End date: " + moment(end).format(),
                "AllDay: " + allDay].join("\n"));
        },
        */
        droppable: true,
        select: function(start, jsEvent, view) {
            var today = !start.hasTime();
            arr.push(moment(start).format('lll'));
            console.dir(arr);
            alert(["Event today date: " + moment(start).format('lll')]);
        }
    });
    
/*    
    var moment1 = moment('2015-10-06');
    var moment2 = moment('2015-10-09');
    $.fullCalendar.formatRange(moment1, moment2, 'MMMM D YYYY');
    
    $.each(event, function(i, item) {
        eventTitle = item.titulo;
        eventEmpieza = item.hrEmpieza;
        eventTermina = item.hrTermina;
        
        var eventObject = {
            title: eventTitle,
            start: eventEmpieza,
            end: eventTermina,
            allDay: true
        };
        
        //console.dir(eventTitle);
        //console.dir(eventObject);
//        console.dir(i);
//        console.dir(item);

        $('#calendar').fullCalendar('eventRender', eventObject, true);
    });

    
   var newEvent = {
                id: 1,
                title: 'My test Event',
                start: moment("2015-10-06T01:32:21.196Z"),
                end: moment("2015-10-06T01:32:21.196Z"),
                allDay: false,

                editable: true//permite el movimiento del evento
            }; 
            $('#calendar').fullCalendar('renderEvent', newEvent, true);
*/
});