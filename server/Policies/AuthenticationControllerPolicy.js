const Joi = require('@hapi/joi')

module.exports = 
  function(req, res, next) {
    const schema = {
      fullName: Joi.string(),
      email: Joi.string().email(),
      phoneNumber: Joi.number(),
      password: Joi.string().regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ),
      confirmPassword: Joi.ref("password"),
    };

    const { error } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case "fullName":
          res.status(400).send({
            error: "You must enter characters",
          });
          break;
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address",
          });
          break;
        case "password":
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                    <br>
                    1. It must contain ONLY the following characters: lower case, upper case, numerics.
                    <br>
                    2. It must be at least 8 characters in length and not greater than 32 characters in length.
                  `,
          });
          break;
        case "confirmPassword":
          res.status(400).send({
            error: "Your passwords donot match.",
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration information",
          });
      }
    } else {
      next();
    }
  };
