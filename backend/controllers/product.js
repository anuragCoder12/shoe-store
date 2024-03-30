const Product = require("../models/products");
const multer = require('multer')
const path = require('../middleware/imageUpload');

//creating new product
const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file was uploaded." });
  }
  const { title, price, details, color } = req.body;
  console.log(req.body)
  const imageName = req.file.filename 
  console.log(req.file)
  
    const product = await Product.create({
      title,
      price,
      details,
      color,
      image: imageName,
    });
    await product.save()
    res.status(200).json(product);
  } catch {
    res.status(400).json("error occured");
  }
};
//get all products

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(product);
  } catch {
    res.status(400).json("error occured");
  }
};

module.exports = {
  createProduct,
  getProduct,
};
