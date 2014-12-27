var common = require("../../common");
var Schema = common.DBObject.Schema;

var remarkTrackRsSchema = new Schema({
    _id: {type: Schema.Types.Mixed, required: true},
    isliked: {type: Boolean, default: false},
    comment: {type: String, default: ""},
    t: {type: Schema.Types.Long, required: true}

}, {versionKey: false});


var remarkTrackDao = module.exports = exports =
    common.DBObject.archives.model("RemarkTrackRS", remarkTrackRsSchema);