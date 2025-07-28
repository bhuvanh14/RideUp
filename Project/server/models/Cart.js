const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const cartSchema = new mongoose.Schema({
  user: { type: String, required: true }, // In a real app, this would be a user ID
  items: [cartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);