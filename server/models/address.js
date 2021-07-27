const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  fullName: { type: Schema.Types.String, ref: "User" },
  streetAddress: String,
  city: String,
  state: String,
  phoneNumber: Number,
  deliverInstructions: String
});

module.exports = mongoose.model("Address", AddressSchema);
