import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Hello from './Components/Hello';
import UserLogined from './Pages/User/UserLogined';
import UserSignUped from './Pages/User/UserSignUped';
import UserDashboard from './Pages/User/UserDashboard';
import CourseView from './Pages/User/CourseView';

function App() {

  return (
    <>
    <Router>
       <Routes>
        <Route path='/' element={<UserLogined/>}/>
        <Route path='/signup' element={<UserSignUped/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/courseview' element={<CourseView/>}/>
       </Routes>
    </Router> 
    </>
  )
}

export default App
