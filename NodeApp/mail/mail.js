var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var handlebars = require('handlebars');
var fs = require('fs');
//---------------------------------------------------------------------------
var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
}
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
    readHTMLFile(__dirname + '/emailWithPDF.html', function (err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            username: "John Doe"
        };
        var htmlToSend = template(replacements);

        rand = Math.floor((Math.random() * 100) + 54);
        host = req.get('host');
        link = "http://" + req.get('host') + "/api/verifyMail?id=" + rand;
        mailOptions = {
            to: req.query.to,
            subject: "Please confirm your Email account",
            html: htmlToSend
            // html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
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

module.exports =  router ;
