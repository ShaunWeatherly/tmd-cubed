var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('overview', { title: 'Overview' });
});

module.exports = router;
