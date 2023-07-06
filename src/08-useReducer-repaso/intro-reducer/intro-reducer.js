// initial state
const initialState = [
  {
    id: 1,
    todo: "recolectar la piedra del Alma",
    done: false,
  },
];

// init reducer
const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TODO] add":
      state = [...state, action.payload];
      break;

    default:
      break;
  }

  return state;
};

// add new element
const newTodo = {
  id: 1,
  todo: "recolectar la piedra del Alma",
  done: false,
};

// action
const addTodoAction = {
  type: "[TODO] add",
  payload: newTodo,
};

// actualizar el estado
let resultReducer = [];
resultReducer = todoReducer(initialState, addTodoAction);
console.log(resultReducer);
