import { createSlice } from "@reduxjs/toolkit";

export const authAndAddressSlice=createSlice({
    name:"authAndAddressSlice",
    initialState:{
        token: sessionStorage.getItem('token') ,
        address:{}
    },

    reducers:{
        setToken:(state,action)=>{
            const token = action.payload;
            
            sessionStorage.setItem('token', token);
            state.token = token;
        },
        setAddress:(state,action)=>{
            const address=action.payload
            state.address=address
        }
    }
    
})

export const {setToken,setAddress}=authAndAddressSlice.actions

export default authAndAddressSlice.reducer