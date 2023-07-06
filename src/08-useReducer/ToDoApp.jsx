import React, { useEffect, useReducer, useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { toDoReducer } from "./toDoReducer";
import { ToDoList } from "./components/ToDoList";
import { useToDo } from "./hooks/useToDo";

export const ToDoApp = () => {
  const { addToDo, removeToDo, onToogleToDo, toDos, toDoCount } = useToDo();

  return (
    <>
      <h1>
        toDo App ({toDoCount.done}) <small>pending: {toDoCount.pending}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ToDoList
            toDos={toDos}
            removeToDo={removeToDo}
            onToogleToDo={onToogleToDo}
          />
        </div>

        <div className="col">
          <h4>add toDo</h4>
          <hr />
          <ToDoForm addToDo={addToDo} />
        </div>
      </div>
    </>
  );
};
