var mongoose = require('mongoose');

var Evento = mongoose.model('Evento');
    
Evento.find(function(err, eventos) {
    if(err) return next(err);
    res.json(eventos);
});


/*[
    {
        "allDay": "",
        "title": "Test event",
        "id": "821",
        "start": "2015-10-23 14:00:00",
        "end": "2015-10-23 15:00:00"        
    },
    {
        "allDay": "",
        "title": "Test event 2",
        "id": "822",        
        "start": "2015-10-23 9:00:00",
        "end": "2015-10-23 10:00:00"
    },
    {
        "allDay": "",
        "title": "Test event 3",
        "id": "823",        
        "start": "2015-10-24 8:00:00",
        "end": "2015-10-24 6:00:00"
    },
    {
        "allDay": "",
        "title": "Test event 4",
        "id": "824",        
        "start": "2015-10-27 6:00:00",
        "end": "2015-10-27 7:00:00"
    }
];

*/