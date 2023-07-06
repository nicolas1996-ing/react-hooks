import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const ToDoForm = ({ addToDo }) => {
  // custom hook para manejar campos de form
  const { formState, onResetForm, onInputChange } = useForm({
    description: "",
  });

  const { description } = formState;

  // submit form function
  const submitForm = (ev) => {
    ev.preventDefault();
    if (description < 1) return;

    const toDo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    addToDo && addToDo(toDo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="type action"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          add action
        </button>
      </form>
    </>
  );
};
