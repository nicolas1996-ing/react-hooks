import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  // useRef hook
  const inputRef = useRef(); // hace ref al input 

  const onClick = () => {
    // document.querySelector("input").select();
    // document.querySelector("input").focus();

    // input ref
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <hr />

      <input
        type="text"
        placeholder="type your name"
        className="form-control"
        ref={inputRef}
      />

      <button className="mt-2 btn btn-primary" onClick={onClick}>
        set focus
      </button>
    </>
  );
};
