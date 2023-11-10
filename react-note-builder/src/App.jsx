import { useState,useEffect } from "react"
import { addNote,removeNote } from "./features/notes/notesSlice"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.items)

  const [newNote,setNewNote] = useState('')

  useEffect(() =>{
    // load notes from local storage on component mount

    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if(storedNotes){
      dispatch(addNote(storedNotes))
    }
  },[dispatch])

useEffect(() =>{
  // Save notes to local storage whenever the 'notes state change'
  localStorage.setItem('notes',JSON.stringify(notes))
},[notes])

const addNoteHandler = () =>{
  if(newNote.trim() !== ''){
    dispatch(addNote(newNote.trim()))
    setNewNote('')
  }
}
const removeNoteHandler = (note) =>{
  dispatch(removeNote(note))
}


  return (
    <div className="h-[100vh] ">
      <h1 className="text-center items-center font-['Roboto'] m-5 p-2 text-5xl bold ">My Notes ✔️ </h1>
      
      {/*Input field and Button  */}

      <div className="flex justify-center flex-row flex-1  gap-5">
      <input type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-500  w-[1000px] p-10 flex items-center text-center justify-center  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
      placeholder="Add a note"
      value={newNote}
      onChange={(e) => setNewNote(e.target.value)}
      />
      <button
      onClick={addNoteHandler}
      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >Add
      </button>

      </div>
      
      <div>
        {notes.map((note, index) =>(
          <div key={index} className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Added Note</h5>
            <p
            className="ont-normal text-gray-700 dark:text-gray-400"
            >{note}</p>
            <button
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => removeNoteHandler(note)}>Remove</button>
          </div>
        ))}
      </div>


    </div>
    
  )
}

export default App