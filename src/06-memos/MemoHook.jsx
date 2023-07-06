import React, { useState } from "react";
import { useMemo } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahí vamos");
  }

  return `${iterationNumber} has been executed`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);

  // memoriza un valor 
  // solo se ejecuta el callback si cambia el valor de counter (condición)
  // si  no existe el useMemo siempre que haya un cambio en el componente se dispararia la f(x)
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizeValue}</h4>

      <button type="button" className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setshow(!show)}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
