const mongoose = require("mongoose");
const mongooseAlgolia = require("mongoose-algolia");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: String,
    price: Number,
    size: String,
    color: String,
    condition: String,
    description: String,
    photo: String,
    category: String,
    brand: String,
    prodquantity: {type: Number, default: 1},
    addedProducts: {type: Number, default: 0}

});

ProductSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SECRET,
    indexName: process.env.ALGOLIA_INDEX,
  
    selector: "title _id photo condition price brand category",
    debug: true
  });
  
  let Model = mongoose.model("Product", ProductSchema);
  Model.SyncToAlgolia();
  Model.SetAlgoliaSettings({
    searchableAttributes: ["title"]
  });


module.exports = Model;