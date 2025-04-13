const Support = require('../models/Support');

exports.sendMessage = async (req, res) => {
  const { message } = req.body;
  const supportMessage = new Support({
    userId: req.user.id,
    message,
  });

  await supportMessage.save();
  res.status(201).json(supportMessage);
};

exports.getMessages = async (req, res) => {
  const messages = await Support.find({ userId: req.user.id });
  res.status(200).json(messages);
};
