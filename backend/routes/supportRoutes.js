const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, supportController.sendMessage);
router.get('/', authMiddleware, supportController.getMessages);

module.exports = router;
