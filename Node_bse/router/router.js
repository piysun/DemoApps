var express = require('express');
var router = express.Router();
const MarketWatch = require('../addItem/addRecord').MarketWatch;

router.post('/insert_list', (req, res, next) => {

    let marketWatchInsert = new MarketWatch({
        stockID: req.body.stockID,
        stockName: req.body.stockName,
        stockByePrice: req.body.stockByePrice,
        stockTargetPrice: req.body.stockTargetPrice
    });
    marketWatchInsert.save((err, item) => {
        if (err) {

            res.json(err);

        }
        else {
            res.json({ mgs: ' Item Save' });

        }
    });
});

module.exports = router;