var express = require("express");
var router = express.Router();
const lineNotifyLibs = require("./../libs/lineNotify");

/* GET users listing. */
router.get("/", function(req, res, next) {
    lineNotifyLibs.lineNotify(1, "Conntect is Success ");
    res.send("succes webservice");
});

module.exports = router;