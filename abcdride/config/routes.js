/*!
 * Module dependencies.
 */
//var vod = require('../app/action/vod');

/**
 * Expose routes
 */

module.exports = function (app, passport, errorCode) {

    // user routes
    //app.use()
    app.get("/eee", function(req, res){

        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("12347569111111111111119000");

    });




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
        res.status(500).render('500', {error: err.stack});
    });

    // assume 404 since no middleware responded
    app.use(function (req, res, next) {
        return res.status(404).end();
    });
};
