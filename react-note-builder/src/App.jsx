import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };
  return (
    <div className="h-[100vh]">
      <h1 className="text-center text-5xl mb-4 mt-7">My Notes</h1>
      <div className="flex justify-center items-center text-center ">
        <input
          className="bg-gray-50 border px-[250px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 p-3 flex items-center m-5"
          type="text"
          placeholder="Add a Note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          className=" m-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={addNote}
        >
          Add
        </button>
      </div>

      <div className="">
        {notes.map((note, index) => (
          <Note key={index} text={note} />
        ))}
      </div>
    </div>
  );
};

export default App;
