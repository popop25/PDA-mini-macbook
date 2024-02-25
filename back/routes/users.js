const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { createToken, verifyToken } = require("../utils/auth");
const { verify } = require("jsonwebtoken");

router.get("/user/:userEmail", async (req, res, next) => {
  console.log(req.params.userEmail);
  User.findById(req.params.userEmail)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/signup", async (req, res, next) => {
  try {
    const { userEmail, userPassword, nickName, phoneNumber, birthDay } =
      req.body;
    console.log(req.body);

    const user = await User.signUp(
      userEmail,
      userPassword,
      nickName,
      phoneNumber,
      birthDay
    );
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await User.login(userEmail, userPassword);
    const tokenMaxAge = 60 * 60 * 24 * 3;
    const token = createToken(user, tokenMaxAge);

    user.token = token;

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: tokenMaxAge * 1000,
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400);
    next(err);
  }
});

router.all("/logout", async (req, res, next) => {
  res.cookie("authToken", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.json({ message: "로그아웃 완료" });
});

async function authenticate(req, res, next) {
  let token = req.cookies.authToken;
  let headerToken = req.headers.authentication;
  if (!token && headerToken) {
    token = headerToken.split(" ")[1];
  }
  const user = verifyToken(token);
  req.user = user;

  if (!user) {
    const error = new Error("Authorization Failed");
    error.status = 403;

    next(error);
  }
  next();
}

router.get("/protected", authenticate, async (req, res, next) => {
  console.log(res.user);
  res.json({ data: "민감한 데이터" });
});


// 전체 유저 조회 -> 개발이 끝나면 비활성화 할 것.
router.get('/', async (req, res, next) => {
  res.json(await User.find())
})

// 친구 추가
router.post('/friends/:phoneNumber', authenticate, async (req, res, next) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const friend = await User.findOne({phoneNumber: phoneNumber});
    
    if (!friend) {
      return res.status(404).json({error: "Friend not found"});
    }
    
    const user = await User.findById(req.user._id);
    user.friendList.push(friend._id);
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

// 특정 유저의 친구 리스트 조회
router.get('/friends', authenticate, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: 'friendList',
      select: 'userEmail nickName phoneNumber birthDay isWishList'
    });
    
    if (!user) {
      return res.status(404).json({error: "User not found"});
    }
  
    res.json(user.friendList);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  router: router,
  authenticate: authenticate
};