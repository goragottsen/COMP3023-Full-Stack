var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true}));

router.get('/', function(req, res, next) {
  res.send('respond with a require');
});

router.post('/', function(req, res, next){
  res.send('POST received');
  console.log('First name:' + req.body.firstname + '\nLast name: ' + req.body.lastname)
})

module.exports = router;
