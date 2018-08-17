
const mongoose = require('mongoose');
var AutoIncrement = require('../entry').AutoIncrement;

const ShopingItemsScama = mongoose.Schema({

    iteamName: { type: String, require: true,index: {unique: true}},
    iteamQuantity: { type: Number, require: true },
    IteamBought: { type: Boolean, require: true }

});

var CounterSchema = mongoose.Schema({
    seq: { type: String, default: 0, index: { unique: true } },
    uniceId: { type: String }
});
var Counter = mongoose.model('Counter', CounterSchema);

const Item = mongoose.model('Item', ShopingItemsScama);
module.exports = {
    Item: Item,
    Counter: Counter
}