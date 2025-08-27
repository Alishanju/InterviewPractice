import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const AuthSlice = createSlice({
    name:"auth",
    initialState:{isLoggedIn:false,user:null},
    reducers:{
        toggleAuth:(state,action)=>{
            if(state.isLoggedIn){
                state.isLoggedIn=false;
                state.user=null;
            }else{
                state.isLoggedIn=true;
                state.user=action.payload;
            }
        }
    }
})

export default AuthSlice.reducer;
export const {toggleAuth}=AuthSlice.actions;

