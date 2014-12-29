/*!
 * Module dependencies.
 */
var usersAction = require('../app/action/userAction');
var tracksAction = require('../app/action/trackAction');
var activAction = require('../app/action/activAction');

/**
 * Expose routes
 */

module.exports = function (app, passport, errorCode) {

    // user routes
    app.post("/signup", usersAction.create);
    app.post("/login", usersAction.login);
    app.post("/getActivities", activAction.list);
    app.post("/getActivityDetail", activAction.activDetail);
    app.post("/getActivityRegister", activAction.roster);
    app.post("/getRideTrackList", tracksAction.listTracks);

    /**
     * Error handling
     */

    app.use(function (err, req, res, next) {
        // treat as 404
        if (err.message
            && (~err.message.indexOf('not found')
            || (~err.message.indexOf('Cast to ObjectId failed')))) {
            return next();
        }
        console.error(err.stack);
        // error page
        res.status(200).end(JSON.stringify({code: errorCode.customFailure, msg: err.message}));
    });

    // assume 404 since no middleware responded
    app.use(function (req, res, next) {
        return res.status(404).end();
    });
};
