var express = require("express");
var Product = require("../models/Product");
var router = express.Router();
const { createToken, verifyToken } = require("../utils/auth");
const { authenticate } = require("./users");
const User = require("../models/User");

router.get("/", async (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json({ products: products });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:productId", authenticate, async (req, res, next) => {
  try {
    const userId = req.user._id;
    const result = await Product.find({
      _id: req.params.productId,
    });
    const user = await User.find({
      _id: userId,
    });
    let isHeart = false;
    for (let i = 0; i < user[0].isWishList.length; i++) {
      if (req.params.productId === user[0].isWishList[i].toString()) {
        isHeart = true;
        console.log("hi");
      }
    }
    const newData = { ...result[0].toObject(), isHeart: isHeart };
    res.send([newData]);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
