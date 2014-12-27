var common = require("../../common");
var Schema = common.DBObject.Schema;

var activitySchema = new Schema({
    _id: {type: Number, required: true},
    ct: {type: String, default: "Beijing, China", index: true},
    bgimg: {type: String, default: ""},
    stdate: {type: Date, default: Date.now},
    enddate: {type: Date, default: Date.now},
    deadline: {type: Date, default: Date.now},
    rgstnum: {type: Number, default: 0},
    totalmile: {type: Number, default: 0},
    desc: {type: String, default: ""},
    title: {type: String, default: ""},
    brief: {type: String, default: ""}

}, {versionKey: false});


var activityDao = module.exports = exports =
    common.DBObject.hotspots.model("Activity", activitySchema);
