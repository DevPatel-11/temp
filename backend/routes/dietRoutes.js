const express = require('express');
const router = express.Router();
const dietController = require('../controllers/dietController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, dietController.addDiet);
router.get('/', authMiddleware, dietController.getDiets);

module.exports = router;
