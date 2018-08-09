var express = require('express');
var router = express.Router();
const Item = require('../shopinglist/shopinglist').Item;
const UserProfile = require('../shopinglist/shopinglist').UserProfile;

router.get('/testing_get_route', function (req, res, next) {

    Item.find(function (err, items) {
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

router.post('/update_data/:id', (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            iteamName: req.body.iteamName,
            iteamQuantity: req.body.iteamQuantity,
            IteamBought: req.body.IteamBought
        }
    },
    function(error ,result){
        if (error) {
            res.json(error);
        }
        else {
            res.json();
        }
    })
});

router.delete('delete_data', (req, res, next) => {

});

router.post('/insertUser', (req, res, next) => {
    let userProfile = new UserProfile({
        userId: req.body.userId,
        userName: req.body.userName,
    });
    userProfile.save((err, userProfile) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ mgs: ' Item Save' });
        }
    });
});

router.get('/allUserProfile', function (req, res, next) {

    UserProfile.find(function (err, data) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    });
});

module.exports = router;
