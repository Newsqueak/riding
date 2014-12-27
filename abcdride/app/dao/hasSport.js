var common = require("../../common");
var Schema = common.DBObject.Schema;


var userSportRsSchema = new Schema({
    _id: {type: Schema.Types.Mixed, required: true},
    totalmile: {type: Number, default: 0},
    avespeed: {type: Number, default: 0.1},
    t: {type: Schema.Types.Long, required: true}
}, {versionKey: false});


var hasSportDao = module.exports = exports =
    common.DBObject.hotspots.model(common.Consts.DB.RS.hasSport, userSportRsSchema);