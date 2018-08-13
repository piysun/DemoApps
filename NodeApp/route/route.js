var express = require('express');
var router = express.Router();
const Item = require('../shopinglist/shopinglist').Item;
const Counter = require('../shopinglist/shopinglist').Counter;

router.get('/testing_get_route', function (req, res, next) {

    Counter.find(function (err, items) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(items)

        }
    });
});

router.post('/insert_data', (req, res, next) => {

    let newShopingItem = new Item({
        iteamName: req.body.iteamName,
        iteamQuantity: req.body.iteamQuantity,
        IteamBought: req.body.IteamBought
    });
    newShopingItem.save((err, item) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ mgs: ' Item Save' });

        }
    });
});

router.post('/insertcounter', (req, res, next) => {
    Counter.count({}, function (err, c) {
        console.log('Count is ' + c);
        
        if (err) {
            console.log(err);
        } else {
            let counterID = new Counter({
                seq: req.body.seq,
                uniceId: "BVG"+c++
            });
            counterID.save((err, data) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json({ mgs: ' Item Save>>>>>>!' });
                }
            });
        }

    });
});
router.post('/update_data/:id', (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            iteamName: req.body.iteamName,
            iteamQuantity: req.body.iteamQuantity,
            IteamBought: req.body.IteamBought
        }
    },
        function (error, result) {
            if (error) {
                res.json(error);
            }
            else {
                res.json();
            }
        })
});

router.delete('/delete_data', (req, res, next) => {

});
module.exports = router;
