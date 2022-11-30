import { useState } from "react";
import "./App.css";
import Button from "./button";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <h2>{counter}</h2>
        <Button methods={setCounter} counter={counter}></Button>
      </div>
    </>
  );
}

export default App;
