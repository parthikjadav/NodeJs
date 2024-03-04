const Joi = require("joi");

const admin = {
    body:Joi.object().keys({
        firstName:Joi.string().required().trim(),
        username:Joi.string().required().trim(),
        password:Joi.string().required().trim(),
    })
}

module.exports={admin}
  