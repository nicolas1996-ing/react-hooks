import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const ToDoAddForm = ({ sendInputValue }) => {
  // forma 1.
  // hook asociado al input
  /*
  const [inputValue, setInput] = useState("");
  const inputChange = (ev) => {
    const value = ev.target.value;
    setInput(value);
  };
  */

  // forma 2. hook personalizado
  const { formState, onResetForm, onInputChange } = useForm({
    description: "",
  });
  const { description } = formState;

  // capturar el submit del formulario
  const submit = (ev) => {
    ev.preventDefault();

    if (description.length > 0) {
      onResetForm();
      sendInputValue({
        id: new Date().getTime(),
        done: false,
        description: description,
      });
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        className="form-control"
        type="text"
        placeholder="what is the task ?"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button className="btn btn-outline-primary mt-1" type="submit">
        add
      </button>
    </form>
  );
};
