import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  const [animate, setAnimate] = useState(false);

  function triggerAnimation() {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200);
  }

  function handleDecrement() {
    setValue((prev) => prev - 1);
    triggerAnimation();
  }

  function handleIncrement() {
    setValue((prev) => prev + 1);
    triggerAnimation();
  }

  function handleReset() {
    setValue(0);
    triggerAnimation();
  }

  return (
    <div className="App">
      <div className="counter-container">
        <button onClick={handleIncrement}>+</button>
        <h1 className={`value ${animate ? "animate" : ""}`}>{value}</h1>
        <button onClick={handleDecrement}>-</button>
      </div>
      <button className="reset" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default App;
