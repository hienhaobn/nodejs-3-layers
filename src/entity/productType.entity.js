const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: Boolean,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('ProductType', productTypeSchema);