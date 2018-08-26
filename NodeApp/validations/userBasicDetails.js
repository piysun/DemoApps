var Joi = require('joi');

module.exports = {
  body: {
    userFname: Joi.string().required(),
    userLname: Joi.string().required(),
    userEmail: Joi.string().required(),
    userPassword: Joi.string().required()
  }
}