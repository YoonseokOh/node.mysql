var express = require('express');
var path = require('path');
var router = express.Router();
var clientIndex = path.join(__dirname, '../dist/index.html');

router.get(/.*/, function(req, res, next) {
  res.sendFile(clientIndex, function(err) {
    if (err) {
      next(err);
    }
  });
});

module.exports = router;
