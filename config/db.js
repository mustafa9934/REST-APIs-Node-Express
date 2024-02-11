const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.DB_URI;

const connectDB = () => {
  return mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB is connected"));
};

module.exports = connectDB;
