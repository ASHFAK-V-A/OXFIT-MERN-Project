import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        token:null
    },
    reducers:{
        setToken:(state,action)=>{
console.log(action);
            state.token=action.payload
        }
    }
    
})

export const {setToken}=authSlice.actions

export default authSlice.reducer