import { useState } from "react";


const Counter1 = () => {


  const [counter, setCounter] = useState(0);
  const [rcounter, RsetCounter] = useState(20);

  const handleOnChange = () => {
    setCounter(counter + 1);
  }
  const handleReset = () => {
    setCounter(0);
    counter = ("");
  }

  const handleOnReverse = () => {
    RsetCounter(rcounter - 1);
  }

  const handleRestreverse = () => {
    RsetCounter(20);
    // rcounter = (20);
  }

  return (
    <>
      <h2>counter 1 : {counter}</h2>
      <button onClick={() => { handleOnChange() }}>Update me </button>
      <button onClick={() => { handleReset() }}>Reset me</button>
      <hr />
      <h2>counter 2: {rcounter}</h2>
      <button onClick={() => { handleOnReverse() }}>Update me</button>
      <button onClick={() => { handleRestreverse() }}>Reset me</button>
      <hr />
    </>
  );
}

export default Counter1;