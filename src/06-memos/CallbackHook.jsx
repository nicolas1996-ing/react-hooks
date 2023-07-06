import React, { useState } from "react";
import { useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // el componente hijo ShowIncrement no se redibuja cada vez que cambia el valor del counter
  // si no se usa el useCallback se redibujaria cada vez.
  const incrementCounter = useCallback((args) => {
    setCounter((counter) => counter + args);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementCounter}></ShowIncrement>
    </>
  );
};
