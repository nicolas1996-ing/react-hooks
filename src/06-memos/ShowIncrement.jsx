import React from "react";


// React.memo no almacena una copia del renderizado y solo permite redibujarse cuando hayan cambios
export const ShowIncrement = React.memo(({ increment }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
