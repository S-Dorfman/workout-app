import { useState, useEffect } from 'react';

import * as workoutAPI from '../../src/utilities/workout-api';

function WorkoutHistoryPage() {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  useEffect(function () {
    async function fetchWorkoutLogs() {
      const workoutLogs = await workoutAPI.view();
      setWorkoutLogs(workoutLogs);
    }
    fetchWorkoutLogs();
  }, [])


  // try {
  //   const workoutLogs = await workoutAPI.view();
  //   console.log(workoutLogs);
  //   setWorkoutLogs(workoutLogs);
  // } catch (error) {
  //   console.log("error")
  // }
// };

  return (
    <div>
      <h1>Workout History</h1>
      {workoutLogs.map((workoutLog)  => {
        console.log(workoutLog)
        return (
          <div key={workoutLog._id}>
          Workout Details: 
          <nav>
          <a href={`/workouts/${workoutLog._id}`}>{' '}{workoutLog.muscleGroup}</a>
          </nav> 
          {workoutLog.createdAt}
          <nav>
          <a href={`/workouts/${workoutLog._id}/edit`}>Edit</a>
          </nav>
          </div>
        )
      })}

    </div>
  ) 
}




export default WorkoutHistoryPage;








// import { checkToken } from "../utilities/users-service";

// function WorkoutHistoryPage() {

//   const handleCheckToken = async () => {
//     const expDate = await checkToken();
//     console.log(expDate);
//   };

//   return (
//     <div>
//       <h1>WorkoutHistoryPage</h1>
//       <button onClick={handleCheckToken}>
//         Check When My Login Token Expires
//       </button>
//     </div>
//   );
// }

// export default WorkoutHistoryPage;
