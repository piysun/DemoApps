var express = require('express');
var _ = require('lodash');
var request = require("request");
var randomString = require("randomstring");
var router = express.Router();
const marketWatchUserInfo = require('../addItem/addRecord').marketWatchUserInfo;

const User_InfoTB = require('../addItem/addRecord').User_InfoTB;
const Stock_InfoTB = require('../addItem/addRecord').Stock_InfoTB;
var url = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json"
var q = require("q");
var mail = require('../mail/mail');
var smtpFile = require("../mail/smtp");

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

            //  console.log("Success in https call.");
            deferred.resolve(response.body); //sending response
        } else {

            //    console.log("Error while https call: " + JSON.stringify(error));
            deferred.reject(error); //sending error
        } //end of if...else condition checking for error        
    }); //end of request call

    return deferred.promise;
}

/* Below function will get NSE data.
 * After getting data from NSE it will fetch records from target data.
 * It will then match for target.
 * If target is achieved then it will send mail.
 */
var checkTarget = async function () {
    console.log("1");
    try {

        //Getting NSE data
        var nseData = await getStockData();

        //Parsing data to JSON
        nseData = JSON.parse(nseData);

        nseData.data.forEach(async function (stockObject) {

            var queryObject = {
                'stock_Symbol': stockObject.symbol,
                'stock_PushMail': false
            }; //end of query object

            var targetRecords = await Stock_InfoTB.find(queryObject);

            //Below loop will check for the target hit or not
            targetRecords.forEach(async function (targetRecordObject) {

                console.log("targetRecordObject.stock_TargetPrice: " + targetRecordObject);
                // console.log("stockObject.ltP: " + stockObject.ltP);
                if (targetRecordObject.stock_TargetPrice <= stockObject.ltP) {
                    console.log("true fun");
                    var UserQuery = {
                        'user_Id': targetRecordObject.user_Id
                    }; //end of query oject for user Datails
                    var getUserDeatail = await User_InfoTB.find(UserQuery);

                    //send mail using userID, symbol, ltp
                    smtpFile.sendNotificationMail(getUserDeatail, targetRecordObject.stock_Symbol, stockObject.ltP);
                    // mail.sendNotificationMail(getUserDeatail, targetRecordObject.stock_Symbol, stockObject.ltP);
                    //set PushMail to true update
                } //end of if condition checking for target hit or not
            }); //end of forEach loop iterating for targetRecords
        }); //end of forEach loop iterating for NSE data.
    } catch (error) {
        console.log("error", error);
    } //end of try...catch block
    //  setTimeout(checkTarget, 10 * 1000);
    // }
    // 
} //end of checkTarget function
//setTimeout(checkTarget, 10 * 1000);
// var checkTrigger = async function () {

//     try {

//         var nseData = await getStockData();
//         var triggerObject = [{ "symbol": "RECLTD", "trigger": 116.95, "targetHit": false }, { "symbol": "infy", "trigger": 700, "targetHit": true }];
//         // setTimeout(function () {
//         nseData = JSON.parse(nseData);

//         // }, 1000)

//         // var nseData = [{ "symbol": "tcs", currentRate: 1000 }, { "symbol": "infy", currentRate: 680 }, { "symbol": "pcj", currentRate: 100 }];

//         triggerObject.forEach(function (triggerObj, index) {

//             if (!triggerObj.targetHit) {

//                 var result = _.filter(nseData.data, function (obj) {
//                     //  console.log("***", obj);

//                     if (triggerObj.symbol == obj.symbol && obj.ltP >= triggerObj.trigger) {

//                         return obj;
//                     } //end of if condition
//                 }); //end of lodash filter

//                 //for checking if trigger is hit
//                 if (result.length > 0) {

//                     //remove object from triggerObject
//                     triggerObject[index].targetHit = true;

//                     //send mail for trigger hit
//                 }
//             } //end of triggerObj.targetHit checking if condition
//         }); //end of forEach loop
//     } catch (error) {

//         //  console.log("Failed while retrieving data from NSE.", error);
//     } //end of try...catch block

//     setTimeout(sendEmail, 10 * 1000);
// }
// setTimeout(sendEmail, 10 * 1000);

// Insert Record in UserInfo Table
router.post('/insert_UserDetails', (req, res, next) => {
    //below logic will generate random userId
    var userId = randomString.generate({
        'length': 4,
        'charset': 'numeric'
    }); //end of userId generation logic

    let User_InfoTBInsert = new User_InfoTB({
        user_Id: userId,
        user_Name: req.body.user_Name,
        user_Email: req.body.user_Email,
        user_Token: req.body.user_Token
    });
    var query = {
        'user_Email': req.body.user_Email
    }; //end of query object 
    User_InfoTBInsert.save((err, item) => {
        if (err) {
            //res.json(err);  

            User_InfoTB.find(query, function (err, ReturnData) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json({ userId: ReturnData[0].user_Id })
                }
            });
        }
        else {
            res.json({ userId: item.user_Id });
        }
    });
});

router.post('/getDataByUserid', (req, res, next) => {
    var query = {
        user_Id: req.body.user_Id
    }
    Stock_InfoTB.find(query, function (err, items) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(items)
        }
    })
})

router.post('/getUseridByEmailid', (req, res) => {

    var query = {
        user_Email: req.body.user_Email
    }
    User_InfoTB.find(query, function (err, items) {
        if (err) {

            res.send(err);
        }
        else {

            if (items.length > 0) {

                res.send(items);
            } else {

                var responseObject = {
                    'message': 'User record not found.'
                }; // end of responseObject object

                res.status(404);
                res.send(responseObject);

            } //end of if...else condition checking for length of result
        }
    })
})

router.post('/insertStockRecord', (req, res, next) => {
    let Stock_Record = new Stock_InfoTB({
        user_Id: req.body.user_Id,
        stock_Symbol: req.body.stock_Symbol,
        stock_BuyPrice: req.body.stock_BuyPrice,
        stock_TargetPrice: req.body.stock_TargetPrice,
        stock_High: req.body.stock_High,
        stock_Low: req.body.stock_Low,
        stock_PushMail: req.body.stock_PushMail,
        stock_Profit: req.body.stock_Profit,
        stock_Sell: req.body.stock_Sell,

    });
    Stock_Record.save((err, resopnce) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(resopnce);
        }
    });
})

router.get('/testing_get_route', function (req, res, next) {

    User_InfoTB.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(items)
        }
    });
});

var getUserDeatail = async function (user_Id) {
    var query = {
        user_Id: req.body.user_Id
    }
    Stock_InfoTB.find(query, function (err, items) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(items);
            return items;
        }
    })

}
module.exports = router;
