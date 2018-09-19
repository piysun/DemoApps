
const mongoose = require('mongoose');

const marketWatchUserInfoSchema = mongoose.Schema({
    userID: { type: String, required: true },
    userEmailID: { type: String, required: true },
    fullName: { type: String, required: true },
    fcmToken: { type: String, required: true }
});

const marketWatchStockListSchema = mongoose.Schema({

    userID: { type: String, required: true },
    stockSymbol: { type: String, required: true },
    stockByPrice: { type: String, required: true },
    stockTargetPrice: { type: String, required: true },
    stockLastHigh: { type: String, required: true },
    stockLastLow: { type: String, required: true },
    stockProfit: { type: String, required: true },
    stockSell: { type: String, required: true },
    stockSendMail: { type: String, required: true },
    stockStopNotification: { type: String, required: true }

});

const marketWatchUserInfo = mongoose.model('marketWatchUserInfo', marketWatchUserInfoSchema);
var marketWatchStockList = mongoose.model('marketWatchStockList', marketWatchStockListSchema);

module.exports = {
    marketWatchUserInfo: marketWatchUserInfo,
    marketWatchStockList:marketWatchStockList
}
