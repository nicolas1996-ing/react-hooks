import { render, screen } from "@testing-library/react";
import { useToDo } from "../../src/08-useReducer/hooks/useToDo";
import { ToDoApp } from "../../src/08-useReducer/ToDoApp";

// mock de hooks
jest.mock("../../src/08-useReducer/hooks/useToDo");

fdescribe("test on ToDoApp", () => {
  // config mock de hooks
  useToDo.mockReturnValue({
    toDos: [
      { id: 1, description: "todo-one", done: false },
      { id: 2, description: "todo-two", done: true },
    ],
    addToDo: jest.fn(),
    removeToDo: jest.fn(),
    onToogleToDo: jest.fn(),
    toDoCount: { pending: 2, done: 3 },
  });

  test("should show the component", () => {
    // sujeto de prueba
    render(<ToDoApp />);
    screen.debug();
    // acciones sobre sujeto de prueb a

    // test
    expect(screen.getByText("todo-one")).toBeTruthy();
    expect(screen.getByText("todo-two")).toBeTruthy();
    expect(screen.getAllByRole("heading")).toBeTruthy();
  });
});
