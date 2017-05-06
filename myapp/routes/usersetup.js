var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usersetup');
});

router.post('/test/submit', function(req, res, next) {
  console.log("Inside here!");
  res.redirect('/test.php');
});



module.exports = router;
