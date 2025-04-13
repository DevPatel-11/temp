const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, workoutController.addWorkout);
router.get('/', authMiddleware, workoutController.getWorkouts);

module.exports = router;
