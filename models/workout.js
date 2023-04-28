//* workout schema


const mongoose = require('mongoose');

const exercise = require('./exercise');

// Mongoose schema - structure/blueprint - defining the properties 
const workoutSchema = new mongoose.Schema({
    muscleGroup: {
        type: String,
        required: true
    },
    workoutDate: {
        type: Date,
        default: Date.now()
    },
    exercises: [exercise]
    },
    {timestamps: true}
)
    

//Create the model
const workout = mongoose.model('workout', workoutSchema)

//export
module.exports = workout; 