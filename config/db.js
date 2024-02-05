const mongoose = require("mongoose");
const URI =
  "mongodb+srv://muhammad9434:Le3az1logdfNBV0x@cluster0.y8ctfxf.mongodb.net/";

const connectDB = () => {
  return mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB is connected"));
};

module.exports = connectDB;
