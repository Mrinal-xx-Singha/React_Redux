import React from "react";
import { useState } from "react";
const initialState = true;

const App = () => {
  const [toggleText, setToggleText] = useState(initialState);

  function handleToggleText() {
    setToggleText(!toggleText);
  }
  return (
    <div className="App">
      <h1>UseState Hook</h1>
      <div>
        {toggleText ? <p>Hello World</p> : null}

        <button onClick={handleToggleText}>Toggle Text</button>
      </div>
    </div>
  );
};

export default App;
