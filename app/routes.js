var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.send('HELLO WORLD');
})

router.get('/about', function(req, res) {
  res.send('hello world i im the about page!');
})

router.get('/contact');
router.post('/contract');
