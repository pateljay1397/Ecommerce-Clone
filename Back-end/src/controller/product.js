const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../models/category");
const product = require("../models/product");
//const category = require("../models/category");

exports.createProduct = (req, res) => {
  //  res.status(200).json({ file: req.files, body: req.body });
  const { name, price, description, category, quantity, createdBy } = req.body;

  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });

  product.save((Error, product) => {
    if (Error) return res.status(400).json({ Error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  console.log("slug", slug);
  Category.findOne({ slug: slug })
    .select("_id type")
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }
      console("category Details: ", category);
      if (category) {
        Product.find({ category: category._id }).exec((error, products) => {
          if (error) {
            return res.status(400).json({ error });
          }
          if (products.length > 0) {
            res.status(200).json({
              products,
              productsByPrice: {
                under$300: products.filter((product) => product.price <= 300),
                under$1000: products.filter(
                  (product) => product.price <= 1000 && product.price > 300
                ),
                under$1500: products.filter(
                  (product) => product.price <= 1500 && product.price > 1000
                ),
                under$2000: products.filter(
                  (product) => product.price <= 2000 && product.price > 1500
                ),
                above$2000: products.filter((product) => product.price > 2000),
              },
            });
          }
        });
      }
    });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};
