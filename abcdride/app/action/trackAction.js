var Track = require("../dao/track");
var RemarkTrack = require("../dao/remarkTrack");
var utils = require("../../lib/utils");
var common = require("../../common");

exports.listTracks = function (req, res, next) {

    var result = {
        "code": 0,
        "tracks": [
            {
                "id": "t:b5d8EZKLDYkWcRrZzvN-eSrm4XzFtDhPHox",
                "rider": {
                    "name": "Chun Leung",
                    "total_mile": 36432,
                    "ave_speed": 5.32,
                    "avatar_url": "http://ip:port/1.jpg"
                },
                "miles": 2132144,
                "date": "2014-07-22 08:22:31",
                "like_count": 43,
                "comment_count": 12,
                "is_liked": true,
                "points": [
                    {
                        "lon": 116.4,
                        "lat": 39.9,
                        "degree": 12.2,
                        "speed": 32.4
                    },
                    {
                        "lon": 116.4,
                        "lat": 39.9,
                        "degree": 12.2,
                        "speed": 32.4
                    }
                ]
            }
        ]
    };
    res.status(200).end(JSON.stringify(result));


};