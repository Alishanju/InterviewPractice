import counterReducer from "./counter/counter.js"
import {configureStore} from '@reduxjs/toolkit'
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})