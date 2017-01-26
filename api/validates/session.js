var express = require('express');
var router = express.Router();
router.route('/:id?')
    .post(function(req, res, next) {
        // if (!req.session.user) {
        //     return res.msg(-1, 'You need to login!');
        // }
        next();
    })
    .delete(function(req, res, next) {
        // if (!req.session.user) {
        //     return res.msg(-1, 'You need to login!');
        // }
        next();
    });
module.exports = router;