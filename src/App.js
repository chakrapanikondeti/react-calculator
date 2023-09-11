import { useState } from "react";
import Keypad from "./Keypad";
import "./index.css";

function App() {
  let [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }
  function calculate(value) {
    let outputVal = eval(input);
    setInput(outputVal);
  }
  function handleClear() {
    setInput("");
  }
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} className="output" />
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
