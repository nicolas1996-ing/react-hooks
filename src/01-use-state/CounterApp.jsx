import { React, useState } from "react";

export const CounterApp = () => {
  const [counters, setCounter] = useState({
    counterOne: 10,
    counterTwo: 20,
    counterThree: 30,
  });

  const { counterOne, counterTwo, counterThree } = counters;
  return (
    <>
      <h1>{counterOne}</h1>
      <h1>{counterTwo}</h1>
      <h1>{counterThree}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...counters,
            counterOne: counterOne + 10,
          })
        }
      >
        +1
      </button>
    </>
  );
};
