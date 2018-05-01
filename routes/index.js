var express = require('express');
var router = express.Router();
var contactModel = require('../model/contact')

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET View page. */
router.get('/view', function(req, res, next) {
  contactModel.find({}, function(err, data) {
    res.render('view', { title: 'View my data', userData: data });
  })
});

/* DELETE data in View page. */
router.get('/delete/:deleteid', function(req, res, next) {
  var id = req.params.deleteid;
  contactModel.findByIdAndRemove(id).exec();

  res.redirect('/view');

});

module.exports = router;
