import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import NewWorkoutPage from './pages/NewWorkoutPage';
import AuthPage from './pages/AuthPage';
import WorkoutHistoryPage from './pages/WorkoutHistoryPage.js';
import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import './App.css';
import EditWorkoutPage from './pages/EditWorkoutPage';
import SingleWorkoutPage from './pages/SingleWorkout';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/workouts/new' element={ <NewWorkoutPage /> }/>
        <Route path='/workouts' element={ <WorkoutHistoryPage /> }/>
        <Route path='/workouts/:workoutId' element={ <SingleWorkoutPage /> }/>
        <Route path='/workouts/:workoutId/edit' element={ <EditWorkoutPage /> }/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
