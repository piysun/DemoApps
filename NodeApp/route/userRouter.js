var express = require('express');
var router = express.Router();
//for generating random string
var randomString = require("randomstring");

//below module is used for parsing received payload in JSON format
var bodyParser = require("body-parser");

//below dependency is used for adding validations to received payload
var validate = require('express-validation');

//below module will help to make password secure by using hashing
var passwordHash = require('password-hash');

//for adding validations to the payload of post user API call
var postUserValidationBasic = require('../validations/userBasicDetails.js');
const UserD = require('../User_details/userDetails').userBasicDetails;
/* Below is the POST API add_user*/

router.post('/insert_userdetails', validate(postUserValidationBasic), (request, response, next) => {

    //below logic will generate random userId
    var userId = randomString.generate({
        'length': 4,
        'charset': 'numeric'
    }); //end of userId generation logic

    //below logic will convert password string to hash
    var hashedPassword = passwordHash.generate(request.body.userPassword);

    var userBasicDetailsObject = {
        'userId': userId,
        'userFname': request.body.userFname,
        'userLname': request.body.userLname,
        'userEmail': request.body.userEmail,
        'userPassword': hashedPassword
    };

    //below line will generate user record using userObject
    var userRecord = new UserD(userBasicDetailsObject);

    userRecord.save((error, result) => {
        //Below if...else condition will check for error or success in save operation
        if (error) {
            // logger.info("ADD_USER_HANDLER_FAILED, user details: " + JSON.stringify(request.body) + ", error: " + JSON.stringify(error));

            //Below response object will be sent as a error message to the client

            // console.log(error.code);
            if (error.code === 11000) {
                var responseObject2 = {
                    'message': 'Email Id already exitest!!!'
                }
                response.send(responseObject2);
            }
            else if (response.status(500)) {
                var responseObject = {
                    'message': 'Something went wrong. Please try again later.'
                } //end of responseObject

                //error occured, hence 500 will be sent

                response.send(responseObject);
            }
            else {
                console.log(response.status(400));
            }



        } else {

            // logger.info("ADD_USER_HANDLER_SUCCESS, user name: " + request.body.userName);

            /* Record saved successfully.
             * Below success response will be sent to the client
             */
            var responseObject = {
                'message': 'User record saved successfully.',
                'userId': userId
            } //end of responseObject

            response.status(201);
            response.send(responseObject);
        } //end of if...else condition checking for error or success
    });//end of save database operation
});//end of POST company API

module.exports = router;