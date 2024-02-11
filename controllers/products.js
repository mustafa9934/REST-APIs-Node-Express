const Products = require("../models/product");
module.exports = {
  getAllProducts: async (req, res) => {
    const { company, name, minPrice, maxPrice, search } = req.query;
    let queryObject = {};
    try {
      if (company) {
        queryObject.company = company;
      }
      if (name) {
        queryObject.name = name;
      }
      const products = await Products.find(queryObject).select(
        "name description featured rating price company"
      );
      res.status(200).json({ products });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  createProduct: async (req, res) => {
    res.send("here you can create your product");
  },
};
