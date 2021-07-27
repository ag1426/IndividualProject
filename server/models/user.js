const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  fullName: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword:{
    type: String
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  }
});

UserSchema.pre("save", function (next) {
  // before saving the password to the database password encryption function is run
  let user = this;
  if (this.isModified("password") || this.isNew) {
    // generates ten long random characters
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      // mixes ten long randomly generated characters with the password with hash
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

 
UserSchema.methods.comparePassword = function (confirmPassword, next) {
  let user = this;
  return bcrypt.compareSync(confirmPassword, user.password);
};

UserSchema.methods.comparePassword = function (password, next) {
  let user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model("User", UserSchema);
