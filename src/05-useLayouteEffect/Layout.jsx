import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote,Quote } from "../03-multipleCustomHooks";

const BASE_URL = import.meta.env.VITE_API_URL;

export const Layout = () => {
  const { counter, increment } = useCounter(1, 1);

  // cada que hay un cambio con 'counter' se dispara la f(x)
  const { data, isLoading, hasError } = useFetch(
    `${BASE_URL}/products/${counter}`
  );

  const { description, title } = !!data && data;

  return (
    <>
      <h1>Fake Store API</h1>

      {isLoading ? (
        <LoadingQuote></LoadingQuote>
      ) : (
        <Quote title={title} description={description}></Quote>
      )}

      <button
        type="button"
        className="btn btn-primary"
        onClick={increment}
        disabled={isLoading}
      >
        Next product
      </button>
    </>
  );
};
