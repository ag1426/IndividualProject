const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    brand: { type: Schema.Types.ObjectId, ref: "Brand"},
    title: String,
    price: Number,
    size: String,
    color: String,
    condition: String,
    photo: String

});


module.exports = mongoose.model("Product", ProductSchema);