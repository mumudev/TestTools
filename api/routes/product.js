var express = require('express');
var Model = require('../models/User');
var router = express.Router();

router.route('/:id?')
    .get(function(req, res) {
        var queryJson = {};
        var _id = req.params._id;
        if (_id) {
            queryJson._id = _id;
        }
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Id is not available!');
            }

            if (!obj) {
                return res.msg(0, 'Data is Empty!');
            }

            return res.msg(1, 'Get data success!', obj);
        };
        Model.find(queryJson).exec(callback);
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