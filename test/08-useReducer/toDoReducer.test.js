import { toDoReducer } from "../../src/08-useReducer/toDoReducer";

describe("test on toDoReducer", () => {
  const initialState = [
    { id: 1, description: "description-test", done: false },
  ];

  test("should return the initial state", () => {
    // instancia. Sujeto de prueba sin accion
    const newState = toDoReducer(initialState, {});
    // test
    expect(newState).toEqual(initialState);
  });

  test("should add new toDo", () => {
    // data mock
    const action = {
      type: "[toDo]-> add",
      payload: { id: 2, description: "description-test-2", done: false },
    };
    // instancia. Sujeto de prueba con accion
    const newState = toDoReducer(initialState, action);
    // test
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove a ToDo", () => {
    // ====================================================
    // data mock
    const action = {
      type: "[toDo]-> add",
      payload: { id: 2, description: "description-test-2", done: false },
    };
    // instancia. Sujeto de prueba con accion
    const newState = toDoReducer(initialState, action);
    // test
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);

    // ====================================================
    // remove toDo with id = 1
    const actionRemove = {
      type: "[toDo]-> delete",
      payload: { id: 1 },
    };

    const newStateDeleteToDo = toDoReducer(newState, actionRemove);
    // test
    expect(newStateDeleteToDo.length).toBe(1);
    expect(newStateDeleteToDo).toContain(action.payload);
  });

  test("should toogle done tag in a ToDo", () => {
    // data mock
    const actionToogle = {
      type: "[toDo]-> toogle",
      payload: { id: 1 },
    };

    // instancia. Sujeto de prueba con accion
    const newState = toDoReducer(initialState, actionToogle);

    // test
    expect(newState.length).toBe(1);
    expect(newState[0].done).toBe(true);

    // toogle 2
    const newStateTwo = toDoReducer(newState, actionToogle);
    expect(newStateTwo[0].done).toBe(false);

  });
});
