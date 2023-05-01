//* exercise schema

const mongoose = require('mongoose');

// Mongoose schema - structure/blueprint - defining the properties 
const exerciseSchema = new mongoose.Schema({
    //add multiple exercises
    exerciseName: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        min: 1,
        max: 15   
    },
    reps: {
        type: Number,
        min: 1,
        max: 100   
    }
},
{timestamps: true}
)


//Create the model
// const exercise = mongoose.model('exercise', exerciseSchema)

//export
module.exports = exerciseSchema; 