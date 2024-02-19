const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userPassword: String,
    nickName: String,
    phoneNumber: String,
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
