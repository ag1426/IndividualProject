const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");

// POST request - create a new product
router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.title = req.body.title;
    product.price = req.body.price;
    product.size = req.body.size;
    product.color = req.body.color;
    product.condition = req.body.condition;
    product.photo = req.file.location;

    await product.save();

    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
});

// GET request - get all products

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    res.json({
      sucess: true,
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
});

// GET request - get a single product

router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    res.json({
      sucess: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
});

//PUT request - Update a single product

router.put("/products/:id", upload.single("photo"), async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          category: req.body.category,
          brand: req.body.brand,
          title: req.body.title,
          price: req.body.price,
          size: req.body.size,
          color: req.body.color,
          condition: req.body.condition,
          photo: req.file.location,
        },
      },
      { upsert: true }
    );

    res.json({
      sucess: true,
      updatedproduct: product,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
});

//DELETE request - delete a single product

router.delete("/products/:id", async (req, res) => {
  try {
    let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

    if (deletedProduct) {
      res.json({
        status: true,
        message: "Sucessfully deleted",
      });
    }
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: err.message,
    });
  }
});

module.exports = router;
