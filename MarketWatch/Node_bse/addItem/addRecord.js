
const mongoose = require('mongoose');

const marketWatchUserInfoSchema = mongoose.Schema({
    userID: { type: String, require: true },
    userEmailID: { type: String, require: true },
    fullName: { type: string, require: true },
    fcmToken: { type: string, require: true }
});
const marketWatchStockListSchema = mongoose.Schema({

    userID: { type: String, require: true },
    stockSymbol: { type: String, require: true },
    stockByPrice: { type: string, require: true },
    stockTargetPrice: { type: string, require: true },
    stockLastHigh: { type: string, require: true },
    stockLastLow: { type: string, require: true },
    stockProfit: { type: string, require: true },
    stockSell: { type: string, require: true },
    stockSendMail: { type: string, require: true },
    stockStopNotification: { type: string, require: true }

});

const marketWatchUserInfoSchema = mongoose.model('MarketWatch', marketWatchUserInfoSchema);
const marketWatchStockListSchema = mongoose.model('MarketWatch', marketWatchStockListSchema);
module.exports = {
    marketWatchUserInfoSchema: marketWatchUserInfoSchema,
    marketWatchStockListSchema: marketWatchStockListSchema
}