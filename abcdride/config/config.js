/**
 * Module dependencies.
 */

var path = require('path');
var extend = require('util')._extend;

/**
 * sorry , no time to deal with this
 *
var development = require('./env/development');
var test = require('./env/test');
var production = require('./env/production');
 */

var production = {
    archvDb: process.env.MONGO_PRO_URL,
    busiDb: process.env.MONGO_PRO_URL
};

/**
 * This is an SMS or Email notification configuration part *
 */
var notifier = {
    service: 'postmark',
    APN: false,
    email: true, // true
    actions: ['comment'],
    // tplPath: path.normalize(__dirname + '/../app/mailer/templates'),
    key: 'POSTMARK_KEY'
};

var defaults = {
    root: path.normalize(__dirname + '/..'),
    notifier: notifier
};

/**
 * Expose
 */

module.exports = extend(production, defaults);
/**
 {
     development: extend(development, defaults),
     test: extend(test, defaults),
     production: extend(production, defaults)
 }[process.env.NODE_ENV || 'development'];
 */