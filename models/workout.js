//* workout schema

const mongoose = require('mongoose');

// Mongoose schema - structure/blueprint - defining the properties 
const workoutSchema = new mongoose.Schema({
    muscleGroup: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    },
    {timestamps: true}
)
    

//Create the model
const workout = mongoose.model('workout', workoutSchema)

//export
module.exports = workout; 