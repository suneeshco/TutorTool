import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogined from './Pages/User/UserLogined';
import UserSignUped from './Pages/User/UserSignUped';
import UserDashboard from './Pages/User/UserDashboard';
import CourseView from './Pages/User/CourseView';
import { Toaster } from "react-hot-toast";
import { NotPrivateRoute, PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="" element={<NotPrivateRoute />}>
            <Route path='/' element={<UserLogined />} />
            <Route path='/signup' element={<UserSignUped />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/courseview/:id' element={<CourseView />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
