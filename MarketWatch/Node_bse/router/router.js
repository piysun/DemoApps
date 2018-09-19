var express = require('express');
var _ = require('lodash');
var request = require("request");
var router = express.Router();
const marketWatchUserInfo = require('../addItem/addRecord').marketWatchUserInfo;
const marketWatchUserlist = require('../addItem/addRecord').marketWatchStockList;
var url = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json"
var q = require("q");

router.post('/insert_list', (req, res, next) => {

    let marketWatchUserInfoSchemaInsert = new marketWatchUserInfo({
        stockID: req.body.stockID,
        stockName: req.body.stockName,
        stockByePrice: req.body.stockByePrice,
        stockTargetPrice: req.body.stockTargetPrice
    });
    marketWatchUserInfoSchemaInsert.save((err, item) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ mgs: ' Item Save' });
        }
    });
});

//Below function will fetch stock data
var getStockData = function () {

    var deferred = q.defer();

    request("https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json", function (error, response, body) {

        //for checking if error or success
        if (!error) {

            console.log("Success in https call.");
            deferred.resolve(response.body); //sending response
        } else {

            console.log("Error while https call: " + JSON.stringify(error));
            deferred.reject(error); //sending error
        } //end of if...else condition checking for error        
    }); //end of request call

    return deferred.promise;
} 

var sendEmail = async function () {

    try {

        var nseData = await getStockData();
        var triggerObject = [{ "symbol": "RECLTD", "trigger": 116.95, "targetHit": false }, { "symbol": "infy", "trigger": 700, "targetHit": true }];
        // setTimeout(function () {
        nseData = JSON.parse(nseData);

        // }, 1000)

        // var nseData = [{ "symbol": "tcs", currentRate: 1000 }, { "symbol": "infy", currentRate: 680 }, { "symbol": "pcj", currentRate: 100 }];

        triggerObject.forEach(function (triggerObj, index) {

            if (!triggerObj.targetHit) {

                var result = _.filter(nseData.data, function (obj) {
                    console.log("***", obj);

                    if (triggerObj.symbol == obj.symbol && obj.ltP >= triggerObj.trigger) {

                        return obj;
                    } //end of if condition
                }); //end of lodash filter

                //for checking if trigger is hit
                if (result.length > 0) {

                    //remove object from triggerObject
                    triggerObject[index].targetHit = true;

                    //send mail for trigger hit
                }
            } //end of triggerObj.targetHit checking if condition
        }); //end of forEach loop
    } catch (error) {

        console.log("Failed while retrieving data from NSE.", error);
    } //end of try...catch block

    setTimeout(sendEmail, 10 * 1000);
}
setTimeout(sendEmail, 10 * 1000);

module.exports = router;