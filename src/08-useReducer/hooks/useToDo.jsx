import { useEffect, useReducer, useState } from "react";
import { toDoReducer } from "../toDoReducer";

const initialState = [];
const getDataFromLs = () =>
  JSON.parse(localStorage.getItem("todos-react-app")) || [];

const getToDoCounts = () => {
  const pending = getDataFromLs().filter((toDo) => !toDo.done).length;
  const done = getDataFromLs().filter((toDo) => toDo.done).length;
  return { pending, done };
};

export const useToDo = () => {
  // uso del useState
  const [toDoCount, setToDoCount] = useState(getToDoCounts());

  // uso del useReducer...
  const [toDos, dispatch] = useReducer(
    toDoReducer,
    initialState, // inicializar datos []
    getDataFromLs // inicializar datos f(x)
  );

  const addToDo = (toDo) => {
    const action = {
      type: "[toDo]-> add",
      payload: toDo,
    };
    dispatch(action);
  };

  const removeToDo = (toDo) => {
    const action = {
      type: "[toDo]-> delete",
      payload: toDo,
    };
    dispatch(action);
  };

  const onToogleToDo = (toDo) => {
    const action = {
      type: "[toDo]-> toogle",
      payload: toDo,
    };
    dispatch(action);
  };

  // uso del useEffect...
  // gestor de local storage, actualiza cada que cambia toDos[]
  useEffect(() => {
    localStorage.setItem("todos-react-app", JSON.stringify(toDos));
    setToDoCount(getToDoCounts());
  }, [toDos]);

  return { addToDo, removeToDo, onToogleToDo, toDos, toDoCount };
};

/*

    // uso del useReducer...
    const addToDo = (toDo) => {
        // estructura caso de uso
        const action = {
        type: "[toDo]-> add",
        payload: toDo,
        };
        // ejecutar caso de uso
        dispatch(action);
        // toDos se actualiza con el ultimo estado
    };
*/
