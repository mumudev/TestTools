var express = require('express');
var Model = require('../models/Upload');
var multiparty = require('multiparty');
var fileHandler = require('../util/fileHandler');
var fs = require('fs');
var router = express.Router();

router.route('/:id?')
    .post(function(req, res) {
        var defaultDir = './pub/files/';
        var username = req.session.user ? req.session.user.username : 'default';
        var userDir = defaultDir + username;

        fileHandler.fileCreate(defaultDir, username).then(function() {
            var form = new multiparty.Form({ uploadDir: userDir });
            form.parse(req, function(err, fields, files) {
                if (err) {
                    res.status(500);
                    return res.msg(0, 'Something error!');
                }
                var taskid = fields.taskid;
                var inputFile = files.file[0];
                var uploadedPath = inputFile.path;
                var taskPath = userDir + '/' + taskid + inputFile.originalFilename;
                fs.rename(uploadedPath, taskPath, function(err) {
                    if (err) {
                        res.status(500);
                        return res.msg(0, 'Something error!');
                    }
                    return res.msg(1, 'Create object success!');
                });
            });
        });

    });
module.exports = router;