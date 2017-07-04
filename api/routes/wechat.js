var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Here\'s wechat api.');
});

router.get('/access', function(req, res, next) {
  res.send('无 Fuck 说.');
});

module.exports = router;
