const Workout = require('../models/Workout');

exports.addWorkout = async (req, res) => {
  const { exercise, duration, sets, reps } = req.body;
  const workout = new Workout({
    userId: req.user.id,
    exercise,
    duration,
    sets,
    reps,
  });

  await workout.save();
  res.status(201).json(workout);
};

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ userId: req.user.id });
  res.status(200).json(workouts);
};
