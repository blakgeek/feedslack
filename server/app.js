/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
// var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to
// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongo.uri, config.mongo.options);

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);
// Error handler - has to be last
require('./errorHanding')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Feedslack server is listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
