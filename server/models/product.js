const mongoose = require("mongoose");
const mongooseAlgolia = require("mongoose-algolia");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: String,
    brand: String,
    title: String,
    price: Number,
    size: String,
    color: String,
    condition: String,
    description: String,
    photo: String

});

ProductSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SECRET,
    indexName: process.env.ALGOLIA_INDEX,
  
    selector: "-_id title brand price size color price condition description photo category",
    debug: true
  });
  
  let Model = mongoose.model("Product", ProductSchema);
  Model.SyncToAlgolia();
  Model.SetAlgoliaSettings({
    searchableAttributes: ["title"]
  });


module.exports = Model;