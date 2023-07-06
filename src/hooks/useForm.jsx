import React, { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setform] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setform({
      ...formState,
      [name]: value, // propiedades computadas
    });
  };

  const onResetForm = () => {
    setform(initialForm);
  };

  return {
    formState,
    onResetForm,
    onInputChange,
  };
};
