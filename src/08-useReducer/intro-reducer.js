// state
const initialState = [
  {
    id: 1,
    toDo: "collect the Alma stone",
    done: false,
  },
];

// add new toDo
const newToDo = {
  id: 2,
  toDo: "toDo2 #2",
  done: false,
};

// reducer
const toDoReducer = (state = initialState, action) => {
  if (action?.type === "[TODO] add toDo") {
    return [...state, action.payload];
  }
  return state;
};

// action example
const addToDoAction = {
  type: "[TODO] add toDo",
  payload: newToDo,
};

let toDos = toDoReducer(); // == initialState
toDos = toDoReducer(toDos, addToDoAction);
console.log(toDos)