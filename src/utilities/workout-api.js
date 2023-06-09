//create function to send data to backend
//then routes in server.js

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)

//function to send data

const BASE_URL = "/api/workouts";

//* Log Workout
export async function logWorkout(workoutData) {
  return sendRequest(BASE_URL, "POST", workoutData);
}

//* View workouts
export async function view() {
  return sendRequest(`${BASE_URL}/workouts`);
}

//* Single workout
export async function singleWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/workouts/${workoutId}`, "Get");
}

//*Edit workouts
export async function editWorkout(workoutId, workoutData) {
  return sendRequest(`${BASE_URL}/${workoutId}/edit`, "PUT", workoutData);
}

//* Delete workouts

/*--- Helper Functions ---*/

async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}

// const token = getToken();

//   if (token) {
//     options.headers = options.headers || {};
//     options.headers.Authorization = `Bearer ${token}`;
//   }
