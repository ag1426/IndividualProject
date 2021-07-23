const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: String,
    brand: String,
    title: String,
    price: Number,
    size: String,
    color: String,
    condition: String,
    photo: String

});


module.exports = mongoose.model("Product", ProductSchema);