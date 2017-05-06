var express = require('express');
var router = express.Router();
//var vd videodata = require('../videodata.json');
//var ud userdata = require('../userdata.json');




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});
module.exports = router;
