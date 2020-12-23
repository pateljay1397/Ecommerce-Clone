const express = require("express");
const {
  requireSignin,
  adminMiddleware,
  upload,
} = require("../../common-middleware");
const { createPage, getPage } = require("../../controller/admin/page");
const router = express.Router();

router.post(
  `/page/create`,
  requireSignin,
  adminMiddleware,
  upload.fields([
    { name: "banners" }, // we can limit the uploads by putting the numbers
    { name: "products" },
  ]),
  createPage
);

router.get(`/page/:category/:type`, getPage);
module.exports = router;
