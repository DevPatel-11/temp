const Diet = require('../models/Diet');

exports.addDiet = async (req, res) => {
  const { dietPlan } = req.body;
  const diet = new Diet({
    userId: req.user.id,
    dietPlan,
  });

  await diet.save();
  res.status(201).json(diet);
};

exports.getDiets = async (req, res) => {
  const diets = await Diet.find({ userId: req.user.id });
  res.status(200).json(diets);
};
