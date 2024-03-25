const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  details: {
    type: String,
  },
  color: {
    type: String
  },
  image: {
    type: String
  }
},
{timestamps:true});

module.exports = mongoose.model('Product', productSchema)
