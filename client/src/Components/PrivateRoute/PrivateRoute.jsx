import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const {userInfo} = useSelector((state) => state.studentAuth); 
    
  return userInfo ? <Outlet/> : <Navigate to="/" replace />
}

export const NotPrivateRoute = () => {
    const {userInfo} = useSelector((state) => state.studentAuth); 
    
  return !userInfo ? <Outlet/> : <Navigate to="/dashboard" replace />
}


