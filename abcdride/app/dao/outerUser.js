var common = require("../../common");
var Schema = common.DBObject.Schema;


var openUserSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, default: ""},
    tkn: {type: String, required: true, index: {unique: true, sparse: true}},
    provider: {type: String, required: true},
    avatar_url: {type: String, default: ""}
}, {versionKey: false});

openUserSchema.path("name").validate(function (name) {
    return name.length;
});

openUserSchema.statics = {

    loadByToken: function (token, cb) {
        this.findOne({tkn: token})
            .select("_id name avatar_url")
            .exec(cb);
    }
};


var outerUserDao = module.exports = exports =
    common.DBObject.hotspots.model('OuterUser', openUserSchema);