var common = require("../../common");
var Schema = common.DBObject.Schema;

var remarkTrackRsSchema = new Schema({
    _id: {type: Schema.Types.Mixed, required: true},
    isliked: {type: Boolean, default: false},
    comment: {type: String, default: ""},
    t: {type: Schema.Types.Long, required: true}

}, {versionKey: false});

remarkTrackRsSchema.statics = {

    getOnesRemark: function (user_id, track_id, cb) {
        var criteria = {};
        criteria["_id." + common.Consts.DB.NODE.user] = user_id;
        criteria["_id." + common.Consts.DB.NODE.track] = track_id;
        this.findOne(criteria).exec(cb);
    }

};

var remarkTrackDao = module.exports = exports =
    common.DBObject.archives.model("RemarkTrackRS", remarkTrackRsSchema);