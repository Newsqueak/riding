var common = require("../../common");
var Schema = common.DBObject.Schema;


var userActivRsSchema = new Schema({
    _id: {type: Schema.Types.Mixed, required: true},
    avespeed: {type: Number, default: 0.1},
    dmile: {type: Number, default: 0},
    isrgst: {type: Boolean, default: false},
    t: {type: Schema.Types.Long, required: true}

}, {versionKey: false});

userActivRsSchema.statics = {

    loadUserActivRS: function (user_id, activ_id, cb) {
        var criteria = {};
        criteria["_id." + common.Consts.DB.NODE.user] = user_id;
        criteria["_id." + common.Consts.DB.NODE.activity] = activ_id;
        this.findOne(criteria).exec(cb);

    },
    loadItsRoster: function (activ_id, cb) {
        var criteria = {};
        criteria["_id." + common.Consts.DB.NODE.activity] = activ_id;
        criteria["isrgst"] = true;
        this.find(criteria).sort("-dmile").select("_id").exec(cb);

    }

};


var hasActivDao = module.exports = exports =
    common.DBObject.hotspots.model(common.Consts.DB.RS.hasActivity, userActivRsSchema);