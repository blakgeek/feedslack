/**
 * Main application routes
 */

'use strict';

var errors = require('rest-api-errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/feedback', require('./api/feedback'));
  

  // All other routes should return not implemented
  app.use(function(req, resp, next) {

    throw new errors.NotImplemented();
  });
};
