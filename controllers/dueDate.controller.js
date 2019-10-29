const DueDate = require('../models/dueDate.model');

exports.dueDate_load = function (req, res, next) {
    DueDate.findOne({ id: '1' }, function (err, dueDate) {
        if (err) return next(err);
        res.send(dueDate);
    });
};

exports.dueDate_update = function (req, res, next) {
    DueDate.findOne({ id: '1' }, function (err, dueDate) {
        if (err) return next(err);
        console.log(dueDate);
        console.log(req.body);
        if (req.body.Book >= 0) {
            dueDate.Book = req.body.Book;
        }
        if (req.body.CD >= 0) {
            dueDate.CD = req.body.CD;
        }

        dueDate.save(function (err, dueDate) {
            if (err) {
                console.log(err);
                next(err);
            }
            res.send(dueDate);
        });

    });
};

