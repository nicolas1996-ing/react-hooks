import React from "react";

export const ToDoItem = ({ toDo, removeToDo, onToogleToDo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${toDo.done && "text-decoration-line-through" }`}
        onClick={() => onToogleToDo(toDo)}
      >
        {toDo.description}
      </span>
      <button className="btn btn-danger" onClick={() => removeToDo(toDo)}>
        delete
      </button>
    </li>
  );
};
