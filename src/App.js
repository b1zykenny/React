import React from "react";
import Message from "./Message";
import './App.css';

function App() {
  let name = 'World';
  return (
    <div className="App">
      <Message text={name} />
    </div>
  );
}

export default App;
