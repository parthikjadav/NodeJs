const Joi = require("joi");

const school = {
    body:Joi.object().keys({
        name:Joi.string().required(),
        shortCode:Joi.string().required(),
        admin:Joi.string().required()
    })
}

module.exports={school}