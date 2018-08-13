var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
const Item = require('../shopinglist/shopinglist').Item;
const Counter = require('../shopinglist/shopinglist').Counter;

router.get('/testing_get_route', function (req, res, next) {

    Counter.find(function (err, items) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(items)

        }
    });
});

router.post('/insert_data', (req, res, next) => {

    let newShopingItem = new Item({
        iteamName: req.body.iteamName,
        iteamQuantity: req.body.iteamQuantity,
        IteamBought: req.body.IteamBought
    });
    newShopingItem.save((err, item) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ mgs: ' Item Save' });

        }
    });
});

router.post('/insertcounter', (req, res, next) => {
    Counter.count({}, function (err, c) {
        console.log('Count is ' + c);

        if (err) {
            console.log(err);
        } else {
            let counterID = new Counter({
                seq: req.body.seq,
                uniceId: "BVG" + c++
            });
            counterID.save((err, data) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json({ mgs: ' Item Save>>>>>>!' });
                }
            });
        }

    });
});
router.post('/update_data/:id', (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            iteamName: req.body.iteamName,
            iteamQuantity: req.body.iteamQuantity,
            IteamBought: req.body.IteamBought
        }
    },
        function (error, result) {
            if (error) {
                res.json(error);
            }
            else {
                res.json();
            }
        })
});

router.delete('/delete_data', (req, res, next) => {

});

router.post('/insertUser', (req, res, next) => {
    let userProfile = new UserProfile({
        userId: req.body.userId,
        userName: req.body.userName,
    });
    userProfile.save((err, userProfile) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ mgs: ' Item Save' });
        }
    });
});

router.get('/allUserProfile', function (req, res, next) {

    UserProfile.find(function (err, data) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    });
});
//---------------------------------------------------------------------------



/*
	Here we are configuring our SMTP Server details.
	STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "indus.peeyush@gmail.com",
        pass: "9975016846"
    }
});
var rand, mailOptions, host, link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

router.get('/sendMail', function (req, res) {
    rand = Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    link="http://"+req.get('host')+"/api/verifyMail?id="+rand;
    mailOptions = {
        to: req.query.to,
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }

    console.log(link);

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

router.get('/verifyMail', function (req, res) {
    console.log(req.protocol + ":/" + req.get('host'));
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        console.log("Domain is matched. Information is from Authentic email");
        if (req.query.id == rand) {
            console.log("email is verified");
            res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
        }
        else {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    }
    else {
        res.end("<h1>Request is from unknown source");
    }
});

module.exports = router;
