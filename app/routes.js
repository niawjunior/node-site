var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.render('pages/home');
});

router.get('/about', function(req, res) {
 res.render('pages/about');
})

router.get('/contact', function(req, res){
 res.render('pages/contact');
});
router.post('/contact', function(req, res) {

});
