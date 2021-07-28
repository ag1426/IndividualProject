const Joi = require('@hapi/joi')

module.exports = 
  function(req, res, next) {
    const schema = {
      fullName: Joi.string().regex(/^[A-Za-z]+$/),
      email: Joi.string().email(),
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
            message: "You must enter your name",
          });
          break;
        case "email":
          res.status(400).send({
            message: "You must provide a valid email address",
          });
          break;
        case "password":
          res.status(400).send({
            message: `You need at least one uppercase, a number and a special character and your password must be 8 chracters`,
          });
          break;
        case "confirmPassword":
          res.status(400).send({
            message: "Your passwords donot match.",
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
