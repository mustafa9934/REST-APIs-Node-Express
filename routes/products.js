const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/products");
const router = express.Router();

router.get("/getAll", getAllProducts);
router.post("/create", createProduct);

module.exports = router;
