import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage.js';
import CreateWorkoutPage from './Components/CreateWorkoutPage.js';
import MyWorkoutsPage from './Components/MyWorkoutsPage.js';
import ActiveWorkoutPage from './Components/ActiveWorkoutPage.js';
import ProfilePage from './Components/ProfilePage.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/createworkoutpage' element={<CreateWorkoutPage />} />
        <Route path='/myworkoutspage' element={<MyWorkoutsPage />} />
        <Route path='/activeworkoutpage' element={<ActiveWorkoutPage />} />
        <Route path='/profilepage' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
