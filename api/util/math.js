var randomStr = function (a) {
    var d,
        e,
        b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        c = "";
    for (d = 0; a > d; d += 1)
        e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
    return c;
};
module.exports = {
    randomStr: randomStr
};