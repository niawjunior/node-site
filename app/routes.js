var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res) {
 res.sendFile(path.join(__dirname, '../about.html'));
})

router.get('/contact');
router.post('/contract');
