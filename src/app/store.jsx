// CONTAINER
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'

export const store  = configureStore({
    //reducers

    reducer:{
        posts: postsReducer

    }
})