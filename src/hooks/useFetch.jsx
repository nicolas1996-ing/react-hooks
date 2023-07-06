import React, { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [Products, setProducts] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getProducts = async () => {
    setProducts({
      ...Products,
      isLoading: true,
    });

    const resp = await fetch(`${url}`);
    const data = await resp.json();

    setProducts({
      data,
      isLoading: false,
      hasError: false,
    });
  };

  // la f(x) getProducts se dispara cada que cambie el URL
  useEffect(() => {
    getProducts();
  }, [url]);

  return Products;
};
