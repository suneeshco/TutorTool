import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Hello from './Components/Hello';
import UserLogined from './Pages/User/UserLogined';
import UserSignUped from './Pages/User/UserSignUped';
import UserDashboard from './Pages/User/UserDashboard';
import CourseView from './Pages/User/CourseView';
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Router>
    <Toaster position="top-right" />
       <Routes>
        <Route path='/' element={<UserLogined/>}/>
        <Route path='/signup' element={<UserSignUped/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/courseview/:id' element={<CourseView/>}/>
       </Routes>
    </Router> 
    </>
  )
}

export default App
