const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String, // product.displayName
  imageUrl: String, // image.imageUrl
  productId: Number, // id
  //   "giftItemId": 7297332,
  detailName: String, //name
  detailImageUrl: String, //imageUrl
  productType: String, //productType
  //   "productType": "Shipping",
  price: Number, //price.basicPrice
  brandName: String, //brand.name
  brandImageUrl: String, //brand.imageUrl
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
