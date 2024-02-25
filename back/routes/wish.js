const express = require("express");
const router = express.Router();
const {authenticate} = require("./users")
const User = require("../models/User");
const Product = require("../models/Product");
const Funding = require("../models/Funding");

// baseUrl : 127.0.0.1:3000/api/user/wish/

// 특정 유저의 위시 리스트 조회 GET: /api/user/wish/:phoneNumber
router.get('/:phoneNumber', authenticate, async (req, res, next) => {
    try {
        const phoneNumber = req.params.phoneNumber;
        const user = await User.findOne({phoneNumber: phoneNumber}).populate('isWishList');

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        res.json({
            userEmail: user.userEmail,
            nickName: user.nickName,
            phoneNumber: user.phoneNumber,
            birthDay: user.birthDay,
            isWishList: user.isWishList
        });
    } catch (error) {
        next(error);
    }
});

// 나의 위시리스트 상품 추가 POST: /api/user/wish
router.post('/', authenticate, async (req, res, next) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id;
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        const product = await Product.findOne({ productId: productId });
        if (!product) {
            return res.status(404).json({error: "Product not found"});
        }

        user.isWishList.push(product._id);
        const updatedUser = await user.save();

        // funding 인스턴스 생성
        const funding = await Funding.create({
            user: userId,
            product : product._id
        })

        res.json({
            user: updatedUser.isWishList,
            funding
        });
    } catch (error) {
        next(error);
    }
});

// 나의 위시리스트 상품 삭제 DELETE: /api/user/wish
router.delete('/', authenticate, async (req, res, next) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id;
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        const product = await Product.findOne({ productId: productId });
        if (!product) {
            return res.status(404).json({error: "Product not found"});
        }

        const index = user.isWishList.indexOf(product._id);
        if (index !== -1) {
            user.isWishList.splice(index, 1);
        }
        
        const updatedUser = await user.save();
        
        // funding 인스턴스 삭제
        await Funding.findOneAndDelete({_id: product._id })

        res.json(updatedUser.isWishList);
    } catch (error) {
        next(error);
    }
});

module.exports = router;