const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      unique: true
    },
    userPassword: String,
    nickName: {
      type: String,
      unique: true
    },
    phoneNumber: {
      type: String,
      unique: true
    },
    birthDay: Date,
    friendList: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    isWishList: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
