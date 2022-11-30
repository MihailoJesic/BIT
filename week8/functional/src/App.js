import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Button from "./button";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });

  return (
    <>
      <div className="container">
        <h2>Your number is {counter}</h2>
        <Button methods={setCounter} counter={counter}></Button>
      </div>
    </>
  );
}

export default App;
