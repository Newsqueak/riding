var Activ = require("../dao/activity");
var HasActiv = require("../dao/hasActivity");
var User = require("../dao/user");
var HasSport = require("../dao/hasSport");
var utils = require("../../lib/utils");
var common = require("../../common");

exports.list = function (req, res, next) {

    var result = {
        "code": 0,
        "page": 1,
        "max_page": 10,
        "activities": [
            {
                "id": 1,
                "title": "滑雪探险",
                "brief": "去一个130公里骑自行车探险。",
                "deadline": "2014-11-31 08:23:00",
                "total_user": 143,
                "is_register": true,
                "image_url": "http://ip:port/a1.jpg"
            },
            {
                "id": 2,
                "title": "炎热的七月",
                "brief": "去一个470公里单车探险。",
                "deadline": "2014-11-31 08:23:00",
                "total_user": 4323,
                "is_register": false,
                "image_url": "http://ip:port/a2.jpg"
            }
        ]
    };

    res.status(200).end(JSON.stringify(result));

};

exports.activDetail = function (req, res, next) {

    var activId = req.body["activity_id"];
    if (!activId) return next(new Error("缺少参数"));
    var result = {
        "code": 0,
        "activity": {
            "done_mile": 18000,
            "background_image": "http://ip:port/1.jpg",
            "start_date": "2014-11-23 09:32:11",
            "end_date": "2014-12-22 08:23:22",
            "register_count": 581,
            "total_mile": 420193,
            "ave_speed": 3.54,
            "desc": "http://ip:port/1.html"
        }
    };
    res.status(200).end(JSON.stringify(result));

};

exports.roster = function (req, res, next) {

    var activId = req.body["activity_id"];
    if (!activId) return next(new Error("缺少参数"));
    var result = {
        "code": 0,
        "people": [
            {
                "id": "u:duk3IdBFCI4NrzavsO8GqwTl1Fqev",
                "name": "Michael Splitz",
                "total_mile": 36432,
                "ave_speed": 5.32,
                "avatar_url": "http://ip:port/1.jpg"
            },
            {
                "id": "u:d7bfN_qkQn72_EMVN2zV_aCvmGFRH",
                "name": "Chun Leung",
                "total_mile": 43432,
                "ave_speed": 3.32,
                "avatar_url": "http://ip:port/2.jpg"
            }
        ]
    };
    res.status(200).end(JSON.stringify(result));


};