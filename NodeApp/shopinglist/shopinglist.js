//this module will allow us to define schema for Mongodb database
const mongoose = require('mongoose');
const autoIncrement = require('../entry').autoIncrement;

const ShopingItemsScama = mongoose.Schema({
    iteamName: { type: String, require: true },
    iteamQuantity: { type: Number, require: true },
    IteamBought: { type: Boolean, require: true }
});

const userProfileScama = mongoose.Schema({
    userId: { type: Number, require: true },
    userName: { type: String, require: true }

});

var Item = mongoose.model('Item', ShopingItemsScama);

var UserProfile = mongoose.model('UserProfile', userProfileScama);
userProfileScama.plugin(autoIncrement.plugin,{
    'model': 'UserProfile',
    'field': 'userId',
    'startAt': 1,
    'incrementBy': 1
});
module.exports = {
    Item: Item,
    UserProfile: UserProfile
}