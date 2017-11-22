var express = require('express');
var router = express.Router();

/*var homepageController = function(req, res, next) {
  res.render('index', { title: 'Express' });
};*/

var ctrlMain = require('../controllers/main');

/* GET home page. */
//router.get('/', homepageController); 

router.get('/', ctrlMain.index);

module.exports = router;
