// CONTAINER


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";


export const store  = configureStore({
    //reducers

    reducer:{
        counter: counterReducer,

    }
})