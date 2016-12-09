var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var html = '<a href=\"' + term + '\">' + term + '</a>';
  res.json({
  body: html,
  raw: true
  });
};