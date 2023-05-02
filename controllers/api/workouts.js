//* Request handler Logic
//controllers/api/workouts.js


const Workout = require('../../models/workout')


//* --- Helper functions ---


//* create
async function create(req, res) {
    console.log(req.body);
    // Try Catch: If we get a good request we will go within TRY and create a workout, 
    // if there is an error we will go within CATCH, there will be a status code response of 400 and an error within the format of JSON
    try {
        // creating a new workout
        const workout = await Workout.create(req.body);
        console.log(workout); 
        // we can use res.json to send back just a string
        res.json(req.body);

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}


//* view
async function view(req, res) {
    // console.log(req.body);
    try {
        const workoutLogs = await Workout.find(req.body);
        console.log(workoutLogs); 
        res.status(200).json(workoutLogs);

    } catch (error) {
        // console.log(error);
        res.status(400).json({ msg: error.message })
    }
}

//* update
async function editWorkout(req, res) {
    console.log(req.body);
    try {
        const workout = await Workout.findByIdAndUpdate(req.body);
        console.log(workout); 
        res.json(req.body);

    } catch (error) {
        // console.log(error);
        res.status(400).json(error)
    }
}


//*delete

module.exports = {
    create,
    view,
    editWorkout
}

// async function create(req, res) {
//     console.log(req.body);
//     const workout = await Workout.create(req.body)
//     console.log(workout)
    // res.json(req.exp)
// }


// async function login(req, res) {
//     try {
//         // find user in db
//       const user = await User.findOne({ email: req.body.email });
//       // check if we found an user
//       if (!user) throw new Error();
//       // compare the password to hashed password
//       const match = await bcrypt.compare(req.body.password, user.password);
//       // check is password matched
//       if (!match) throw new Error();
//       // send back a new token with the user data in the payload
//       res.json( createJWT(user) );
//     } catch {
//       res.status(400).json('Bad Credentials');
//     }
//   }


  