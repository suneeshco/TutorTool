import React from 'react'
import './UserLogin.css'

const UserLogin = () => {
    return (
        <div >
            <form class="form">
                <p class="title">Login </p>
                <p class="message">Welcome Back </p>
                <label>
                    <input required="" placeholder="" type="email" class="input" />
                    <span>Email</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" class="input" />
                    <span>Password</span>
                </label>
                <button class="submit">Submit</button>
                <p class="signin">New User? <a href="#">Signup</a> </p>
            </form>
        </div>
    )
}

export default UserLogin
