const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  weight: Number,
  bodyFatPercentage: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Progress', progressSchema);
