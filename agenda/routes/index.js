var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: 'My Server side event',
        start: moment("2015-10-15T19:32:21.196Z"),
        end: moment("2015 10 03", "YYYY MM DD"),
        allDay: false,
        editable: true,//permite el movimiento del evento
        color: 'yellow',   // an option!
        textColor: 'black' // an option!
    });
});

module.exports = router;
