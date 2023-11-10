import { createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name:'notes',
    initialState: {
        items: [],
    },
    reducers: {
        addNotes: (state, action) =>{
            state.items.push(action.payload)
        },
        removeNotes: (state, action ) =>{
            state.items = state.items.filter((note) => note !== action.payload)
        }
    }
})

export const {addNote, removeNote} = notesSlice.actions

export default notesSlice.reducer;