import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as workoutAPI from '../utilities/workout-api';

function EditWorkoutPage() {
  //* handle edit form data
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [workout, setWorkout] = useState();
  const [exercise, setExercise] = useState()
// getting the data of the workout to be edited
  // Grab workoutId from params
  const { workoutId } = useParams();

  console.log(workout);

//useEffect to pass id
//data comes back and puts into state, form reads from state
  const [change, setChange] = useState({});
  const [date, setDate] = useState("");

  useEffect(function () {
    console.log(workoutId);

    async function fetchWorkout() {
      const changeData = await workoutAPI.singleWorkout(workoutId);
      // setChange(changeData);
      console.log(changeData);
      setWorkout(changeData)
    }

    fetchWorkout(workoutId);
  }, []);

  // console.log(change);


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
    const res = workoutAPI.editWorkout(workoutId, workoutData)
  }

  const handleChange = (evt) => {
    setWorkout({...workout, [evt.target.name]: evt.target.value, error: ''})
  };

  return (
    <div>
      <h1>Edit Workout</h1>
      <form 
      onSubmit={handleSubmit} 
      // method="POST" 
      // action={`/workouts/${workout.id}/?_method=PUT`}
      >
        Muscle Group:
        <input type="text" name="muscleGroup" value={workout?.muscleGroup} onChange={handleChange} />
        <br />
        Date/Time:
        <input type="datetime-local" name="workoutDate" value={workout?.workoutDate} onChange={(e) => setDate(e.target.value)}/>
        <br />
        <h3 onClick={() => setShowAddExercise(!showAddExercise)}>
          Add exercise
        </h3>
        {showAddExercise && (
          <form>
            <label>
              Exercise:
              <input type="text" name="exerciseName" value={exercise?.exerciseName} onChange={handleChange}/>
            </label>
            <label>
              Sets:
              <input type="number" min="1" max="15" name="sets" value={exercise?.sets} onChange={handleChange}/>
            </label>
            <label>
              Reps:
              <input type="number" min="1" max="100" name="reps" value={exercise?.reps} onChange={handleChange}/>
            </label>
          </form>
        )}
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}

export default EditWorkoutPage;