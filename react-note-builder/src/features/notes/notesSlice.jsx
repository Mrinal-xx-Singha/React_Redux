import { createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name:'notes',
    initialState: {
        items: [],
    },
    reducers: {
        addNote: (state, action) =>{
            state.items.push(action.payload)
        },
        removeNote: (state, action ) =>{
            state.items = state.items.filter((note) => note !== action.payload)
        }
    }
})

export const {addNote, removeNote} = notesSlice.actions

export default notesSlice.reducer;