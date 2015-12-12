var express = require('express');
var ctrl = require('../app_server/controllers/main');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
module.exports = function (app) {
  app.get('/', ctrl.index);
};
