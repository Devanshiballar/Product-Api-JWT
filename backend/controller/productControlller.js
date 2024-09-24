const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorhander");
const trycatchError = require("../middleware/tryCatchError");
const ApiFeatures = require("../utils/ApiFeatures");

// Create a new Product
exports.createProject = trycatchError(async (req, res, next) => {

  req.body.user = req.user.id;
  
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllProducts = trycatchError(async (req, res) => {

  const resultPerPage =5;
  const productCount = await Product.countDocuments();

const apiFeatures = new ApiFeatures(Product.find(),req.query)
.search()
.fillter()
.pagination(resultPerPage);

const product = await apiFeatures.query;

  res.status(200).json({
    success: true,
    product,
    productCount,
  });
});

// get single product detail

exports.getProductDetail = trycatchError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Upadate the product

exports.updateProduct = trycatchError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete product

exports.deleteProduct = trycatchError(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete({ _id: id });

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  } else {
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  }
});
