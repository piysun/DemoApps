
const mongoose = require('mongoose');

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