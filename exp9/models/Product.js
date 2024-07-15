require("../config/db");
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    detail : String
})

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;