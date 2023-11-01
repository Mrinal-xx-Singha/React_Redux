import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices....",
    content: "The more i say slice, the more i want pizza. ",
  },
];

//only in create slice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        //inner js creates new state underneath
        state.push(action.payload);
      },
      prepare(title, content,userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
