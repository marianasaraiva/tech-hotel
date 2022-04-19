const Joi = require('joi');

const reservationSchema = Joi.object({
  checkIn: Joi.date()
    .required(),
  quantityDays: Joi.number()
    .min(1)
    .required(),
  totalPrice: Joi.number()
    .min(300)
    .required(),
});

const validationReservation = (req, _res, next) => {
  const { error } = reservationSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = validationReservation;