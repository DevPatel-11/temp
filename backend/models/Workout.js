const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  exercise: String,
  duration: Number,  // in minutes
  sets: Number,
  reps: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', workoutSchema);
