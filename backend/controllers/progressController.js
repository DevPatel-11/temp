const Progress = require('../models/Progress');

exports.addProgress = async (req, res) => {
  const { weight, bodyFatPercentage } = req.body;
  const progress = new Progress({
    userId: req.user.id,
    weight,
    bodyFatPercentage,
  });

  await progress.save();
  res.status(201).json(progress);
};

exports.getProgress = async (req, res) => {
  const progress = await Progress.find({ userId: req.user.id });
  res.status(200).json(progress);
};
