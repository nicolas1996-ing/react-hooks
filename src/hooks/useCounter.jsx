import { useState } from "react";

export const useCounter = (inititalValue = 10, step = 1) => {
  const [counter, setCounter] = useState(inititalValue);

  const increment = () => setCounter((current) => current + Number(step));
  const decrement = () => setCounter(counter - Number(step));
  const reset = () => setCounter(inititalValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
