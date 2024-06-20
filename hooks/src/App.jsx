import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Value cannot exceed 20.");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Value cannot be negative.");
    }
  };

  return (
    <>
      <h1>lets add counter</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addValue}>add {counter}</button>
      <button onClick={removeValue}>remove {counter}</button>
    </>
  );
}

export default App;

