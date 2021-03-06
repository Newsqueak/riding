var config = require("../config/config.js");
var archvMongo = require("mongoose");
var busiMongo = new archvMongo.Mongoose();

// Connect to mongodb
//TODO : write into Primary Node and read from Secondary Nodes  && config.db split into archive and busiOne
var archvConnect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    archvMongo.connect(config.archvDb, options);
};
var busiConnect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    busiMongo.connect(config.busiDb, options);
};

archvConnect();
busiConnect();
archvMongo.connection.on('error', console.log);
busiMongo.connection.on('error', console.log);
archvMongo.connection.on('disconnected',archvConnect);
busiMongo.connection.on('disconnected', busiConnect);


require("mongoose-long")(archvMongo);
var mySchema = archvMongo.Schema;

var dbObject = module.exports = exports = {
    archives: archvMongo
    , hotspots: busiMongo
    , Schema: mySchema
};