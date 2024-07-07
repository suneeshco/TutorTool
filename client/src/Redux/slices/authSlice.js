import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo')  
      ? JSON.parse(localStorage.getItem('userInfo')) 
      : null,
  };
  


const authSlice= createSlice({
    name: 'studentAuth',
    initialState,
    reducers: {
        setStudentCredentials : (state,action)=>{
            state.userInfo=action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        studentLogout: (state)=>{
            state.userInfo=null;
            localStorage.removeItem('userInfo')
            localStorage.removeItem('studentToken')
        }
    }
})


export const {setStudentCredentials,studentLogout} = authSlice.actions;

export default authSlice.reducer;