
const mongoose = require('mongoose');

const marketWatchSchema = mongoose.Schema({

    stockID: { type: String, require: true },
    stockName: { type: String, require: true },
    stockByePrice: { type: String, require: true },
    stockTargetPrice: { type: String, require: true }

});

const MarketWatch = mongoose.model('MarketWatch', marketWatchSchema);
module.exports = {
    MarketWatch: MarketWatch
}