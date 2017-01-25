var express = require('express');
var Model = require('../models/User');
var router = express.Router();

router.use('/', function(req, res, next) {
    // if (!req.session.user) {
    //     return res.json({
    //         code: -1,
    //         msg: 'You need to login!'
    //     });
    // }
    next();
});
router.route('/:id?')
    .get(function(req, res) {
        var id = req.params.id;
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Id is not available!');
            }
            return res.msg(1, 'Get data success!', obj);
        };
        Model.findById(id).exec(callback);
    })
    .post(function(req, res) {
        var body = req.body;
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Something error! Please check your params');
            }
            return res.msg(1, 'Create object success! Id:' + obj._id);
        };
        Model.create(body, callback);
    })
    .patch(function(req, res) {
        var id = req.params.id;
        var query = req.query;
        var body = { $set: req.body };
        var options = {
            new: true
        };
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Something error! Please check your params');
            }
            return res.msg(1, 'Update object success!');
        };
        if (id) {
            Model.findByIdAndUpdate(id, body, options, callback);
        } else {
            Model.update(query, body, options, callback);
        }
    })
    .delete(function(req, res) {
        var id = req.params.id;
        var query = req.query;
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Something error! Please check your params');
            }
            return res.msg(1, 'Delete object success!');
        };
        if (id) {
            Model.findByIdAndRemove(id, callback);
        } else {
            Model.remove(query, callback);
        }

    });
module.exports = router;