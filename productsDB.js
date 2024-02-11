const connectDB = require("./config/db");
const Products = require("./models/product");
const productsJSON = require("./productsDB.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB();
    await Products.create(productsJSON);
    console.log("Database is successfuly seeded...!");
  } catch (error) {
    console.log(error);
  }
};

start();
