import React from "react";

export const ToDoItem = ({ todo, onDeleteToDo,onChangeStateToDo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={`align-self-center ${todo.done ? 'text-decoration-line-through':''}`}
        onClick={()=> onChangeStateToDo(todo)}
      >{todo.description}</span>
      {/* ejecutar la funcion hacia el padre con el argumento todo */}
      <button className="btn btn-danger" onClick={() => onDeleteToDo(todo)}>
        delete
      </button>
    </li>
  );
};
