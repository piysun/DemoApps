var Joi = require('joi');

module.exports = {
  body: {
  	companyId: Joi.string().required(), 
    userName: Joi.string().required(),
    password: Joi.string().required()
  }
}