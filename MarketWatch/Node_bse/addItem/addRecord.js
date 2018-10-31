
const mongoose = require('mongoose');

const User_Info = mongoose.Schema({

    user_Id: { type: String, required: true, default: 0, unique: true },
    user_Name: { type: String, required: true },
    user_Email: { type: String, required: true, unique: true },
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
//---------------------------------------

// var sendNotificationMail = async function (getUserDeatail, symbol, ltp) {
//     readHTMLFile(__dirname + '/emailWithPDF.html', function (err, html) {
//         var template = handlebars.compile(html);
//         var replacements = {
//             username: getUserDeatail.user_Name
//         };
//         var htmlToSend = template(replacements);

//         // rand = Math.floor((Math.random() * 100) + 54);
//         // host = req.get('host');
//         // link = "http://" + req.get('host') + "/api/verifyMail?id=" + rand;
//         mailOptions = {
//             to: getUserDeatail.user_Email,
//             subject: "Your Target Completeed Plese Check your stock",
//             html: htmlToSend
//             // html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
//         }

//         // console.log(link);

//         smtpTransport.sendMail(mailOptions, function (error, response) {
//             if (error) {
//                 console.log(error);
//                 //res.end("error");
//             } else {
//                 console.log("Message sent: " + response.message);
//                 //res.end("sent");
//             }
//         });
//     });

// }
// module.exports = {
//     router: router,
//     sendNotificationMail: sendNotificationMail
// };
