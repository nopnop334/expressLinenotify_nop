var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Page not Found 404 Nope');
});

module.exports = router;