var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET View page. */
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'View my data' });
});

module.exports = router;
