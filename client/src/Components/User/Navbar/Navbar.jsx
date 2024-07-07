import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-logo">
      <h1>Logo</h1>
    </div>
    <div className="navbar-links">
      <ul>
        <li>Home</li>
        <li>Courses</li>
      </ul>
    </div>
    <div className="navbar-login">
      <p>Login</p>
    </div>
  </div>
  )
}

export default Navbar
