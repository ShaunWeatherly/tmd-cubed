var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('analyze', { title: 'Analyze' });
});

module.exports = router;
