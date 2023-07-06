import React, { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseMove = ({ x, y }) => {
    setCoords({ x, y });
    console.log(x, y);
  };

  useEffect(() => {
    // se ejecuta cuando se renderiza el componente
    window.addEventListener("mousemove", mouseMove);

    // se ejecuta cuando se destruye el componente
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>user already exists</h3>
      <h4>{JSON.stringify(coords)}</h4>
    </>
  );
};
