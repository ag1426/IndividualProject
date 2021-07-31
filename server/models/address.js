const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  fullName: { type: Schema.Types.String, ref: "User" },
  streetAddress: {type: String, required: true},
  city: {type: String, required: true },
  state:  {type: String, required: true },
  phoneNumber:  {type: String, required: true },
  deliverInstructions:  {type: String}
});

module.exports = mongoose.model("Address", AddressSchema);
