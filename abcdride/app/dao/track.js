var common = require("../../common");
var Schema = common.DBObject.Schema;


var pointSchema = new Schema({
    lon: {type: Number, default: 0.1},
    lat: {type: Number, default: 0.1},
    degree: {type: Number, default: 0.1},
    speed: {type: Number, default: 0.1}

}, {versionKey: false});

var trackSchema = new Schema({
    _id: {type: Schema.Types.Mixed, required: true},
    rider: {
        name: {type: String, default: ""},
        totalmile: {type: Number, default: 0},
        avespeed: {type: Number, default: 0.1},
        avatar_url: {type: String, default: ""}
    },
    miles: {type: Number, default: 0},
    date: {type: Date, default: Date.now},
    likenum: {type: Number, default: 0},
    commentnum: {type: Number, default: 0},
    points: [pointSchema]
}, {versionKey: false});

trackSchema.statics = {

    loadByUid: function (user_id, cb) {
        var criteria = {};
        criteria["_id." + common.Consts.DB.NODE.user] = user_id;
        this.find(criteria).sort("-date").exec(cb);

    },

    loadAll: function (cb) {
        this.find().sort("-date").exec(cb);

    }


};


var trackDao = module.exports = exports =
    common.DBObject.archives.model("Track", trackSchema);
