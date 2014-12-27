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


activitySchema.statics = {

    loadByCityPerPage: function (city, pageIndex, unitNum, cb) {
        var skipNum = unitNum * (pageIndex - 1);
        var countQuery = this.find({ct: city});
        this.find({ct: city}).sort("deadline").skip(skipNum).limit(unitNum).exec(
            function (err, docs) {
                countQuery.count(function (errr, number) {
                    if (!err && !errr) {
                        cb(docs, Math.round(number * 1.0 / unitNum + 0.5));
                    }
                });


            }
        );

    }


};

var activityDao = module.exports = exports =
    common.DBObject.hotspots.model("Activity", activitySchema);
