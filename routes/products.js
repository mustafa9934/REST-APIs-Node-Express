const express = require("express");
const { getAllProducts } = require("../controllers/products");
const router = express.Router();

router.get("/getAll", getAllProducts);

module.exports = router;
