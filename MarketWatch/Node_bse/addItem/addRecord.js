
const mongoose = require('mongoose');

<<<<<<< HEAD
const User_Info = mongoose.Schema({

    user_Id: { type: String, require: true, default: 0, index: { unique: true } },
    user_Name: { type: String, require: true },
    user_Email: { type: String, require: true },
    user_Token: { type: String }

});

const Stock_Info = mongoose.Schema({

    user_Id: { type: String, require: true },
    stock_Symbol: { type: String, require: true },
    stock_BuyPrice: { type: Number, require: true },
    stock_TargetPrice: { type: Number, require: true },
    stock_High: { type: String },
    stock_Low: { type: String },
    stock_PushMail: { type: Boolean, require: true },
    stock_Profit: { type: String, require: true },
    stock_Sell: { type: Boolean, require: true }

});
const User_InfoTB = mongoose.model('User_InfoTB', User_Info);
const Stock_InfoTB = mongoose.model('Stock_InfoTB', Stock_Info);
module.exports = {
    User_InfoTB: User_InfoTB,
    Stock_InfoTB: Stock_InfoTB

}




//55845666138-c9pvbv0ibocnsa872v0cgrslo6agrj13.apps.googleusercontent.com
=======
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
>>>>>>> 27205880e76a213522704382768c1e5710287037
