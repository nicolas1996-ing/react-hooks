export const toDoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "[toDo]-> add":
      return [...initialState, action.payload];
      break;

    case "[toDo]-> delete":
      return initialState.filter((toDo) => toDo.id !== action.payload.id);
      break;

    case "[toDo]-> toogle":
      return initialState.map((toDo) => {
        if (toDo.id == action.payload.id) {
          return {
            ...toDo,
            done: !toDo.done,
          };
        }
        return toDo;
      });
      break;

    default:
      return initialState;
      break;
  }
};
