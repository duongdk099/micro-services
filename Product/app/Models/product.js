const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    minlength: [3, "Product name must be at least 3 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    min: [0, "Price must be at least 0"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
    minlength: [10, "Description must be at least 10 characters long"],
  },
  image: {
    type: String,
    required: [true, "Please enter product image URL"],
    validate: {
      validator: function (v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
