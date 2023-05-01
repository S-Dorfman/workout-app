import { useState } from "react";

import { logWorkout } from '../utilities/workout-api';

function NewWorkoutPage() {
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [workout, setWorkout] = useState({muscleGroup: "", workoutDate: ""});
  const [exercise, setExercise] = useState({exerciseName: "", sets: "", reps: "" })
  const handleWorkoutChange = (e) => {
    setWorkout({...workout, [e.target.name]: e.target.value})
  }
  const handleExercise = (e) => {
    setExercise({...exercise, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(workout)
    console.log(exercise)
    const workoutData = {
      ...workout,
      exercises: exercise
    }
    const res = logWorkout(workoutData)
  }
  return (
    <div>
      <h1>Add New Workout</h1>
      <form onSubmit={handleSubmit}>
        Muscle Group:
        <input type="text" name="muscleGroup" value={workout.muscleGroup} onChange={handleWorkoutChange} />
        <br />
        Date/Time:
        <input type="datetime-local" name="workoutDate" value={workout.workoutDate} onChange={handleWorkoutChange}/>
        <br />
        <h3 onClick={() => setShowAddExercise(!showAddExercise)}>
          Add exercise
        </h3>
        {showAddExercise && (
          <form>
            <label>
              Exercise:
              <input type="text" name="exerciseName" value={exercise.exerciseName} onChange={handleExercise}/>
            </label>
            <label>
              Sets:
              <input type="number" min="1" max="15" name="sets" value={exercise.sets} onChange={handleExercise}/>
            </label>
            <label>
              Reps:
              <input type="number" min="1" max="100" name="reps" value={exercise.reps} onChange={handleExercise}/>
            </label>
          </form>
        )}
        <input type="submit" value="Create Workout" />
      </form>
    </div>
  );
}

export default NewWorkoutPage;
