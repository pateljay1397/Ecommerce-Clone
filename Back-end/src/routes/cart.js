const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const {
  addItemToCart,
  addToCart,
  getCartItems,
} = require("../controller/cart");
const { requireSignin, userMiddleware } = require("../common-middleware");
router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);
//router.post(  "/user/cart/addtocart",  requireSignin,  userMiddleware,  addItemToCart);
//router.post("/user/cart/addtocart", requireSignin, userMiddleware, addItemToCart);
router.post("/user/getCartItems", requireSignin, userMiddleware, getCartItems);

module.exports = router;
