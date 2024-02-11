const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 4.9,
    },
    price: {
      type: Number,
      required: [true, "Price must be provided"],
    },
    company: {
      type: String,
      enum: {
        values: ["Apple", "Dell", "Samsung", "Lenovo"],
        message: `{VALUE} is not correct`,
      },
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Product", productSchema);
