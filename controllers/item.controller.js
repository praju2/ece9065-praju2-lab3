const Item = require('../models/item.model');


exports.items = function (req, res, next) {
    Item.find({}, function (err, item) {
        if (err) return next(err);
        res.send(item);
    });
};


exports.item_details = function (req, res, next) {
    Item.findById(req.params.id, function (err, item) {
        if (err) return next(err);
        res.send(item);
    });
};

exports.item_create = function (req, res, next) {

    let item = new Item(
        {
            type: req.body.type,
            name: req.body.name,
            publisher: req.body.publisher,
            author: req.body.author,
            edition: req.body.edition,
            copies: req.body.copies,
            image: req.body.image,
            active: req.body.active,
            name_lang_2: req.body.nameObj.name_fr
        }
    );

    item.save(function (err) {
        if (err) {
            next(err);
        }
        res.send('Product Created successfully');
    }

    );
};
exports.item_update = function (req, res, next) {
    Item.findById(req.body.id, function (err, item) {
        if (err) return next(err);
        if (req.body.copies >= 0) {
        item.copies = req.body.copies;
            if (item.copies === 0) {
                item.active = false;
            }else if (item.copies > 0) {
                item.active = true;
            }
        }
        if (req.body.image) item.image = req.body.image;

        item.save(function (err, item) {
            if (err) {
                next(err);
            }
            res.send(item);
        }

        );

    });
};

exports.item_delete = function (req, res, next) {
    Item.findByIdAndDelete(req.body.id, function (err, item) {
        if (err) return next(err);
        res.send(item);
    });

};