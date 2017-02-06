/*jshint esversion: 6 */
module.exports = function (req, res, next) {
    res.msg = function (code, msg, data) {
        var msg = {
            code,
            msg
        };
        if (data) {
            msg.data = data;
        }
        this.json(msg);
    };
    next();
};