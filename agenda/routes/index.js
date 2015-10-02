var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
/*    require.config({
        paths: {
            "moment": "./../../public/fullcalendar/lib/moment.min.js"
        },
        config: {
            moment: {
                noGlobal: true
            }
        }
    });

    define(["moment"], function(moment){
        moment().format;
    });
*/
    res.render('index', { title: 'Express' });
});

module.exports = router;
