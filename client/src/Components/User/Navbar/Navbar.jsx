import React from 'react'
import './Navbar.css'
import { useDispatch } from 'react-redux';
import { studentLogout } from '../../../Redux/slices/authSlice';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log("logging out");
    dispatch(studentLogout());
    toast.success('Logged Out Successfully');
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Eduz</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to={'/dashboard'} style={{textDecoration:'none' , color: 'inherit'}}><li>Home</li></Link>
          <li>Courses</li>
        </ul>
      </div>
      <div className="navbar-login">
        <p onClick={handleLogout} style={{cursor:'pointer'}}>Logout</p>
      </div>
    </div>
  )
}

export default Navbar
