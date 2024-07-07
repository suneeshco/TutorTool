import React from 'react'
import UserSignUp from '../../Components/User/SignUp/UserSignUp'

const UserSignUped = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',  background: `url('/src/assets/login.jpg') no-repeat center center fixed`, 
      backgroundSize: 'cover',height: '100vh' }}>
      <UserSignUp/>
    </div>
  )
}

export default UserSignUped
