const request = require("request");

exports.lineNotify = function(round, msg) {
    for (let index = 0; index < round; index++) {
        var token = "gHvdKEqlAGtfzvQJ0fIak2UqPfh30oikRJZXDi7PIJX";
        var message = msg;

        request({
            method: "POST",
            uri: "https://notify-api.line.me/api/notify",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            auth: {
                bearer: token
            },
            form: {
                message: message
            }
        });
    }
};