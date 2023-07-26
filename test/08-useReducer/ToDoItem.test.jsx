import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-useReducer/components/ToDoItem";

describe("test on ToDoItem component", () => {
  // data mock
  const toDo = [{ id: 1, description: "description-test", done: false }];
  const onDeleteToDoMock = jest.fn();
  const onToogleToDoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show the pending toDo", () => {
    // sujeto de prueba
    render(
      <ToDoItem
        toDo={toDo}
        removeToDo={onDeleteToDoMock}
        onToogleToDo={onToogleToDoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span-test");
    screen.debug(); // mostrar html

    // test - verificar clases css
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain("align-self-center");
  });

  test("should show the completed toDo", () => {
    // data mock
    toDo.done = true;
    // sujeto de prueba
    render(
      <ToDoItem
        toDo={toDo}
        removeToDo={onDeleteToDoMock}
        onToogleToDo={onToogleToDoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span-test");
    screen.debug(); // mostrar html

    // test - verificar clases css
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain(
      "align-self-center text-decoration-line-through"
    );
  });

  test("should call the onToogleToDo() function when clicked", () => {
    // data mock

    // sujeto de prueba
    render(
      <ToDoItem
        toDo={toDo}
        removeToDo={onDeleteToDoMock}
        onToogleToDo={onToogleToDoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span-test");

    // simular un accion (click)
    fireEvent.click(spanElement);
    screen.debug(); // mostrar html

    // test
    expect(onToogleToDoMock).toHaveBeenCalled();
    expect(onToogleToDoMock).toHaveBeenCalledWith(toDo);
  });

  test("should call the removeToDo() function when clicked", () => {
    // data mock

    // sujeto de prueba
    render(
      <ToDoItem
        toDo={toDo}
        removeToDo={onDeleteToDoMock}
        onToogleToDo={onToogleToDoMock}
      />
    );
    const btnElement = screen.getByRole("button");

    // simular un accion (click)
    fireEvent.click(btnElement);
    screen.debug(); // mostrar html

    // test
    expect(onDeleteToDoMock).toHaveBeenCalled();
    expect(onDeleteToDoMock).toHaveBeenCalledWith(toDo);
  });
});
