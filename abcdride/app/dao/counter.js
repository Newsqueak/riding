var common = require("../../common");
var Schema = common.DBObject.Schema;


var counterSchema = new Schema({
    _id: {type: String, required: true},
    c: {type: Number, default: 0}
}, {versionKey: false});

counterSchema.statics = {

    useAtomicId: function (counterId, cb) {
        this.findByIdAndUpdate(counterId, {$inc: {c: 1}}, function (err, newOne) {
            if (!err) cb(newOne.c);
        });
    }

};

var counterDao = module.exports = exports =
    common.DBObject.archives.model("Counter", counterSchema);