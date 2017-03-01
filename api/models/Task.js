var mongoose = require('./db');
var schema = mongoose.Schema({
    taskid: String,
    files: Array
});
schema.static.addFile = function(taskid, fileName) {


};
module.exports = mongoose.model('task', schema);