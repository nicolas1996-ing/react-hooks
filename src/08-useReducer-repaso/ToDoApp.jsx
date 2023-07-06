import React, { useEffect } from "react";
import { UseToDoCustomHook } from "./customHooks/UseToDoCustomHook";
import { ToDoAddForm } from "./ToDoAddForm";
import { ToDoList } from "./ToDoList";



export const ToDoApp = () => {

  // manejo del estado de la app 
  const {
    handleInputValue,
    handleDeleteToDo,
    handleChangeStateToDo,
    toDoItems
  } = UseToDoCustomHook()
  
  return (
    <>
      <h1>
        ToDoApp 10, <small>pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ToDoList
            todos={toDoItems}
            onDeleteToDo={handleDeleteToDo}
            onChangeStateToDo={handleChangeStateToDo}
          ></ToDoList>
        </div>

        <div className="col-5">
          <h4>add todo</h4>
          <hr />
          <ToDoAddForm sendInputValue={handleInputValue}></ToDoAddForm>
        </div>
      </div>
    </>
  );
};
