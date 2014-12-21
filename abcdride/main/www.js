#!/usr/bin/env node
/**********
 *
 * should start module config first
 */
var fs = require('fs');
var express = require('express');
var passport = require('passport');
var config = require("../config/config");
var common = require("../common");

var app = express();
var port = process.env.PORT || 3000;


// Bootstrap models like classLoader
["action", "service", "dao"].forEach(function (subdir) {
    fs.readdirSync(__dirname + '/../app/' + subdir).forEach(function (file) {
        if (~file.indexOf('.js')) require(__dirname + '/../app/' + subdir + '/' + file);
    });

});




// The project's individual business modules assembling below
// Bootstrap passport config
require('./config/passport')(passport, config);

// Bootstrap application underlying settings
require('../config/express')(app, passport);

// Bootstrap routes
require('../config/routes')(app, passport, common.ErrCode);


// Starting server after all preparations
var server = app.listen(port, function () {
    console.log('Express app started on port ' + port);

});

/**
 * Expose
 */
//This file is the top level of the system, so note it's not to be injected down-stairs
process.httpServer = server;
process.app = app;
