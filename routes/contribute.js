var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contribute', { title: 'Contribute' });
});

module.exports = router;
