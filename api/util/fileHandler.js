var fs = require('fs');
var fileCreate = function(defaultDir, sec) {
    var promise = new Promise(function(resolve, reject) {
        var newPath = defaultDir + '/' + sec;
        fs.exists(newPath, function(exists) {
            if (!exists) {
                fs.mkdirSync(newPath);
            }
            resolve();
        });
    });
    return promise;
};
var getFilesByRegExp = function(targetPath, regexp) {
    var files = fs.readdirSync(targetPath);
    var r = new RegExp('^' + regexp);
    var newFile = [];
    files.forEach(function(file) {

        if (r.test(file)) {
            console.log(1);
            newFile.push(file);
        }
    });
    return newFile;
}
module.exports = {
    fileCreate: fileCreate,
    getFilesByRegExp: getFilesByRegExp
};