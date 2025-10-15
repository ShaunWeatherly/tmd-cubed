var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('browse', { title: 'Browse Data' });
});

module.exports = router;
