module.exports = {
  getAllProducts: async (req, res) => {
    res.send("hey, here are all of your products.....");
  },
  createProduct: async (req, res) => {
    res.send("here you can create your product");
  },
};
