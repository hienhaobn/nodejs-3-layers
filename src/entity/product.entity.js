const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  image_product: {
    type: String,
    required: true,
  },
  description: String,
  product_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductType",
    required: true
  },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProdctBrand",
    required: true
  },
  total_product: {
    type: Number,
    required: true,
  },
  active_sale: Boolean,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model('Product', productSchema);