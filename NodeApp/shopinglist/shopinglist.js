const mongoose = require('mongoose');

const ShopingItemsScama = mongoose.Schema({

    iteamName:{
        type:String,
        require:true
    },
    iteamQuantity:{
        type:Number,
        require:true
    },
    IteamBought:{
        type:Boolean,
        require:true
    }

});

const Item = module.exports = mongoose.model('Item',ShopingItemsScama)