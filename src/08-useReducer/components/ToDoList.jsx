import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ toDos, removeToDo, onToogleToDo }) => {
  return (
    <ul className="list-group">
      {toDos.map((toDo) => (
        <ToDoItem
          toDo={toDo}
          key={toDo.id}
          removeToDo={removeToDo}
          onToogleToDo={onToogleToDo}
        />
      ))}
    </ul>
  );
};
