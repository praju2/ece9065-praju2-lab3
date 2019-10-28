const Item = require('../models/item.model');


exports.items = function (req, res) {
    Item.find({}, function (err, item) {
        if (err) return next(err);
        console.log(item);
        res.send(item);
    });
};


exports.item_details = function (req, res) {
    Item.findById(req.body.id, function (err, item) {
        if (err) return next(err);
        console.log(item);
        res.send(item);
    });
};

exports.item_create = function (req, res) {

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
            name_lang_2 :  req.body.nameObj.name_fr 
        }
    );

    item.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Product Created successfully');
    }

    );
};

exports.item_update = function (req, res) {
    Item.findByIdAndUpdate(req.body.id, function (err, item) {
        if (err) return next(err);
        console.log(item);
        res.send(item);
    });
};

exports.item_delete = function (req, res) {
        Item.findByIdAndDelete(req.body.id, function (err, item) {
            if (err) return next(err);
            console.log(item);
            res.send(item);
        });

};