import React, { useState } from "react";

function App() {
  const [text, saveText] = useState("");
  const [items, saveItems] = useState([]);

  function handleChange(event) {
    const textInput = event.target.value;
    saveText(textInput);
  }

  function handleClick() {
    saveItems((prevItems) => {
      return [...prevItems, text];
    });
    saveText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
