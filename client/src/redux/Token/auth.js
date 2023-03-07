import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        token: sessionStorage.getItem('token') 
    },
    reducers:{
        setToken:(state,action)=>{
            const token = action.payload;
            
            sessionStorage.setItem('token', token);
            state.token = token;
        }
    }
    
})

export const {setToken}=authSlice.actions

export default authSlice.reducer