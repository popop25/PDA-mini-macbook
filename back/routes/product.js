var express = require("express");
var Product = require("../models/Product");
var router = express.Router();

router.get("/", async (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json({ products: products });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:productId", (req, res, next) => {
  Product.find({
    _id: req.params.productId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
