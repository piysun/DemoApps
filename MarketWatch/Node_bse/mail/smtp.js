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
        pass: "Abcd28ad"
    }
});
var rand, mailOptions, host, link;

var sendNotificationMail = async function (getUserDeatail, symbol, ltp) {
    console.log("Mail");
    readHTMLFile(__dirname + '/emailWithPDF.html', function (err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            username: getUserDeatail.user_Name
        };
        var htmlToSend = template(replacements);

        // rand = Math.floor((Math.random() * 100) + 54);
        // host = req.get('host');
        // link = "http://" + req.get('host') + "/api/verifyMail?id=" + rand;
        mailOptions = {
            to: getUserDeatail.user_Email,
            subject: "Your Target Completeed Plese Check your stock",
            // html: htmlToSend
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
        }

        // console.log(link);

        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                //res.end("error");
            } else {
                console.log("Message sent: " + response.message);
                //res.end("sent");
            }
        });
    });
}

module.exports = {
    sendNotificationMail: sendNotificationMail
};