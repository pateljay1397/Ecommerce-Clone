const Category = require("../models/category");
const slugify = require("slugify");

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
  cat.save((Error, category) => {
    if (Error) return res.status(400).json({ Error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

exports.getCategories = (req, res) => {
  Category.find({}).exec((Error, categories) => {
    if (Error) return res.status(400).json({ Error });
    if (categories) {
      res.status(200).json({ categories });
    }
  });
};
