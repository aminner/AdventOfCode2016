var fs = require("fs");

exports.read = (fileLocation, callback) =>
{
    fs.readFile(fileLocation, function (err, data) {
        if (err) {
            callback.error(err);
        }
        callback.successful(data.toString());
    });
}
