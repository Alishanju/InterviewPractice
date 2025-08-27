import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import authReducer from "./AuthSlice";
import usersReducer from "./UsersSlice";



const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,
        users:usersReducer
}
})

export default store
