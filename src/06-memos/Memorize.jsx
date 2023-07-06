import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);

  return (
    <>
      <h1>
        counter: <Small value={counter}></Small>
      </h1>
      <hr />
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
