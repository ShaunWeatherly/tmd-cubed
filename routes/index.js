var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Transition Metal Dichalcogenide Defect Database' });
});

module.exports = router;
