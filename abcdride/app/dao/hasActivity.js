var common = require("../../common");
var Schema = common.DBObject.Schema;


var userActivRsSchema = new Schema({
    _id: {type: Schema.Types.Mixed, required: true},
    avespeed: {type: Number, default: 0.1},
    dmile: {type: Number, default: 0},
    isrgst: {type: Boolean, default: false},
    t: {type: Schema.Types.Long, required: true}

}, {versionKey: false});

var hasActivDao = module.exports = exports =
    common.DBObject.hotspots.model(common.Consts.DB.RS.hasActivity, userActivRsSchema);