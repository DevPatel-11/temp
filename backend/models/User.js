const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['member', 'trainer', 'admin'], default: 'member' },
  verified: { type: Boolean, default: false },
  resetToken: String,
});

module.exports = mongoose.model('User', userSchema);
