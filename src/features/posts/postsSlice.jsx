import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',title:'Learning Redux Toolkit', content:"I've heard good things."},
    {id:'2',title:'Slices....', content:"The more i say slice, the more i want pizza. "}
]


//only in create slice 
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action){
            //inner js creates new state underneath 
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions


export default postSlice.reducer




