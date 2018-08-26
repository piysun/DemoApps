const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
const userBasicDetailsSchema = mongoose.Schema({

    userId: { type: String, require: true, index: { unique: true } },
    userFname: { type: String, require: true },
    userLname: { type: String, require: true },
    userEmail: { type: String, require: true, default: 0, index: { unique: true } },
    userPassword: { type: String, require: true }
});

var userBasicDetails = mongoose.model('userBasicDetails', userBasicDetailsSchema);

module.exports = {
    userBasicDetails: userBasicDetails
}
