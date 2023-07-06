import React, { useCallback } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // el useCallback trabaja con el memorize y lo que hace es bloquear el renderizado
  // del componente padre cada vez que cambia el valor del hook useState
  // el memo se aplica en el componente hijo React.memo()
  const incrementar = useCallback((args) => {
    // setValor( valor + args); // asi no funciona
    setValor((valor) => valor + args);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};
