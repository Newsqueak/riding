var User = require("../dao/user");
var utils = require("../../lib/utils");
var common = require("../../common");

exports.create = function (req, res, next) {

    var username = req.body["username"] || "";
    var email = common.Consts.REGEXP.isEmail.test(username) ? username : "";
    var phone = common.Consts.REGEXP.isPhone.test(username) ? username : "";
    var passwd = req.body["password"] || "";
    var id = common.Consts.DB.NODE.user + common.Consts.Split
        + utils.objectId("" + username + new Date().getTime(), 3);
    var token = utils.token("" + username + passwd + new Date().getTime());
    var nickname = req.body["name"] || username || "un-named";
    var avatarUrl = req.body["avatar_url"] || "";
    var aUser = new User({
        _id: id,
        un: username,
        email: email,
        phone: phone,
        name: nickname,
        tkn: token,
        avatar_url: avatarUrl
    });

    aUser.password = passwd;

    aUser.save(function (err) {
        if (err) return next(err);
        res.status(200).end(JSON.stringify({code: 0, token: token}));

    });

};

exports.login = function (req, res, next) {

    var username = req.body["email"] || req.body["phone"];
    var passwd = req.body["password"] || "";
    User.load({
        criteria: {un: username},
        select: "_id name salt tkn hashed_password"
    }, function (err, user) {
        if (err) return next(err);
        if (!user) return next(new Error("您尚未注册"));
        if (!user.authenticate(passwd)) return next(new Error("密码不正确"));

        res.status(200).end(JSON.stringify({code: 0, token: user.tkn}));

    });


};
