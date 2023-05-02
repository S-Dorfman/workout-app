//* Routing Logic 
// routes/api/workouts.js

const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/api/workouts');
// const ensureLoggedIn = require('../../config/ensureLoggedIn')



//*POST method to receive form data

router.post('/', workoutCtrl.create);

router.get('/workouts', workoutCtrl.view);
// router.post('/login', usersCtrl.login);
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// router.get('/logWorkout', ensureLoggedIn, workoutCtrl.logWorkout)



module.exports = router;



