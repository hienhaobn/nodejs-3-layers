const mongoose = require('mongoose');

const productAttributeSchema = new mongoose.Schema({
  attribute_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Attribute',
    required: true
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  value: {
    type: String,
    required: true
  },
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('ProductAttribute', productAttributeSchema);