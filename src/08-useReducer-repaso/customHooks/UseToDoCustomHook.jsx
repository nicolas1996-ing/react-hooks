import React, { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from ".././reducer/toDoReducer";

// estado inicial del reducer
const initialState = [];

// f(x) inicializadora del reducer
const getToDosFromLs = () => {
  return JSON.parse(localStorage.getItem("toDoItems")) || [];
};

export const UseToDoCustomHook = () => {
  // estado de la app 
  const [toDoItems, dispatch] = useReducer(
    todoReducer,
    initialState,
    getToDosFromLs
  );

  // f(x) entre padre-hijo-nieto
  const handleInputValue = (inputValue) => {
    const action = {
      type: "[TODO] add",
      payload: inputValue,
    };

    // manejo del estado del reducer - disparar acción
    dispatch(action);
  };

  const handleDeleteToDo = (item) => {
    const action = {
      type: "[TODO] remove",
      payload: item,
    };
    dispatch(action);
  };

  const handleChangeStateToDo = (item) => {
    const action = {
      type: "[TODO] change",
      payload: item,
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  return {
    handleInputValue,
    handleDeleteToDo,
    handleChangeStateToDo,
    toDoItems
  };
};
