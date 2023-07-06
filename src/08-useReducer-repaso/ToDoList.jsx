import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todos , onDeleteToDo, onChangeStateToDo}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // del padre al hijo y del hijo al nieto 
        <ToDoItem todo={todo} key={todo.id} onDeleteToDo={onDeleteToDo} onChangeStateToDo={onChangeStateToDo}></ToDoItem>
      ))}
    </ul>
  );
};
