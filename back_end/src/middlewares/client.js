const Joi = require('joi');

const clientSchema = Joi.object({
  fullName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .required(),
  cpf: Joi.string()
    .min(11)
    .max(11)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
});

const validationClient = (req, _res, next) => {
  const { error } = clientSchema.validate(req.body);

  if (error) throw error;
  
  next();
};

module.exports = validationClient;