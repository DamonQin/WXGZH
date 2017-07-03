var express = require('express');
var wechat = require('../api/routes/wechat');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello, RESTFUL API.');
});

router.use('/wechat', wechat);

module.exports = router;
