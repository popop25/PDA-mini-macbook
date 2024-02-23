const express = require("express");
const router = express.Router();

const User = require("../models/User");

// baseUrl : 127.0.0.1:3000/api/user/wish/

// 특정 유저의 위시 리스트 조회 GET: /api/user/wish/:phoneNumber
router.get('/:phoneNumber', (req, res, next) => {
    const phoneNumber = req.params.phoneNumber;
    User.findOne({phoneNumber: phoneNumber}).then(data => {
        res.json(data);
    }).catch (err => {
        next(err);
    })
})


// 나의 위시리스트 상품 추가 POST: /api/user/wish
router.post('/', (req, res, next) => {
    const { productId } = req.body;
    
    User.create({
        isWishList: productId
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        next(err);
    })
})


// 나의 위시리스트 상품 삭제 DELETE: /api/user/wish
router.delete('/', (req, res, next) => {
    const { productId } = req.body;

    User.findByIdAndDelete(productId)
    .then(data => {
        res.json(data);
    }).catch(err => {
        next(err);
    })
})



module.exports = router;