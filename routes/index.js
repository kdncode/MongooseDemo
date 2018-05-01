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

/* UPDATE data in View page. */
router.get('/update/:updateid', function(req, res, next) {
  var id2 = req.params.updateid;
  contactModel.find({_id : id2}, function(err, data) {
    res.render('update', { title : 'Update data', userData : data})
  });
});

/* POST to update data in View page. */
router.post('/update/:updateid', function(req, res, next) {
  var id2 = req.params.updateid;

  // Base on id, name, age then manipulate from View to DB
  contactModel.findById(id2, function(err, data) {
    if (err) return handleError(err);
    data.name = req.body.name;
    data.age = req.body.age;
    data.save();
    res.redirect('/view')
  })
  
});

module.exports = router;
