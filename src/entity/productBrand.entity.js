const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: Boolean,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('ProductBrand', brandSchema);