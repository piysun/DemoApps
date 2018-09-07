var express = require('express');
var router = express.Router();
const marketWatchUserInfoSchema = require('../addItem/addRecord').marketWatchUserInfoSchema;

router.post('/insert_list', (req, res, next) => {

    let marketWatchUserInfoSchemaInsert = new marketWatchUserInfoSchema({
        stockID: req.body.stockID,
        stockName: req.body.stockName,
        stockByePrice: req.body.stockByePrice,
        stockTargetPrice: req.body.stockTargetPrice
    });
    marketWatchUserInfoSchemaInsert.save((err, item) => {
        if (err) {

            res.json(err);

        }
        else {
            res.json({ mgs: ' Item Save' });

        }
    });
});

module.exports = router;