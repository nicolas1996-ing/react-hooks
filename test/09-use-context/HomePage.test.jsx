import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("test on HomePage component", () => {
  const user = { id: 1, name: "fernando" };

  test("should display the component without the user", () => {
    // sujeto de prueba
    // al componente HomePage hay que proveerle el contexto
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    // acciones sobre el sujeto de prueba
    const preTag = screen.getByLabelText("pre-test-id");

    // test
    expect(preTag.innerHTML).toBe("null");
  });

  test("should display the component withe the user", () => {
    // sujeto de prueba
    // al componente HomePage hay que proveerle el contexto
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    // acciones sobre el sujeto de prueba 
    const preTag = screen.getByLabelText("pre-test-id");

    // test
    expect(preTag.innerHTML).toBe(JSON.stringify(user));
    expect(preTag.innerHTML).toContain(user.name);
  });
});
