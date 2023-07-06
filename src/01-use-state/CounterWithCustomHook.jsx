import React from "react";
import { useCounter } from "../hooks/UseCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter(1, 5);

  return (
    <>
      <h1>CounterWithCustomHook</h1>
      <hr />
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
