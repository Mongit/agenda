var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dialog', function(req, res, next) {
  res.render('dialog');
});

router.get('/eje2', function(req, res, next) {
  //res.render('eje2');
 
    res.render('eje23');
    //res.render('radioButtonDialogExample');
});

router.get('/eje22', function(req, res, next) {
  res.render('eje22');
});

module.exports = router;
