const Joi = require('@hapi/joi')

module.exports = 
  function(req, res, next) {
    const schema = {
      streetAddress: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      phoneNumber: Joi.number(),
      deliveryInstructions: Joi.string().allow('')
    };

    const { error } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case "streetAddress":
          res.status(400).send({
            message: "You must enter a street name",
          });
          break;
        case "city":
          res.status(400).send({
            message: "You must enter a city name",
          });
          break;
        case "state":
          res.status(400).send({
            message: "You must enter a state name",
          });
          break;
        case "phoneNumber":
          res.status(400).send({
            message: "YOu must enter a phone number",
          });
          break;
        default:
          res.status(400).send({
            message: "Invalid registration information",
          });
      }
    } else {
      next();
    }
  };
