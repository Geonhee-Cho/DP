var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: '조건희의 웹 주소록' });
});

module.exports = router;
