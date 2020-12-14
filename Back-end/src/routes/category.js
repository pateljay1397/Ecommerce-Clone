const express = require("express");
const Category = require("../models/category");
const router = express.Router();
const slugify = require("slugify");
const {
  addCategory,
  getCategories,
  updateCategories,
} = require("../controller/category");
const { requireSignin, adminMiddleware } = require("../common-middleware");

const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
//We can Formidable istead of Multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/category/create",
  requireSignin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getcategory", getCategories);
router.post(
  "/category/update",
  upload.array("categoryImage"),
  updateCategories
);
module.exports = router;
